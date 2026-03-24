// fireflies
const container = document.getElementById('fireflies');
for (let i = 0; i < 28; i++) {
	const f = document.createElement('div');
	f.className = 'firefly';
	f.style.left = Math.random() * 100 + '%';
	f.style.top = Math.random() * 100 + '%';
	f.style.setProperty('--dur', (6 + Math.random() * 10) + 's');
	f.style.setProperty('--delay', (Math.random() * 8) + 's');
	f.style.setProperty('--tx', ((Math.random() - 0.5) * 200) + 'px');
	f.style.setProperty('--ty', ((Math.random() - 0.5) * 200) + 'px');
	container.appendChild(f);
}

// scroll reveal
const observer = new IntersectionObserver((entries) => {
	entries.forEach(e => {
		if (e.isIntersecting) e.target.classList.add('visible');
	});
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));