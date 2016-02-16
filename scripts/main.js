function animateIt() {
    $(".section__tile-half").each(function () {
        $(".section__tile-item.is-animated", this).next(".section__tile-item").length ? ($(".section__tile-item.is-animated", this).removeClass("is-animated"), $(".section__tile-item", this).next(".section__tile-item").addClass("is-animated")) : ($(".section__tile-item", this).removeClass("is-animated"), $(".section__tile-item:first-child", this).addClass("is-animated"))
    }), $(".section--tradition").hasClass("active") || clearInterval(timeout)
}
function addRemoveClass() {
    animateIt();
    var i = 2500;
    setInterval(function () {
        animateIt()
    }, i)
}
var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
if (isMobile)$(".section--introduction").addClass("active"), $(".l-header, .section__trigger, .l-footer").addClass("is-animated"), $("body").addClass("is-mobile"), $(window).resize(function () {
    $(".section--introduction").height($(window).height())
}), $(window).trigger("resize"); else {
    $(".l-header, .section__trigger, .l-footer").addClass("is-animated"), $(window).resize(function () {
        $(".product--details, .carousel--details").height($(window).height())
    }), $(window).trigger("resize"), $(".l-main").fullpage({
        verticalCentered: !1,
        scrollingSpeed: 1e3,
        easing: "easeInOutCubic",
        anchors: ["introduction"],
        onLeave: function (i, e, t) {
            $(".footer__pagination-active").text(e)
        },
        afterLoad: function (i, e) {
            $(".section--tradition").hasClass("active") && addRemoveClass(), $(".carousel").carousel()
        },
        css3: !1
    });
    var timeout = null
}

$(".carousel").carousel(), $(".menu__trigger").click(function () {
    $(this).addClass("is-in"), $(".menu__list").addClass("is-in")
});
//# sourceMappingURL=main.js.map
