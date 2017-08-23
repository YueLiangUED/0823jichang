(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {
    //立即办理按钮
    $('.btnS').on('click',function () {
        if(flag == 0){ //500M
            console.log(1);
            //window.location.href = '';
        }else if(flag == 1){//1GB
            console.log(2);
            //window.location.href = '';
        }
    })
    
    
    /*顶部选项卡切换*/
    var flag;
    function selectL() {
        $('.tabL').click(function () {
            $('.content2-2').hide();
            $('.content2-3').hide();
            $('.content2-1').show(0,function () {
                flag = 0;
            });
            $('.tabL').css({'opacity':'1'});
            $('.tabR').css({'opacity':'0.6'});
            $('.tabB').css({'opacity':'0.6'});
        });
    }
    function selectR() {
        $('.tabR').click(function () {
            $('.content2-1').hide();
            $('.content2-3').hide();
            $('.content2-2').show(0,function () {
                flag = 1;
            });
            $('.tabR').css({'opacity':'1'});
            $('.tabL').css({'opacity':'0.6'});
            $('.tabB').css({'opacity':'0.6'});
        });
    }
    selectL();
    selectR();
    /*底部选项卡切换*/
    $('.tab1P').click(function () {
        $('.tab2').hide();
        $('.tab1').show();
        $('.tab1P').css({'color':'#0086cf'});
        $('.tab2P').css({'color':'#333333'});
        $('.tab i').css({'left':'0'});
    });
    $('.tab2P').click(function () {
        $('.tab1').hide();
        $('.tab2').show();
        $('.tab2P').css({'color':'#0086cf'});
        $('.tab1P').css({'color':'#333333'});
        $('.tab i').css({'left':'18.75rem'});
    });


    

    /*底部icon跳转*/
    $('.footer .icon1').click(function () {
        window.location.href ='http://service.bj.10086.cn/m/jsp/x4gtc/index.jsp';
    });
    $('.footer .icon2').click(function () {
        window.location.href ='http://service.bj.10086.cn/m/jsp/kxb/index.jsp';
    });
    $('.footer .icon3').click(function () {
        window.location.href ='http://service.bj.10086.cn/m/4g/hjt/';
    });
    $('.footer .icon4').click(function () {
        window.location.href ='http://service.bj.10086.cn/m/roaming/showIndex.action';
    });

    
    
});