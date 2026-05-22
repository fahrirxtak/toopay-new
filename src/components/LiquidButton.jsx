import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";

// --- LIQUID BUTTON ENGINE CLASS ---
class LiquidButtonEngine {
  constructor(optionsParam) {
    const options = optionsParam || {};
    
    // Canvas setup
    this.canvas = options.canvas || document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    if (!this.context) {
      console.error('Canvas context not available');
      return;
    }

    // Dimensions
    this.width = options.width || 200;
    this.height = options.height || 60;
    this.margin = options.margin || 30;
    this.padding = options.padding || 20;
    
    // Physics (optimized untuk smoothness)
    this.tension = options.tension || 0.45;
    this.gap = options.gap || 4;
    this.hoverFactor = options.hoverFactor || -0.12;
    this.forceFactor = options.forceFactor || 0.18;
    this.noise = 0;
    
    // Colors
    this.color1 = options.color1 || '#FFFFFF';
    this.color2 = options.color2 || '#2563EB';
    this.color3 = options.color3 || '#4F46E5';
    this.textColor = options.textColor || '#18181B';
    
    // Layers dengan viscosity yang lebih smooth
    this.layers = [{
      points: [],
      viscosity: 0.55,
      mouseForce: 120,
      forceLimit: 2.2,
    }, {
      points: [],
      viscosity: 0.82,
      mouseForce: 160,
      forceLimit: 3.2,
    }];
    
    this.text = options.text || 'Button';
    this.touches = [];
    this.isDestroyed = false;
    this.animationFrameId = null;
    this.lastTouchTime = 0;
    
    // Throttle untuk mousemove (optimize performance)
    this.throttleDelay = 16; // ~60fps
    this.lastMouseMoveTime = 0;
    
    // Setup canvas
    this.initOrigins();
    
    // Event listeners dengan throttling
    this.mousemoveHandler = this.handleMouseMove.bind(this);
    this.mouseoutHandler = this.handleMouseOut.bind(this);
    
    this.canvas.addEventListener('mousemove', this.mousemoveHandler, { passive: true });
    this.canvas.addEventListener('mouseout', this.mouseoutHandler);
    this.canvas.addEventListener('mouseleave', this.mouseoutHandler);
    
    // Start animation
    this.animate();
  }

  handleMouseMove(e) {
    const now = performance.now();
    if (now - this.lastMouseMoveTime < this.throttleDelay) return;
    this.lastMouseMoveTime = now;
    
    this.touches = [{
      x: e.offsetX,
      y: e.offsetY,
      z: 0,
      force: 1,
    }];
    this.lastTouchTime = now;
  }

  handleMouseOut() {
    this.touches = [];
  }

  distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  update() {
    if (this.isDestroyed) return;
    
    const layersLength = this.layers.length;
    for (let layerIndex = 0; layerIndex < layersLength; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = layer.points;
      const pointsLength = points.length;
      const touchesLength = this.touches.length;
      
      // Update physics
      for (let pointIndex = 0; pointIndex < pointsLength; pointIndex++) {
        const point = points[pointIndex];
        
        // Spring force ke origin
        const dx = point.ox - point.x;
        const dy = point.oy - point.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > 0.001) {
          const f = d * this.forceFactor;
          point.vx += f * (dx / d);
          point.vy += f * (dy / d);
        }
        
        // Mouse interaction
        if (touchesLength > 0) {
          const touch = this.touches[0];
          let mouseForce = layer.mouseForce;
          
          // Check if touch is inside button area
          if (
            touch.x > this.margin &&
            touch.x < this.margin + this.width &&
            touch.y > this.margin &&
            touch.y < this.margin + this.height
          ) {
            mouseForce *= -this.hoverFactor;
          }
          
          const mx = point.x - touch.x;
          const my = point.y - touch.y;
          const md = Math.sqrt(mx * mx + my * my);
          
          if (md > 0.001) {
            const mf = Math.max(
              -layer.forceLimit,
              Math.min(layer.forceLimit, (mouseForce * touch.force) / md)
            );
            point.vx += mf * (mx / md);
            point.vy += mf * (my / md);
          }
        }
        
        // Apply viscosity
        point.vx *= layer.viscosity;
        point.vy *= layer.viscosity;
        
        // Update position
        point.x += point.vx;
        point.y += point.vy;
      }
      
      // Calculate bezier control points
      for (let pointIndex = 0; pointIndex < pointsLength; pointIndex++) {
        const prev = points[(pointIndex + pointsLength - 1) % pointsLength];
        const point = points[pointIndex];
        const next = points[(pointIndex + 1) % pointsLength];
        
        const dPrev = this.distance(point, prev);
        const dNext = this.distance(point, next);
        
        const lineX = next.x - prev.x;
        const lineY = next.y - prev.y;
        const dLine = Math.sqrt(lineX * lineX + lineY * lineY);
        
        if (dLine > 0.001) {
          point.cPrev = {
            x: point.x - (lineX / dLine) * dPrev * this.tension,
            y: point.y - (lineY / dLine) * dPrev * this.tension,
          };
          point.cNext = {
            x: point.x + (lineX / dLine) * dNext * this.tension,
            y: point.y + (lineY / dLine) * dNext * this.tension,
          };
        } else {
          point.cPrev = { x: point.x, y: point.y };
          point.cNext = { x: point.x, y: point.y };
        }
      }
    }
  }

  draw() {
    if (this.isDestroyed || !this.context) return;
    
    // Clear canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw layers
    const layersLength = this.layers.length;
    for (let layerIndex = 0; layerIndex < layersLength; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = layer.points;
      
      // Set color
      if (layerIndex === 1) {
        if (this.touches.length > 0) {
          const gx = this.touches[0].x;
          const gy = this.touches[0].y;
          const gradient = this.context.createRadialGradient(
            gx, gy, 0,
            gx, gy, this.height * 2.5
          );
          gradient.addColorStop(0, this.color3);
          gradient.addColorStop(1, this.color2);
          this.context.fillStyle = gradient;
        } else {
          this.context.fillStyle = this.color2;
        }
      } else {
        this.context.fillStyle = this.color1;
      }
      
      // Draw bezier curve
      if (points.length > 0) {
        this.context.beginPath();
        this.context.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
          const current = points[i];
          const prev = points[i - 1];
          this.context.bezierCurveTo(
            prev.cNext.x, prev.cNext.y,
            current.cPrev.x, current.cPrev.y,
            current.x, current.y
          );
        }
        
        // Close path
        const last = points[points.length - 1];
        const first = points[0];
        this.context.bezierCurveTo(
          last.cNext.x, last.cNext.y,
          first.cPrev.x, first.cPrev.y,
          first.x, first.y
        );
        
        this.context.fill();
      }
    }
    
    // Draw text
    this.context.fillStyle = this.textColor;
    this.context.font = `600 ${this.height - this.padding * 2}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(
      this.text,
      this.canvas.width / 2,
      this.canvas.height / 2,
      this.width - this.padding * 2
    );
  }

  animate() {
    if (this.isDestroyed) return;
    
    this.update();
    this.draw();
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  createPoint(x, y) {
    return {
      x, y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0,
      cPrev: { x, y },
      cNext: { x, y },
    };
  }

  initOrigins() {
    // Set canvas size dengan device pixel ratio untuk crisp rendering
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = (this.width + this.margin * 2) * dpr;
    this.canvas.height = (this.height + this.margin * 2) * dpr;
    this.context.scale(dpr, dpr);
    
    // Initialize layers
    const layersLength = this.layers.length;
    for (let layerIndex = 0; layerIndex < layersLength; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = [];
      
      // Top edge
      for (let x = Math.floor(this.height / 2); x < this.width - Math.floor(this.height / 2); x += this.gap) {
        points.push(this.createPoint(x + this.margin, this.margin));
      }
      
      // Right corner
      const cornerSteps = Math.floor(this.height * 1.25);
      for (let alpha = cornerSteps; alpha >= 0; alpha -= this.gap) {
        const angle = (Math.PI / cornerSteps) * alpha;
        points.push(this.createPoint(
          Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2,
          Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
        ));
      }
      
      // Bottom edge
      for (let x = this.width - Math.floor(this.height / 2) - 1; x >= Math.floor(this.height / 2); x -= this.gap) {
        points.push(this.createPoint(x + this.margin, this.margin + this.height));
      }
      
      // Left corner
      for (let alpha = 0; alpha <= cornerSteps; alpha += this.gap) {
        const angle = (Math.PI / cornerSteps) * alpha;
        points.push(this.createPoint(
          (this.height - Math.sin(angle) * this.height / 2) + this.margin - this.height / 2,
          Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
        ));
      }
      
      layer.points = points;
    }
  }

  destroy() {
    this.isDestroyed = true;
    
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    
    if (this.canvas) {
      this.canvas.removeEventListener('mousemove', this.mousemoveHandler);
      this.canvas.removeEventListener('mouseout', this.mouseoutHandler);
      this.canvas.removeEventListener('mouseleave', this.mouseoutHandler);
    }
    
    this.touches = [];
    this.context = null;
  }
}

// --- REACT COMPONENT WRAPPER ---
const LiquidButton = forwardRef(({
  text = 'Button',
  width = 200,
  height = 60,
  margin = 30,
  padding = 20,
  color1 = '#FFFFFF',
  color2 = '#2563EB',
  color3 = '#4F46E5',
  textColor = '#18181B',
  tension = 0.45,
  hoverFactor = -0.12,
  forceFactor = 0.18,
  gap = 4,
  onClick,
  className = '',
  ariaLabel,
  disableIntroAnimation = false,
  ...props
}, ref) => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const clickHandlerRef = useRef(null);

  // Expose canvas ref to parent via forwardRef
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(canvasRef.current);
      } else {
        ref.current = canvasRef.current;
      }
    }
  }, [ref]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    try {
      // Initialize engine
      engineRef.current = new LiquidButtonEngine({
        canvas,
        text,
        width,
        height,
        margin,
        padding,
        color1,
        color2,
        color3,
        textColor,
        tension,
        hoverFactor,
        forceFactor,
        gap,
      });

      // Setup click handler
      if (onClick) {
        canvas.style.cursor = 'pointer';
        clickHandlerRef.current = onClick;
        canvas.addEventListener('click', clickHandlerRef.current);
      }
    } catch (error) {
      console.error('Error initializing LiquidButton:', error);
    }

    // Cleanup
    return () => {
      if (engineRef.current) {
        try {
          engineRef.current.destroy();
        } catch (error) {
          console.error('Error destroying LiquidButton:', error);
        }
        engineRef.current = null;
      }
      if (canvas && clickHandlerRef.current) {
        canvas.removeEventListener('click', clickHandlerRef.current);
        clickHandlerRef.current = null;
      }
    };
  }, [
    text,
    width,
    height,
    margin,
    padding,
    color1,
    color2,
    color3,
    textColor,
    tension,
    hoverFactor,
    forceFactor,
    gap,
    onClick,
  ]);

  // Intro animation dengan GSAP (optional, bisa di-disable dengan prop)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || disableIntroAnimation) return;

    const tl = gsap.fromTo(
      canvas,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.2)' }
    );

    return () => {
      tl.kill();
    };
  }, [disableIntroAnimation]);

  const canvasWidth = width + margin * 2;
  const canvasHeight = height + margin * 2;

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${canvasWidth}px`,
        height: `${canvasHeight}px`,
        display: 'block',
        willChange: 'transform',
      }}
      className={className}
      aria-label={ariaLabel}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    />
  );
});

LiquidButton.displayName = 'LiquidButton';

export default LiquidButton;

