import Website from "./pages/Website.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout.jsx";
import Properties from "./pages/Properties/Properties.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "../src/context/UserDetailsContext.js"
import UserDetailContext from "../src/context/UserDetailsContext.js";

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
    <MantineProvider >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />{" "}
                  {/*if there is any Id appended after the "/properties" path then set path as <Property/> or else the index default <Properties/> */}
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools intialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
