import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/details/details";
import Main from "./components/main/main";
import makeStyles from "./styles";

const app = () => {
  const classes = makeStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default app;
