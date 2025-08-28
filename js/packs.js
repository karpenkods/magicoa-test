const resultWrapper = document.querySelector(".overlay");
const wheel = document.querySelector(".prize-wheel");
const wheelCursor = document.querySelector(".wheel__cursor");

function countDown(class_) {
  let timer = document.querySelector(class_);
  let a;
  let b;
  if (
    localStorage.getItem("sec" + class_) &&
    localStorage.getItem("min" + class_)
  ) {
    a = localStorage.getItem("min" + class_);
    b = localStorage.getItem("sec" + class_);
  } else
    (a = timer.getAttribute("data-minutes")),
      (b = timer.getAttribute("data-seconds"));
  const d = setInterval(function () {
    0 <= parseInt(a) &&
      -1 !== parseInt(b) &&
      (0 === parseInt(b) && 0 !== parseInt(a) && (a--, (b = 59)),
      (timer.innerText = (10 > a ? "0" + a : a) + " " + (10 > b ? "0" + b : b)),
      0 === parseInt(b) &&
        0 === parseInt(a) &&
        (a--, (b = 0), (timer.innerText = "00 00"), clearInterval(d)),
      b--,
      localStorage.setItem("sec" + class_, b),
      localStorage.setItem("min" + class_, a));
    if (a === 0 && b === 0) clearForm();
  }, 1e3);
}

const clearForm = () => {
  const form = document.getElementById("sendForm");
  $(".wheel__wrapper").show();
  $(".order").css("display", "none");
  form.reset();
  localStorage.clear();
  location.reload();
  wheel.classList.remove("spin");
};

$(".btn--submit").click(function () {
  countDown(".time");
  $(".order").addClass("shown__");
  localStorage.setItem("shown__", "1");
});

async function sendDataToTelegram(formData) {
  const botToken = "6033735177:AAG-iJbMkVxbz-kP0dXRuYNk_ReW6x4lYs4";
  const chatId = "509040712";
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const message = `Новый лид:
    <b>Имя:</b> ${formData.name || "не указано"}
    <b>Телефон:</b> ${formData.phone || "не указано"}`;

  const params = {
    chat_id: chatId,
    text: message,
    parse_mode: "HTML",
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  return await response.json();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
  };

  sendDataToTelegram(formData).then((result) => {
    if (result.ok) clearForm();
    else alert("Ошибка сети, поробуйте позже");
  });
});

if (parseInt(localStorage.getItem("shown__"))) {
  countDown(".time");
  $(".order").css("display", "block");
  $(".wheel__wrapper").hide();
}

wheelCursor.addEventListener("click", (e) => {
  e.preventDefault();
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("spin");
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);

    wheel.classList.add("rotated");
  }
});

$(".close-popup, .btn-popup").click(function (e) {
  e.preventDefault();
  $(".wheel__wrapper").slideUp();
  $(".order").slideDown();
  $(".overlay").fadeOut();
});

$(".btn-popup").click(function () {
  localStorage.setItem("remember", "1"),
    $(".prize").slideUp(),
    $(".order").slideDown(),
    $(".bottom-link").text("Commander à 50% de réduction"),
    $(".order").addClass("shown__"),
    localStorage.setItem("shown__", "1");
});

localStorage.getItem("remember") &&
  ($(".prize").css("display", "none"),
  $(".order").css("display", "block"),
  $(".bottom-link").text("Commander à 50% de réduction"));
  
