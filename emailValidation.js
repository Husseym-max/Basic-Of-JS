//Email Validation
//Input email
//Length of email >11
//after . only 2 or 3 characters allowed
//minimum 3 chars between @ and .
const email = prompt('Enter Your Email Address');
const emailLength = email.length;
console.log(emailLength);
const dotIndex = email.lastIndexOf('.');
const atIndex = email.lastIndexOf('@');
const lastIndex = emailLength - 1;
if (emailLength < 11 || lastIndex - dotIndex < 2 || lastIndex - dotIndex > 3 || dotIndex - atIndex < 3) {
    console.log('Invalid Email');
} else {
    console.log('Valid Email');
}
