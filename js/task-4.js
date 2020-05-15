const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let input = prompt('Cколько дроидов вы хотите купить?');

if (input === null) {
  console.log('Отменено пользователем!');
} else {
  let num = Number(input);
  totalPrice = num * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    let rest = credits - totalPrice;
    console.log(
      `Вы купили ${num} дроидов, на счету осталось ${rest} кредитов.`,
    );
  }
}
