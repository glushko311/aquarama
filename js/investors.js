
function initSlidersJQueryUI(){
//моечные посты
    $( "#slider-range-max1" ).slider({
      range: "max",
      min: 1,
      max: 8,
      value: 6,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		$(this).children('.choose_point_label').css('left', (ui.value)*10*1.4286-16+"%");
		$(this).children('.choose_point_label').children('p').html(ui.value);
		  var otherLeakChange = 1;
		  switch(ui.value){
				  case 1: otherLeakChange = 0;break;
				  case 2: otherLeakChange = 0;break;
				  case 3: otherLeakChange = 1;break;
				  case 4: otherLeakChange = 2;break;
				  case 5: otherLeakChange = 3;break;
				  case 6: otherLeakChange = 4;break;
				  case 7: otherLeakChange = 5;break;
				  case 8: otherLeakChange = 6;break;
			  default: 4;
		  }
		  $(".benefit_calc_cont #slider-range-max5").slider({value:otherLeakChange});
		  $('.benefit_calc_cont #slider-range-max5 .choose_point_label').css('left', (otherLeakChange)*3.7-10+"%");
		  $('.benefit_calc_cont #slider-range-max5 .choose_point_label p').html((otherLeakChange*10000+30000)+"p");
		  hideLabelUnderChooseLabel($('#slider-range-max5'));
		  hideLabelUnderChooseLabel($(this));
		  displayWashPosts();
		  reCalcBenefition();
      },
	create: function(){
		var startPos = $(this).slider("value");
		$(this).children('.choose_point_label').css('left', startPos*10*1.4286-16+"%");
		$(this).children('.choose_point_label').children().html(startPos);
		hideLabelUnderChooseLabel($(this));
	}
    });

// загрузка мойки
    $( "#slider-range-max2" ).slider({
      range: "max",
      min: 0,
      max: 10,
      value: 3,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		$(this).children('.choose_point_label').css('left', (ui.value)*10-5+"%");
		$(this).children('.choose_point_label').children('p').html(ui.value*10+"%");
		reCalcBenefition();
		hideLabelUnderChooseLabel($(this));
      },
	create: function(){
			var startPos = $(this).slider("value");
			$(this).children('.choose_point_label').css('left', startPos*10-5+"%");
			$(this).children('.choose_point_label').children().html(startPos*10+"%");
			hideLabelUnderChooseLabel($(this));
		}
    });
	
// себестоимость помывки
    $( "#slider-range-max3" ).slider({
      range: "max",
      min: 0,
      max: 25,
      value: 0,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		$(this).children('.choose_point_label').css('left', (ui.value)*4-5+"%");
		$(this).children('.choose_point_label').children('p').html((ui.value*4*((26.91-8.62)/100)+8.62).toFixed(2)+"p");
		reCalcBenefition();
		hideLabelUnderChooseLabel($(this));
      },
	create: function(){
			var startPos = $(this).slider("value");
			$(this).children('.choose_point_label').css('left', startPos*4-5+"%");
			$(this).children('.choose_point_label').children().html((startPos*4*((26.91-8.62)/100)+8.62).toFixed(2)+"p");
			hideLabelUnderChooseLabel($(this));
		}
    });
  
 // средний чек
    $( "#slider-range-max4" ).slider({
      range: "max",
      min: 0,
      max: 25,
      value: 10,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		$(this).children('.choose_point_label').css('left', (ui.value)*3.9-3+"%");
		$(this).children('.choose_point_label').children('p').html((ui.value*4*((300-50)/100)+50)+"p");
		reCalcBenefition();
		hideLabelUnderChooseLabel($(this));
      },
	  create: function(){
			var startPos = $(this).slider("value");
			$(this).children('.choose_point_label').css('left', startPos*3.9-3+"%");
			$(this).children('.choose_point_label').children().html((startPos*4*((300-50)/100)+50)+"p");
		  	hideLabelUnderChooseLabel($(this));
		}
    });

// прочие расходы
    $( "#slider-range-max5" ).slider({
      range: "max",
      min: 0,
      max: 27,
      value: 6,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		$(this).children('.choose_point_label').css('left', (ui.value)*3.7-7+"%");
		$(this).children('.choose_point_label').children('p').html((ui.value*10000+30000)+"p");
		reCalcBenefition();
		hideLabelUnderChooseLabel($(this));
      },
	  create: function(){
			var startPos = $(this).slider("value");
			$(this).children('.choose_point_label').css('left', startPos*3.7-7+"%");
			$(this).children('.choose_point_label').children().html((startPos*10000+30000)+"p");
		  	hideLabelUnderChooseLabel($(this));
		}
    });

 // ФОТ
    $( "#slider-range-max6" ).slider({
      range: "max",
      min: 0,
      max: 14,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		$(this).children('.choose_point_label').css('left', (ui.value)*7.1-7+"%");
		$(this).children('.choose_point_label').children('p').html((ui.value*10000+10000)+"p");
		reCalcBenefition();
		hideLabelUnderChooseLabel($(this));
      },
	  create: function(){
			var startPos = $(this).slider("value");
			$(this).children('.choose_point_label').css('left', startPos*7.1-7+"%");
			$(this).children('.choose_point_label').children().html((startPos*10000+10000)+"p");
		  	hideLabelUnderChooseLabel($(this));
		}
    });

}// Загрузка слайдеров JQuery

