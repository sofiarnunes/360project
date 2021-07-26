$(document).ready(function () {
    var inputCode = $("#code").val();
    $("#submit").click(function (e) {
        var inputCode = $("#code").val();
        if (inputCode != "1234") {
            $(".gifts").hide();
        } else {
            $(".gifts").show();
        }
        e.preventDefault();
    });
});
