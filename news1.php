<?php include_once('./views.php') ?>

<!DOCTYPE html>
    
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device width,initial-scale=1.0">
            <link rel="apple-touch-icon" href="apple-touch-icon.png">
            <link rel="stylesheet" href="./css/normalize.css">
            
            <link rel="stylesheet" href="./css/owl.carousel.min.css"><!--owl2-->
            <link rel="stylesheet" href="./css/owl.theme.default.min.css"><!--owl2-->
                               
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/materials.css">
            <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
            <script type="text/javascript" src = "./js/jquery-3.1.0.min.js"></script>
            <title>Новости оборудования для моек самообслуживания</title>
        </head>
        
        <body>
			<?php
			header_();
			?>

    		<section class="materials_page">
    			<div class="materials_wrap">
    				<div class="breadcrumbs">
						<a href="./index.html" class="main">Главная</a>
						<a href="./news_main.php" class="materials">> Новости</a>
						<a href="./news1.php" class="materials">> Aquarama приобретает сеть автомоек</a>
						
					</div>
   					<div class="main_article">  
   						<div class="main_img">
							<img src="./img/news_page/main_news1.jpg" alt="main_img">
						</div>
   						<h2>Aquarama приобретает сеть автомоек <br></h2>
   						<p>
   							С удовольствием сообщаем всем нашим партнерам, агентам, клиентам и поставщикам, что 07.03.2017 компания Aquarama Gest, которая является дочерней компанией Aquarama Srl, успешно приобрела итальянскую автомоечную сеть мульти-национальной компании Hypromat.
   						</p>
   						<p>
   							Это 19 установленных комплектных автомоек, расположенных в Северной Италии и имеющих стратегическое положение.
   						</p>
   						
   						<p>
   							Это приобретение даст возможность Аквараме иметь более широкий взгляд и более быстрые ответы на проблемы, связанные с эксплуатацией автомоечного оборудования. Как следствие, в се эти комплексы будут постепенно обновлены и оснащены технологией и оборудованием Акварама.
   						</p>
   						<p>
   							Для нас это новая амбициозная возможность по развитию и стратегии компании Акварама
   						</p>
<!--
   						<div class="end_img">
   							<img src="./img/materials_page/materials_end_img1.jpg" alt="end_img">
   						</div>
-->
   					</div>
	
<!--
					<div class="interest_to_u">
						<h2>ВАМ БУДЕТ ИНТЕРЕСНО</h2>
						<div class="interest_cont">
							<div class="item item1">
								<div class="item_icon">
									<img src="./img/materials_page/materials_article_img1.png" alt="icon1">
								</div>
								<h3>КАК НАЙТИ МЕСТО ДЛЯ АВТОМОЙКИ?</h3>
								<p class="about_txt">Выбор места для автомойки — задача для профессионала.</p>
								<p class="date">16 июня 2016 г.</p>
								<a href="#" class="show_more">Подробнее</a>
							</div>
							<div class="item item2">
								<div class="item_icon">
									<img src="./img/materials_page/materials_article_img2.png" alt="icon2">
								</div>
								<h3>КАК РАСЧИТАТЬ КОЛИЧЕСТВО ПОСТОВ ДЛЯ АВТОМАТИЧЕСКОЙ МОЙКИ?</h3>
								<p class="about_txt">Есть несколько простых и не очень правил, которым полезно следовать.</p>
								<p class="date">24 июня 2016 г.</p>
								<a href="#" class="show_more">Подробнее</a>
							</div>
							<div class="item item3">
								<div class="item_icon">
									<img src="./img/materials_page/materials_article_img3.png" alt="icon3">
								</div>
								<h3>И СНОВА О ПОИСКЕ МЕСТА ДЛЯ АВТОМОЙКИ.</h3>
								<p class="about_txt">Разбирая завалы обрушившегося супермаркета всегда стоит задуматься .</p>
								<p class="date">3 августа 2016 г.</p>
								<a href="#" class="show_more">Подробнее</a>
							</div>
							
							<div class="item hidden_item item1">
								<div class="item_icon"></div>
								<h3>КАК НАЙТИ МЕСТО ДЛЯ АВТОМОЙКИ?</h3>
								<p class="about_txt">Выбор места для автомойки — задача для профессионала.</p>
								<p class="date">16 июня 2016 г.</p>
								<a href="#" class="show_more">Подробнее</a>
							</div>
							<div class="item hidden_item item2">
								<div class="item_icon"></div>
								<h3>КАК РАСЧИТАТЬ КОЛИЧЕСТВО ПОСТОВ ДЛЯ АВТОМАТИЧЕСКОЙ МОЙКИ?</h3>
								<p class="about_txt">Есть несколько простых и не очень правил, которым полезно следовать.</p>
								<p class="date">24 июня 2016 г.</p>
								<a href="#" class="show_more">Подробнее</a>
							</div>
							<div class="item hidden_item item3">
								<div class="item_icon"></div>
								<h3>И СНОВА О ПОИСКЕ МЕСТА ДЛЯ АВТОМОЙКИ.</h3>
								<p class="about_txt">Разбирая завалы обрушившегося супермаркета всегда стоит задуматься .</p>
								<p class="date">3 августа 2016 г.</p>
								<a href="#" class="show_more">Подробнее</a>
							</div>							
																												
						</div>
						<a href="./materials_main.php" class="show_all">Посмотреть все материалы</a>
					</div>   	
   					
-->
    			</div>

    		</section>

			<?php
			small_icons();
			about_goods();
			w_line1();
			buyed_examples();
			simple_steps();
			w_line2();
//			benefits21();
			useful_materials();
			video_reviews();
			investor_benefits();
			news();
			open_wash();
			contact_us();
			modal();
			go_up_btn();
			footer();
			scriptsLoader();
			include_once('./yandex_google_metrika.php');
			?>

     	<script type="text/javascript" src = "./js/jquery-3.1.0.min.js"></script>
        <script type="text/javascript" src="./js/owl.carousel.min.js"></script><!--owl2-->			
      	<script src='./js/script1.js'></script>
      	<script src='./js/materials.js'></script>      	
			</body>
        </body>
        
        
    </html>