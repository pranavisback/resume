VANTA.FOG({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x6700ff,
  midtoneColor: 0xe3ff,
  baseColor: 0x6f7dd1
})

// Certificate Modal Functions
function openModal(modalType) {
    const modal = document.getElementById(modalType + 'Modal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalType) {
    const modal = document.getElementById(modalType + 'Modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Toggle fullscreen image view
function toggleFullscreen(img) {
    if (img.classList.contains('fullscreen')) {
        img.classList.remove('fullscreen');
        document.body.style.overflow = 'hidden'; // Keep modal scroll locked
    } else {
        img.classList.add('fullscreen');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList && event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    // Close fullscreen image when clicking on it
    if (event.target.classList && event.target.classList.contains('fullscreen')) {
        event.target.classList.remove('fullscreen');
        document.body.style.overflow = 'hidden'; // Keep modal scroll locked
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Close fullscreen image first
        const fullscreenImages = document.querySelectorAll('.certificate-image.fullscreen');
        if (fullscreenImages.length > 0) {
            fullscreenImages.forEach(img => img.classList.remove('fullscreen'));
            document.body.style.overflow = 'hidden'; // Keep modal scroll locked
            return;
        }
        // Then close modals
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
        document.body.style.overflow = 'auto';
    }
});

// Enhanced interactions and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to certificate buttons
    const certButtons = document.querySelectorAll('.certificate-btn');
    
    certButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

