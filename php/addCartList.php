<?php
include 'conn.php';
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');

    $sid = $_POST['sid'];
    $url = $_POST['url'];
    $title = $_POST['title'];
    $price = $_POST['price'];
    $buynum = $_POST['buynum'];
    $result = $conn->query("select * from cartlist where sid = $sid");
    if($result->fetch_assoc()){
        $sql="UPDATE  cartlist  SET  buynum = buynum + $buynum   WHERE sid = $sid ";
        $conn->query($sql);
        echo 1;
    }else{
        if($conn->query("insert cartlist values('$sid','$url','$title','$price','$buynum')")){
            echo 1;
        }else{
            echo 0;
        }
    }
    

