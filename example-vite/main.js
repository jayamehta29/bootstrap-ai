// Import Bootstrap AI components
import '@bootstrap-ai/ui';

// Add some interactivity
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('fk-button');
  buttons.forEach(button => {
    button.addEventListener('fk-click', e => {
      console.log('Button clicked:', e.target.textContent);
    });
  });
});

