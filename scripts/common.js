// HEADER

const main = document.querySelector('main');
const header = document.querySelector('header');
const headerLogo = document.querySelector('#header-logo');

const buttons = document.querySelectorAll('.header__button');
const headerBrandsButton = document.querySelector('#header-brands-button');
const headerCategoriesButton = document.querySelector('#header-categories-button');
const headerSubscribeButton = document.querySelector('#header-subscribe-button');
const headerLogInButton = document.querySelector('#header-login-button');
const headerWishesButton = document.querySelector('#header-wishes-button');
const headerCartButton = document.querySelector('#header-cart-button');

const outlines = document.querySelectorAll('.header__button-outline');
const brandsOutline = document.querySelector('#brands-outline');
const categoriesOutline = document.querySelector('#categories-outline');
const subscribeOutline = document.querySelector('#subscribe-outline');
const logInOutline = document.querySelector('#login-outline');
const wishesOutline = document.querySelector('#wishes-outline');
const cartOutline = document.querySelector('#cart-outline');

const menus = document.querySelectorAll('.menu');
const brandsMenu = document.querySelector('#brands-menu');
const categoriesMenu = document.querySelector('#categories-menu');

const forms = document.querySelectorAll('.form');
const subscribeForm = document.querySelector('#subscribe-form');
const logInForm = document.querySelector('#login-form');
const signInButton = document.querySelector('#signin-button');
const recoveryButton = document.querySelector('#recovery-button');
const signInForm = document.querySelector('#signin-form');
const passwordRecoveryForm = document.querySelector('#password-recovery-form');

function headerTurnsBlack() {
	if (header.classList.contains('header_two-colored')) {
		headerLogo.classList.remove('header__logo_white');
		buttons.forEach(button => button.classList.remove('header__button_white'));
		wishesOutline.classList.remove('header__button-outline_white');
		cartOutline.classList.remove('header__button-outline_white');
	}
};

function headerTurnsWhite() {
	if (header.classList.contains('header_two-colored')) {
		headerLogo.classList.add('header__logo_white');
		buttons.forEach(button => button.classList.add('header__button_white'));
		wishesOutline.classList.add('header__button-outline_white');
		cartOutline.classList.add('header__button-outline_white');
	}
};

function showOutline(outline) {
	outline.classList.remove('header__button-outline_hidden');
};

function hideAllOutlines() {
	outlines.forEach(outline => outline.classList.add('header__button-outline_hidden'));
};

function showPopup(popup, hidingClass) {
	headerTurnsBlack();
	popup.classList.remove(hidingClass);
};

function hideAllPopups() {
	menus.forEach(menu => menu.classList.add('menu_hidden'));
	forms.forEach(form => form.classList.add('form_hidden'));
	hideAllOutlines();
	headerTurnsWhite();
};

headerBrandsButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(brandsOutline);
	showPopup(brandsMenu, 'menu_hidden');
});

headerCategoriesButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(categoriesOutline);
	showPopup(categoriesMenu, 'menu_hidden');
});

headerSubscribeButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(subscribeOutline);
	showPopup(subscribeForm, 'form_hidden');
});

headerLogInButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(logInOutline);
	showPopup(logInForm, 'form_hidden');
});

signInButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(logInOutline);
	showPopup(signInForm, 'form_hidden');
});

recoveryButton.addEventListener('click', () => {
	hideAllPopups();
	showOutline(logInOutline);
	showPopup(passwordRecoveryForm, 'form_hidden');
});

headerWishesButton.addEventListener('click', () => {
	hideAllOutlines();
	showOutline(wishesOutline);
});

headerCartButton.addEventListener('click', () => {
	hideAllOutlines();
	showOutline(cartOutline);
});

// закрываем меню и футеры кликом по основному разделу
document.addEventListener('keydown', event => {
	if (event.key == 'Escape') hideAllPopups();
});

// закрываем меню и футеры кликом по основному разделу
main.addEventListener('click', () => hideAllPopups());

// закрываем меню и футеры кликом по футеру
document.addEventListener('click', event => {
	let isFooter = event.target.closest('.footer');
	if (isFooter) hideAllPopups();
});





// BRANDS MENU

