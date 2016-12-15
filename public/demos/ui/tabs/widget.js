//图标的面包屑要,over的时候添加颜色
$(".u-tabs__tab-bar a").hover(function(){
    $(".u-tabs__tab-bar a").removeClass("is-active");
    $(this).addClass("is-active");
})
