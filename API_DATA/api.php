<?php
$con=mysqli_connect("localhost","root","","API_DATA");
$response=array();
if($con){
    $sql="select * from data";
    $result=mysqli_query($con,$sql);
    if($result){
        header('Content-type:JSON');
        $i=0;
        while($row=mysqli_fetch_assoc($result))
        {
            $response[$i]['id']=$row['id'];
            $response[$i]['name']=$row['name'];
            $response[$i]['age']=$row['age'];
            $reponse[$i]['email']=$row['email'];

            $i++;
        }
        echo json_encode($response,JSON_PRETTY_PRINT);
    }
}else
{
    echo "Database connection failed";
}
?>