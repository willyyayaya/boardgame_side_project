<?php
// 設置 MySQL 資料庫連接
$servername = "localhost";
$username = "root"; // 資料庫使用者名稱
$password = ""; // 資料庫密碼
$dbname = "boardgames"; // 資料庫名稱

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("連接失敗: " . $conn->connect_error);
}

// 查詢特定遊戲資料（例如特定ID或隨機選擇的遊戲）
$sql = "SELECT * FROM boardgames WHERE bg_name LIKE '%水瓶座%'"; // 替換為特定遊戲條件
$result = $conn->query($sql);

// 取得資料並輸出為 JSON 格式
if ($result->num_rows > 0) {
    $gameData = $result->fetch_assoc();
    echo json_encode($gameData);
} else {
    echo json_encode(["error" => "查無資料"]);
}

$conn->close();
?>
