import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
const App = () => {
  return (
    <div>
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
    </div>
  );
};
export default App;
