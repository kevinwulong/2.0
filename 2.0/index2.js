$(function() {
	var a = true;

	//图片运动
	$("#div1 img").animate({
		top:'300px'
	},1000,function(){
		$("#div1 h1").animate({
			opacity:'1'
		},1000,function(){
			$("#div1 h2").animate({
				opacity:'1'
			},1000,function(){
				$("#div1 p").animate({
					opacity:'1'
				})
			})
		})
	})

	//个人简介
	$("#div2 h1").mouseover(function(){
		if(a){
		$(this).animate({
			left:'-1040px'
		},1000)

		$(this).animate({
			left:'440px'
		},1000)
		setTimeout(function(){
			$("#div2 h1").css({
				color:'white'
			})			
		},1000)
		}
		a=false;
	})

	//技能点



})