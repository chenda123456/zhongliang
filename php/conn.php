<?php
//连接接服务器
define('HOST', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBNAME', 'zhonglianng');
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME);
if ($conn->connect_error) {
    die('数据库链接失败' . $conn->connect_error);
};
$conn->query('SET NAMES UTF8');


