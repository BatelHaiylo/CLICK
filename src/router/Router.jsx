import { Route, Routes } from "react-router-dom";
import { Home, UserInfo, NotFound } from "./lazyLoading";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Home />
        }
      />
      <Route path="/user/:id" element={<UserInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
