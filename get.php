<?php
if($_GET){
$number=$_GET["number"];
if($number==0){
	echo"$number is neither odd nor even";
}
elseif($number%2==0){
	echo"$number is an even number";
}else{
	echo"$number is odd number";
}
}
?>
