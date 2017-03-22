
$(document).ready(function(){
	if($('section.materials_page').length != 0){
		$('section.materials_page .interest_to_u .show_all').on('click', function(e){
			e.preventDefault();
			if($(this).hasClass('close')){
				$('section.materials_page .interest_to_u .hidden_item').css('display', 'none');
				$(this).removeClass('close').text('Показать все материалы');
			}else{
				$('section.materials_page .interest_to_u .hidden_item').css('display', 'block');
				$(this).addClass('close').text('Скрыть');
			}			
		});
	}
});

