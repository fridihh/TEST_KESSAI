const mbuttons = document.querySelectorAll(".t-box p");
const mains = document.querySelectorAll("main");

mbuttons.forEach(btn => {
    btn.addEventListener("click", () => {
      mains.forEach(m => m.classList.add("hidden"));
      mbuttons.forEach(b => b.classList.remove("active"));
      const targetId = btn.dataset.target; // ← data-target の値を取得
      document.getElementById(targetId).classList.remove("hidden");
      btn.classList.add("active");
    });
});

const sbuttons = document.querySelectorAll("nav ul li button");
const sections = document.querySelectorAll("section > div > section");

sbuttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // 全部非表示
    sections.forEach(sec => sec.classList.add("hidden"));
    sbuttons.forEach(b => b.classList.remove("active"));

    // クリックされたボタンのターゲットを表示
    const targetId = btn.dataset.target;
    document.getElementById(targetId).classList.remove("hidden");
    btn.classList.add("active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek'
    },
    locale: 'ja',
    // その他の設定（イベント、言語など）を追加できます
    events: [
      {
        title: '予定日',
        start: '2025-09-04'
      }
    ]
  });
  calendar.render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    document.addEventListener("keydown", function escCombo(e) {
      if (e.key === "Escape") {
        window.location.href = "index.html";
      }
      // 一度使ったらリスナーを消しておく（誤動作防止）
      document.removeEventListener("keydown", escCombo);
    });
  }
});