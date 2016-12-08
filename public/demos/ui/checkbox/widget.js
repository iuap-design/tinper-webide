
$( ".u-choseChecked").bind("click", function(e) {
    if( $(this).find("img").hasClass("u-show-border")){
        $(this).find("img").removeClass("u-show-border");
    }else{
        $(this).find("img").addClass("u-show-border");
    }
})
