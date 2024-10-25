function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        copyright.style.margin = "200px 0px 0px 0px";
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}

function show_hide() {
    var login = document.getElementById("container1"); // 登入表單容器
    var signup = document.getElementById("container2"); // 註冊表單容器
  
    // 切換顯示登入或註冊表單
    if (login.style.display === "none") {
        login.style.display = "block";  // 顯示登入表單
        signup.style.display = "none";  // 隱藏註冊表單
    } else {
        login.style.display = "none";   // 隱藏登入表單
        signup.style.display = "block"; // 顯示註冊表單
    }
}


// 檢查註冊時密碼是否一致
document.querySelector('form[action="register.php"]').addEventListener('submit', function(e) {
    const password = document.getElementById('password2').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert("密碼與確認密碼不一致，請重新輸入！");
        e.preventDefault();  // 阻止表單提交
    }
});