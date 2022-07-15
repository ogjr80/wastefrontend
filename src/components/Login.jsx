const Login = () => {
  return (
    <main className="page contact-us-page">
      <section
        className="clean-block clean-form dark"
        style={{ paddingBottom: "0px" }}
      >
        <section className="login-clean">
          <form method="post" style={{ borderTopColor: "#198754" }}>
            <h1
              style={{
                textAlign: "center",
                color: "#198754",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "55px",
              }}
            >
              Login
            </h1>
            <div className="illustration">
              <i className="fas fa-user" style={{ color: "#198754" }} />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                style={{ borderColor: "#198754", background: "#198754" }}
              >
                Log In
              </button>
            </div>
            <a className="forgot" href="#">
              Forgot your email or password?
            </a>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Login;
