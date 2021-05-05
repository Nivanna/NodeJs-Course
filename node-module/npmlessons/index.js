const validator = require('validator');

let useremail = 'nivannavangmail.com';

//return boolean
const checkIsUserEmail = validator.isEmail(useremail);

console.log(checkIsUserEmail);