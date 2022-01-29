import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import makeStyles from "./styles";

const form = () => {
  const classes = makeStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
        <TextField type="date" label="Date" fullWidth />
      </Grid>
      <Button
        className={classes.button}
        varient="outlined"
        color="primary"
        fullWidth
      >
        Create
      </Button>
    </Grid>
  );
};

export default form;
