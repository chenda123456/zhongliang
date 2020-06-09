<?php
include 'conn.php';
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
    $buynum = $_GET['buynum'];
    $sid = $_GET['sid'];
    $sql="UPDATE  cartlist  SET  buynum = $buynum  WHERE sid = $sid ";
    if($conn->query($sql)){
        echo '修改成功';
    }else{
        echo '修改失败';
    }

