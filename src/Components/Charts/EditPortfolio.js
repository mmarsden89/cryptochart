import React, { useState, useEffect } from "react";
import { getAllCoins } from "./api/index.js";
import EditPortfolioForm from "./EditPortfolioForm.js";

const EditPortfolio = () => {
  return (
    <div>
      <EditPortfolioForm />
    </div>
  );
};

export default EditPortfolio;
