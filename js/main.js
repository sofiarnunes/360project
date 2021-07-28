$(document).ready(function () {
    $("#submit").click(function (e) {
        var inputCode = $("#code").val();
        if (inputCode == "AAAA") {
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
        } else if (inputCode == "BBBB") {
            $("#win-20").attr("src", 'https://github.com/sofiarnunes/Halls-360Project/blob/main/img/50_Group.png?raw=true');
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
        } else if (inputCode == "CCCC") {
            $("#win-20").attr("src", 'https://github.com/sofiarnunes/Halls-360Project/blob/main/img/100_Group.png?raw=true');
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
        } else if (inputCode == "DDDD") {
            $("#win-20").attr("src", 'https://github.com/sofiarnunes/Halls-360Project/blob/main/img/250_Group.png?raw=true');
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
        }
        e.preventDefault();
    }); 
})
