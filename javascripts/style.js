$(document).ready(function() {
    var s = $("#sticker");
    var pos = s.position();  
    console.log("I Work says styles.js");                  
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });
});