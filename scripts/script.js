
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreText = document.querySelector('.more-text');
    
    readMoreBtn.addEventListener('click', function() {
        if (moreText.style.display === 'block') {
            moreText.style.display = 'none';
            readMoreBtn.textContent = 'Tampilkan lebih banyak';
            readMoreBtn.classList.remove('active');
        } else {
            moreText.style.display = 'block';
            readMoreBtn.textContent = 'Tampilkan lebih sedikit';
            readMoreBtn.classList.add('active');
        }
    });
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-item, .testimonial-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}


const benefitsItems = document.querySelectorAll('.benefit-item, .testimonial-item');
benefitsItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});


window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
});