let prise;

let country = prompt("Заказ доставки!");
if (country !== null) {
  country = country.toLowerCase();
}

switch (country) {
  case "китай":
    prise = 100;
    break;

  case "чили":
    prise = 250;
    break;

  case "австралия":
    prise = 170;
    break;

  case "индия":
    prise = 80;
    break;

  case "ямайка":
    prise = 120;
    break;

  default:
    prise = -1;
}

if (prise !== -1) {
  country = country.charAt(0).toUpperCase() + country.substr(1).toLowerCase();
  alert(`Доставка в ${country} будет стоить ${prise} кредитов`);
} else {
  alert("В вашей стране доставка не доступна");
}


