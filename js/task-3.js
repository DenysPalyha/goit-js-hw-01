const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt('Ведите пароль!');
if (userInput === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (ADMIN_PASSWORD === userInput) {
  message = 'Добро пожаловать!';
  alert(message);
} else if (ADMIN_PASSWORD !== userInput) {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}
console.log(ADMIN_PASSWORD === userInput);
