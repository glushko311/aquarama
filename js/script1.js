
function initMobileMenu(){
	function decClose(){
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line').css({transform: 'rotate(0)'});
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line2').css({transform: 'rotate(0)'});
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line2').fadeIn();
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line1').css({top:'0px'});
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line3').css({top:'14px'});
		
	};
		
	function decOpen(){
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line').css({top:'7px'});
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line1').css({transform:"rotate(45deg)"});
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line3').css({transform:"rotate(135deg)"});
		$('nav.mobile .mobile_menu_button .menu_dec .dec_menu_line2').fadeOut();

	};
	
	$('nav.mobile .mobile_menu_button').on('click',function(){
		if($(".open_menu").css('display') == "block"){
			$(".open_menu").css('display','none');
			$('nav.mobile ul').css('display','flex');
			decOpen();
		}else{
			$(".open_menu").css('display','block');
			$('nav.mobile ul').css('display','none');
		}
		if($(".close_menu").css('display') == "block"){
			$(".close_menu").css('display','none');
			$('nav.mobile ul').css('display','none');
			decClose()
		}else{
			$(".close_menu").css('display','block');
			$('nav.mobile ul').css('display','flex');
		}		
	});
	
}// Работа мобильного меню
		
function unbindIfResize(){
		$(window).resize(function(){
			$(window).unbind('scroll');	
			initParalaxes();//подключение заново паралаксов
			setScrollUpBtn();//подключение заново кнопки вверх
			
		});
}// Переподключение паралаксов в случае изменения размеров окна
	
function initParalaxes(){
		if($("section.main_sec .fixed_img").length > 0){
			paralaxImg("section.main_sec .fixed_img", 200,0, 25);
		}		
		if($(".bg1").length > 0){
			paralaxImg(".bg1", $(".bg1").offset().top+$(".bg1").height()+200,$(".bg1").offset().top-200,$(".bg1").height()/8);
		};
		if($(".color_div").length > 0){
			paralaxImg(".color_div", $(".color_div").offset().top+$(".color_div").height()+200,$(".color_div").offset().top-200, $(".color_div").height()/10);
		};		
} // Запуск всех паралаксов которые есть на странице
	
function paralaxImg(selector, maxScroll, minScroll, howSlow){
		
			$(window).scroll(function(){
			var scrollWindow = $(this).scrollTop()-minScroll;
			if(scrollWindow < maxScroll){
				$(selector).css({
				"transform" : "translate(0%, " + scrollWindow/howSlow +"%)"
				});
			}

		});
}// Определяет логику работы паралаксов
		
function openCloseBenefition21Section(){
	$('.benefits21 .display_all_benefits').on('click', function(e){
		e.preventDefault();
		if($(this).hasClass('close')){
			$(window).unbind('scroll');// отключение паралаксов
			$(this).removeClass('close').text('Все преимущества').siblings('.hidden_item').css('display', 'none');		
			initParalaxes();// подключение паралаксов
			
		}else{
			$(window).unbind('scroll');// отключение паралаксов
		   	$(this).addClass('close').text('Свернуть').siblings('.hidden_item').css('display', 'flex');			
			initParalaxes();// подключение паралаксов
		   }
	});
}// Показать скрыть все преимущества из блока section.benefits21
	
function openModalWindowEventListener(){
//	$('.get_callback').on('click', function(e){
//		e.preventDefault();
//		openModalWindow();
//	});//клик по кнопке "заказать обратный звонок" в хедере
	
//	$('.open_modal>.click_to_open').on('click', function(e){
//		e.preventDefault();
//		openModalWindow();
//	});//клик по кнопке "заказать обратный звонок" в .contact_us внизу сайта
	
//	$('.phone').on('click', function(e){
//		e.preventDefault();
//		openModalWindow();
//	});//клик по телефону в хедере
//	
//	$('.get_consultation').on('click', function(e){
//		e.preventDefault();
//		openModalWindow();
//	});// клик по кнопке ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
	
//	$('.get_calc').on('click', function(e){
//		e.preventDefault();
//		openModalWindow();
//	});// клик по кнопке ПОЛУЧИТЬ ТОЧНЫЙ РАСЧЁТ
	
//	$('.want_btn a').on('click', function(e){
//		e.preventDefault();
//		openModalWindow();
//	});//клик по кнопке ХОЧУ ОТКРЫТЬ МОЙКУ
//	
//	$('.click_to_open').on('click', function(e){
//		e.preventDefault();
//		openModalWindow();
//	});//
	$('.modal_bt').on('click', function(e){
		e.preventDefault();
		closeModalWindow();
	});//клик по крестику в модальном окне
}// обработчик события клик по кнопкам заказать звонок
		
function openModalWindow(){
		if($('.modal_window').css('display')=='none'){
			$('.modal_window').css('display','block');
			$('.modal_wrap').css('display','block');
			$('.modal_window form').addClass('active_form');//этот класс ищет обработчик формы
			$('.contact_us .form_block form').removeClass('active_form');//этот класс ищет обработчик формы
		};
};//Открытие модального окна заказать звонок

function closeModalWindow(){
		if($('.modal_window').css('display')=='block'){
			$('.modal_window').css('display','none');
			$('.modal_wrap').css('display','none');
			//$('.modal_window form').removeClass('active_form');//этот класс ищет обработчик формы
			//$('.contact_us .form_block form').addClass('active_form');//этот класс ищет обработчик формы
		};
};//клик по кнопке закрыть форму(крестик)

