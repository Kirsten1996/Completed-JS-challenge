import fullName from './components/fullname';
import {getValue} from './components/user';


window.addEventListener('DOMContentLoaded', function () {
  console.log('document has loaded');

  const form = document.getElementById('form');

  function logger(name, surname) {
    console.log("name: ", name);
    console.log("surname: ", surname);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let name = getValue('name');
    let surname = getValue('surname');
    logger(name, surname,);
    fullName(name, surname);
  });
});



