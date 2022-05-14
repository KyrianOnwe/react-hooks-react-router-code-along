import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Messages from "./Messages";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
// function App() {
//   return <Home />;
// }

// Step 2. Use <Route> components to define client-side routes in our app

function App({ Route, NavLink, Switch, linkStyles }) {
    return (
      /* add the NavBar component to our App component (ivc) */
      <div>
        <NavBar NavLink={NavLink} linkStyles={linkStyles} />
        <Switch>
          {/* Replaced div with Switch(iiia) */}
          <Route exact path="/">
            {/* Added the term 'exact' above (iia) */}
            <Home />
          </Route>
           {/* Add routing logic (ii) */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/messages" >
            <Messages />
          </Route>
        </Switch>
      </div>  
    );
  }

  export default App;