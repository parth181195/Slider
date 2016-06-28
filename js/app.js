$(function(){
    $('.slides img:first').addClass('top');

    var change = function(){
        var cur = $('.slides img.top');
        var next= cur.next();
//        var anim_cur = 
//        var anim_next = 
        
        if(!next.length){
            next = $('.slides img:first');
            next.addClass(top);
            cur.animate({width: "75%",bottom: "10vh"},1000,function(){
                cur.removeClass('top');
                next.addClass('top');
            });
            next.animate({bottom: "0"},1000,function(){
                cur.css({width: "100%",bottom: "120vh"});
            });
        }
        else{
            cur.animate({width: "75%",bottom: "10vh"},1000,function(){
                cur.removeClass('top');
                next.addClass('top');
            });
            next.animate({bottom: "0"},1000,function(){
                cur.css({width: "100%",bottom: "120vh"});
            });
        }
        console.log("loop")
    }
    setInterval(change, 5000);
});

















































