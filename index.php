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
            <link rel="stylesheet" href="css/style.css">
            <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
            
            <title>Автомойки самообслуживания и автоматические автомойки Aquarama</title>
        </head>

        <body>
<?php

header_();
main_sec();
small_icons();
about_goods();
w_line1();
buyed_examples();
simple_steps(); 
w_line2(); 
benefits21();
//useful_materials();
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
            <script type="text/javascript" src="./js/accounting.js"></script>
            <script type="text/javascript" src="./js/owl.carousel.min.js"></script><!--owl2-->
            <script type="text/javascript" src='./js/script1.js'></script>

			</body>


</html>
