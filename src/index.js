import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
//{ Switch } added (iii)
//{ NavLink } added (iv)
import App from "./components/App";



/* Add basic styling for NavLinks (iva)*/
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


// Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
// Add components to reactDom. render(ivd)
ReactDOM.render(
  <BrowserRouter>
    <App Route={Route} NavLink={NavLink} Switch={Switch} linkStyles={linkStyles}/>
{/* (*ivd) */}
    {/* <NavBar />
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch> */}

  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));
