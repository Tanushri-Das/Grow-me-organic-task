import { Box, Grid, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="form-field"
      style={{ height: "30vh" }}
    >
      <Box style={{ maxWidth: 450, margin: "0 auto", textAlign: "center" }}>
        <Typography gutterBottom variant="h5">
          This is my contact page
        </Typography>
      </Box>
    </Grid>
  );
};

export default Contact;
