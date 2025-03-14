
function updatePhoneClock() { 
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('hourPhone').textContent = `${hour}:${minutes}`
}

updatePhoneClock();
setInterval(updatePhoneClock, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const heartIcons = document.querySelectorAll(".fa-heart");  
    
    heartIcons.forEach(heart => {
        heart.addEventListener("click", function () { 
            this.classList.toggle("fa-solid"); // Zmiana stylu serca
            
            const post = this.closest(".instagram-post"); // Znajdź rodzica posta
            const likesCountElement = post.querySelector(".post-likes span"); // Znajdź licznik lajków
            let likes = parseInt(likesCountElement.textContent);
            
            // Sprawdzenie, czy serce jest aktywne (czy użytkownik już polubił post)
            if (this.classList.contains("fa-solid")) {
                likes++;
            } else {
                likes--;
            }
            likesCountElement.textContent = likes; // Aktualizacja licznika
        });
    });
});
