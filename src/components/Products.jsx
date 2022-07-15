/* eslint-disable jsx-a11y/alt-text */
const Products = () => {
  return (
    <main className="page">
      <section className="clean-block features" style={{ color: "#198754" }}>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                className="img-fluid d-block mx-lg-auto"
                src="assets/img/roll-off-dumpster.png"
                width={700}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Sample Product Page
              </h1>
              <p className="lead">
                Sociosqu elit ultrices, ligula euismod donec semper curabitur
                turpis est. Quisque nostra a tortor sit. Fames in amet ligula
                sollicitudin inceptos in lorem aliquam, viverra mattis. Urna
                arcu posuere mi.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  className="btn btn-primary btn-lg px-4 me-md-2"
                  type="button"
                  style={{ background: "#198754" }}
                >
                  Primary
                </button>
                <button
                  className="btn btn-outline-secondary btn-lg px-4"
                  type="button"
                  style={{ background: "#000000", color: "#ffffff" }}
                >
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
