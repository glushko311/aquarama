<?php
	require('./views.php');
?>
   <!DOCTYPE html>
    
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device width,initial-scale=1.0">
            <link rel="apple-touch-icon" href="apple-touch-icon.png">
            
            <link rel="stylesheet" href="./css/normalize.css">
            <link rel="stylesheet" href="./css/owl.carousel.min.css"><!--owl2-->
            <link rel="stylesheet" href="./css/owl.theme.default.min.css"><!--owl2-->
            <link rel="stylesheet" href="./css/style.css">
            <link rel="stylesheet" href="./css/equipment_item.css">
            
            <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

            <title>Оборудование Акварама.</title>
        </head>
        
        <body>
        		
     		<?php	
     			header_();
			?>
   		
    		<section class="equipment">
    			<div class="equipment_wrap">
					<div class="breadcrumbs">
						<a href="./index.php" class="main">Главная</a>
						<a href="./oborudovanie.php" class="about equipment">> Оборудование</a>
						<a href="./oborudovanie_item_mat_beater.php" class="about equipment">> Приспособления для выбивания ковриков.</a>
					</div>
							
						<div class="equip_info">
							<div class="main_info_block">
<!--								<h1 class="main_info_title">Обменный терминал «AquaСhange»</h1>-->
								<div class="pic_block">
									<div class="main_pic">
										<img class="main_goods" src="./img/equip_item_page/mat_beater.jpg" alt="main_goods">
									</div>
								</div>								
								<div class="text_block">
									<h1>Приспособления для выбивания ковриков.</h1>
																												
								</div>
<!--
								<div class="equip_video">
									<iframe class="review_item" src="https://www.youtube.com/embed/1oVWWmRIfWA" frameborder="0" allowfullscreen></iframe>
								</div>
-->
								
							</div>
<!--
							<div class="technicals">
								<h3>Технические характеристики</h3>
								<table>
									<tr class="table_title">
										<td><p>Descr.</p></td>
										<td><p>Lances</p></td>
										<td><p>kW</p></td>
										<td><p>V / Ph / Hz</p></td>
										<td><p>bar</p></td>
										<td><p>°C</p></td>
										<td><p>mm</p></td>
									</tr>
									<tr>
										<td><p>Aqua 6.6</p></td>
										<td><p>2+1</p></td>
										<td><p>6.5</p></td>
										<td><p>400 / 3-Ph / 50</p></td>
										<td><p>100</p></td>
										<td><p>60</p></td>
										<td><p>790x650x1690</p></td>
									</tr>
									<tr>
										<td><p>Aqua 6.6</p></td>
										<td><p>2+1</p></td>
										<td><p>6.5</p></td>
										<td><p>400 / 3-Ph / 50</p></td>
										<td><p>100</p></td>
										<td><p>60</p></td>
										<td><p>790x650x1690</p></td>
									</tr>
									<tr>
										<td><p>Aqua 6.6</p></td>
										<td><p>2+1</p></td>
										<td><p>6.5</p></td>
										<td><p>400 / 3-Ph / 50</p></td>
										<td><p>100</p></td>
										<td><p>60</p></td>
										<td><p>790x650x1690</p></td>
									</tr>
									<tr>
										<td><p>Aqua 6.6</p></td>
										<td><p>2+1</p></td>
										<td><p>6.5</p></td>
										<td><p>400 / 3-Ph / 50</p></td>
										<td><p>100</p></td>
										<td><p>60</p></td>
										<td><p>790x650x1690</p></td>
									</tr>
								</table>
							</div>
-->
							<div class="other_equip">
								
								<h3>ДРУГОЕ ОБОРУДОВАНИЕ</h3>
								<div class="other_equip_cont">
									<a href="./oborudovanie_item_stargateS111.php" class="item1 item">
										<div class="item_img item_img1">
											<img class='other_item_img' src="./img/equip_item_page/equip_item_stargates111.jpg" alt="other1">
										</div>
										<h4>Stargate S111</h4>
										<p>
											Портальная мойка.
										</p>
									</a>
									<a href="./oborudovanie_item_stargateSH11.php" class="item2 item">
										<div class="item_img item_img2">
											<img class='other_item_img' src="./img/equip_item_page/equip_item_stargatesh11.jpg" alt="other2">
										</div>
										<h4>Stargate SH11</h4>
										<p>
											Портальная мойка.
										</p>
									</a>
									<a href="./oborudovanie_item_aquaChangeTopLine.php" class="item3 item">
										<div class="item_img item_img3">
											<img class='other_item_img' src="./img/equip_item_page/equip_item_aquachange-top-line.jpg" alt="other3">
										</div>
										<h4>AquaChange Top Line</h4>
										<p>
											Обменный терминал.
										</p>
									</a>
								</div>								
							</div>
						</div>   						
    			</div>
    		</section>
    		
    		<?php
				equipmentTab();
				buyed_examples();
				simple_steps(); 
				w_line2(); 
				//benefits21();
//				useful_materials();
				video_reviews(); 
				investor_benefits(); 
//				news();
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
      	<script src='./js/equipment.js'></script>

        </body>
        
        
    </html>