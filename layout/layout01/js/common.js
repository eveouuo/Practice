$(document).ready(function(){
    // $("nav ul.gnb > li").click(function(){
    //     $(this).find("ul.sub").stop().slideDown();
    // });
    $("nav ul.gnb > li").click(function(){
        $(this).find("ul.sub").stop().slideToggle();
        $("ul.sub").not($(this).find("ul.sub")).stop().slideUp();
    });
});