$(document).ready(function () {
    $("#submit").click(function (e) {
        var inputCode = $("#code").val();
        if (inputCode != "A1A1") {
            $(".prize").hide();
        } else {
            $(".prize").show();
            $('html, body').animate({
                scrollTop: $(".prize").offset().top}, 1000);
        };
        e.preventDefault();
    });
});
