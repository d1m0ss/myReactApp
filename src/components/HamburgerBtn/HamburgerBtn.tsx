import "./HamburgerBtn.scss";

export const HamburgerBtn = () => {
  const chengeStatus = (e: any) => e.target.classList.toggle("active");

  return (
    <div className="hamburger-btn" onClick={chengeStatus}>
      <div className="hamburger-btn__dash"></div>
    </div>
  );
};
