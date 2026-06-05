/* 日付入力（Flatpickr）設定 */
console.log("Flatpickr 初期化開始");
flatpickr("#datetime", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    locale: "ja"
});
console.log("Flatpickr 初期化完了");

/* EmailJS の初期化 */
(function() {
    console.log("EmailJS 初期化開始");
    emailjs.init("Ek1iVQ-WtEq1g0hRM");
    console.log("EmailJS 初期化完了");
})();

/* 予約データ送信処理 */
function sendReservation() {
    console.log("予約送信処理開始");

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const people = document.getElementById("people").value.trim();
    const datetime = document.getElementById("datetime").value;
    const message = document.getElementById("message").value.trim();

    console.log("入力値:", { name, phone, people, datetime, message });

    /* 必須項目チェック */
    if (!name || !phone || !people || !datetime) {
        console.warn("必須項目が未入力");
        alert("未入力の項目があります。");
        return;
    }

    /* 送信パラメータ */
    const params = {
        name: name,
        phone: phone,
        people: people,
        datetime: datetime,
        message: message
    };

    console.log("送信データ準備完了:", params);
    console.log("EmailJS 送信開始...");

    /* EmailJS 送信 */
    emailjs.send("service_kcpbgkm", "template_jj47vyd", params)
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

/* フォームリセット */
function resetForm() {
    console.log("フォームリセット開始");

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("people").value = "";
    document.getElementById("datetime").value = "";
    document.getElementById("message").value = "";

    console.log("フォームリセット完了");
}

/* ポップアップ表示 */
function openPopup() {
    console.log("ポップアップ表示");
    document.getElementById("popup").style.display = "flex";
}

/* ポップアップ非表示 */
function closePopup() {
    console.log("ポップアップ非表示");
    document.getElementById("popup").style.display = "none";
}
