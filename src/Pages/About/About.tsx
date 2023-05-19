
import { Box, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="form-field"
      style={{ height: "30vh" }}
    >
      <Box
        style={{ maxWidth: 450, margin: "0 auto", textAlign: "center" }}
      >
        <Typography gutterBottom variant="h5">
          This is my about page
        </Typography>
      </Box>
    </Grid>
  );
};

export default About;
