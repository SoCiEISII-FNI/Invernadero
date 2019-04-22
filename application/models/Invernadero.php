<?php 
class Invernadero extends CI_Model{
	public function verificar($nombre='',$password='')
	{
		$res=$this->db->query("SELECT * FROM user WHERE nombre='$nombre' AND password='$password'");
		if($res->num_rows()==1){
			return $res->row();
		}else{
			header("Location: ".base_url());
		}
	}
	public function consulta($mostrar,$where,$dato,$tabla,$orden){
		$res=$this->db->query("SELECT $mostrar FROM $tabla WHERE $where='$dato' ORDER BY $orden DESC LIMIT 7");
		return $res->row();
		//return "hello";
	}
	public function consultahtml($mostrar,$where,$dato,$tabla,$orden){
		$res=$this->db->query("SELECT $mostrar FROM $tabla WHERE $where='$dato' ORDER BY $orden DESC LIMIT 7");
		//return $res->row();
		return $res;
	}
	public function query2(){
		$qry = "SELECT date,idhumedadexternas FROM humedadexternas";
		$res=$this->db->query($qry);
		//return $res->row();
		return $res;
	}
}