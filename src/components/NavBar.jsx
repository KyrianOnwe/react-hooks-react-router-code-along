/* define the NavBar component (ivb) */
function NavBar({ NavLink, linkStyles }) {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
        {/* Try adding signup and messages components, by hand (v.) */}
        <NavLink
          to="/signup"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Sign Up!
        </NavLink>
        <NavLink
          to="/messages"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Messages
        </NavLink>
      </div>
    );
  }

  export default NavBar