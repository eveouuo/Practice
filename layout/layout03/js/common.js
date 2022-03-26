$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() < 5){
            $('#top').animate({'fliter':'blur, 5px'},)
        }
    })
});