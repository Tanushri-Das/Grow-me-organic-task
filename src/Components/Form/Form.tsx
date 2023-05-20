import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const defaultFormData = {
  name: "",
  phone: "",
  email: "",
};

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormData);
  const [errorMessage, setErrorMessage] = useState("");

  const { name, phone, email } = formData;

  const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all required information is provided
    if (!name || !phone || !email) {
      setErrorMessage('Please enter all the required details otherwise you will not be able to access the next page.');
      return;
    }

    console.log(formData);
    setFormData(defaultFormData);
    localStorage.setItem("formData", JSON.stringify(formData));
    navigate('/listofdata');
  };

  return (
    <Grid className="form-field" style={{margin:'70px 0'}}>
      <Card style={{ maxWidth: 450,padding:'20px 5px',margin: "0 auto" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Please fill up this form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder="Name"
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                  value={name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  id="phone"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                  value={phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                {errorMessage && (
                  <Typography color="error" variant="body2">
                    {errorMessage}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button style={{border:'none',outline:'none'}}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Form;
