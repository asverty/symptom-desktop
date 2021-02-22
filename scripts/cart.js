// закрываем меню и формы кликом по основному разделу
// (а кнопке "корзина" возвращаем овал)
document.addEventListener('keydown', event => {
	if (event.key == 'Escape') {
    hideAllPopups();
    cartOutline.classList.remove('header__button-outline_hidden');
  };
});

// закрываем меню и формы кликом по основному разделу
// (а кнопке "корзина" возвращаем овал)
main.addEventListener('click', () => {
  hideAllPopups();
  cartOutline.classList.remove('header__button-outline_hidden');
});





// ВАЛИДАЦИЯ КОРЗИНЫ

const orderFormValidator = new FormValidatorExtended('#order-form');
orderFormValidator.enableValidation();