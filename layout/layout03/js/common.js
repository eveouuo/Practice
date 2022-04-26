$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 2){
            $('#top').stop().animate({'height':'120px'},250);
            $('.topimg .imgbox').stop().animate({'height':'100px'},250);
        }else {
            $('#top').stop().animate({'height':'220px'},250);
            $('.topimg .imgbox').stop().animate({'height':'200px'},250);
        }
    });

    $("ul.gnb > li").hover(function(){
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });
});