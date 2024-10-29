// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//   // 取得視窗高度與中間位置
//   const windowHeight = window.innerHeight;
//   const middleOfWindow = windowHeight / 2;

//   // 獲取元素的位置信息
//   const header1 = document.getElementById("contentHeader1");
//   const header2 = document.getElementById("contentHeader2");
//   const header3 = document.getElementById("contentHeader3");

//   changeFontSize(header1, middleOfWindow);
//   changeFontSize(header2, middleOfWindow);
//   changeFontSize(header3, middleOfWindow);
// }

// function changeFontSize(element, middleOfWindow) {
//   // 取得元素的位置
//   const rect = element.getBoundingClientRect();
//   const elementMiddle = rect.top + rect.height / 2;

//   // 檢查元素的中間位置與視窗中間點的相對位置
//   if (elementMiddle > middleOfWindow) {
//     // 如果元素位於視窗中間下方，字體變大
//     element.style.fontSize = "50px";
//   } else {
//     // 如果元素位於視窗中間上方，字體變小
//     element.style.fontSize = "30px";
//   }
// }


document.addEventListener('DOMContentLoaded', function() {
  // 確保 DOM 加載完成後才執行綁定事件
  const left = document.querySelector('.left');
  const middle = document.querySelector('.middle');
  const right = document.querySelector('.right');

  const header1 = document.getElementById("contentHeader1");
  const header2 = document.getElementById("contentHeader2");
  const header3 = document.getElementById("contentHeader3");

  left.addEventListener('mouseenter', function() {
      header1.style.fontSize = "60px";
  });
  left.addEventListener('mouseleave', function() {
      header1.style.fontSize = "50px";
  });

  middle.addEventListener('mouseenter', function() {
      header2.style.fontSize = "60px";
  });
  middle.addEventListener('mouseleave', function() {
      header2.style.fontSize = "50px";
  });

  right.addEventListener('mouseenter', function() {
      header3.style.fontSize = "60px";
  });
  right.addEventListener('mouseleave', function() {
      header3.style.fontSize = "50px";
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