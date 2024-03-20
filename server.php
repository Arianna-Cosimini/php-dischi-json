<?php




$diskList = file_get_contents('./disk-list.json');

$disks = json_decode($diskList);



header('Content-Type: application/json');


echo json_encode($disks) ;
?>

