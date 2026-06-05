// EmailJS の初期化
(function() {
    console.log("EmailJS 初期化開始");
    emailjs.init("Ek1iVQ-WtEq1g0hRM"); // Public Key
    console.log("EmailJS 初期化完了");
})();

function sendContact() {
    console.log("送信処理開始");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value.trim();

    // 入力値ログ
    console.log("入力チェック:", { name, email, phone, type, message });

    // 必須項目のチェック
    if (!name || !email || !message) {
        console.warn("必須項目が未入力");
        alert("未入力の項目があります。");
        return;
    }

    const params = { name, email, phone, type, message };
    console.log("送信データ準備完了:", params);

    // EmailJS 送信
    console.log("EmailJS 送信開始...");
    emailjs.send("service_kcpbgkm", "template_2lf6sr9", params)
        .then(function(response) {
            console.log("送信成功:", response);
            openPopup();
            resetForm();
        })
        .catch(function(error) {
            console.error("送信エラー:", error);
            alert("送信に失敗しました。");
        });
}

// フォームのリセット
function resetForm() {
    console.log("フォームリセット開始");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("type").value = "";
    document.getElementById("message").value = "";

    console.log("フォームリセット完了");
}

// ポップアップ表示
function openPopup() {
    console.log("ポップアップ表示");
    document.getElementById("popup").style.display = "flex";
}

// ポップアップ非表示
function closePopup() {
    console.log("ポップアップ非表示");
    document.getElementById("popup").style.display = "none";
}
