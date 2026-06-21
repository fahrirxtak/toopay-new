import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ children, href, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);

    const targetId = href.replace("#", "");

    if (location.pathname === "/") {
      // Already on landing page — just scroll
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home first, then scroll after page loads
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="nav-link-item relative inline-block overflow-hidden leading-none cursor-pointer text-white/80 hover:text-white h-fit"
      style={{ lineHeight: "1" }}
    >
      <span className="block text-initial" style={{ lineHeight: "1" }}>
        {children}
      </span>
      <span
        className="block absolute top-0 left-0 text-hover w-full opacity-0"
        style={{ lineHeight: "1" }}
      >
        {children}
      </span>
    </a>
  );
};

export default NavItem;
