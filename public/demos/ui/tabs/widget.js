//图标,over的时候添加颜色
$(".u-tabs__tab-bar a").hover(function(){
    $(".u-tabs__tab-bar a").removeClass("is-active");
    //如果是竖向标签,只保留左边的圆角边框
    if($(this).parent().hasClass("u-vertical")){
        $(this).addClass("is-active").css("border-top-right-radius","0")
    }else{
        $(this).addClass("is-active");
    }
})

