export const splitTextToChars = (element) => {
    if (!element || element.querySelector(".char")) return;
    const text = element.innerText;
    element.innerHTML = "";
    [...text].forEach((char) => {
        const span = document.createElement("span");
        span.className = "char";
        span.style.display = "inline-block";
        span.style.lineHeight = "1";
        span.style.verticalAlign = "top";
        span.innerHTML = char === " " ? "&nbsp;" : char;
        span.style.whiteSpace = "pre";
        element.appendChild(span);
    });
};
