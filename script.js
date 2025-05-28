// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    try {
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Send form data to PHP endpoint
        const response = await fetch('mail.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('Thank you for subscribing! We will notify you soon.');
            event.target.reset();
            
            // Close modal if it exists
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        } else {
            alert(result.message || 'There was an error. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error. Please try again later.');
    } finally {
        // Re-enable submit button and restore original text
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

// Function to open modal
function openModal() {
    const modal = document.getElementById('modal-notify');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal-notify');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const form = document.getElementById('notify-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Modal close button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal-notify');
        if (event.target === modal) {
            closeModal();
        }
    });
}); 