const About = () => {
  return (
    <main className="page">
      <section className="clean-block about-us">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img
                  className="card-img-top w-100 d-block"
                  src="assets/img/avatars/avatar1.jpg"
                />
                <div className="card-body info">
                  <h4 className="card-title">John Smith</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="icons">
                    <a href="#">
                      <i className="icon-social-facebook" />
                    </a>
                    <a href="#">
                      <i className="icon-social-instagram" />
                    </a>
                    <a href="#">
                      <i className="icon-social-twitter" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="icons">
                    <a href="#">
                      <i className="icon-social-facebook" />
                    </a>
                    <a href="#">
                      <i className="icon-social-instagram" />
                    </a>
                    <a href="#">
                      <i className="icon-social-twitter" />
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="icons">
                    <a href="#">
                      <i className="icon-social-facebook" />
                    </a>
                    <a href="#">
                      <i className="icon-social-instagram" />
                    </a>
                    <a href="#">
                      <i className="icon-social-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
