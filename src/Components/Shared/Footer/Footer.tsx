import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import { GitHub, Facebook, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/tanushri-das/";
  const githubUrl = "https://github.com/Tanushri-Das";
  const facebookUrl = "https://www.facebook.com/tanushri.das01?mibextid=ZbWKwL";

  return (

    <footer style={{ backgroundColor: "#1976d2", color: "#fff", padding: "30px 0"}}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <div style={{margin:'0 auto'}}>
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "white" }}
            >
              Copyright © 2023 All rights reserved by Tanushri Das
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div style={{ textAlign: "center", color: "white" }}>
            <IconButton
              style={{ color: "white" }}
              component="a"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn style={{ fontSize: "35px" }} />
            </IconButton>
            <IconButton
              style={{ color: "white" }}
              component="a"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub style={{ fontSize: "35px" }} />
            </IconButton>
            <IconButton
              style={{ color: "white" }}
              component="a"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook style={{ fontSize: "35px" }} />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
