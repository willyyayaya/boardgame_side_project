<?php
// 建立 MySQL 的資料庫連接 
$link = @mysqli_connect( 
    'localhost',   // MySQL 主機名稱 
    'root',        // 使用者名稱 
    '',            // 密碼 
    'boardgames'   // 預設使用的資料庫名稱 
);

if ( !$link ) {
    echo "MySQL 資料庫連接錯誤!<br/>";
    exit();
} else {
    echo "MySQL 資料庫連接成功!<br/>";
    
    // 設定查詢語句
    $sql = "SELECT * FROM boardgames";

    // 執行查詢語句
    $result = mysqli_query($link, $sql);

    // 檢查查詢是否成功
    if ($result) {
        // 使用 while 迴圈來逐行顯示查詢到的資料
        while ($row = mysqli_fetch_assoc($result)) {
            echo "ID: " . $row['bg_id'] . "<br/>";
            echo "名稱: " . $row['bg_name'] . "<br/>";
            echo "人數範圍: " . $row['bg_players'] . "<br/>";
            echo "分類: " . $row['bg_category'] . "<br/>";
            echo "機制: " . $row['bg_mechanic'] . "<br/>";
            echo "難度: " . $row['bg_difficulty'] . "<br/>";
            echo "遊玩時間: " . $row['bg_duration'] . "<br/>";
            echo "介紹: " . $row['bg_detail'] . "<br/>";
            echo "圖片: " . $row['bg_pic'] . "<br/>";
            echo "<hr/>";
        }
    } else {
        echo "查詢失敗：" . mysqli_error($link);
    }

    // 關閉查詢結果
    mysqli_free_result($result);

    // 關閉資料庫連接
    mysqli_close($link);  
}
?>
