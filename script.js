document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");

    function getNavbarHeight() {
        return navbar ? navbar.offsetHeight : 0;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const navbarHeight = getNavbarHeight();
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offset = window.innerWidth <= 768 ? 5 : 15; 
            // smaller spacing on mobile

            window.scrollTo({
                top: targetPosition - navbarHeight - offset,
                behavior: "smooth"
            });
        });
    });

    // Recalculate on window resize (important for tablets & mobile)
    window.addEventListener("resize", () => {
        getNavbarHeight();
    });

    // Home image glow toggle (safe check)
    const profileImage = document.querySelector(".home-image img");

    if (profileImage) {
        profileImage.addEventListener("click", () => {
            profileImage.classList.toggle("active-glow");
        });
    }

});
