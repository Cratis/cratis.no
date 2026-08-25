/* Cratis — cratis.no
   Optional progressive enhancement. Core content and navigation do not depend on this file. */

(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const toggle = document.querySelector("#themeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const next =
                document.documentElement.getAttribute("data-theme") === "light"
                    ? "dark"
                    : "light";
            document.documentElement.setAttribute("data-theme", next);
            try {
                localStorage.setItem("cratis-theme", next);
            } catch (error) {
                // Theme persistence is optional.
            }
        });
    }

    const menus = document.querySelectorAll(".nav-menu");
    for (const menu of menus) {
        const summary = menu.querySelector("summary");
        if (summary) {
            summary.setAttribute("aria-label", "Open primary navigation");
        }
        menu.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && menu.open) {
                menu.open = false;
                summary?.focus();
            }
        });
        for (const link of menu.querySelectorAll("a")) {
            link.addEventListener("click", () => {
                menu.open = false;
            });
        }
    }

    for (const anchor of document.querySelectorAll('a[href^="#"]')) {
        anchor.addEventListener("click", (event) => {
            const id = anchor.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({
                behavior: reduced ? "auto" : "smooth",
                block: "start",
            });
            history.replaceState(null, "", id);
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
        });
    }
})();
