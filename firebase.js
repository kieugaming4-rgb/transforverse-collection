// 1. Import các hàm cần thiết từ Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// 2. Cấu hình Firebase của dự án kieuformers1023
const firebaseConfig = {
  apiKey: "AIzaSyBMwUFAsTTrjXSrXKzqMW1rN02PViQbkIw",
  authDomain: "kieuformers1023.firebaseapp.com",
  projectId: "kieuformers1023",
  storageBucket: "kieuformers1023.firebasestorage.app",
  messagingSenderId: "1007989946372",
  appId: "1:1007989946372:web:f8e5343219845bee331d51",
  measurementId: "G-NJMLNYF6MP"
};

// 3. Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// 4. Lấy các phần tử giao diện (Hãy đảm bảo Class trong HTML khớp với ở đây)
const btnLogin = document.querySelector('.btn-login'); 
const btnRegister = document.querySelector('.btn-register');
const userInput = document.querySelector('input[type="text"]'); 
const passwordInput = document.querySelector('input[type="password"]');

// Hàm biến Username thành Email ảo để Firebase hiểu được
const createFakeEmail = (username) => {
  return `${username.toLowerCase().trim()}@kieuformers.com`;
};

// 5. Xử lý ĐĂNG KÝ
if (btnRegister) {
    btnRegister.addEventListener('click', (e) => {
        e.preventDefault();
        const username = userInput.value;
        const password = passwordInput.value;

        if (!username || !password) {
            alert("Đừng để trống tên hay mật khẩu, chiến binh!");
            return;
        }

        const fakeEmail = createFakeEmail(username);

        createUserWithEmailAndPassword(auth, fakeEmail, password)
            .then((userCredential) => {
                alert("Đăng ký thành công! Chào mừng Transformer: " + username);
            })
            .catch((error) => {
                console.error(error);
                alert("Lỗi đăng ký: " + error.message);
            });
    });
}

// 6. Xử lý ĐĂNG NHẬP
if (btnLogin) {
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        const username = userInput.value;
        const password = passwordInput.value;

        const fakeEmail = createFakeEmail(username);

        signInWithEmailAndPassword(auth, fakeEmail, password)
            .then((userCredential) => {
                alert("Thủ lĩnh " + username + " đã đăng nhập!");
                // window.location.href = "index.html"; // Mở dòng này nếu muốn chuyển trang
            })
            .catch((error) => {
                console.error(error);
                alert("Sai tên đăng nhập hoặc mật khẩu rồi!");
            });
    });
}
