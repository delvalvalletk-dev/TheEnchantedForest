const observer = new IntersectionObserver((entries) => {
	entries.forEach((e, i) => {
		if (e.isIntersecting) {
			setTimeout(() => e.target.classList.add('visible'), i * 80);
		}
	});
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
