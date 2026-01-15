<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<!-- Telegram Web App -->
<script src="https://telegram.org/js/telegram-web-app.js"></script>

<script>
  // 🔥 Firebase config (ඔයා දුන්න එක)
  const firebaseConfig = {
    apiKey: "AIzaSyCcaQjB0x6BQYC7UhxmIIv97fUN_Pfex38",
    authDomain: "freeearn-miniapp.firebaseapp.com",
    projectId: "freeearn-miniapp",
    storageBucket: "freeearn-miniapp.firebasestorage.app",
    messagingSenderId: "159826275082",
    appId: "1:159826275082:web:ea68171bc3b77e1b8b28f3"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Telegram user
  const tg = window.Telegram.WebApp;
  tg.ready();

  const user = tg.initDataUnsafe.user;
  const UID = user.id.toString();
  const USERNAME = user.username || "no_username";
</script>
