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
