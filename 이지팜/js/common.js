//popup
$(document).ready(function(){
    $('.popupOpen').click(function(){
        $('.popup').fadeIn(0);
    });
    
    $('.popup a').click(function(){
        $('.popup').fadeOut(0);
    });
});

//gnb
$(document).ready(function(){   
    $('.mainNav').hover(function(){
        $(this).find('+ .subNav').stop().fadeIn('fast');
        
        $(this).parent().mouseleave(function(){
            $(this).find('.subNav').stop().fadeOut('fast');
        });
    });
});


//main
$(document).ready(function(){
    var num = 1;
    
    setInterval(function(){
        if(num<3){
            $('.main ul').animate({
                top: '-=' + 350
            },'slow');
            
            num++;
        }else{
            $('.main ul').animate({
                top: 0
            },'slow');
            
            num = 1;
        }
    },3000);
});
