$(document).ready(function(){
    //**** 마우스오버  ****//
    //서브메뉴 숨기고 시작
    $(".subMenu").hide();
    // 마우스 오버
    $(".mainMenu").mouseover(function(){
        $(".subMenu").stop().slideDown(300);
    }).mouseout(function(){
        $(".subMenu").stop().slideUp(300);
    });

    //**** 이미지슬라이드  ****//
    //a태그 2번,3번 숨기고 시작
    $(".imgSlide > a:gt(0)").hide();

    setInterval(function(){
        $('.imgSlide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgSlide');
    }, 3000);

    // ******  탭 메뉴 공지사항 갤러리  ****** //
    $('.tabMenu>li>a').click(function(event){
        event.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // ******  레이어팝업  ****** //
    $('.notice li:first').click(function(){
        $('#modalWrap').addClass("active");
    });
    $('.btn').click(function(){
        $('#modalWrap').removeClass("active");
    });
});
