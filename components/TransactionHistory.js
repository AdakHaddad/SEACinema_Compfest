import React from "react";

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>Booker: {transaction.booker}</p>
          <p>Movie: {transaction.movie}</p>
          <p>Seat Numbers: {transaction.seatNumbers.join(", ")}</p>
          <p>Total Cost: {transaction.totalCost}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