function reCalcBenefition(){
		var postValue = parseInt($(".wash_posts_slider .slider-line .choose_point_label>p").text()),
			washLoad = (parseInt($(".wash_load_slider .slider-line .choose_point_label>p").text()))/100,
			washPrice = parseFloat($(".wash_price_slider .slider-line .choose_point_label>p").text()),
			avgBill = parseInt($(".avg_price_slider .slider-line .choose_point_label>p").text()),
			otherLeaks = parseInt($(".other_price_slider .slider-line .choose_point_label>p").text()),
			fot = parseInt($(".fot_slider .slider-line .choose_point_label>p").text());
			result = 0;
			result =  (((avgBill - washPrice)*(postValue*washLoad*7*732) - fot - otherLeaks)*12).toFixed();
		$(".benefit_calc_cont>.year_benefition>h3.year_benefition_value").text(" " + accounting.formatNumber(result, 0, " ", ",") + " руб." );
}// Расчёт годового дохода мойки и вывод его

function displayWashPosts(){
	postValue = parseInt($(".wash_posts_slider .slider-line .choose_point_label>p").text())
	switch(postValue){
			case 1: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/1post_wash.png') no-repeat",
												 
												 'background-size':'cover'
												});
			break;
			case 2: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/2post_wash.png') no-repeat",
												
												 'background-size':'cover'
												});
			break;
			case 3: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/3post_wash.png') no-repeat",
												
												 'background-size':'cover'
												});
			break;
			case 4: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/4post_wash.png') no-repeat",
												 
												 'background-size':'cover'
												});
			break;
			case 5: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/5post_wash.png') no-repeat",
												
												 'background-size':'cover'
												});
			break;
			case 6: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/6post_wash.png') no-repeat",
												 
												 'background-size':'cover'
												});
			break;
			case 7: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/7post_wash.png') no-repeat",
												 
												 'background-size':'cover'
												});
			break;
			case 8: $('.benefit_calc_cont>.wash_posts').css({'background':"url('./img/investors_page/8post_wash.png') no-repeat",
												 
												 'background-size':'cover'
												});
			break;
	}
}//отображает кол-во постов в зависимости от движка "количество моющих постов"

function hideLabelUnderChooseLabel(slider){
	
	var	labelsArray = slider.parent().children('.slider_labels').children(),
		chooseLabel = slider.children('.choose_point_label'),
		chooseLabelHtml = chooseLabel.children().html();
	
	labelsArray.css('opacity', 1);
	
	for(var i=0; i < labelsArray.length; i++){
		if(isRectIntersect(labelsArray.eq(i), chooseLabel)){
			labelsArray.eq(i).css('opacity', 0)
		}
	}
	
}//скрытие точек под движком слайдера

function isRectIntersect(rect1, rect2){
		var cp_lable_width = rect2.width(),
			cp_lable_left = rect2.offset().left,
			lable_width = rect1.width(),
			lable_left = rect1.offset().left;
		if(lable_left < cp_lable_left && lable_left + lable_width > cp_lable_left){
			return true;
		}else if(lable_left > cp_lable_left && lable_left < cp_lable_left + cp_lable_width){
			return true;
		}else{
			return false;
		}	
}//определяет пересекаются ли подписи rect1 и rect2 вернёт true/false
 
function setStartPositionOfChooseLabel(sliderSelector){
	var startValue = sliderSelector.slider("value");
	sliderSelector.children('.choose_point_label').css('left','');
}//установка позиции для подписи слайдера

function submitToInvestorsForm(){
	$('.investors_calc_form').submit(function(event){ 
 	event.preventDefault();
    
    var email = $(this).find('input[name="email"]').val();
    var phone = $(this).find('input[name="phone"]').val();
	var calc_data = getCalcData();

    $(this).siblings('.zajavka').load("./handler.php",{'email':email, 'phone':phone, 'id':'investors', 'calc':calc_data});
    $(this).find('input[name="email"]').val('');
    $(this).find('input[name="phone"]').val('');

	});
}

function getCalcData(){
    
		var calc_data_string = '',
		washPosts = $('#slider-range-max1 .choose_point_label p').text(),
		washLoad = $('#slider-range-max2 .choose_point_label p').text(),
		avgWashPrice = $('#slider-range-max3 .choose_point_label p').text(),
		avgBill = $('#slider-range-max4 .choose_point_label p').text(),
		otherLeaks = $('#slider-range-max5 .choose_point_label p').text(),
		fot = $('#slider-range-max6 .choose_point_label p').text(),
		benefit = $('.year_benefition_value').text();
		calc_data_string = "Количество моечных постов : " + washPosts + ";<br/>" + "Загрузка мойки : " + washLoad + ";<br/>" + "Себестоимость помывки : " + avgWashPrice + ";<br/>" + "Средний чек : " + avgBill + ";<br/>" + "Прочие расходы : " + otherLeaks + ";<br/>" + "ФОТ : " + fot + ";<br/>" + "Годовой доход : " + benefit + ";<br/>";
		return calc_data_string;

}

$(document).ready(function(){	
	initSlidersJQueryUI();
	reCalcBenefition();
	displayWashPosts();
	submitToInvestorsForm();
}); // точка входа подключение слайдеров JQuery UI
