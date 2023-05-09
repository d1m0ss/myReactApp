import "./BurgerMenu.scss";

export const BurgerBtn = () => {
  const chengeStatus = (e: any) => e.target.classList.toggle("active");

  return (
    <div className="burger-btn" onClick={chengeStatus}>
      <div className="burger-btn__dash"></div>
    </div>
  );
};
