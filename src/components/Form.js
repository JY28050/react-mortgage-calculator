import React, { useState } from "react";
import FormInputGroup from "./FormInputGroup";
import { FaDollarSign } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

function Form() {
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  }

  function calculateMonthlyPayment() {
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    function yearsToMonths(year) {
      return year * 12;
    }

    setMonthlyPayment(
      percentageToDecimal(interestRate * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );
    console.log(monthlyPayment);
    return monthlyPayment;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormInputGroup
        text="Home Value"
        icon={<FaDollarSign />}
        placeholder="Enter the value of the Home"
        onkeyup={calculateLoanAmount}
        value={homeValue}
        onInput={(e) => setHomeValue(e.target.value)}
      />
      <FormInputGroup
        text="Down Payment"
        icon={<FaDollarSign />}
        placeholder="Enter your funds"
        onkeyup={calculateLoanAmount}
        value={downPayment}
        onInput={(e) => setDownPayment(e.target.value)}
      />
      <FormInputGroup
        text="Loan Amount"
        icon={<FaDollarSign />}
        placeholder="Funds needed"
        readOnly={true}
        value={loanAmount}
      />
      <FormInputGroup
        text="Interest Rate %"
        placeholder="Enter your interest rate"
        value={interestRate}
        onInput={(e) => setInterestRate(e.target.value)}
      />
      <FormInputGroup
        text="Loan Duration (Years)"
        placeholder="Enter your loan duration"
        value={loanDuration}
        onInput={(e) => setLoanDuration(e.target.value)}
      />

      <h4 className="alert alert-info fw-bold">
        Monthly Payment: <BsCurrencyDollar />
        {parseFloat(monthlyPayment.toFixed(2))}
      </h4>

      <button
        type="submit"
        className="btn btn-primary btn-lg w-100 center"
        onClick={calculateMonthlyPayment}
      >
        {" "}
        Calculate{" "}
      </button>
    </form>
  );
}

export default Form;
