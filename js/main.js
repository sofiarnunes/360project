$(document).ready(function () {
    var inputCode = $("#code").val();
    $("#submit").click(function (e) {
        var inputCode = $("#code").val();
        if (inputCode != "A1A1") {
            $(".gifts").hide();
        } else {
            $(".gifts").show();
        }
        e.preventDefault();
    });
});
