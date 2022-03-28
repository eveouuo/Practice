$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 2){
            $('#top').stop().animate({'height':'120px'},300);
            $('.topimg .imgbox').stop().animate({'height':'100px','filter':'blur,2px'},300);
        }else {
            $('#top').stop().animate({'height':'220px'},300);
            $('.topimg .imgbox').stop().animate({'height':'200px'},300);
        }
    })
});