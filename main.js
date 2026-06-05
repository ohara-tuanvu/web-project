/* ===============================
   全体スクリプト（GLOBAL）
   サイト共通で使用
=============================== */

document.addEventListener("DOMContentLoaded", function () {

    // 読み込み確認ログ
    console.log("main.js 読み込み完了");

    /* ===============================
       トップへ戻るボタン
    =============================== */
    const scrollBtn = document.querySelector(".scroll-top");

    if (scrollBtn) {
        console.log("トップへ戻るボタン検出");

        window.addEventListener("scroll", () => {
            const visible = window.scrollY > 300;
            scrollBtn.style.display = visible ? "block" : "none";

            console.log("スクロール量:", window.scrollY, "→ ボタン表示:", visible);
        });

        scrollBtn.addEventListener("click", () => {
            console.log("トップへ戻るボタンクリック");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    } else {
        console.warn("トップへ戻るボタンが見つかりません");
    }

    /* ===============================
       ナビメニューのアクティブ表示
    =============================== */
    const currentPage = window.location.pathname.split("/").pop();
    console.log("現在のページ:", currentPage);

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            console.log("アクティブ設定:", href);
            link.classList.add("active");
        }
    });

    /* ===============================
       ポップアップ閉じる処理（共通）
    =============================== */
    function closePopup() {
        const popup = document.getElementById("popup");

        if (popup) {
            console.log("ポップアップ非表示");
            popup.style.display = "none";
        } else {
            console.warn("popup 要素が見つかりません");
        }
    }

    /* ===============================
       モバイルメニュー開閉（FIXED）
    =============================== */
    const toggleBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (toggleBtn && navMenu) {
        console.log("モバイルメニュー初期化");

        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            console.log("メニュー状態:", navMenu.classList.contains("active") ? "開く" : "閉じる");
        });
    } else {
        console.warn("menu-toggle または nav ul が見つかりません");
    }

});
