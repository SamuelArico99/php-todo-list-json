<?php

$toDoList = file_get_contents('./database.json');
$toDoListDecoded = json_decode($toDoList, true);

$newTask = [
    'taskName' => $_POST['task']['taskName'],
    'done' => false
];

$toDoListDecoded[] = $newTask;

$todoListEncoded = json_encode($toDoListDecoded);

file_put_contents('./database.json', $todoListEncoded);

header('Content-Type: application/json');

echo $todoListEncoded;
