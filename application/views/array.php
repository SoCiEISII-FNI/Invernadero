<?php
	//echo "[";
	$string= "";
	foreach($datos->result() as $fila){
		$string= $fila->dato." ".$string;
	}
	echo $string;
	//echo "]";
?>