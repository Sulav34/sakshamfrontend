import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BOB from '../images/B.O.B.jpg';
import Bruno from '../images/Bruno Mars.jpg';
import David from '../images/David Guetta.jpg';
import Toplogo from '../images/toplogo.png'
console.log(BOB);
console.log(Bruno);
console.log(David);
console.log(Toplogo);

export default class Dashboard extends Component {
  render() {
    return (

      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Daily Deals</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
            <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/dashboard">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/booking">Booking</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Product">All Products</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Contacts">Contacts Us</Link>
                </li>

                <button className='btn btn-warning' size="sm" onClick={() => {
                                    localStorage.removeItem('token');
                                    this.props.history.push('/');
                                }}>
                                    Logout
                                </button>


              </ul>
            </div>
          </div>
        </nav>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Welcome to Daily Deals </h2>
                <a className="btn btn-danger btn-xl text-uppercase js-scroll-trigger" href="#About">Know More</a>

              </div>
            </div>

          </div>

        </section>
        <section className="page-section" id="About">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Available at our site</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">

                <h4 className="service-heading">Retail goods</h4>
                <p className="text-muted">Daily deals product lines include several media (books, DVDs, music CDs, videotapes, and software), apparel, products, consumer electronics, beauty products, gourmet food, groceries, health and personal-care items, industrial & scientific supplies, kitchen items, , lawn and garden items, musical instruments, sporting goods, tools, automotive items and toys/games</p>
              </div>
              <div className="col-md-4">

                <h4 className="service-heading">Delivery</h4>
                <p className="text-muted">To reduce costs, Daily Deals has been shifting away from traditional shipping providers for last mile delivery. The company owns over 30,000 delivery vans, which are sublet to small companies, who choose to work exclusively with the company under its Amazon Logistics program.[70] In 2019, 100,000 electric delivery vans were ordered by Daily deals, to be delivered between 2021 and 2030</p>
              </div>
              <div className="col-md-4">

                <h4 className="service-heading"> Home Services</h4>
                <p className="text-muted">In March 2015 Daily Deals launched a new on-demand service, Daily Deals Home Services, aimed at offering homeowners a marketplace for professional services such as plumbing, electrical, audio/visual installation, and lawn services (home improvement services). The Home Services category designed to make finding a specialist easy by verifying that providers are properly licensed and insured for the job. .</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="section-heading text-uppercase">Popular Products</h3>
                <h4 className="section-subheading text-muted">WIth special discounts</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                <img src={Bruno} alt="Logo" />;
                  <h4>Bruno Mars</h4>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="team-member">
                <img src={David} alt="Logo" />;
                  <h4>David Guetta</h4>
                </div>
                <Button variant="primary" href="/Product">More</Button>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                 <img src={BOB} alt="Logo" />;
                  <h4>B.O.B</h4>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted"></p>
              </div>
            </div>
          </div>
        </section>



        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">And enjoy our services. You are always welcome at our site and if their is any queries please get In touch</h3>
                <Button variant="primary" href="/Inquiry">keep in Touch</Button>
              </div>


            </div>

          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
              <span className="copyright">Copyright &copy; Daily Deals 2022 </span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i className="fa fa-Instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#something">Privacy Policy </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div >
    );
  }
}