function setScrollUpBtn(){
	$(window).on('scroll', function(){
		if($(window).scrollTop()>800){
				$(".go_up_btn").css('display','block');
		}else{
			$(".go_up_btn").css('display','none');
		}
	});
	
	$(".go_up_btn").on('click', function(){
		var goTopInt = 0;
		goTopInt = setInterval(function(){
			if($(window).scrollTop()>0){
				$(window).scrollTop($(window).scrollTop()-50);
			}else{
				clearInterval(goTopInt);
			}			
		},3);
		
	});
}// Кнопка вверх плавная прокрутка и отрисовка после скролла на опр. расстояние

function equipmentMenuInit(){
	$(".equip_menu_item").hover(
		function(){
			$(".sub_menu").css("display","flex");
		},
		function(){
			$(".sub_menu").css("display","none");
		} 
	);
	
	$(".sub_menu_item").hover(
		function(){
			$(this).children('.third_level_menu').css("display","flex");
		},
		function (){
			$(this).children('.third_level_menu').css("display","none");
		}
	);
	
	
}//работа сабменю в пункте оборудование десктоп

function equipmentMobileMenuInit(){
	$('.equip_menu_link_mob').on('click', function(e){
		e.preventDefault();
		var mainEquipItems = $('.sub_menu_item_mob'),
			equipMenuLink = $(this);
		
		if(equipMenuLink.hasClass('close')){
			mainEquipItems.css('display', 'none');
			equipMenuLink.removeClass('close');
			$('.sub_menu_main_link').removeClass('close');
			$('.third_level_menu_item_mob').css('display', 'none');
		}else{
			mainEquipItems.css('display', 'block');
			equipMenuLink.addClass('close');
		}
		
	});
	$('.sub_menu_main_link').on('click', function(e){
		e.preventDefault();
		var thirdLevelMenuItem = $('.third_level_menu_item_mob'),
			thisItem = $(this),
			thisItemDataClass = thisItem.parent().data('class');
		
		thirdLevelMenuItem.css('display','none');
		if(thisItem.hasClass('close')){
			thirdLevelMenuItem.css('display','none');
			thisItem.removeClass('close');
		}else{
			thisItem.addClass('close');
			for(var i = 0; i < thirdLevelMenuItem.length; i++){
					if(thirdLevelMenuItem.eq(i).data('class') == thisItemDataClass){
						thirdLevelMenuItem.eq(i).css('display', 'block');
					}
				}
			 }
		
		
		
		
	});
}//работа сабменю в пункте оборудование мобильное меню

function simpleCalcInit(){
	var benefitValue = [7613173, 11839760, 16066347, 20292934, 24519520, 28746107, 32972694];
	$('.main_sec .img_cont .calc_cont .wash_posts>div').on('click', function(){
		var that = $(this);
		that.siblings().removeClass('active_post');
		that.addClass('active_post');
		that.parent().siblings('.money').children().html(accounting.formatNumber(benefitValue[that.index()], 0, " ", ",") + " руб." );
		
	});
}//калькулятор на ГЛАВНОЙ странице

function initSlider(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		navText: ["<", ">"],
		responsive:{
			0:{
				items:1,
				nav:true
			},
			500:{
				items:1,
				nav:true
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			}
		},
		
	});
	$('.owl-carousel .owl-nav').css('position','static');
	$('.owl-carousel .owl-nav').children().css({'position':'absolute',
		'top':'45%',
		'height':'16%',
		'width':'4%',
		'background':'url(./img/left_shevron.png) no-repeat',
		'background-size':'contain',										
		'color':'#fff',
		'font-size':'16%',
		'opacity':'0.7',
		'z-index':1000										
	});
	$('.owl-carousel .owl-nav').children().hover(function(){
		$(this).css('opacity', 1);
	},function(){
		$(this).css('opacity', 0.7);
	})
	$('.owl-carousel .owl-nav').children('.owl-prev').css({'left':'0'});

	$('.owl-carousel .owl-nav').children('.owl-next').css({'right':'0', 		     'background':'url(./img/right_shevron.png) no-repeat',
    'background-size':'contain'});
	$('.owl-carousel .owl-nav').css('position','static');
}//подключение owl carousel

function initFormSendToHandler(){
	$('.main_form').submit(function(event){ 
 	event.preventDefault();
    
    var mail = $(this).find('input[name="mail"]').val();
    var tel = $(this).find('input[name="tel"]').val();
	var message = $(this).find('textarea[name="message"]').val();
    $(this).find('.zajavka').load("./handler.php",{'message':message, 'mail':mail, 'tel':tel, 'id':'main'});
    $(this).find('textarea[name="message"]').val('');
    $(this).find('input[name="mail"]').val('');
    $(this).find('input[name="tel"]').val('');
});	

$('.modal_form').submit(function(event){ 
 	event.preventDefault();
    
    var name = $(this).find('input[name="name"]').val();
    var tel = $(this).find('input[name="tel"]').val();
	var time = $(this).find('input[name="time"]').val();
    $(this).find('.zajavka').load("./handler.php",{'name':name, 'tel':tel, 'time':time, 'id':'modal'});
    $(this).find('input[name="name"]').val('');
    $(this).find('input[name="tel"]').val('');
    $(this).find('input[name="time"]').val('');
});		
}//ajax отправка данных на формы



$(document).ready(function(){
	equipmentMenuInit();
	equipmentMobileMenuInit();
	simpleCalcInit();
	initSlider();
	initFormSendToHandler();
	setScrollUpBtn();
	initMobileMenu();
	initParalaxes();// первый запуск паралаксов
	unbindIfResize();//отключение паралаксов при ресайзе
	openCloseBenefition21Section();//открыть закрыть benefition21 section
	openModalWindowEventListener();
});
