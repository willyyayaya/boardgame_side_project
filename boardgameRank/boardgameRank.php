<?php
// 連接資料庫
$host = "localhost";
$dbname = "boardgameHelper";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $gameId = $_GET['gameId'];

    $stmt = $conn->prepare("SELECT title, image, description FROM boardgames WHERE bg_id = :gameId");
    $stmt->bindParam(':gameId', $gameId);
    $stmt->execute();

    $game = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($game);

} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
