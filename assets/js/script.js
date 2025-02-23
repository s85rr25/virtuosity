document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scroll-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".scroll-section-about");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 40% of the section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

function toggleNav() {
  const sidebarNav = document.getElementById("sidebar-nav");
  const hamburgerContainer = document.querySelector(".hamburger-container");

  // Toggle the "active" class on the sidebar and hamburger container
  sidebarNav.classList.toggle("active");
  hamburgerContainer.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const sidebarNav = document.getElementById("sidebar-nav");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // Check if the click is outside the sidebar and hamburger menu
  if (
    !sidebarNav.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    sidebarNav.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
});