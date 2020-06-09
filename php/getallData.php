<?php
include 'conn.php';
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
//查
$data = $conn->query('select * from taobaogoods');
$arr = array();
for($i = 0 ; $i<$data->num_rows; $i++){
    $arr[$i] = $data->fetch_assoc();
}
echo json_encode($arr); 

$conn->close();