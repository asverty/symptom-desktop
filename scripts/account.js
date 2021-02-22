// PROFILE VALIDATION

class profileFormValidator extends FormValidator {

  constructor(formSelector) {
    super(formSelector);
    this._editButton = this._form.querySelector('#profile-edit-button');
    this._nameInput = document.querySelector('#profile-name');
    this._name = this._nameInput.value;
    this._surnameInput = document.querySelector('#profile-surname');
    this._surname = this._surnameInput.value;
    this._nicknameInput = document.querySelector('#profile-nickname');
    this._nickname = this._nicknameInput.value;
    this._emailInput = document.querySelector('#profile-email');
    this._email = this._emailInput.value;
    this._passwordInput = document.querySelector('#profile-password');
    this._password = this._passwordInput.value;
  }

  enableValidation() {
    super.enableValidation();
    this._editButton.addEventListener('click', () => this._unlockForm());
  }

  _unlockForm() {
    this._editButton.classList.add('hollow-button_hidden');
    this._submitButton.classList.remove('black-button_hidden');
    this._inputs.forEach(input => {
      input.value = '';
      input.removeAttribute('readonly');
    });
    this._toggleButtonState();
  }

  resetForm() {
    this._editButton.classList.remove('hollow-button_hidden');
    this._submitButton.classList.add('black-button_hidden');
    this._inputs.forEach(input => {
      input.setAttribute('readonly', true);
    });
    this._nameInput.value = this._name;
    this._surnameInput.value = this._surname;
    this._nicknameInput.value = this._nickname;
    this._emailInput.value = this._email;
    this._passwordInput.value = this._password;
    this.resetValidation();
  }
}

const profileValidator = new profileFormValidator('#profile');
profileValidator.enableValidation();





// PAGE SWITCHER

const profile = document.querySelector('#profile');
const orders = document.querySelector('#orders');
const profileSwitcher = document.querySelector('#switcher-profile');
const ordersSwitcher = document.querySelector('#switcher-orders');

function showProfile() {
  profile.classList.remove('profile_hidden');
  orders.classList.add('acc-orders_hidden');
}

function showOrders() {
  profile.classList.add('profile_hidden');
  orders.classList.remove('acc-orders_hidden');
}

profileSwitcher.addEventListener('click', () => showProfile());
ordersSwitcher.addEventListener('click', () => {
  profileValidator.resetForm();
  showOrders();
});