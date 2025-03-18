// showing navbar when clicking menu on mobile view

const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener('click', ()=> {

    mobile.classList.toggle('is-active');
    mobileLink.classList.toggle('active');
})


//close menu when click 

mobileLink.addEventListener('click', ()=>{

    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth<=768 && menuBars){

        mobile.classList.toggle('is-active');
        mobileLink.classList.toggle('active');
    }
})


//move the menu to left and right when click the back and next button

var step = 200;
var stepFilter = 100;
var scrolling = true;

$('.back').bind('click', (e)=>{
    e.preventDefault();
    $('.highlight-wrapper').animate({
        scrollLeft:'-=' + step + 'px'
    });
});

$('.next').bind('click', (e)=>{
    e.preventDefault();
    $('.highlight-wrapper').animate({
        scrollLeft:'+=' + step + 'px'
    })
})

//move the menu to left and right when click the back menus and next menus button

$('.back-menus').bind('click', (e)=>{
    e.preventDefault();
    $('.filter-wrapper').animate({
        scrollLeft:'-=' + step + 'px'
    });
});

$('.next-menus').bind('click', (e)=>{
    e.preventDefault();
    $('.filter-wrapper').animate({
        scrollLeft:'+=' + step + 'px'
    })
})


// dark-mode

const darkMode =document.querySelector('.dark');

const mainData = document.querySelector('.main');
const mainNav = document.querySelector('.main-navbar');
const mainHigh = document.querySelector('.main-highlight');
const mainMenus = document.querySelector('.main-menus');
const mainFilter = document.querySelector('.main-filter');
const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const highdesc = document.querySelector('highlight-desc h4');


darkMode.addEventListener('click', ()=>{

    mobileLink.classList.toggle('dark-mode');
    mobile.classList.toggle('dark-mode');
    mainData.classList.toggle('dark-mode');
    mainNav.classList.toggle('dark-mode');
    mainHigh.classList.toggle('dark-mode');
    mainMenus.classList.toggle('dark-mode');
    mainFilter.classList.toggle('dark-mode');
    search.classList.toggle('dark-mode');
    searchBtn.classList.toggle('dark-mode');
    highdesc.classList.toggle('dark-mode');

})


const icon = darkMode.querySelector('ion-icon');

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('icondark');

    // Change icon dynamically
    if (darkMode.classList.contains('icondark')) {
        icon.setAttribute('name', 'sunny-outline'); // Change to sun icon
    } else {
        icon.setAttribute('name', 'moon-outline'); // Change back to moon icon
    }
});


//for shopping cart

//cart popup

function toggleCartPopup(){
    const cartPopup = document.querySelector('.cart-popup');
    cartPopup.classList.toggle('active');
}

//close cart popup

function closeCart(){

    const closeCart = document.querySelector('.cart-popup');
    closeCart.classList.remove('active');
}


// for add to cart button
function addToCart(itemName, itemPrice){

    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0]; 
    const existingItems = Array.from(cartItems.getElementsByTagName('tr')).find(item=> item.cells[0].textContent === itemName);
    if(existingItems) {

        const itemCount = parseInt(existingItems.querySelector('.item-count').textContent) + 1;
        existingItems.querySelector('.item-count').textContent = itemCount;

        const itemTotal = parseInt(existingItems.querySelector('.item-total').textContent) + parseFloat(itemPrice);
        existingItems.querySelector('.item-total').textContent = itemTotal.toFixed(2);
    }

    else {

        const newRow = cartItems.insertRow();
        newRow.innerHTML = `
        <td>${itemName}</td>
        <td class="item-count">1</td>
        <td class="item-price">${itemPrice}</td>
        <td class="item-total">${itemPrice}</td>
        `;
    }

    updateCartCountAndTotal()
}

// for update cart count and total
function updateCartCountAndTotal (){

    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    // const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    let total = 0;
    let totalCount = 0;

    cartItems.forEach(item => {
            const itemCount = parseInt(item.querySelector('.item-count').textContent);
            const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
            totalCount += itemCount;
            total += itemTotal;
    });

    cartCount.textContent = totalCount;
    cartTotal.textContent = total.toFixed(2);
}



//filteritems





document.addEventListener('DOMContentLoaded', ()=>{

    filteredFood()
})


const foodContainer = document.querySelector('.detail-wrapper');
const cardFilter = document.querySelectorAll('.filter-card');
const noItem = document.querySelector('.no-list');

const foodItems = [
    
    {
        id : 1,
        name: 'Shrimp Soup',
        image:'./assets/shrimp_soup.png',
        type: ['healthy','fish'],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 300'
    },

    {
        id : 2,
        name: 'Veg Pizza',
        image:'./assets/pizza.png',
        type: 'pizza',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 255'
    },

    {
        id : 3,
        name: 'Double Cheese Burger',
        image:'./assets/burger.png',
        type: 'burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 280'
    },

    {
        id : 4,
        name: 'Coffee',
        image:'./assets/cafe-latte.png',
        type:'coffee',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 290'
    },

    {
        id : 5,
        name: 'Ice Cream',
        image:'./assets/icecream.png',
        type: 'icecream',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 200'
    },

    {
        id : 6,
        name: 'Redwine',
        image:'./assets/redwine.png',
        type: 'wine',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 1200'
    },

    {
        id : 7,
        name: 'Fresh Salad',
        image:'./assets/Fresh_Salad.png',
        type:'healthy',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 120'
    },

    {
        id : 8,
        name: 'Paneer Tikka Burger',
        image:'./assets/paneer_tikka_burger.png',
        type: 'burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 320'
       
    },

    {
        id : 9,
        name: 'Broccoli & Cheese Egg Bites',
        image:'./assets/broccoli.PNG',
        type: 'healthy',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 350'
    },

    {
        id : 10,
        name: 'Veg burger',
        image:'./assets/veg-burger.png',
        type: 'burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 160'
    },

    {
        id : 11,
        name: 'Fish curry',
        image:'./assets/fish_curry.png',
        type: 'fish',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 500'
    },

    {
        id : 12,
        name: 'Chicken Burger',
        image:'./assets/chicken-burger.png',
        type: 'burger',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '₹ 370'
    }
    
]



function filteredFood(filter = 'all'){

    foodContainer.innerHTML = '';

    const filteredItem = filter === 'all'
    ? foodItems
    // : foodItems.filter(item => item.type === filter);  //for single category
    : foodItems.filter(item => item.type.includes(filter));

    if(filteredItem.length === 0) {

        noItem.style.display = 'block';
    } else {

        noItem.style.display = 'none';
    }

    filteredItem.forEach(item => {

        const foodCard = document.createElement('div');

        foodCard.innerHTML = `

        
                        <div class="detail-card">
                            <img src="${item.image}" class="detail-img" alt="">
                            <div class="detail-desc">
                                <div class="detail-name">
                                    <h4>${item.name}</h4>
                                    <p class="detail-sub">${item.desc}</p>
                                    <p class="price">${item.price}</p>
                                    <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${parseInt(item.price.replace('₹', '').trim())})">Add to Cart</button>
                                </div>
                                <ion-icon class="detail-favourite" name="bookmark-outline"></ion-icon>    
                            </div>
                        </div>
        
        `;

        foodContainer.appendChild(foodCard);
    })
}

  cardFilter.forEach(items => {

    items.addEventListener('click', function() {

        cardFilter.forEach(card => card.classList.remove('active'));

        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        filteredFood(filter);

    });
});




//search based filter



