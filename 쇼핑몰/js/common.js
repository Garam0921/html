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
    $('.gnb > ul > li').hover(function(){
        $(this).find('.subnav').stop().slideDown('fast');
    },function(){
        $(this).find('.subnav').stop().slideUp('fast');
    });
});

/* main */
$(document).ready(function(){
    /* 보이지 사진을 의미하는 변수 */
    var num = 1; //처음 보이는 이미지번호
    
    //3초마다 사진 슬라이드
    setInterval(function(){
        if(num < 3){ //3번이미지가 아니라면
            num++; //1증가
            $('.main ul').animate({
                left: '-=1200' //왼쪽으로 -1200px만큼 이동
            },'slow');
        }else{ //3번 이미지라면
            num = 1; //1번으로 변경
            $('.main ul').animate({
                left: 0 //1번이미지가 보이는 처음 위치로 이동
            },'slow');
        }
    },3000);
});


//tab
$(document).ready(function(){
    $('.btn a').click(function(){
        $('.btn a').removeClass('active');
        $(this).addClass('active');
        
        var i = $(this).parent().index();
        
        $('.bwrap > div').fadeOut(0);
        $('.bwrap > div').eq(i).fadeIn(0);
    });
});