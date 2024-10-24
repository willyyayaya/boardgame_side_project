// 點擊右下角按鈕開啟彈出視窗
document.getElementById('newPostBtn').addEventListener('click', function() {
    document.getElementById('popupForm').classList.remove('hidden');
});

// 點擊關閉按鈕隱藏彈出視窗
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupForm').classList.add('hidden');
});

// 發表新話題表單提交後動態新增新話題
document.getElementById('newPostForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    const postContainer = document.querySelector('.posts');
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `
        <h3>${title}</h3>
        <p>作者：會員C</p>
        <p>${content}</p>
        <button class="reply-btn">回覆</button>
    `;

    postContainer.appendChild(newPost);
    document.getElementById('newPostForm').reset();
    document.getElementById('popupForm').classList.add('hidden');
});

// 顯示回覆表單
document.querySelector('.posts').addEventListener('click', function(e) {
    if (e.target.classList.contains('reply-btn')) {
        const replyForm = document.getElementById('replyForm');
        replyForm.classList.remove('hidden');
    }
});

// 回覆表單提交後隱藏
document.getElementById('replyFormContent').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('回覆成功！');
    document.getElementById('replyForm').classList.add('hidden');
});