const brandsMenuImage = document.querySelector('#brand-menu-image');
const brandsList = [
	{
		name: '1991',
		menuLink: '#link-to-1991',
		menuImage: '#image-for-1991',
	},
	{
		name: 'Anna Maslovskaya',
		menuLink: '#link-to-anna-maslovskaya',
		menuImage: '#image-for-anna-maslovskaya',
	},
	{
		name: 'Arha',
		menuLink: '#link-to-arha',
		menuImage: '#image-for-arha',
	},
	{
		name: 'Atauchi',
		menuLink: '#link-to-atauchi',
		menuImage: '#image-for-atauchi',
	},
	{
		name: 'Behurr',
		menuLink: '#link-to-behurr',
		menuImage: '#image-for-behurr',
	},
	{
		name: 'BLACK FORM',
		menuLink: '#link-to-black-form',
		menuImage: '#image-for-black-form',
	},
	{
		name: 'HUBRIS',
		menuLink: '#link-to-hubris',
		menuImage: '#image-for-hubris',
	},
	{
		name: 'Liberte',
		menuLink: '#link-to-liberte',
		menuImage: '#image-for-liberte',
	},
	{
		name: 'Natalie Tonkal',
		menuLink: '#link-to-natalie-tonkal',
		menuImage: '#image-for-natalie-tonkal',
	},
	{
		name: 'NOT CONCEPT',
		menuLink: '#link-to-not-concept',
		menuImage: '#image-for-not-concept',
	},
	{
		name: 'Odor Objects',
		menuLink: '#link-to-odor-objects',
		menuImage: '#image-for-odor-objects',
	},
	{
		name: 'Other Objects',
		menuLink: '#link-to-other-objects',
		menuImage: '#image-for-other-objects',
	},
	{
		name: 'Perfert',
		menuLink: '#link-to-perfert',
		menuImage: '#image-for-perfert',
	},
	{
		name: 'Perfume Opera',
		menuLink: '#link-to-perfume-opera',
		menuImage: '#image-for-perfume-opera',
	},
	{
		name: 'Sands',
		menuLink: '#link-to-sands',
		menuImage: '#image-for-sands',
	},
	{
		name: 'Sub Rosa',
		menuLink: '#link-to-sub-rosa',
		menuImage: '#image-for-sub-rosa',
	},
];

const brandsInMenu = brandsList.filter(brand => {
	return brand.menuLink !== null;
});

brandsInMenu.forEach(brand => {
	let brandLink = document.querySelector(brand.menuLink);
	let brandImage = document.querySelector(brand.menuImage);
	let allImages = document.querySelectorAll('.menu__image');
	brandLink.addEventListener('mouseover', () => {
		allImages.forEach(image => image.classList.add('menu__image_hidden'));
		brandImage.classList.remove('menu__image_hidden');
	});
});





// CATEGORIES MENU

const categoriesMenuImage = document.querySelector('#categories-menu-image');
const categoriesList = [
	{
		name: 'Подвески',
		menuLink: '#link-to-pendals',
		menuImage: '#image-for-pendals',
	},
	{
		name: 'Серьги',
		menuLink: '#link-to-earrings',
		menuImage: '#image-for-earrings',
	},
	{
		name: 'Кольца',
		menuLink: '#link-to-rings',
		menuImage: '#image-for-rings',
	},
	{
		name: 'Браслеты',
		menuLink: '#link-to-bracelets',
		menuImage: '#image-for-bracelets',
	},
	{
		name: 'Каффы',
		menuLink: '#link-to-cuffs',
		menuImage: '#image-for-cuffs',
	},
	{
		name: 'Заколки',
		menuLink: '#link-to-hairpins',
		menuImage: '#image-for-hairpins',
	},
	{
		name: 'Духи',
		menuLink: '#link-to-perfume',
		menuImage: '#image-for-perfume',
	},
	{
		name: 'Твёрдые духи',
		menuLink: '#link-to-solid-perfume',
		menuImage: '#image-for-solid-perfume',
	},
	{
		name: 'Головные уборы',
		menuLink: '#link-to-headwear',
		menuImage: '#image-for-headwear',
	},
	{
		name: 'Одежда',
		menuLink: '#link-to-clothes',
		menuImage: '#image-for-clothes',
	},
];

const categoriesInMenu = categoriesList.filter(category => {
	return category.menuLink !== null;
});

categoriesInMenu.forEach(category => {
	let categoryLink = document.querySelector(category.menuLink);
	let categoryImage = document.querySelector(category.menuImage);
	let allCategories = document.querySelectorAll('.menu__image');
	categoryLink.addEventListener('mouseover', () => {
		allCategories.forEach(image => image.classList.add('menu__image_hidden'));
		categoryImage.classList.remove('menu__image_hidden');
	});
});
