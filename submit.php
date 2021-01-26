<?php
    $json = array();
    $image = 'img/DSCN0354a.jpg'; 
    $text = "Это фото было сделано в Центре буддизма, Санья, о. Хайнань, Китай";
    $json[] = array('text'=>$text, 'img'=>$image);
	echo json_encode( $json );
?>