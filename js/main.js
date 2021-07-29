$(document).ready(function () {
    $("#submit").click(function (e) {
        var inputCode = $("#code").val();
        if (inputCode == "AAAA") {
            $(".hero").hide();
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
            $("#prize").show();
        } else if (inputCode == "BBBB") {
            $(".hero").hide();
            $("#win-20").attr("src", 'https://github.com/sofiarnunes/Halls-360Project/blob/main/img/50_Group.png?raw=true');
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
            $("#prize").show();
        } else if (inputCode == "CCCC") {
            $(".hero").hide();
            $("#win-20").attr("src", 'https://github.com/sofiarnunes/Halls-360Project/blob/main/img/100_Group.png?raw=true');
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
            $("#prize").show();
        } else if (inputCode == "DDDD") {$(".hero").hide();
            $("#win-20").attr("src", 'https://github.com/sofiarnunes/Halls-360Project/blob/main/img/250_Group.png?raw=true');
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
            $("#prize").show();
        }
        e.preventDefault();
    }); 
    
})
