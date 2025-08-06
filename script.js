document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
        {
            id: 1,
            title: "Men's Slim Fit T-Shirt",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            description: "Premium quality slim fit t-shirt made from 100% organic cotton. Available in multiple colors.",
            category: "men"
        },
        {
            id: 2,
            title: "men's Shirt",
            price: 49.99,
            image: "2.jpg",
            description: "Lightweight summer dress with floral pattern. Perfect for warm weather occasions.",
            category: "women"
        },
        {
            id: 3,
            title: "Classic Denim Jeans",
            price: 500.,
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            description: "Classic straight leg denim jeans with a comfortable fit. Made from durable cotton.",
            category: "men"
        },
        {
            id: 4,
            title: "men's Blazer",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
            description: "Elegant women's blazer for professional or casual wear. Available in multiple colors.",
            category: "men"
        },
        {
            id: 5,
            title: "US Polo Shirt",
            price: 34.99,
            image: "6.jpg",
            description: "Classic polo shirt made from premium cotton. Perfect for casual or semi-formal occasions.",
            category: "men"
        },
        {
            id: 6,
            title: "Rolex Watch",
            price: 24.99,
            image: "10.jpg",
            description: "Luxurious silk scarf with elegant patterns. Adds a touch of sophistication to any outfit.",
            category: "accessories"
        },
        {
            id: 7,
            title: "Leather Belt",
            price: 39.99,
            image: "3.webp",
            description: "Genuine leather belt with stainless steel buckle. Available in black and brown.",
            category: "accessories"
        },
        {
            id: 8,
            title: "Casual Sneakers",
            price: 64.99,
            image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
            description: "Comfortable casual sneakers with cushioned soles. Perfect for everyday wear.",
            category: "men"
        }
    ];

    // Load products
    function loadProducts(productsToLoad) {
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';
        
        productsToLoad.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-3 mb-4 fade-in';
            productCard.innerHTML = `
                <div class="card product-card h-100 border-0 shadow-sm">
                    <div class="product-img-container p-3">
                        <img src="${product.image}" class="product-img card-img-top" alt="${product.title}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text text-muted">$${product.price.toFixed(2)}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <button class="btn btn-outline-dark w-100 view-details" data-id="${product.id}">View Details</button>
                    </div>
                </div>
            `;
            productContainer.appendChild(productCard);
        });

        // Add event listeners to view details buttons
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                showProductDetails(product);
            });
        });
    }

    // Show product details in modal
    function showProductDetails(product) {
        document.getElementById('modalProductTitle').textContent = product.title;
        document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('modalProductDescription').textContent = product.description;
        document.getElementById('modalProductImage').src = product.image;
        
        const productModal = new bootstrap.Modal(document.getElementById('productModal'));
        productModal.show();
    }

    // Sort products
    function sortProducts(sortType) {
        let sortedProducts = [...products];
        
        switch(sortType) {
            case 'price-asc':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name-desc':
                sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                break;
        }
        
        loadProducts(sortedProducts);
    }

    // Event listeners for sorting
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sortType = this.getAttribute('data-sort');
            sortProducts(sortType);
        });
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Initialize by loading all products
    loadProducts(products);
});