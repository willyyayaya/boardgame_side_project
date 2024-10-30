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
    `; // 先用假資料

    postContainer.appendChild(newPost);
    document.getElementById('newPostForm').reset();
    document.getElementById('popupForm').classList.add('hidden');
});

// // 顯示回覆表單
// document.querySelector('.posts').addEventListener('click', function(e) {
//     if (e.target.classList.contains('reply-btn')) {
//         const replyForm = document.getElementById('replyForm');
//         replyForm.classList.remove('hidden');
//     }
// });

// // 回覆表單提交後隱藏
// document.getElementById('replyFormContent').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('回覆成功！');
//     document.getElementById('replyForm').classList.add('hidden');
//     newPost.classList.add('post');
//     newPost.innerHTML = `
//         <h3>${title}</h3>
//         <p>作者：會員C</p>
//         <p>${content}</p>
//         <button class="reply-btn">回覆</button>
//     `; // 先用假資料
// });

document.addEventListener('DOMContentLoaded', function () {
    const replyForm = document.getElementById('replyForm');
    const replyFormContent = document.getElementById('replyFormContent');
    let currentPost; // 用於儲存當前回覆的文章

    // 點擊 "回覆" 按鈕顯示回覆表單
    document.querySelectorAll('.reply-btn').forEach(button => {
        button.addEventListener('click', function () {
            currentPost = this.closest('.post'); // 獲取當前點擊的文章
            replyForm.classList.remove('hidden'); // 顯示回覆表單
        });
    });

    // 提交回覆
    replyFormContent.addEventListener('submit', function (e) {
        e.preventDefault();

        // 獲取回覆內容
        const replyContent = document.getElementById('replyContent').value;
        if (!replyContent) return; // 檢查是否有輸入內容

        // 動態新增回覆到當前文章下方
        const replyHTML = `
            <div class="reply">
                <p><strong>作者：會員C</strong></p>
                <p>${replyContent}</p>
            </div>
        `;

        // 將回覆內容插入到 .replies 容器中
        currentPost.querySelector('.replies').insertAdjacentHTML('beforeend', replyHTML);

        // 清空回覆內容並隱藏回覆表單
        document.getElementById('replyContent').value = '';
        replyForm.classList.add('hidden');
        alert('回覆成功！');
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();

        if (scrollPosition > (documentHeight - windowHeight) / 2) {
            $(".goTop").fadeIn();
        } else {
            $(".goTop").fadeOut();
        }
    });

    $(".jq-goTop").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});
