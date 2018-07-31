$(function(){
		var lis = $(".bannerUl li"), // 待轮播的图片盒子
			len = lis.length, // 轮播图片张数
			liWidth = lis[0].offsetWidth, // 每个图片盒子宽度
			currentIndex = 0,
			nextIndex = 1,
			timer = null,
			duration = 30000,
			circles = null; // 所有小圆点

		// 动态计算 ul 宽度值
		$(".bannerUl").css("width", liWidth * len + "px");
		// 动态添加小圆点
		var html = "";
		for (var i = 0; i < len; i++) {
			html += "<i></i>";
		}
		$(".samllDots").append(html);
		// 获取创建的所有小圆点
		circles = $("i");
		// 第一个小圆点默认红色
		circles[0].className = "current";
		// 自动轮播
		// timer = setInterval(move, duration);
		// 轮播切换
		function move() {
			// 计算轮播定位终值
			var _left = -1 * nextIndex * liWidth;
			// 运动动画
			$(".bannerUl").animate({left : _left}, 1000);
			// 小圆点样式
			circles[currentIndex].className = "";

			circles[nextIndex].className = "current";
			// 修改索引值
			currentIndex = nextIndex;
			nextIndex++;
			if (nextIndex >= len)
				nextIndex = 0;
		}
		$(".samllDots").on('click',function(e){
			var src = e.target;
			if (src !== this && src.nodeName === "I") {
				// 小圆点索引
				var index = Array.from(circles).indexOf(src);
				// 即将显示图片的索引
				nextIndex = index;
				move();
			}
		})
		// 向前/后
		$(".prev")[0].onclick = function(){
			nextIndex = 0;
			move();
		}

		$(".next")[0].onclick = function(){
			$('.video')[0].pause();

			move();
		}
		$('.video')[0].addEventListener("ended",function(){
			

        	 nextIndex = 1;
				move();
   		})

	
})