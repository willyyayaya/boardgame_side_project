
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('gameForm');
//     const resultContainer = document.getElementById('resultContainer');
//     const formResult = document.getElementById('formResult');

//     // 限制選擇最多兩個種類和機制
//     const categoryCheckboxes = form.querySelectorAll('input[name="category"]');
//     const mechanicCheckboxes = form.querySelectorAll('input[name="mechanic"]');

//     function handleCheckboxLimit(checkboxes, limit) {
//         checkboxes.forEach(checkbox => {
//             checkbox.addEventListener('change', () => {
//                 const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
//                 if (checkedCount > limit) {
//                     checkbox.checked = false;
//                 }
//             });
//         });
//     }

//     // 選擇的上限
//     handleCheckboxLimit(categoryCheckboxes, 2);
//     handleCheckboxLimit(mechanicCheckboxes, 2);

//     // 表單提交事件
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         // 收集選擇的種類、機制、人數、遊戲時間和難度等級
//         const selectedCategories = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
//         const selectedMechanics = Array.from(mechanicCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
//         const selectedPlayers = form.querySelector('input[name="players"]:checked')?.value || '未選擇';
//         const selectedDuration = form.querySelector('input[name="duration"]:checked')?.value || '未選擇';
//         const selectedDifficulty = form.querySelector('input[name="difficulty"]:checked')?.value || '未選擇';

//         // 最少選一個，最多選兩個
//         if (selectedCategories < 1) {
//             alert("請至少選擇一個桌遊種類");
//             return false;  // 阻止表單提交
//         }

//         // 最少選一個，最多選兩個
//         if (selectedMechanics < 1) {
//             alert("請至少選擇一個桌遊機制");
//             return false;  // 阻止表單提交
//         }

//         // 顯示結果到結果區域
//         formResult.innerHTML = `
//             <p><strong>感興趣的種類：</strong> ${selectedCategories.join(', ')}</p>
//             <p><strong>感興趣的機制：</strong> ${selectedMechanics.join(', ')}</p>
//             <p><strong>遊玩人數：</strong> ${selectedPlayers}</p>
//             <p><strong>遊戲時間：</strong> ${selectedDuration}</p>
//             <p><strong>難度等級：</strong> ${selectedDifficulty}</p>
//             <p><strong>小幫手推薦你玩：</strong> ${searchResults}</p>
//         `;

//         // 移除hidden類並添加visible類以啟動動畫
//         resultContainer.classList.remove('hidden');
//         resultContainer.classList.add('visible');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gameForm');
    const resultContainer = document.getElementById('resultContainer');
    const formResult = document.getElementById('formResult');

    // 限制選擇最多兩個種類和機制
    const categoryCheckboxes = form.querySelectorAll('input[name="category"]');
    const mechanicCheckboxes = form.querySelectorAll('input[name="mechanic"]');

    function handleCheckboxLimit(checkboxes, limit) {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
                if (checkedCount > limit) {
                    checkbox.checked = false;
                }
            });
        });
    }

    // 選擇的上限
    handleCheckboxLimit(categoryCheckboxes, 2);
    handleCheckboxLimit(mechanicCheckboxes, 2);

    // 表單提交事件
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 收集選擇的種類、機制、人數、遊戲時間和難度等級
        const selectedCategories = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
        const selectedMechanics = Array.from(mechanicCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
        const selectedPlayers = form.querySelector('input[name="players"]:checked')?.value || '未選擇';
        const selectedDuration = form.querySelector('input[name="duration"]:checked')?.value || '未選擇';
        const selectedDifficulty = form.querySelector('input[name="difficulty"]:checked')?.value || '未選擇';

        // 最少選一個，最多選兩個
        if (selectedCategories.length < 1) {
            alert("請至少選擇一個桌遊種類");
            return false;  // 阻止表單提交
        }

        if (selectedMechanics.length < 1) {
            alert("請至少選擇一個桌遊機制");
            return false;  // 阻止表單提交
        }

        // 建立推薦遊戲的物件
        const gameRecommendations = {
            "Party Games": { name: "Geistesblitz", img: "../5ab8f892326fa9b6a6e9faf5_Geistesblitz_Box_3D_CN-p-800.jpeg" },
            "Strategy Games": { name: "Istanbul", img: "../5ab902618d60353947e92b02_Istanbul_Box_3D-p-800.jpeg" },
            "Thematic Games": { name: "CATAN", img: "../60011bc96c6297c92f1f1f7a_CATAN_Box_2021-p-800.jpeg" },
            "Abstract Games": { name: "Aquarius", img: "../5ab8f0fedc7441512652764e_Aquarius_Box_3D-p-800.jpeg" },
            "Customizable Games": { name: "BANG", img: "../5ab8f162f866da4686167d1b_BANG_BOX_3D_NEW-p-800.jpeg" },
            "Children’s Games": { name: "Carcassonne", img: "../5ab8f2b3f866da7ae3168135_Carcassonne Bigbox 2014_BOX_3D-p-800.jpeg" },
            "Family Games": { name: "TAKENOKO", img: "../5ab91470326fa9162bea2e81_TAKENOKO_box_3D_2015-p-800.jpeg" },
            "War Games": { name: "PowerGrid", img: "../5f61d537ad9446ce1cec6ab5_PowerGrid_Box_2020-p-800.jpeg" }
        };

        // 根據選擇的種類推薦桌遊
        let searchResults = '';
        selectedCategories.forEach(category => {
            if (gameRecommendations[category]) {
                searchResults += `<div>
                    <p><strong>${gameRecommendations[category].name}</strong></p>
                    <img src="${gameRecommendations[category].img}" alt="${gameRecommendations[category].name}">
                </div>`;
            }
        });

        // 顯示結果到結果區域
        formResult.innerHTML = `
            <p><strong>感興趣的種類：</strong> ${selectedCategories.join(', ')}</p>
            <p><strong>感興趣的機制：</strong> ${selectedMechanics.join(', ')}</p>
            <p><strong>遊玩人數：</strong> ${selectedPlayers}</p>
            <p><strong>遊戲時間：</strong> ${selectedDuration}</p>
            <p><strong>難度等級：</strong> ${selectedDifficulty}</p>
            <p><strong>小幫手推薦你玩：</strong>${searchResults}</p>
            
        `;

        // 顯示結果
        resultContainer.classList.remove('hidden');
        resultContainer.classList.add('visible');
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

