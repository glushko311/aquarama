
$(document).ready(function(){
	if($('.success_page').length != 0){
		$('.success_page .success_content_wrap .more_examples').on('click', function(e){
			e.preventDefault();
			if($(this).hasClass('close')){
				$('.success_page .success_content_wrap .hidden_item').css('display', 'none');
				$(this).removeClass('close').text('Показать все материалы');
			}else{
				$('.success_page .success_content_wrap .hidden_item').css('display', 'flex');
				$(this).addClass('close').text('Скрыть');
			}			
		});
	}
});

