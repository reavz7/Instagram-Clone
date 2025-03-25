// Clock functionality - improved with seconds
function updatePhoneClock() { 
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Only update the display when the minute changes to save resources
    document.getElementById('hourPhone').textContent = `${hour}:${minutes}`;
}

// Initialize clock and update every second
updatePhoneClock(); 
setInterval(updatePhoneClock, 1000);

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Heart/Like functionality
    const heartIcons = document.querySelectorAll(".fa-heart");  
    const saveIcons = document.querySelectorAll(".fa-bookmark");
    const saveWindow = document.querySelector(".save-window");
    
    // Emma's story functionality
    const emmaStory = document.getElementById("emma-story");
    const relationScreen = document.getElementById("relation-screen");
    const closeRelation = document.getElementById("close-relation");
    const progressBar = document.getElementById("progress-bar");
    
    // Story timer variables
    let storyTimer;
    let isPaused = false;
    let storyDuration = 5000; // 5 seconds for story duration
    
    // Heart/Like functionality
    heartIcons.forEach(heart => {
        heart.addEventListener("click", function () { 
            this.classList.toggle("fa-solid"); // Toggle heart style
            
            const post = this.closest(".instagram-post"); // Find parent post
            if (post) {
                const likesCountElement = post.querySelector(".post-likes span"); // Find likes counter
                if (likesCountElement) {
                    let likes = parseInt(likesCountElement.textContent);
                    
                    // Update likes count based on heart state
                    if (this.classList.contains("fa-solid")) {
                        likes++;
                    } else {
                        likes--;
                    }
                    likesCountElement.textContent = likes; // Update counter
                }
            }
        });
    });

    // Save post functionality
    saveIcons.forEach(saveIcon => { 
        saveIcon.addEventListener("click", function () { 
            this.classList.toggle("fa-solid");
            if (this.classList.contains("fa-solid")) {
                // Show save confirmation
                saveWindow.classList.remove("hidden");
                setTimeout(() => { 
                    saveWindow.classList.add("hidden");
                }, 1500);
            }
        });
    });
    
    // Emma's story functionality
    emmaStory.addEventListener("click", function() {
        openStory();
    });
    
    // Close relation/story
    closeRelation.addEventListener("click", function() {
        closeStory();
    });
    
    // Function to open Emma's story
    function openStory() {
        // Reset progress bar animation
        relationScreen.style.display = "flex";
        startStoryTimer();
        addStoryNavigation();
    }
    
    // Function to close the story
    function closeStory() {
        relationScreen.style.display = "none";
        clearTimeout(storyTimer);
        
        // Remove tap event listeners
        const tapAreas = document.querySelectorAll('.tap-area');
        tapAreas.forEach(area => area.remove());
    }
    
    // Function to start the story timer
    function startStoryTimer() {
        clearTimeout(storyTimer);
        storyTimer = setTimeout(() => {
            closeStory();
        }, storyDuration);
    }
    

    

});