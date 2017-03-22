<?
$mainEmail = "admin@aquarama-rus.ru";
$mainFrom = "admin@aquarama-rus.ru";

if(isset($_REQUEST["id"])){
	if($_REQUEST["id"]==="main"){

		$mail = $_REQUEST["mail"];
		$tel = $_REQUEST["tel"];
		$message = $_REQUEST["message"];
		$from = $mainFrom;

		$text = "Сообщение от клиента<br />


		Почта клиента - ".$mail.";<br />
		Телефон клиента - ".$tel."; <br />
		Сообщение - ".$message;


		$headers = "From: $from". "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";


		if(mail($mainEmail, "Сообщение от клиента", $text, $headers)){
			echo("<p style='padding:15px 0 0 0;color:#000;text-align: center'>Ваше сообщение отправлено.</p>");
		}

	}elseif($_REQUEST["id"]==="modal"){


		$name = $_REQUEST["name"];
		$tel = $_REQUEST["tel"];
		$time = $_REQUEST["time"];
		$from = $mainFrom;

		$text = "Запрос клиента на обратный звонок<br />


			Имя клиента - ".$name.";<br />
			Телефон клиента - ".$tel."; <br />
			Удобное время звонка - ".$time;


		$headers = "From: $from". "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

		if(mail($mainEmail, "Запрос на обратный звонок от клиента", $text, $headers)){
			echo("<p style='padding:15px 0 0 0;color:#000;text-align: center'>Ваше сообщение отправлено.</p>");
		}

	}elseif($_REQUEST["id"]==="investors"){


		$email = $_REQUEST["email"];
		$phone = $_REQUEST["phone"];
		$calc_data = $_REQUEST['calc'];

		$from = $mainFrom;

		$text = "Запрос клиента на заказ автомойки<br />
			Почта клиента - ".$email.";<br />
			Телефон клиента - ".$phone."; <br />".$calc_data;


		$headers = "From: $from". "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

		if(mail($mainEmail, "Запрос клиента", $text, $headers)){
			echo("<p style='padding:15px 0 0 0;color:#000;text-align: center'>Ваше сообщение отправлено.</p>");
		}

	}

}

?>