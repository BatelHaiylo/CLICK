import { Suspense } from "react";
import { Grid, Box } from "@mui/material";

const LoadingGif = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <Grid>
          <Grid item width="100vw" flex justifyContent="center" container>
            <img
              src="https://media.tenor.com/nVsXFtMtBTAAAAAd/loading-buffering.gif"
              alt="page loading"
            />
          </Grid>
        </Grid>
      }
    >
      <Box marginLeft="5%">
        <Component {...props} />
      </Box>
    </Suspense>
  );
};
export default LoadingGif;