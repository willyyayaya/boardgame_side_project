document.addEventListener("DOMContentLoaded", function() {
    // 模擬從資料庫中獲取的遊戲數據
    const gameData = {
        bg_name: "水瓶座, AQUARIUS",
        bg_players: "2-5",
        bg_mechanic: "Pattern Building, Tile Placement",
        bg_category: "Abstract Strategy, Card Game, Family games, Children's games",
        bg_duration: "短於30分鐘",
        bg_difficulty: "簡單",
        bg_detail: "如何瞞過對手，讓手中任務牌指定的元素七張相互連結？孩子們喜歡顏色豐富的設計、輕快的節奏及尋找相似配對的遊戲策略；大人們則酷愛遊戲過程中激烈的競爭。這是一款老少咸宜的家庭紙牌遊戲，發完牌後悄悄計劃如何移動你的元素牌，千萬別以為自己快贏了⋯⋯恐怕任務牌就要被調包囉！",
        bg_pic: "https://cdn.prod.website-files.com/575714cc825e8dbc6c83b98a/5ab8f0fedc7441512652764e_Aquarius_Box_3D-p-800.jpeg",
        bg_vote: 0,
        bg_teach: "https://www.youtube.com/embed/BOiNurgWZo0?si=QXKGfRNOt5MrxZD9"
    };

    // 動態填充數據
    document.getElementById("bg_name").textContent = gameData.bg_name;
    document.getElementById("bg_players").textContent = gameData.bg_players;
    document.getElementById("bg_mechanic").textContent = gameData.bg_mechanic;
    document.getElementById("bg_category").textContent = gameData.bg_category;
    document.getElementById("bg_duration").textContent = gameData.bg_duration;
    document.getElementById("bg_difficulty").textContent = gameData.bg_difficulty;
    document.getElementById("bg_detail").textContent = gameData.bg_detail;
    document.getElementById("bg_pic").src = gameData.bg_pic;
    document.getElementById("bg_pic").alt = gameData.bg_name;
    document.getElementById("bg_vote").textContent = gameData.bg_vote;
    document.getElementById("bg_teach").src = gameData.bg_teach;

    // 設置投票按鈕的點擊事件
    document.getElementById("voteButton").addEventListener("click", function() {
        gameData.bg_vote += 1; // 增加投票數
        document.getElementById("bg_vote").textContent = gameData.bg_vote; // 更新顯示
    });
});
