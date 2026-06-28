import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

/* FIREBASE */
const firebaseConfig = {
  apiKey: "AIzaSyBMwUFAsTTrjXSrXKzqMW1rN02PViQbkIw",
  authDomain: "kieuformers1023.firebaseapp.com",
  projectId: "kieuformers1023",
  storageBucket: "kieuformers1023.firebasestorage.app",
  messagingSenderId: "1007989946372",
  appId: "1:1007989946372:web:f8e5343219845bee331d51"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* EMAIL ẢO */
const createFakeEmail = (username) => {
  return `${username.toLowerCase().trim()}@kieuformers.com`;
};

window.onload = () => {

  const userInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const msg = document.getElementById('msg');

  const buttons = document.querySelectorAll('button');

  const btnLogin = buttons[0];
  const btnRegister = buttons[1];

  /* ĐĂNG KÝ */
  btnRegister.onclick = () => {

    const username = userInput.value.trim();

    if(username.length < 3){
      msg.innerText = "Tên Transformer quá ngắn!";
      return;
    }

    if(passwordInput.value.length < 6){
      msg.innerText = "Mật khẩu phải từ 6 ký tự!";
      return;
    }

    const email = createFakeEmail(username);

    msg.innerText = "Đang tạo hồ sơ chiến binh...";

    createUserWithEmailAndPassword(
      auth,
      email,
      passwordInput.value
    )
    .then(() => {

      msg.innerText = "✅ Đăng ký thành công!";

      userInput.value = "";
      passwordInput.value = "";

    })
    .catch((err) => {
      msg.innerText = "❌ " + err.message;
    });
  };

  /* ĐĂNG NHẬP */
  btnLogin.onclick = () => {

    const email = createFakeEmail(userInput.value);

    msg.innerText = "Đang nhận diện thủ lĩnh...";

    signInWithEmailAndPassword(
      auth,
      email,
      passwordInput.value
    )
    .then(() => {

      msg.innerText = "🚀 Đăng nhập thành công!";

      setTimeout(() => {
        window.location.href = "index.html";
      },1000);

    })
    .catch(() => {
      msg.innerText = "❌ Sai tên hoặc mật khẩu!";
    });
  };
};