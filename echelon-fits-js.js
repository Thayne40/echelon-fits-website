// Cart State
let cart = [];
let currentFilter = 'all';

// Navigation
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}-page`).classList.add('active');
    window.scrollTo(0, 0);
    
    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
    
    // Load page-specific content
    if (page === 'memberships') loadMemberships();
    if (page === 'classes') loadClasses();
    if (page === 'programs') loadPrograms();
    if (page === 'shop') loadProducts();
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('active');
}

// Membership Data & Functions
const memberships = [
    {
        name: 'Basic',
        price: 20,
        color: '#4B5563',
        features: ['Access 6AM-10PM', 'Cardio equipment', 'Strength training', 'Locker access', '1 guest pass/month']
    },
    {
        name: 'Standard',
        price: 40,
        color: '#1E3A8A',
        popular: true,
        features: ['24/7 access', 'All Basic features', 'Unlimited classes', '3 guest passes', 'Towel service', '10% merch discount']
    },
    {
        name: 'Premium',
        price: 60,
        color: '#1E40AF',
        features: ['24/7 access', 'All Standard features', '2 PT sessions/month', '5 guest passes', 'Premium locker', '15% discount']
    },
    {
        name: 'VIP',
        price: 100,
        color: '#D97706',
        features: ['Private entrance', 'All Premium features', '8 PT sessions/month', 'Unlimited guests', 'Luxury locker', '25% discount', 'VIP lounge', 'Massage therapy']
    }
];

function loadMemberships() {
    const container = document.getElementById('membership-container');
    container.innerHTML = memberships.map((tier, idx) => `
        <div class="relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all" style="background: linear-gradient(135deg, ${tier.color}, ${tier.color}dd);">
            ${tier.popular ? '<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>' : ''}
            <div class="text-white">
                <h3 class="text-2xl font-bold mb-2">${tier.name}</h3>
                <div class="mb-6">
                    <span class="text-5xl font-bold">$${tier.price}</span>
                    <span class="text-lg">/month</span>
                </div>
                <ul class="space-y-3 mb-8">
                    ${tier.features.map(f => `<li class="flex items-start"><span class="mr-2">✓</span><span class="text-sm">${f}</span></li>`).join('')}
                </ul>
                <button class="w-full bg-white text-blue-900 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Started</button>
            </div>
        </div>
    `).join('');
}

// Classes Data & Functions
const classes = [
    { name: 'HIIT Training', time: '6:00 AM', instructor: 'Sarah Johnson', spots: 12, difficulty: 'Advanced' },
    { name: 'Strength & Power', time: '7:30 AM', instructor: 'Mike Thompson', spots: 8, difficulty: 'Intermediate' },
    { name: 'Yoga Flow', time: '9:00 AM', instructor: 'Emma Davis', spots: 15, difficulty: 'All Levels' },
    { name: 'Spin Class', time: '12:00 PM', instructor: 'Chris Martinez', spots: 3, difficulty: 'Intermediate' },
    { name: 'Boxing', time: '5:00 PM', instructor: 'Jordan Lee', spots: 10, difficulty: 'Beginner' },
    { name: 'Olympic Lifting', time: '6:30 PM', instructor: 'Alex Rodriguez', spots: 6, difficulty: 'Advanced' }
];

function loadClasses() {
    const container = document.getElementById('classes-container');
    container.innerHTML = classes.map(cls => `
        <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-bold mb-1">${cls.name}</h3>
                    <p class="text-sm text-gray-600">${cls.instructor}</p>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-semibold ${cls.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' : cls.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}">
                    ${cls.difficulty}
                </span>
            </div>
            <div class="flex items-center text-gray-600 mb-4">
                <span class="text-sm">🕐 ${cls.time}</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-sm font-semibold ${cls.spots < 5 ? 'text-red-600' : 'text-green-600'}">${cls.spots} spots left</span>
                <button class="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Programs Data & Functions
const programs = [
    {
        name: '12-Week Transformation',
        description: 'Complete body transformation combining strength, nutrition, and accountability',
        duration: '12 weeks',
        difficulty: 'All Levels',
        includes: ['3x weekly training', 'Meal plans', 'Progress tracking', 'Body analysis']
    },
    {
        name: 'Strength Builder',
        description: 'Build serious strength with progressive overload principles',
        duration: '8 weeks',
        difficulty: 'Intermediate-Advanced',
        includes: ['4x weekly sessions', 'Strength testing', 'Video analysis', 'Supplement guide']
    },
    {
        name: 'Athletic Performance',
        description: 'Enhance speed, agility, and explosive power',
        duration: '10 weeks',
        difficulty: 'Advanced',
        includes: ['Sport-specific training', 'Plyometrics', 'Speed drills', 'Performance metrics']
    },
    {
        name: 'Weight Loss Challenge',
        description: 'Sustainable fat loss through training and nutrition',
        duration: '8 weeks',
        difficulty: 'All Levels',
        includes: ['Group sessions', 'Weekly check-ins', 'Meal prep guides', 'Community support']
    }
];

function loadPrograms() {
    const container = document.getElementById('programs-container');
    container.innerHTML = programs.map(program => `
        <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-2xl font-bold">${program.name}</h3>
                <span class="px-3 py-1 bg-blue-900 text-white rounded-full text-sm font-semibold">${program.duration}</span>
            </div>
            <p class="text-gray-600 mb-4">${program.description}</p>
            <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-white rounded-full text-sm font-semibold">${program.difficulty}</span>
            </div>
            <div class="mb-6">
                <p class="font-semibold mb-2">Includes:</p>
                <ul class="space-y-2">
                    ${program.includes.map(item => `<li class="flex items-start"><span class="mr-2 text-blue-900">→</span><span class="text-sm">${item}</span></li>`).join('')}
                </ul>
            </div>
            <button class="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">Enroll Now</button>
        </div>
    `).join('');
}

// Products Data & Functions
const products = [
    { id: 1, name: 'Echelon Signature Tee', category: 'apparel', price: 29.99, rating: 4.8 },
    { id: 2, name: 'Performance Tank', category: 'apparel', price: 24.99, rating: 4.7 },
    { id: 3, name: 'Premium Hoodie', category: 'apparel', price: 54.99, rating: 4.9 },
    { id: 4, name: 'Training Joggers', category: 'apparel', price: 49.99, rating: 4.6 },
    { id: 5, name: 'Athletic Shorts', category: 'apparel', price: 34.99, rating: 4.7 },
    { id: 6, name: 'Women\'s Leggings', category: 'apparel', price: 44.99, rating: 4.9 },
    { id: 7, name: 'Sports Bra', category: 'apparel', price: 32.99, rating: 4.8 },
    { id: 8, name: 'Compression Shirt', category: 'apparel', price: 39.99, rating: 4.6 },
    { id: 9, name: 'Snapback Hat', category: 'apparel', price: 24.99, rating: 4.5 },
    { id: 10, name: 'Gym Duffel Bag', category: 'accessories', price: 59.99, rating: 4.9 },
    { id: 11, name: 'Water Bottle', category: 'accessories', price: 24.99, rating: 4.8 },
    { id: 12, name: 'Shaker Cup', category: 'accessories', price: 14.99, rating: 4.5 },
    { id: 13, name: 'Resistance Bands', category: 'accessories', price: 29.99, rating: 4.7 },
    { id: 14, name: 'Lifting Straps', category: 'accessories', price: 19.99, rating: 4.8 },
    { id: 15, name: 'Wrist Wraps', category: 'accessories', price: 17.99, rating: 4.6 },
    { id: 16, name: 'Yoga Mat', category: 'accessories', price: 39.99, rating: 4.8 },
    { id: 17, name: 'Foam Roller', category: 'accessories', price: 29.99, rating: 4.6 },
    { id: 18, name: 'Lifting Belt', category: 'accessories', price: 49.99, rating: 4.9 }
];

function loadProducts() {
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    const container = document.getElementById('products-container');
    container.innerHTML = filtered.map(product => `
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover-scale">
            <div class="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div class="text-6xl">📦</div>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${product.name}</h3>
                <div class="flex items-center mb-2">
                    <span class="text-yellow-400 text-sm">★ ${product.rating}</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-bold text-blue-900">$${product.price}</span>
                    <button onclick="addToCart(${product.id})" class="p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">🛒</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    currentFilter = category;
    loadProducts();
    
    // Update filter button styles
    document.querySelectorAll('#shop-page button').forEach(btn => {
        btn.classList.remove('bg-blue-900', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
    });
    event.target.classList.remove('bg-white', 'text-gray-700');
    event.target.classList.add('bg-blue-900', 'text-white');
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
        alert(`${product.name} added to cart!`);
    }
}

function updateCart() {
    const count = cart.length;
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    
    if (count > 0) {
        cartCount.classList.remove('hidden');
        cartCount.textContent = count;
    } else {
        cartCount.classList.add('hidden');
    }
    
    cartTotal.textContent = count;
    
    if (count === 0) {
        cartItems.innerHTML = '<p class="text-gray-500">Your cart is empty</p>';
    } else {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartItems.innerHTML = `
            <div class="space-y-4">
                ${cart.map((item, idx) => `
                    <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p class="font-semibold">${item.name}</p>
                            <p class="text-sm text-gray-600">$${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${idx})" class="text-red-600 hover:text-red-800">✕</button>
                    </div>
                `).join('')}
                <div class="pt-4 border-t">
                    <div class="flex justify-between mb-4">
                        <span class="font-bold">Total:</span>
                        <span class="font-bold text-blue-900">$${total.toFixed(2)}</span>
                    </div>
                    <button class="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">Checkout</button>
                </div>
            </div>
        `;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial page
    navigateTo('home');
});