// Inisialisasi EmailJS dengan User ID (ganti dengan User ID kamu dari EmailJS)
(function() {
    emailjs.init("YOUR_USER_ID"); // Ganti "YOUR_USER_ID" dengan User ID kamu dari EmailJS
})();

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Efek Bunga Sakura
const sakuraContainer = document.getElementById('sakura');
const numberOfPetals = 30;

function createPetal() {
    const petal = document.createElement('div');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
    sakuraContainer.appendChild(petal);
}

if (sakuraContainer) {
    for (let i = 0; i < numberOfPetals; i++) {
        createPetal();
    }
    setInterval(createPetal, 500);
}

// Kontrol Musik
const audio = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause');

if (audio && playPauseButton) {
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    window.addEventListener('load', () => {
        audio.play().then(() => {
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(() => {
            // Autoplay diblokir, biarkan tombol tetap dalam keadaan "play"
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        });
    });
}

// Toggle Tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle && body) {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Form Kontak (Mengirim Email dengan EmailJS)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData) // Ganti dengan Service ID dan Template ID kamu
            .then(function(response) {
                alert('Pesan berhasil dikirim!');
                contactForm.reset(); 
            }, function(error) {
                alert('Gagal mengirim pesan. Silakan coba lagi. Error: ' + JSON.stringify(error));
            });
    });
}
