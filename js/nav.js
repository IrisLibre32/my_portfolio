document.addEventListener('DOMContentLoaded', () => {
  const hamMenuIcon = document.getElementById("ham-menu");
  const navBar = document.getElementById("nav-bar");
  const navLinks = navBar.querySelectorAll("a");
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;

  // Toggle navigation menu on hamburger menu click
  hamMenuIcon.addEventListener("click", () => {
      navBar.classList.toggle("active");
      hamMenuIcon.classList.toggle("fa-times");
  });

  // Smooth scroll for nav links and close mobile menu on link click
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - headerHeight, // Adjusted for header height
              behavior: 'smooth'
          });

          // Close the nav menu after click
          navBar.classList.remove("active");
          hamMenuIcon.classList.toggle("fa-times");
      });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
          const sectionTop = section.offsetTop - headerHeight; // Adjusted for header height
          const sectionHeight = section.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });
});
