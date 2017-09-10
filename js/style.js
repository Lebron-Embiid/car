$(function(){
	function active_show(fat,obj){
		$(fat).on("mouseover",obj,function(){
			$(this).addClass("active").siblings().removeClass("active");
		}).on("mouseout",obj,function(){
			$(this).removeClass("active");
		})
	}
	active_show(".lease",".bank");
	active_show(".car",".content");
	active_show(".download",".box");

	active_show(".safe",".com");
	active_show(".select","li");
	active_show(".advantage","li");
	active_show(".one_share","li");

	
	var list1 = ["./images/league1.png","./images/lea2.png","./images/lea3.png","./images/lea4.png","./images/lea5.png"];
	var list2 = ["./images/lea1.png","./images/league2.png","./images/league3.png","./images/league4.png","./images/league5.png"];
	var num = 0;
	$(".advantage").on("mouseover","li",function(){
		_this = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".advantage li").eq(_this).find(".img").attr("src",list1[_this]);
		num = _this;
	}).on("mouseout","li",function(){
		$(this).removeClass("active");
		$(this).find(".img").attr("src",list2[num]);
	})

	// $(document).scroll(function(){
	// 	var sTop = $(document).scrollTop();
	// 	if(sTop>480){
	// 		$(".nav-scroll").css({
	// 			"background":"rgba(255,255,255,1)"
	// 		})
	// 	}else{
	// 		$(".nav-scroll").css({
	// 			"background":"rgba(255,255,255,.3)"
	// 		})
	// 	}
	// })
	// var isclick = false;
	// $(".navbar-header").click(function(){
	// 	if(isclick == false){
	// 		$(".navbar .container-fluid .navbar-nav li a").css({
	// 			"background":"#f9fbfe"
	// 		});
	// 		isclick = true;
	// 	}else{
	// 		$(".navbar .container-fluid .navbar-nav li a").css({
	// 			"background":"none"
	// 		});
	// 		isclick = false;
	// 	}
	// })

})