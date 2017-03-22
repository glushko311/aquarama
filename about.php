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
			<link rel="stylesheet" href="css/about.css">
			<link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>                               
                   
                    <title>О компании Aquarama</title>
        </head>
        
        <body>
        	<?php header_() ?>		
     		<section class="about_company_page">
     			<div class="about_company_wrap">
     			<div class="breadcrumbs">
     				<a href="./index.html" class="main">Главная</a>
     				<a href="./about.html" class="about">> О компании</a>
     			</div>
     				<h2>О КОМПАНИИ</h2>
     				<div class="c_line"></div>
     				<div class="in_2016_year">
     					<div class="install_year mobile">
     						<h4>УСТАНОВЛЕНО В</h4>
     						<h3>2016</h3>
     					</div>
     					<div class="portal_wash">
     						<div class="item_img">
     							<h4>320</h4>
     						</div>
     						<h3>ПОРТАЛЬНЫХ АВТОМОЕК</h3>
     					</div>
     					<div class="install_year desktop">
     						<h4>УСТАНОВЛЕНО В</h4>
     						<h3>2016</h3>
     					</div>
     					<div class="auto_wash_post">
     						<div class="item_img">
     							<h4>250</h4>
     						</div>
     						<h3>АВТОМОЕЧНЫХ ПОСТОВ</h3>
     					</div>
     				</div>
     				<div class="about_text_img">
     					<div class="about_img"></div>
     					<div class="about_text">
     						<p class="main_about">
     							Сегодня Акварама - это независимая, динамично развивающаяся компания, которая настроена на непрерывное обучение, внедрение новых технических и дизайнерских идей.
     						</p>
     						<p>
     							Более 20 лет назад, когда рынок автомоек самообслуживания в Европе только начал формироваться, была организована компания Акварама. В самом начале своего пути компания была эксклюзивным дистрибьютором немецкого автомоечного оборудования фирмы Otto Christ AG. Компания  Акварама выросла на традициях немецкого качества, добавив к этому свой элегантный инновационный дизайн.
     						</p>
     						<p>
     							Акварама – это комплексное решение «под ключ», включая поставку всего вспомогательного оборудования, дизайнерские и архитектурные решения.
							</p>
     						<div class="text_cont">
     							<p>
     								Справка:
     							</p>
     							<ul>
     								<li>
     									<p>
     										- завод Акварама находится в небольшом итальянском городке Новелло и занимает 25 000 м2
     									</p>
     								</li>
     								<li>
     									<p>
     										- завод оснащен по последнему слову техники практически с полным циклом производства
     									</p>
     								</li>
     								<li>
     									<p>
     										- поставки оборудования осуществляются более, чем в 50 стран мира
     									</p>
     								</li>
     								<li>
     									<p>
     										- персонал завода – более 100 человек
     									</p>
     								</li>
     							</ul>
     						</div>
     					</div>
     				</div>
     			</div>
     		</section>
     		
     		<?php
			small_icons();
			about_goods();
			w_line1();
			buyed_examples();
			simple_steps(); 
			w_line2(); 
			//benefits21();
//			useful_materials();
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
			<script type="text/javascript" src='./js/script1.js'></script>
			
		</body>


</html>
