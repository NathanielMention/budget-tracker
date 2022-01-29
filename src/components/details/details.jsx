import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import makeStyles from "./styles";

const details = ({ title }) => {
  const classes = makeStyles();
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data="DATA" /> */}
      </CardContent>
    </Card>
  );
};

export default details;
