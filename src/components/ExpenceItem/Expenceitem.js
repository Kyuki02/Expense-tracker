import "./ExpenceItem.css";

function ExpenceItem() {
  const expenceDate = new Date(2021, 2, 28);
  const expenceTitle = "Car Insurance";
  const expenceAmount = 294.67;
    return (
    <div className="expense-item">
      <div>{expenceDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenceTitle}</h2>
        <div className="expense-item__price">${expenceAmount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
