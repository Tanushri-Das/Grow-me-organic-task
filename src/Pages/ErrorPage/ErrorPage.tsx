import { Grid } from "@mui/material";

const ErrorPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt="Error"
        />
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
