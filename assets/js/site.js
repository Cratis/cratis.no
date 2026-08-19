/* Cratis — cratis.no
   Minimal progressive enhancement. Everything here is optional:
   the page is complete and readable with this file absent. */

(() => {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- theme toggle ---------- */
    var toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            var next =
                document.documentElement.getAttribute("data-theme") === "light"
                    ? "dark"
                    : "light";
            document.documentElement.setAttribute("data-theme", next);
            try {
                localStorage.setItem("cratis-theme", next);
            } catch (e) {
                /* private mode */
            }
        });
    }

    /* ---------- pipeline + hero loop ----------
       Command → Event → Projection → Screen → History.
       The two are driven by one clock so they stay in step: the strip names
       the stage, the hero panel shows that stage of a real feature. */
    var stages = document.querySelectorAll("#pipeline span[data-i]");
    var rows = document.querySelectorAll(".loop-row[data-stage]");

    if ((stages.length || rows.length) && !reduced) {
        var i = 0;
        var timer = null;

        var paint = () => {
            for (var s = 0; s < stages.length; s++) {
                stages[s].classList.toggle("on", s === i);
            }
            for (var r = 0; r < rows.length; r++) {
                rows[r].classList.toggle("is-on", r === i);
            }
            i = (i + 1) % Math.max(stages.length, rows.length, 1);
        };

        var start = () => {
            if (timer === null) {
                paint();
                timer = window.setInterval(paint, 1400);
            }
        };
        var stop = () => {
            if (timer !== null) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        // Don't animate offscreen or in a background tab.
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                stop();
            } else {
                start();
            }
        });

        if ("IntersectionObserver" in window) {
            var hero = document.querySelector(".hero");
            if (hero) {
                new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting) {
                            start();
                        } else {
                            stop();
                        }
                    },
                    { threshold: 0 },
                ).observe(hero);
            } else {
                start();
            }
        } else {
            start();
        }
    }




    /* ---------- the living word ----------
       Each word is a different reason to care. The container width animates
       with the swap so the line never snaps. Accessibility: the h1 always
       contains a real, readable sentence; the swap is announced politely once
       per change rather than mid-transition. */
    var rot = document.getElementById('rotator');
    var rotWord = document.getElementById('rotWord');
    var rotMeasure = document.getElementById('rotMeasure');

    if (rot && rotWord && rotMeasure) {
        var WORDS = ['remembers', 'explains', 'proves it', 'holds up', 'evolves', 'answers'];
        var wi = 0;

        var sizeTo = function (word) {
            rotMeasure.textContent = word;
            rot.style.width = rotMeasure.getBoundingClientRect().width + 'px';
        };

        // Lock the initial width once fonts have settled, so nothing jumps.
        var lock = function () { sizeTo(WORDS[wi]); };
        if (document.fonts && document.fonts.ready) { document.fonts.ready.then(lock); } else { lock(); }
        window.addEventListener('resize', function () { sizeTo(WORDS[wi]); });

        if (!reduced) {
            var swap = function () {
                wi = (wi + 1) % WORDS.length;
                var next = WORDS[wi];

                rotWord.classList.add('out');
                sizeTo(next);                       // width glides while the word leaves

                window.setTimeout(function () {
                    rotWord.textContent = next;
                    rotWord.classList.remove('out');
                    rotWord.classList.add('in');
                    // force a reflow so the 'in' state paints before we release it
                    void rotWord.offsetWidth;
                    rotWord.classList.remove('in');
                }, 340);
            };

            var rotTimer = null;
            var rotRun = function () { if (rotTimer === null) { rotTimer = window.setInterval(swap, 3600); } };
            var rotHalt = function () { if (rotTimer !== null) { window.clearInterval(rotTimer); rotTimer = null; } };

            document.addEventListener('visibilitychange', function () { document.hidden ? rotHalt() : rotRun(); });
            if ('IntersectionObserver' in window) {
                new IntersectionObserver(function (en) { en[0].isIntersecting ? rotRun() : rotHalt(); }, { threshold: 0 }).observe(rot);
            } else { rotRun(); }
        }
    }

    /* ---------- section entrances ----------
       Fires once per element, never on scroll-back. Elements are only hidden
       after JS confirms it can reveal them, so a JS failure leaves everything
       visible rather than blank. */
    if (!reduced && 'IntersectionObserver' in window) {
        var targets = document.querySelectorAll('.band > .band-head, .band > .grid, .band > .steps, .band > .callout, .band > .banner, .band > .routes, .band > .table-wrap, .band > .code-wrap, .band > .people, .band > .faq, .band > .flow');
        if (targets.length) {
            for (var t = 0; t < targets.length; t++) { targets[t].classList.add('reveal'); }
            var io = new IntersectionObserver(function (entries) {
                for (var e = 0; e < entries.length; e++) {
                    if (entries[e].isIntersecting) {
                        entries[e].target.classList.add('in');
                        io.unobserve(entries[e].target);
                    }
                }
            }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
            for (var q = 0; q < targets.length; q++) { io.observe(targets[q]); }
        }
    }

    /* ---------- scroll cue ---------- */
    var cues = document.querySelectorAll('[data-scroll-to]');
    for (var c = 0; c < cues.length; c++) {
        cues[c].addEventListener('click', function () {
            var t = document.querySelector(this.getAttribute('data-scroll-to'));
            if (t) { t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); }
        });
    }

    /* ---------- smooth in-page nav ---------- */
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var a = 0; a < anchors.length; a++) {
        anchors[a].addEventListener("click", function (e) {
            var id = this.getAttribute("href");
            if (!id || id === "#") {
                return;
            }
            var target = document.querySelector(id);
            if (!target) {
                return;
            }
            e.preventDefault();
            target.scrollIntoView({
                behavior: reduced ? "auto" : "smooth",
                block: "start",
            });
            // Keep the URL and focus honest for keyboard and screen-reader users.
            history.replaceState(null, "", id);
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
        });
    }
})();
