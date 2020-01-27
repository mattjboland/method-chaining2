$(document).ready(function() {
    $("button").click(function(){
        $("p").hide(2000).show(2000);
    });
    $("button").click(function(){
        $("p").fadeIn().fadeOut();
    });

}); 