import slide1 from "../img/pexels-vladislav-vasnetsov-2682683.jpg";
import slide2 from "../img/pexels-yogendra-singh-2480807.jpg";
import slide3 from "../img/pexels-yogendra-singh-2480807.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <main className="page landing-page">
          <div
            className="carousel slide"
            data-bs-ride="carousel"
            id="carousel-3"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100 d-block"
                  src="img/pexels-vladislav-vasnetsov-2682683.jpg"
                  alt={"Slide 1"}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 d-block"
                  src="assets/img/pexels-yogendra-singh-2480807.jpg"
                  alt={"Slide 2"}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 d-block"
                  src="assets/img/pexels-yogendra-singh-2480807.jpg"
                  alt={"Slide 3"}
                />
              </div>
            </div>
            <div>
              <a
                className="carousel-control-prev"
                href="#carousel-3"
                role="button"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-3"
                role="button"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carousel-3"
                data-bs-slide-to={0}
                className="active"
              />
              <li data-bs-target="#carousel-3" data-bs-slide-to={1} />
              <li data-bs-target="#carousel-3" data-bs-slide-to={2} />
            </ol>
          </div>
          <section style={{ marginTop: "70px" }}>
            <div className="container">
              <div className="row">
                <div
                  className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4"
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    className="bg-light border rounded shadow card"
                    data-bss-hover-animate="pulse"
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/residential-waste.png"
                      alt={"waste-img"}
                    />
                    <div className="card-body">
                      <h3
                        className="card-title"
                        style={{
                          fontFamily: "Antic, sans-serif",
                          color: "rgb(81,87,94)",
                        }}
                      >
                        Residential Waste Pickup
                      </h3>
                      <p
                        className="card-text"
                        style={{
                          fontFamily: "Antic, sans-serif",
                          color: "rgb(81,87,94)",
                        }}
                      />
                      <p id="lorem">
                        WM's curbside trash and recycling pickup is the best
                        choice for your home, and for the environment.
                      </p>
                      <button
                        className="btn btn-outline-success"
                        type="button"
                        style={{
                          fontWeight: "normal",
                          fontFamily: "Antic, sans-serif",
                        }}
                      >
                        Order Pickup
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4"
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    marginRight: "0px",
                    marginBottom: "0px",
                  }}
                >
                  <div
                    className="bg-light border rounded shadow card"
                    data-bss-hover-animate="pulse"
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/business-waste.png"
                      alt={"business-waste-img"}
                    />
                    <div className="card-body">
                      <h3
                        className="card-title"
                        style={{
                          fontFamily: "Antic, sans-serif",
                          color: "rgb(81,87,94)",
                        }}
                      >
                        Business Waste Pickup
                      </h3>
                      <p id="lorem">
                        Take care of business, we'll take care of the waste.
                        Choose WM for reliable, responsible business waste
                        pickup.
                      </p>
                      <button
                        className="btn btn-outline-success"
                        type="button"
                        style={{
                          fontWeight: "normal",
                          fontFamily: "Antic, sans-serif",
                        }}
                      >
                        Order Pickup
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4"
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                  }}
                >
                  <div
                    className="bg-light border rounded shadow card"
                    data-bss-hover-animate="pulse"
                  >
                    <img
                      className="card-img-top"
                      src="assets/img/roll-off-dumpster.png"
                    />
                    <div className="card-body">
                      <h3
                        className="card-title"
                        style={{
                          fontFamily: "Antic, sans-serif",
                          color: "rgb(81,87,94)",
                        }}
                      >
                        Roll-Off Dumpsters
                      </h3>
                      <p
                        className="card-text"
                        style={{
                          fontFamily: "Antic, sans-serif",
                          color: "rgb(81,87,94)",
                        }}
                      />
                      <p id="lorem">
                        From quick cleanouts to major renovations, WM has a
                        dumpster that's perfect for your project.
                      </p>
                      <button
                        className="btn btn-outline-success"
                        type="button"
                        style={{
                          fontWeight: "normal",
                          fontFamily: "Antic, sans-serif",
                        }}
                      >
                        Order Pickup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container my-5">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1">
                    <br />
                    Welcome Advanced Disposal Customers
                    <br />
                    <br />
                  </h1>
                  <p className="lead mb-4" style={{ borderColor: "#198754" }}>
                    <br />
                    We're pleased to announce that Waste Management has acquired
                    Advanced <br />
                    Disposal. Current Advanced Disposal customers will migrate
                    to WM systems
                    <br /> in phases over the next 12 months.
                    <br />
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button
                      className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                      type="button"
                      style={{
                        color: "#fffff",
                        background: "#198754",
                        border: "#198754",
                      }}
                    >
                      Find out more
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                  <img
                    className="rounded-lg-3"
                    src="assets/img/pexels-thom-gonzalez-4727214.jpg"
                    width={720}
                    style={{ height: "550px", width: "455px" }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="clean-block features">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-color-primary" style={{ color: "#198754" }}>
                  Do More With Us
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quam urna, dignissim nec auctor in, mattis vitae leo.
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-5 feature-box">
                  <i className="icon-star icon" style={{ color: "#198754" }} />
                  <h4>Bootstrap 5</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
                <div className="col-md-5 feature-box">
                  <i
                    className="icon-pencil icon"
                    style={{ color: "#198754" }}
                  />
                  <h4>Customizable</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
                <div className="col-md-5 feature-box">
                  <i
                    className="icon-screen-smartphone icon"
                    style={{ color: "#198754" }}
                  />
                  <h4>Responsive</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
                <div className="col-md-5 feature-box">
                  <i
                    className="icon-refresh icon"
                    style={{ color: "#198754" }}
                  />
                  <h4>All Browser Compatibility</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="clean-block about-us">
            <div className="container">
              <div className="block-heading">
                <h2 className="text-color-primary">Our Team</h2>
                <p>We have a team of talented individuals.</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4">
                  <div className="card text-center clean-card">
                    <img
                      className="card-img-top w-100 d-block"
                      src="assets/img/avatars/avatar1.jpg"
                      alt={"avatar-img"}
                    />
                    <div className="card-body info">
                      <h4 className="card-title">John Smith</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <div className="icons">
                        <a href="#">
                          <i
                            className="icon-social-facebook"
                            style={{ color: "#198754" }}
                          />
                        </a>
                        <a href="#">
                          <i
                            className="icon-social-instagram"
                            style={{ color: "#198754" }}
                          />
                        </a>
                        <a href="#">
                          <i
                            className="icon-social-twitter"
                            style={{ color: "#198754" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card text-center clean-card">
                    <img
                      className="card-img-top w-100 d-block"
                      src="assets/img/avatars/avatar2.jpg"
                    />
                    <div className="card-body info">
                      <h4 className="card-title">Robert Downturn</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <div className="icons">
                        <a href="#">
                          <i
                            className="icon-social-facebook"
                            style={{ color: "#198754" }}
                          />
                        </a>
                        <a href="#">
                          <i
                            className="icon-social-instagram"
                            style={{ color: "#198754" }}
                          />
                        </a>
                        <a href="#">
                          <i
                            className="icon-social-twitter"
                            style={{ color: "#198754" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card text-center clean-card">
                    <img
                      className="card-img-top w-100 d-block"
                      src="assets/img/avatars/avatar3.jpg"
                    />
                    <div className="card-body info">
                      <h4 className="card-title">Ally Sanders</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                      <div className="icons">
                        <a href="#">
                          <i
                            className="icon-social-facebook"
                            style={{ color: "#198754" }}
                          />
                        </a>
                        <a href="#">
                          <i
                            className="icon-social-instagram"
                            style={{ color: "#198754" }}
                          />
                        </a>
                        <a href="#">
                          <i
                            className="icon-social-twitter"
                            style={{ color: "#198754" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
