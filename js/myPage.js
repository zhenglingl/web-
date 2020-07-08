/*
* @Author: ZLL
* @Date:   2020-07-04 22:07:21
* @Last Modified by:   ZLL
* @Last Modified time: 2020-07-08 15:46:48
*/

$(function(){
	//当前屏幕
	var k = $(window).height();
	//控制动画
	var flag = false;
	// 点击next滚动下一屏
	$('.next').click(function(event){
		$.fn.fullpage.moveSectionDown();
	});
	// fullpage
	$('#fullpage').fullpage({
		//是否显示项目导航
		navigation:true,
		keyboardScrolling:true,
		//滚动速度，单位毫秒
		scrollingSpeed:1200,

		//回调函数
		//滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
		afterLoad:function(anchorLink,index){
			
			if(index == 2){
				$('.next').fadeOut();
				//沙发图片左移
				$('.search').show().animate({'right':370},1500,function(){
					//沙发两字显示出来
					$('.search-word').animate({'opacity':1},500,function(){
						//search 图片影藏
						$('.search').hide();
						//图片向右上角移动并缩小
						$('.search-02-1').show().animate({'height':30,'right':250,'bottom':452},500);
						//同时沙发大图片放大
						$('.goods-02').show().animate({'height':218},500);
						//白色文字逐渐显示出来
						$('.words-02').animate({'opacity':1},500,function(){
							$('.next').fadeIn();
						});
					});
				});
			}

		},
		//滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
		onLeave: function(index, nextIndex, direction) {
			$('.next').fadeOut();
    		if(index == 2 && nextIndex == 3) {
    			// 当第二屏幕往第三屏幕滚动的时候， 沙发显示并且往第三屏幕跑  白色盒子显示
    			// 沙发要往第三屏幕走，  走的距离 就是  当前哦屏幕的高度 - main 到底部的高度 - 沙发到main的距离    (当前屏幕的高度  - 250 )
    			$(".shirt-02").show().animate({"bottom": -(k-250),'width':207,'left':260},1500,function(){
    				$('.img-01-a').animate({'opacity':1},500,function(){
    					$('.btn-01-a').animate({'opacity':1},500,function(){
							$('.next').fadeIn();
						});
    				});
    			});
    			$(".cover").show();
    		}
    		//第三屏到第四屏
    		if(index == 3 && nextIndex == 4 ){
    			$('.shirt-02').hide();
    			$('.t1f').show().animate({'bottom':-((k-250)+50),'left':256},1500,function(){
    				$(this).hide(); // 动画完毕后自动隐藏
    				$('.car-img').show();
    				// 购物车向右移动
    				$('.car').animate({'left':2000},1500,'easeInExpo',function(){
    					$('.note').show();
    					$('.note-img,.word-04-a').animate({'opacity':1},500,function(){
							$('.next').fadeIn();
						});
    				});
    			});
    		}
    		//第四屏到第五屏
    		if(index == 4 && nextIndex == 5 ){
    			//手上移动
    			$('.hand-05').animate({'bottom':0},1000,function(){
    				//点击鼠标显示
    				$('.mouse-05-a').show();
    				//沙发下来
    				$('.tf1-05').show().animate({'bottom':70},1000,function(){
    					//卡片上去
    					$('.order-05').animate({'bottom':390},500,function(){
    						$('.words-05').addClass('words-05-a');
    						$('.next').fadeIn();
    					});
    				})
    			});
    			
    		}
    		//第五屏到第六屏
    		if(index == 5 && nextIndex == 6 ){
    			//沙发下移
    			$('.tf1-05').animate({'bottom':-(k-500),'left':'40%','width':65},2000,function(){
    				$(this).hide();
    			});
    			$('.box-06').animate({'left':'38%'},2000,function(){
    				$(this).animate({'bottom':40},500,function(){
    					$(this).hide();
    					// 背景移动
    					$('.section6').animate({'backgroundPositionX':'100%'},4000,function(){
    						//动画结束，人物显示
    						$('.boy').animate({'height':305,'bottom':116},1000,function(){
    							$(this).animate({'right':500},1000,function(){
    								// 门显示出来，女孩变大
    								$('.door').animate({'opacity':1},200,function(){
    									$('.girls').show().animate({'right':350,'height':306},1000,function(){
    										$('.pop-07').show();
    										$('.next').fadeIn();
    									});
    								});
    							});
    						});
    					});
    					//最后的文字显示
    					$('.words-06-a').show().animate({'left':'30%'},2000,'easeOutElastic');
    					// 车前地址
    					$('.pop-06').show();
    				});
    			});
    		}
    		//第五屏到第六屏
    		if(index == 6 && nextIndex == 7 ){
    			setTimeout(function(){
    				$('.star').animate({'width':120},500,function(){
    					$('.good-07').show();
    					$('.next').fadeIn();
    				});
    			},2000);
    		}
    		// 第八屏动画
    		$(".beginShoping").hover(function() {
                   $(".btn-08-a").toggle();  //  toggle  显示和隐藏的切换
             });
    		// 大手随鼠标移动
    		$(document).mousemove(function(event) {
    			// 把鼠标在页面中的坐标给hand
    			var x = event.pageX - $('.hand-08').width() / 2;  // 获取鼠标在页面中的X坐标
    			var y = event.pageY + 10;  // 获取鼠标在页面中的Y坐标
    			// 设定手的top值
    			var min = k-449;
    			if(y<min){
    				$('.hand-08').css({'left':x,'top':min});
    			}else{
    				$('.hand-08').css({'left':x,'top':y});
    			}
    			
    		});

    		// 再来一次
    		$('.again').click(function(event){
    			$.fn.fullpage.moveTo(1);
    			// 所有动画复原
    			$('img,.move').attr('style',"");
    		});
    		
    	},
	});
});
