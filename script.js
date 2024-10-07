console.log('Welcome to my portfolio!');
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        
        const href = link.getAttribute('href');
        if (href.startsWith('http')) {
            window.open(href, '_blank'); 
        } else {
            window.location.href = href;
        }
    });
});
