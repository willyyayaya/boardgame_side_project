<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "boardgames";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("連接失敗: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);
if (!isset($data['bg_name'])) {
    echo json_encode(["error" => "未提供 bg_name"]);
    exit();
}

$bg_name = $data['bg_name'];

$sql = "UPDATE boardgames SET bg_vote = bg_vote + 1 WHERE bg_name = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $bg_name);
$stmt->execute();

$sql = "SELECT bg_vote FROM boardgames WHERE bg_name = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $bg_name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(["error" => "更新投票失敗"]);
}

$stmt->close();
$conn->close();
?>
