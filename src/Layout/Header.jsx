import { CartButton } from ".";
import classes from "./Header.module.css";


export const Header = (props) => {
  return (
    <>
      <div className={classes.headerContainer}>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
          <CartButton onClick={props.onShowCart}/>
        </header>
      </div>
      <div className={classes["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg"
          alt="A table full of delicious food!"
        />
      </div>
    </>
  );
};
