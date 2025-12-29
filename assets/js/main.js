// Collapsible sections functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.collapsible-toggle');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const icon = this.querySelector('.toggle-icon');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Toggle content visibility
      content.classList.toggle('expanded');

      // Update icon
      icon.textContent = content.classList.contains('expanded') ? '▲' : '▼';

      // Update aria-expanded for accessibility
      this.setAttribute('aria-expanded', !isExpanded);
    });

    // Keyboard support (Enter and Space)
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
