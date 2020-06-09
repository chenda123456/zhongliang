<?php
include 'conn.php';
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');


    $sid = $_GET['sid'];
    $sql="DELETE FROM cartlist WHERE sid=$sid";
    
    if($conn->query($sql)){
        echo '删除成功';
    }else{
        echo '删除失败';
    }
