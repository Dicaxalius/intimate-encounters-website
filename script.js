document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.form-control');

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const formGroup = this.parentElement;
            if (this.checkValidity()) {
                formGroup.classList.remove('invalid');
                formGroup.classList.add('valid');
            } else {
                formGroup.classList.add('invalid');
                formGroup.classList.remove('valid');
            }
        });
    });
});
// Add this code to your existing script.js file
document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = this.getAttribute('onclick').replace("location.href='", "").slice(0, -2);
    });
});
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80, // Number of particles
      density: {
        enable: true,
        value_area: 800 // Area in which particles will be spread
      }
    },
    color: {
      value: "#ffffff" // Particle color
    },
    shape: {
      type: "circle", // Particle shape
      stroke: {
        width: 0,
        color: "#000000"
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
      }
    },
    size: {
      value: 5, // Particle size
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150, // Distance between linked particles
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6, // Particle movement speed
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out", // How particles behave at the edge of the canvas
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // How particles behave on hover
      },
      onclick: {
        enable: true,
        mode: "push" // How particles behave on click
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4 // Number of particles added on click
      }
    }
  },
  retina_detect: true // Adjusts particles for retina displays
});

