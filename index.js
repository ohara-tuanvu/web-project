// バナー画像リスト
console.log("バナー画像リスト読み込み");
const indexBanners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg"
];

// バナー要素の取得
console.log("バナー要素取得");
const banner = document.getElementById("indexBanner");

// スライド要素の生成（最後に1枚目を複製）
console.log("スライドHTML生成開始");
banner.innerHTML = `
    <div id="bannerTrack">
        ${indexBanners.map(src => `
            <div class="banner-slide" style="background-image: url('${src}')"></div>
        `).join('')}
        <div class="banner-slide" style="background-image: url('${indexBanners[0]}')"></div>
    </div>
`;
console.log("スライドHTML生成完了");

// トラック要素とスライド管理
const track = document.getElementById("bannerTrack");
let current = 0;
const totalSlides = indexBanners.length;

console.log("スライダー初期化:", { totalSlides });

// スライダー自動再生処理
function slideBanner() {
    current++;
    console.log("スライド移動:", current);

    track.style.transition = "transform 0.8s ease";
    track.style.transform = `translateX(-${current * 100}%)`;

    // 最後の複製スライドに到達したらリセット
    if (current === totalSlides) {
        console.log("最後のスライドに到達 → リセット準備");

        setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            current = 0;

            console.log("スライダーリセット完了");
        }, 800);
    }
}

// 一定間隔でスライダー実行
console.log("スライダー自動再生開始");
setInterval(slideBanner, 3000);

// スクロールアニメーション対象の取得
console.log("スクロールアニメーション対象取得");
const reveals = document.querySelectorAll('.reveal');

// スクロール時の表示処理
function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            if (!el.classList.contains("active")) {
                console.log("アニメーション発火:", el);
            }
            el.classList.add('active');
        }
    });
}

// スクロールイベント登録
console.log("スクロールイベント登録");
window.addEventListener('scroll', revealOnScroll);

// 初回チェック
console.log("初回アニメーションチェック");
revealOnScroll();
