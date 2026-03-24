const container = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
	const p = document.createElement('div');
	p.className = 'particle';
	p.style.left = Math.random() * 100 + '%';
	p.style.bottom = '0';
	p.style.setProperty('--dur', (8 + Math.random() * 12) + 's');
	p.style.setProperty('--delay', (Math.random() * 10) + 's');
	p.style.setProperty('--drift', ((Math.random() - 0.5) * 100) + 'px');
	container.appendChild(p);
}