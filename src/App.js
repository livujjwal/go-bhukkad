import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
const App = () => {
  const [userName, setUserName] = useState("Ujjwal Singh");

  return (
    <div>
      {/* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> */}
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<RestaurantMenu />}
              errorElement={<Error />}
            >
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* </UserContext.Provider> */}
    </div>
  );
};
export default App;
