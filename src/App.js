import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/details/details";
import Main from "./components/main/main";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import makeStyles from "./styles";

const app = () => {
  const classes = makeStyles();
  return (
    <div>
      <div>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={4} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense" />
          </Grid>
          <PushToTalkButtonContainer>
            <PushToTalkButton />
          </PushToTalkButtonContainer>
        </Grid>
      </div>
    </div>
  );
};

export default app;
