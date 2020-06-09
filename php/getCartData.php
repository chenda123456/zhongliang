<?php
include 'conn.php';
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
//查
$data = $conn->query('select * from cartlist');
$arr = array();
for($i = 0 ; $i<$data->num_rows; $i++){
    $arr[$i] = $data->fetch_assoc();
}
echo json_encode($arr); 

$conn->close();

// console.log(data);
//         $title.html(data.title);
//         $price.html(data.price);
//         $url.text('src', data.url);
//         $number.val(data.url);
//         console.log($title.html(data.title));
//         console.log($price.html(data.price));
//         console.log($url.text('src', data.url));
//         console.log($number.val(data.url));