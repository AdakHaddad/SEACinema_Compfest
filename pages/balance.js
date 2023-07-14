import React, { useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState(0);

  const handleTopUp = () => {
    console.log("Balance topped up");
  };

  const handleWithdraw = () => {
    console.log("Balance withdrawn");
  };

  return (
    <div>
      <h2>Balance</h2>
      <p>Current Balance: {balance}</p>
      <button onClick={handleTopUp}>Top Up</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Balance;
