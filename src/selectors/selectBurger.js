export const renderBurgerList = (name, number) => {
  let arrBurger = [];
  for (let i = 0; i < number; i++) {
    arrBurger.push(renderBurger(name, i));
  }
  // console.log(arrBurger);
  return arrBurger;
};
const renderBurger = (name, index) => {
  return <BurgerItem key={name + index} name={name} />;
};
const BurgerItem = (props) => {
  return <div className={props.name}></div>;
};

export const calcTotalBurger = (number, price) => {
  let numberArr = Object.values(number);
  let priceArr = Object.values(price);
  let total = 0;
  for (let i = 0; i < numberArr.length; i++) {
    total += numberArr[i] * priceArr[i];
  }
  return total;
};
