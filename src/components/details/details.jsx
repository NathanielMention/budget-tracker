import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import useTransactions from "../../useTransactions";
import makeStyles from "./styles";
Chart.register(...registerables);

const Details = ({ title }) => {
  const classes = makeStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut type="doughnut" data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
