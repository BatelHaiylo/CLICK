import { Suspense } from "react";
import { Grid } from "@mui/material";

const LoadingGif = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <Grid container justify="center" alignItems="center" height="100vh" width="100vw">
          <Grid item>
            <img src="https://media.tenor.com/nVsXFtMtBTAAAAAd/loading-buffering.gif" alt="page loading" />
          </Grid>
        </Grid>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
export default LoadingGif