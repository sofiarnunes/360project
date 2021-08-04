$(document).ready(function () {
    $("#submit").click(function (e) {
        var inputCode = $("#code").val();
        if (inputCode == "AAAA") {
            $(".hero").hide();
            $(".announcement").show();
            $('html, body').animate({
                scrollTop: $(".announcement").offset().top
            }, 1000);
            // $("body").css("zoom", "1");
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

    $("#code").keyup(function(){
        $(this).val($(this).val().toUpperCase());
    })

    $("#arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#prize").offset().top
        }, 1000);
        e.preventDefault();
    }); 
    
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
