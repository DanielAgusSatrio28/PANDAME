function startFarewell() {
    const message = document.getElementById("message");
    const subMessage = document.getElementById("subMessage");
    const button = document.querySelector("button");
    const danceContainer = document.getElementById("dancing");
    const confetti = document.getElementById("confetti");
    const farewellSong = document.getElementById("farewellSong");

    // Ganti pesan
    message.textContent = "BUCIN KNTL";
    subMessage.textContent = "Bahaya minuman beralkohol bagi kesehatan sudah sangat sering diberitakan. Bila dikonsumsi secara berlebihan dan dalam jangka panjang, minuman beralkohol bisa merusak organ tubuh dan menyebabkan kecanduan. Bahkan, tidak jarang juga terjadi keracunan alkohol yang bisa berakibat fatal. Sebuah riset menunjukkan bahwa kebiasaan mengonsumsi minuman beralkohol merupakan salah satu penyebab kematian tertinggi. WHO menyebutkan bahwa setidaknya ada 3 juta orang meninggal setiap tahunnya karena minuman beralkohol, baik akibat efek alkohol secara langsung maupun penyakit yang ditimbulkannya.";
    
    // Mulai lagu
    farewellSong.play();
    
    // Tampilkan GIF menari
    danceContainer.style.display = "block";
    
    // Mulai efek confetti love
    startConfetti();

    // Animasi dan efek lebih lanjut
    setTimeout(() => {
        confetti.style.display = "none";  // Sembunyikan confetti setelah beberapa detik
        alert("Semoga sukses! Jangan lupa tetap keep in touch!");
    }, 5000);
}

function startConfetti() {
    const confetti = document.getElementById("confetti");

    // Tampilkan confetti
    confetti.style.display = "block";
    let numberOfConfetti = 150;

    // Membuat confetti berbentuk hati
    for (let i = 0; i < numberOfConfetti; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("heart");
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`; // Set durasi acak lebih panjang
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Set delay acak
        confetti.appendChild(confettiPiece);
    }
}
