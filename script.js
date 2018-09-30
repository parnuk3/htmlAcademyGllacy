var bg = document.querySelector(".page-background");
var backgrounds = ["cream1-bg", "cream2-bg", "cream3-bg"];


var slider = function () {
    
    var slide = document.querySelector(".slider-btn:checked").dataset.bgs;
    for (var i = 0; i < backgrounds.length; i++) {
        bg.classList.remove(backgrounds[i]);
    }
    bg.classList.add(slide);
}

var dataCard = [
	{
		price: '310₽',
    	description: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
    	imgUrl: 'img/card1.jpg',
		isHit: true
	},
	{
		price: '380₽',
    	description: 'Сливочно-кофейное с кусочками шоколада',
    	imgUrl: 'img/card2.jpg',
		isHit: true
	},
	{
		price: '355₽',
    	description: 'Сливочно-клубничное с присыпкой из белого шоколада',
    	imgUrl: 'img/card3.jpg',
		isHit: true
	},
	{
		price: '415₽',
    	description: 'Сливочное крем-брюле с карамельной подливкой',
    	imgUrl: 'img/card4.jpg',
		isHit: true
	}
    
];



var makeElement = function (tagName, className, textContent) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

var createCard = function (product, isHit) {
    var listItem = makeElement ('li', 'product-item');
    var pictures = makeElement ('img', 'product-image');
    pictures.src = product.imgUrl;
    pictures.alt =  product.description;
    listItem.appendChild(pictures);
	listItem.classList.remove("product-hit");
    if (product.isHit) {
        listItem.classList.add("product-hit");
    }
    var description = makeElement ('p', 'product-description', product.description);
    listItem.appendChild(description);
    var price = makeElement ('span', 'product-price', product.price);
    var priceUnits = makeElement ('span', 'product-price-units', '/кг');
    price.appendChild(priceUnits);
    listItem.appendChild(price);
    
    return listItem;
}

var renderProducts = function (productsArray, parentObject) {
    
    var cardList = document.querySelector(parentObject);
    for (var i = 0; i < productsArray.length; i++) {
        var currentCard = productsArray[i];
        var cardItem = createCard (currentCard);
        cardList.appendChild(cardItem);
    }
}

var hitList = document.querySelector('.hot-offers');
if (hitList) {
	var dataCardHit = [];
	for (var i = 0; i < dataCard.length; i++) {
		if(dataCard[i].isHit) {
			dataCardHit.push(dataCard[i]);
		}
	}
	renderProducts(dataCardHit, '.hot-offers');
}

var productList = document.querySelector('.catalog-products');
if (productList) {
	renderProducts(dataCard, '.catalog-products');
}

/*модальное окно поиска*/

var search = document.querySelector(".main-search");
var searchPopup = document.querySelector(".modal-search");
var searchField = searchPopup.querySelector("input");



search.addEventListener('click', function(event) {
	event.preventDefault();
	searchPopup.classList.toggle("modal-show");
	search.classList.toggle("active");
	searchField.focus();
});



var login = document.querySelector(".header-login");
var loginPopup = document.querySelector(".modal-login");
var loginField = loginPopup.querySelector('[name="login"]');
var passwordField = loginPopup.querySelector('[name="password"]');
var userLogin = localStorage.getItem("userLogin");
var loginForm = loginPopup.querySelector('form');

login.addEventListener('click', function(event) {
	event.preventDefault();
	loginPopup.classList.remove("modal-error");
	loginPopup.classList.toggle("modal-show");
	login.classList.toggle("active");
	if(userLogin) {
		loginField.value = userLogin;
		passwordField.focus();
	} else {
		loginField.focus();
	}
});

loginForm.addEventListener("submit", function(event) {
	
	if (!loginField.value || !passwordField.value) {
		event.preventDefault();
		loginPopup.classList.add("modal-error");
		
	} else {
		localStorage.setItem("userLogin", loginField.value);
	}
});







window.addEventListener("keydown", function(event){
	if(event.keyCode === 27) {
		if (searchPopup.classList.contains("modal-show")) {
			searchPopup.classList.remove("modal-show");
			search.classList.remove("active");
		} else if (loginPopup.classList.contains("modal-show")) {
			loginPopup.classList.remove("modal-show");
			login.classList.remove("active");
		}
	}
});