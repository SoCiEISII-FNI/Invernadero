<?php
class Welcome extends CI_Controller {
	public function index()
	{
		$data['container']="container-fluid";
		$this->load->view('templates/header',$data);
		$this->load->view('welcome_message');
		$data['datos'] = '<script src="dist/js/datos.js"></script>';
		$this->load->view('templates/footer',$data);
	}
	public function co()
	{

		$mostrar=$this->input->post('mostrar');
		$where=$this->input->post('where');
		$dato=$this->input->post('dato');
		$tabla=$this->input->post('tabla');
		$orden=$this->input->post('orden');
	
		/*
		$mostrar="dato";
		$where="sensor";
		$dato="1";
		$tabla="temperaturas";
		*///$datos=$this->user->consulta($mostrar,$where,$dato,$tabla);
		$res=$this->db->query("SELECT $mostrar FROM $tabla WHERE $where='$dato' ORDER BY $orden DESC LIMIT 7");
		//$res=$this->db->query("SELECT $mostrar FROM $tabla WHERE $where='$dato'");
		$datos=$res->row();
		//echo $datos->$mostrar;
		//$res=$this->user->verificar($nombre,$password);
		//$data = array('nombre' => $res->nombre);
		//$this->session->set_userdata($data);
		echo $datos->$mostrar;
		//echo "string";
		//echo "SELECT $mostrar FROM $tabla WHERE $where='$dato'";
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
		$datos=$this->db->query("SELECT $mostrar FROM $tabla WHERE $where='$dato' ORDER BY $orden DESC LIMIT 8");
		//echo $datos->$mostrar;
		$data=array('datos'=>$datos);
		$this->load->view('array',$data);
	}
	public function jo(){
		$this->load->view('jo');
	}
	public function jo2() {
    header('Content-Type: text/json');
    $qry = "SELECT date,dato FROM humedadinternas WHERE sensor='1'";
    $rows = $this->db->query($qry)->result_array();
    $out = "Day,Submissions\n";
    foreach($rows as $data){
       //$date = DateTime::createFromFormat('Y-m-d', $data['date']);
       //$data['date'] = $date->format('n/d/Y');
       $out.=$data['date'].",".$data['dato']."\n";
    	//echo 
    	//$out=$out.$data['date'].",".$data['idhumedadexternas']."\n";
    }
    echo json_encode($out);
}
}
