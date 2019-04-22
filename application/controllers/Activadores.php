<?php
class Activadores extends CI_Controller {
	public function index()
	{
		$data['container']="container";
		$this->load->view('templates/header',$data);
		$this->load->view('activadores');
		$data['datos'] = '<script src="dist/js/activadores.js"></script>';
		$this->load->view('templates/footer',$data);
	}
	public function con()
	{
		$mostrar=$this->input->post('mostrar');
		$where=$this->input->post('where');
		$dato=$this->input->post('dato');
		$tabla=$this->input->post('tabla');
		$orden=$this->input->post('orden');
		/*$mostrar="dato";
		$where="sensor";
		$dato="2";
		$tabla="humedadinternas";
		$orden="idhumedadinternas";
		*/
		$datos=$this->db->query("SELECT $mostrar FROM $tabla WHERE $where='$dato' ORDER BY $orden DESC LIMIT 1");
		//echo $datos->$mostrar;
		$data=array('datos'=>$datos);
		$this->load->view('array',$data);
	}
}