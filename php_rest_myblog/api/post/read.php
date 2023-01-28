<?php
header('Acess-Control-Allow-Origin: ');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Post.php';

//Instantiate DB & connect
$database = new Database();
$db=$database->connect();

//Instantiate blog post objet
$post = new Post($db);
// Blog post quary
$result = $post->read();
//Get row count
$num = $result->rowCount();
//Check if any posts
if($num>0)
{
    $posts_arr = array();
    $posts_arr['data'] = array();
    while($row=$result->fetch(PDO::FETCH_Assoc))
    {
        extract($row);
        $post_item = array(
            'id'=>$id,
            'title'=>$title,
            'body' =>html_entity_decode($body),
            'author'=>$autor,
            'category_id'=>$category_id,
            'category_name'=>$category_name
        );
        //push to data
        array_push($posts_arr['data'],$post_item);
    }
    //Turn to Json
    echo json_encode($posts_arr);
}else{
    //no posts
    echo json_encode(
        array('message'=>'No Posts Found')
    );
}

?>
