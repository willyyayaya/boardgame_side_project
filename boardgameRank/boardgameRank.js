// 假設我們有一個包含桌遊資料的對象
const gameData = {
    5: {
        title: "怒海求生心機",
        image: "img/nuhai.jpg",
        description: "怒海求生是一款充滿競爭的桌遊...",
    },
    6: {
        title: "種豆心機",
        image: "img/zhongdou.jpg",
        description: "種豆心機是一款策略性十足的經典桌遊...",
    },
    7: {
        title: "東京之王心機",
        image: "img/tokyo.jpg",
        description: "東京之王是一款充滿混亂的城市冒險遊戲...",
    },
    8: {
        title: "我是大老闆!心機",
        image: "img/boss.jpg",
        description: "我是大老闆是一款充滿商業鬥爭的策略桌遊...",
    },
    9: {
        title: "逃離亞特蘭迪斯心機",
        image: "img/atlantis.jpg",
        description: "逃離亞特蘭迪斯是一款經典的合作和競爭桌遊...",
    }
};

// 當點擊桌遊項目時顯示對應的資料
document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('click', function() {
        const gameId = this.getAttribute('data-game-id');
        const gameInfo = gameData[gameId];

        if (gameInfo) {
            document.getElementById('game-title').textContent = gameInfo.title;
            document.getElementById('game-image').src = gameInfo.image;
            document.getElementById('game-description').textContent = gameInfo.description;

            document.getElementById('gameModal').style.display = 'block';
        }
    });
});

// 關閉彈窗
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('gameModal').style.display = 'none';
});


function fetchGameDetails(gameId) {
    fetch(`getGameDetails.php?gameId=${gameId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('game-title').textContent = data.title;
            document.getElementById('game-image').src = data.image;
            document.getElementById('game-description').textContent = data.description;
            document.getElementById('gameModal').style.display = 'block';
        });
}

// 修改事件綁定
document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('click', function() {
        const gameId = this.getAttribute('data-game-id');
        fetchGameDetails(gameId); // 動態加載資料
    });
});