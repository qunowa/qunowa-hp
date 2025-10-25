document.addEventListener('DOMContentLoaded', function() {
    // --- アコーディオン機能 --- //
    const conceptLink = document.querySelector('.concept .text-link');
    const conceptDetail = document.getElementById('concept-detail');

    if (conceptLink && conceptDetail) {
        conceptLink.addEventListener('click', function(e) {
            e.preventDefault(); // リンクのデフォルトの挙動をキャンセル

            conceptDetail.classList.toggle('is-active');
            this.classList.toggle('is-active');

            if (this.classList.contains('is-active')) {
                this.innerHTML = '閉じる ∧';
            } else {
                this.innerHTML = '私たちの想いを詳しく >';
            }
        });
    }

    // --- タブ切り替え機能 --- //
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabLinks.length > 0 && tabPanes.length > 0) {
        tabLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');

                // すべてのタブとパネルからis-activeクラスを削除
                tabLinks.forEach(function(innerLink) {
                    innerLink.classList.remove('is-active');
                });
                tabPanes.forEach(function(pane) {
                    pane.classList.remove('is-active');
                });

                // クリックされたタブと対応するパネルにis-activeクラスを追加
                this.classList.add('is-active');
                document.getElementById(targetTab).classList.add('is-active');
            });
        });
    }

    // --- プレオープン予約フォームの日時処理 --- //
    const reservationForm = document.querySelector('.reservation-form');
    const datetimeInput = document.querySelector('[data-google-form-datetime]');

    if (reservationForm && datetimeInput) {
        reservationForm.addEventListener('submit', function(e) {
            // datetime-localの値を取得
            const datetimeValue = datetimeInput.value;

            if (datetimeValue) {
                const date = new Date(datetimeValue);

                // Googleフォームが期待する形式に変換して隠しフィールドにセット
                document.getElementById('datetime_year').value = date.getFullYear();
                document.getElementById('datetime_month').value = date.getMonth() + 1; // 月は0から始まるため+1
                document.getElementById('datetime_day').value = date.getDate();
                document.getElementById('datetime_hour').value = date.getHours();
                document.getElementById('datetime_minute').value = date.getMinutes();
            }
        });
    }

    // --- ハンバーガーメニュー機能 --- //
    const hamburgerButton = document.querySelector('.hamburger-menu-button');
    const headerNav = document.querySelector('.header-nav');

    if (hamburgerButton && headerNav) {
        hamburgerButton.addEventListener('click', function() {
            this.classList.toggle('is-active');
            headerNav.classList.toggle('is-active');
        });
    }
});