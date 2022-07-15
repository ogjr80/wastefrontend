const Registration = () => {
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
              Registration
            </h1>
            <div className="illustration">
              <i className="fas fa-user" style={{ color: "#198754" }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Name&nbsp;</label>
              <input
                className="form-control"
                type="email"
                name="Name"
                placeholder="Enter you name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your surname"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your contact numbers"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary d-block w-100"
                type="submit"
                style={{ borderColor: "#198754", background: "#198754" }}
              >
                Register
              </button>
            </div>
            <a className="forgot" href="#" style={{ color: "rgb(0,128,255)" }}>
              Click if you've already signed up to proceed to login
            </a>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Registration;
