<?php
include 'conn.php';
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
if(isset($_GET['sid'])){
    $sid = $_GET['sid'];
    //查
    $data = $conn->query("select * from taobaogoods where sid =$sid ");
    $arr = array();
    for($i = 0 ; $i<$data->num_rows; $i++){
        $arr[$i] = $data->fetch_assoc();
    }
    echo json_encode($arr); 
}

$conn->close();