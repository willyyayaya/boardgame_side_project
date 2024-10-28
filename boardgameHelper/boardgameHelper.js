
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
        if (selectedCategories < 1) {
            alert("請至少選擇一個桌遊種類");
            return false;  // 阻止表單提交
        }

        // 最少選一個，最多選兩個
        if (selectedMechanics < 1) {
            alert("請至少選擇一個桌遊機制");
            return false;  // 阻止表單提交
        }

        // 顯示結果到結果區域
        formResult.innerHTML = `
            <p><strong>感興趣的種類：</strong> ${selectedCategories.join(', ')}</p>
            <p><strong>感興趣的機制：</strong> ${selectedMechanics.join(', ')}</p>
            <p><strong>遊玩人數：</strong> ${selectedPlayers}</p>
            <p><strong>遊戲時間：</strong> ${selectedDuration}</p>
            <p><strong>難度等級：</strong> ${selectedDifficulty}</p>
            <p><strong>小幫手推薦你玩：</strong> </p>
        `;

        // 移除hidden類並添加visible類以啟動動畫
        resultContainer.classList.remove('hidden');
        resultContainer.classList.add('visible');
    });
});

