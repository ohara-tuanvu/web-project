/* メニューJSONの読み込み */
let foodData = [];

console.log("メニュー読み込み開始");

fetch("data/menu.json")
    .then(res => {
        console.log("JSONレスポンス取得");
        return res.json();
    })
    .then(data => {
        foodData = data;
        console.log("メニューデータ読み込み完了:", foodData);
        renderMenu(foodData);
    })
    .catch(err => console.error("メニュー読み込みエラー:", err));

/* メニュー一覧の表示処理 */
function renderMenu(list) {
    console.log("メニュー描画開始:", list);

    const container = document.getElementById("menuList");

    // 該当メニューなしの場合
    if (list.length === 0) {
        console.warn("該当メニューなし");
        container.innerHTML = `
            <div class="no-result">
                該当するメニューが見つかりませんでした。
            </div>
        `;
        return;
    }

    // メニューカード生成
    container.innerHTML = list.map(item => `
        <div class="card">
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p class="price">${item.price.toLocaleString()}円</p>
            <p class="desc">${item.desc}</p>
        </div>
    `).join("");

    console.log("メニュー描画完了");
}

/* カテゴリー別フィルター */
function filterCategory(cat) {
    console.log("カテゴリー選択:", cat);

    const filtered = foodData.filter(item => item.category === cat);

    console.log("フィルター結果:", filtered);

    renderMenu(filtered);
}

/* 全メニューに戻す処理 */
function resetMenu() {
    console.log("メニューリセット実行");
    renderMenu(foodData);
}

/* タブのアクティブ切り替え */
const tabButtons = document.querySelectorAll(".menu-tabs button");

console.log("タブボタン数:", tabButtons.length);

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("タブクリック:", btn.textContent);

        tabButtons.forEach(b => b.classList.remove("active-tab"));
        btn.classList.add("active-tab");
    });
});
