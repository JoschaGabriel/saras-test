const linkElement = document.querySelector('#hotline'); 
const linkElementEmail = document.querySelector('#email');

linkElement.addEventListener('click', (event) => {
  if (window.innerWidth > 800) {
    // If screen width is greater than 800px
    event.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText(linkElement.href)
      .then(() => {
        alert('Hotline Number copied to clipboard!'); 
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy link to clipboard.'); 
      });
  } else {
    // If screen width is less than or equal to 800px
    // Allow default link behavior (open in new tab)
  }
});

linkElementEmail.addEventListener('click', (event) => {
    if (window.innerWidth > 800) {
      // If screen width is greater than 800px
      event.preventDefault(); // Prevent default link behavior
      navigator.clipboard.writeText(linkElementEmail.href)
        .then(() => {
          alert('Email Address copied to clipboard!'); 
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          alert('Failed to copy link to clipboard.'); 
        });
    } else {
      // If screen width is less than or equal to 800px
      // Allow default link behavior (open in new tab)
    }
  });
  
