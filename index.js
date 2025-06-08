let cartCount = 0;
        const cartCountElement = document.querySelector('.cart-count');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                cartCount++;
                cartCountElement.textContent = cartCount;
                
                // Visual feedback
                this.style.background = '#2ecc71';
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                
                setTimeout(() => {
                    this.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                    this.innerHTML = '<i class="fas fa-plus"></i> Add to Cart';
                }, 1500);
            });
        });
      const productItems = document.querySelectorAll('.product-item');
        productItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('click', function() {
            document.querySelector('#fruList').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });

        
        const welcomeTitle = document.querySelector('.welcome-title');
        const hour = new Date().getHours();
        let greeting = 'Welcome to';
        
        if (hour < 12) {
            greeting = 'Good Morning! Welcome to';
        } else if (hour < 18) {
            greeting = 'Good Afternoon! Welcome to';
        } else {
            greeting = 'Good Evening! Welcome to';
        }
        
        welcomeTitle.textContent = `${greeting} Greens Kiosk`;