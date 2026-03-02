document.addEventListener("DOMContentLoaded", () => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (!targetId) return;

            const target = document.querySelector(targetId);
            if (!target) return;

            // Calculate exact scroll position
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const scrollToPosition = targetPosition - navbarHeight - 10; // 10px spacing

            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth"
            });
        });
    });

    // Home image glow toggle
    const profileImage = document.querySelector(".home-image img");
    profileImage.addEventListener("click", () => {
        profileImage.classList.toggle("active-glow");
    });
});