
function updatePhoneClock() { 
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    document.getElementById('hourPhone').textContent = `${hour}:${minutes}`
}

updatePhoneClock();
setInterval(updatePhoneClock, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const heartIcon = document.querySelectorAll(".fa-heart");  
    for (let i = 0; i < heartIcon.length; i++) {
        heartIcon[i].addEventListener("click", function () { 
            heartIcon[i].classList.toggle("fa-solid");
        })
    }

    const heartOne = document.querySelector('.heart-one');
    let likesCountElement = document.getElementById("likes-count-1");
    let firstLikes = parseInt(likesCountElement.textContent);
    let liked = false;

    heartOne.addEventListener("click", () => {      
        if (liked) {
            firstLikes--;
        }
        else { 
            firstLikes++;
        }
        liked = !liked
        likesCountElement.textContent = firstLikes;

    })


        
});
