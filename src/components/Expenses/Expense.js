import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
