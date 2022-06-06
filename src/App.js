import { Home } from "./pages/home/Home";
import { List2 } from "./pages/list2/List2";
import { Login } from "./pages/login/Login";
import { New } from "./pages/new/New";
import { Single } from "./pages/single/Single";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";
import { useState, useContext } from "react";
import "./pages/style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List2 />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new user" />}
              />
              <Route path=":userid" element={<Single />} />
            </Route>
            <Route path="products">
              <Route index element={<List2 />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add new product" />}
              />
              <Route path=":productid" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
