

$(document).ready(function(){
	if($('.tab_equipment .control_item').length != 0){
		$('.tab_equipment .control_item').on('click', function(){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$('.tab_equipment .tab_content_block').removeClass('active');
			$('.tab_equipment .tab_content_block').eq($(this).index()).addClass('active');
			$('.tab_content_block .hidden_item').css('display', 'none');
			$('.tab_equipment .tab_content_block .show_all').removeClass('close').text('Показать все');
			
		});
	};
}); // Работа табов на странице оборудования(equipment).

$(document).ready(function(){
	if($('.tab_equipment .tab_content_block .show_all').length != 0){
		$('.tab_equipment .tab_content_block .show_all').on('click',function(e){
			e.preventDefault();
			if($(this).hasClass('close')){
				$('.tab_content_block .hidden_item').css('display', 'none');
				$(this).removeClass('close').text('Показать все');
			}else{
				$('.tab_content_block .hidden_item').css('display', 'flex');
				$(this).addClass('close').text('Скрыть');
			}			
		});
		
	}
});// Работа кнопки "показать все" в табах на странице оборудования(equipment)

$(document).ready(function(){
	if($('.tab_equipment .mobile_control').css('display') == 'block'){
		$('.tab_equipment .mobile_control').on('click',function(){
			$('.tab_content_block .cont').css('display','none');
			$('.tab_content_block .show_all').css('display','none');
			$(this).parent().children().filter('.cont').css('display','flex');
			$(this).parent().children().filter('.show_all').css('display','block');
		});
	};
});// Табы в мобильной версии странице оборудования(equipment)

