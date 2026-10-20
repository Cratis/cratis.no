/* Cratis — cratis.no
   Release-activity strip. Reads the public organization snapshot
   (schemaVersion 1) and reveals #activity. Optional: on any failure the
   strip stays hidden and the page is unchanged. */

(() => {
    var root = document.getElementById("activity");
    if (!root || !window.fetch) {
        return;
    }

    var MAX_AGE_DAYS = 7;
    var lang = (document.documentElement.lang || "en").toLowerCase();
    var locale = lang.indexOf("nb") === 0 || lang.indexOf("no") === 0 ? "nb-NO" : "en";
    var numbers = new Intl.NumberFormat(locale);
    var dates = new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" });

    var isCount = (value) => Number.isInteger(value) && value >= 0;

    var set = (name, text) => {
        var node = root.querySelector('[data-stat="' + name + '"]');
        if (node) {
            node.textContent = text;
        }
    };

    var render = (data) => {
        if (!data || data.schemaVersion !== 1) {
            return false;
        }
        var releases = data.releases;
        var generated = new Date(data.generatedAt);
        if (!releases || isNaN(generated.getTime())) {
            return false;
        }
        if (Date.now() - generated.getTime() > MAX_AGE_DAYS * 86400000) {
            return false;
        }
        var kinds = releases.last365DaysByKind;
        var streak = releases.streak;
        if (!isCount(releases.last365Days) || !isCount(releases.last7Days) || !kinds ||
            !isCount(kinds.major) || !isCount(kinds.minor)) {
            return false;
        }

        set("year", numbers.format(releases.last365Days));
        set("yearMajorMinor", numbers.format(kinds.major + kinds.minor));
        set("week", numbers.format(releases.last7Days));
        set("date", dates.format(generated));

        var streakDays = streak && isCount(streak.currentDays) ? streak.currentDays : 0;
        var streakItem = root.querySelector('[data-item="streak"]');
        if (streakItem) {
            streakItem.hidden = streakDays < 2;
        }
        set("streak", numbers.format(streakDays));
        return true;
    };

    fetch(root.getAttribute("data-src"), { headers: { Accept: "application/json" } })
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => {
            if (render(data)) {
                root.hidden = false;
            }
        })
        .catch(() => {
            /* snapshot unavailable: the page stays complete without the strip */
        });
})();
