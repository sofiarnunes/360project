$(document).ready(function () {
    $("#btn-cravas").click(function (e) {
        $("#prize").css("position", "fixed");
        $("#prize").css("z-index", "10");
        $("#prize").css("right", "0");
        $("#prize").css("bottom", "0");
        $("#login").show();
        $("#login").css("background-color", "rgba(0,0,0,0.5)");

        e.preventDefault();
    }); 
    $("#exit").click(function (e) {
        $("#prize").css("position", "relative");
        $("#prize").css("z-index", "0");
        $("#login").hide();
        e.preventDefault();
    }); 
})
