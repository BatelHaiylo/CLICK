import Header from "./components/Header";
import Router from "./router/Router";
import { Box } from "@mui/material";


export default function App() {
  return (
    <Box width="100%">
      <Header />
      <Router />
    </Box>
  );
};