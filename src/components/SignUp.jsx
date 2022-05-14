function SignUp() {
    return (
      <div>
        <h1>Sign Up here!</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="newPassword" placeholder="New Password" />
          </div>
          <div>
            <input type="password" name="confPassword" placeholder="Confirm Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}

export default SignUp;