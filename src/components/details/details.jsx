import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import Doughnut from "chart.js/auto";
import useTransactions from "../../useTransactions";
import makeStyles from "./styles";

const Details = ({ title }) => {
  const classes = makeStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        {/* <Doughnut data="DATA" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;
