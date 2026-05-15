window.toggleSTTheme = function () {
  const html = document.documentElement;

  const current = html.getAttribute("data-theme") || "light";

  const next = current === "light"
    ? "dark"
    : "light";

  html.setAttribute("data-theme", next);

  localStorage.setItem("st-theme", next);
};

(function () {
  const saved = localStorage.getItem("st-theme") || "light";

  document.documentElement.setAttribute(
    "data-theme",
    saved
  );
})();