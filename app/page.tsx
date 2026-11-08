export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-wrap">
          <div className="brand">
            VZen<span>Point</span>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="badge">A VZenPoint View</div>
              <h1>
                Own us <span className="gradient">for better tomorrow.</span>
              </h1>
              <p>
                Creating our own identity in providing services for better
                tomorrow.
              </p>
              <div className="buttons">
                <a href="#" className="btn btn-primary">
                  Join Us.
                </a>
                <a href="https://vzenpoint.com" className="btn btn-secondary">
                  Contact Us.
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        We are at <strong>vzenpoint.com</strong>
        <br />
        Powered by VZenPoint.
      </footer>
    </>
  );
}
