import { save, getItemKey, removeKey } from './storage.js';
import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';
let formData = getItemKey(FEEDBACK_FORM_STATE) || {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(saveValue, 500));

function saveValue(e) {
  formData[e.target.name] = e.target.value;
  save(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}



function localStorageValue() {
  const exam = getItemKey(FEEDBACK_FORM_STATE);
  if (exam) {
    if (exam.email) {
      form.email.value = exam.email;
    }
    if (exam.message) {
      form.message.value = exam.message;
    }
  }
}
localStorageValue();

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  removeKey(FEEDBACK_FORM_STATE);
  const formData = new FormData(form);
  const valuesForm = Object.formEntries(formData.entries());
  e.currentTarget.reset();
  console.log(valuesForm);
}
form.addEventListener('submit', handleSubmit);
