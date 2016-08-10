$(function(){

	/*第一个头的右半部份*/
	$("#first_right ul li").mouseover(function(){
		$(this).children().show();

	})
	$("#first_right ul li").mouseout(function(){
		$(this).children().hide();
	})


	/*二维码XX*/
	$("#erweimaimg2").click(function(){
		$(this).remove();
		$("#erweimaimg1").remove();
	})


	/*搜索框*/
	$("#sectitle li").click(function(){

		$("#secseach").css("border","3px solid rgb(255, 84, 0)");
		$("#secbutton").css("background","rgb(255, 84, 0)");
		$(this).addClass("secon").siblings().removeClass();
	})
	$("#tianmao").click(function(){

		$(this).addClass("sectianmao").siblings().removeClass();
		$("#secseach").css("border","3px solid rgb(196,0,0)");
		$("#secbutton").css("background","rgb(196,0,0)");
	})

	/*sidebar*/
	$("#sidebar ul li").mouseover(function(){
		$("#sidebar_div").show();
	})
	$("#sidebar ul li").mouseout(function(){
		$("#sidebar_div").hide();
	})






/*轮播工具*/

var carousel_one = $("#carousel_one");
var one_pic  = $("#one_pic");
var btns = $("#one_btns span");
var one_left= $("#one_left");
var one_right=$("#one_right");
var len = 4;
var interval= 3000 ;
var timer; 
var index=1;

function one_animate(offset){
	var left= parseInt(one_pic.css("left")) + offset;
	if(offset > 0 ){
		offset = '+=' + offset;
	}
	else{
		offset = '-=' + Math.abs(offset);
	}
	one_pic.animate({'left':offset},300,function(){
		if(left > -200){
			one_pic.css("left",-520 * len);
		}
		if(left < (-520 * len)){
			one_pic.css('left',-520);
		}
	})
}
function one_showBtns(){
	btns.eq(index-1).addClass('one_on').siblings().removeClass('one_on');
}
function one_play(){
	timer = setTimeout(function(){
		one_right.trigger('click');
		one_play();
	},interval)
}
function one_stop(){
	clearTimeout(timer);
}
one_right.bind('click',function(){
	if(one_pic.is(':animated')){
		return;
	}
	if(index == 4){
		index = 1;
	}
	else{
		index+=1;
	}
	one_animate(-520);
	one_showBtns();
})
one_left.bind('click',function(){
	if(one_pic.is(':animated')){
		return;
	}
	if(index ==1 ){
		index = 4;
	}	
	else{
		index -= 1;
	}
	one_animate(520);
	one_showBtns();
})
btns.each(function(){
	$(this).bind('click',function(){
		if(one_pic.is(":animated") || $(this).attr('class')=='one_on'){
			return;
		}
		var one_myIndex = parseInt($(this).attr('index'));
		var one_offset = -520 * (one_myIndex - index );
		one_animate(one_offset);
		index = one_myIndex;
		one_showBtns();
	});
})
carousel_one.hover(one_stop,one_play);

one_play();



/*公告*/

$("#gonggao_ul li").mouseover(function(){
	$(this).addClass("gonggao_on").siblings().removeClass();
	$("#gonggao_one div").eq($("#gonggao_ul li").index(this)).addClass("gonggaodiv_on").siblings().removeClass();
})


/*轮播2号*/


var carousel_two = $("#carousel_two");
var two_pic  = $("#two_pic");
var two_btns = $("#two_btns span");
var two_left= $("#two_left");
var two_right=$("#two_right");
var two_len = 6;
var two_interval= 2000 ;
var two_timer; 
var two_index=1;

function two_animate(offset){
	var left= parseInt(two_pic.css("left")) + offset;
	if(offset > 0 ){
		offset = '+=' + offset;
	}
	else{
		offset = '-=' + Math.abs(offset);
	}
	two_pic.animate({'left':offset},300,function(){
		if(left > -200){
			two_pic.css("left",-530 * two_len);
		}
		if(left < (-530 * two_len)){
			two_pic.css('left',-530);
		}
	})
}
function two_showBtns(){
	two_btns.eq(two_index-1).addClass('two_on').siblings().removeClass('two_on');
}
function two_play(){
	two_timer = setTimeout(function(){
		two_right.trigger('click');
		two_play();
	},interval)
}
function two_stop(){
	clearTimeout(two_timer);
}
two_right.bind('click',function(){
	if(two_pic.is(':animated')){
		return;
	}
	if(two_index == 6){
		two_index = 1;
	}
	else{
		two_index+=1;
	}
	two_animate(-530);
	two_showBtns();
	$("#carousel_twotext p span").html( two_index+"/6");
})
two_left.bind('click',function(){
	if(two_pic.is(':animated')){
		return;
	}
	if(two_index ==1 ){
		two_index = 6;
	}	
	else{
		two_index -= 1;
	}
	two_animate(530);
	two_showBtns();
	$("#carousel_twotext p span").html( two_index+"/6");
})
two_btns.each(function(){
	$(this).bind('click',function(){
		if(two_pic.is(":animated") || $(this).attr('class')=='two_on'){
			return;
		}
		var two_myIndex = parseInt($(this).attr('two_index'));
		var two_offset = -530 * (two_myIndex - two_index );
		two_animate(two_offset);
		two_index = two_myIndex;
		two_showBtns();
	});
})
carousel_two.hover(two_stop,two_play);

two_play();


/*二维码2*/
$("#app img").mouseover(function(){

	var oleft=$(this).offset().left-33;
	var otop =$(this).offset().top-98;
	$("#app_div").css('left',oleft);
	$("#app_div").css('top',otop);
	$("#app_div").show();

})
$("#app img").mouseout(function(){
	$("#app_div").hide();
})
/*box——one*/

$("#imgbox_one5").mouseenter(function(){

	$("#imgbox_one5 div").animate({bottom:0});

})
$("#imgbox_one5").mouseleave(function(){

	$("#imgbox_one5 div").animate({bottom:-70});

})


/*smallbox 二维码*/



$(".shishangewm").mouseover(function(){
	var oleft=$(this).offset().left-33;
	var otop =$(this).offset().top-98;
	$("#app_div").css('left',oleft);
	$("#app_div").css('top',otop);
	$("#app_div").show();
	$(this).attr('src','img/shishang/z1.png');
	$(this).css('cursor','pointer')
})

$('.shishangewm').mouseout(function(){
	$(this).attr('src','img/shishang/z.jpg');
	$("#app_div").hide();

})





})