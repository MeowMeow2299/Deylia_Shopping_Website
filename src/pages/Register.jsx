const Register = () => {
  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default Register;