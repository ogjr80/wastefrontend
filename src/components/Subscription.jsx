const Subscription = () => {
  return (
    <main className="page pricing-table-page">
      <section className="clean-block clean-pricing dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Subscription Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-4" style={{ marginTop: "30px" }}>
              <div
                className="clean-pricing-item"
                style={{ borderTopColor: "#198754" }}
              >
                <div className="heading">
                  <h3>1 Month</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="features">
                  <h4>
                    <span className="feature">Full Support:&nbsp;</span>
                    <span>No</span>
                  </h4>
                  <h4>
                    <span className="feature">Duration:&nbsp;</span>
                    <span>30 Days</span>
                  </h4>
                  <h4>
                    <span className="feature">Load:&nbsp;</span>
                    <span>10KG</span>
                  </h4>
                </div>
                <div className="price">
                  <h4 style={{ color: "#198754" }}>R25</h4>
                </div>
                <button
                  className="btn btn-outline-primary d-block w-100"
                  type="button"
                  style={{
                    color: "#ffffff",
                    background: "#198752",
                    borderColor: "#198754",
                    borderTopColor: "#198754",
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="col-md-5 col-lg-4" style={{ marginTop: "30px" }}>
              <div
                className="clean-pricing-item"
                style={{ borderTopColor: "#198754" }}
              >
                <div className="ribbon">
                  <span>Best Value</span>
                </div>
                <div className="heading">
                  <h3>6 Months</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="features">
                  <h4>
                    <span className="feature">Full Support:&nbsp;</span>
                    <span>Yes</span>
                  </h4>
                  <h4>
                    <span className="feature">Duration:&nbsp;</span>
                    <span>60 Days</span>
                  </h4>
                  <h4>
                    <span className="feature">Load:&nbsp;</span>
                    <span>50KG</span>
                  </h4>
                </div>
                <div className="price">
                  <h4 style={{ borderColor: "#198751", color: "#198754" }}>
                    R50
                  </h4>
                </div>
                <button
                  className="btn btn-primary d-block w-100"
                  type="button"
                  style={{ background: "#198754" }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="col-md-5 col-lg-4" style={{ marginTop: "30px" }}>
              <div
                className="clean-pricing-item"
                style={{ borderTopColor: "#198754" }}
              >
                <div className="heading">
                  <h3>12 Months</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="features">
                  <h4>
                    <span className="feature">Full Support:&nbsp;</span>
                    <span>Yes</span>
                  </h4>
                  <h4>
                    <span className="feature">Duration:&nbsp;</span>
                    <span>120 Days</span>
                  </h4>
                  <h4>
                    <span className="feature">Load:&nbsp;</span>
                    <span>150KG</span>
                  </h4>
                </div>
                <div className="price">
                  <h4 style={{ borderColor: "#198754", color: "#198754" }}>
                    R150
                  </h4>
                </div>
                <button
                  className="btn btn-outline-primary d-block w-100"
                  type="button"
                  style={{
                    color: "#ffffff",
                    borderColor: "#198754",
                    borderTopColor: "#198755",
                    background: "#198754",
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Subscription;
