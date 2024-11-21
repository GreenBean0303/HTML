document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = 0;
        lightbox.style.left = 0;
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = 1000;
        lightbox.style.cursor = 'pointer';
        lightbox.addEventListener('click', () => {
            lightbox.remove(); // Remove lightbox when clicked
        });

        const imgElement = document.createElement('img');
        imgElement.src = this.src;
        imgElement.style.maxWidth = '90%';
        imgElement.style.maxHeight = '90%';
        lightbox.appendChild(imgElement);

        document.body.appendChild(lightbox);
    });
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    if (!name) {
        alert('Palun sisestage nimi.');
        isValid = false;
    }
    if (!email.includes('@')) {
        alert('Palun sisestage kehtiv e-posti aadress.');
        isValid = false;
    }
    if (phone && isNaN(phone)) {
        alert('Palun sisestage kehtiv telefoninumber.');
        isValid = false;
    }
    if (!message) {
        alert('Palun sisestage sõnum.');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
document.querySelectorAll('#navbar > ul > li > a').forEach(menuItem => {
    menuItem.addEventListener('click', function (e) {
        // Check if the menu item has a submenu
        const parentLi = this.parentElement;
        const submenu = parentLi.querySelector('.submenu');

        if (submenu) {
            // Toggle submenu visibility
            parentLi.classList.toggle('active');

            // Prevent default scrolling on mobile view
            if (window.innerWidth <= 600) {
                e.preventDefault();
            }

            // Hide other open submenus
            document.querySelectorAll('#navbar li').forEach(li => {
                if (li !== parentLi) {
                    li.classList.remove('active');
                }
            });
        }
    });
});

