let prise;

let country = prompt('Заказ доставки!');
if (country !== null) {
  country = country.toLowerCase();
}

switch (country) {
  case 'китай':
    prise = 100;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'чили':
    prise = 250;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'австралия':
    prise = 170;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'индия':
    prise = 80;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  case 'ямайка':
    prise = 120;
    alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
