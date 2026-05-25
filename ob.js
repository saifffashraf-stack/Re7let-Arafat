function show(key) {
            const card = document.getElementById('content-card');
            card.style.opacity = 0;
            setTimeout(() => {
                card.innerHTML = content[key];
                card.style.opacity = 1;
            }, 300);
        }