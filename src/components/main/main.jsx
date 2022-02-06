import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { BudgetTrackerContext } from "../../context/context";
import Form from "./form/form";
import makeStyles from "./styles";
import List from "./list/list";

const Main = () => {
  const classes = makeStyles();
  const { balance } = useContext(BudgetTrackerContext);
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
      <CardContent>
        <Typography align="center" varient="h5">
          Total Balance ${balance}
        </Typography>
        <Typography
          varient="subtitle1"
          style={{ lineheight: "1.5em", marginTop: "20px" }}
        >
          {/* infocard component */}
          try saying: add income for $100 in category salary for Monday.
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spaceing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
