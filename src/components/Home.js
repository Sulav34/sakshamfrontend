import React, {Component} from 'react'
import {NavDropdown, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../assets/css/style.css'


export default class Home extends Component{
    render(){
        return(
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
                      <Link className="nav-link js-scroll-trigger" to="/Contacts">Contact Us</Link>
                    </li>
    
                     <NavDropdown title="Account" id="basic-nav-dropdown">
                      <NavDropdown.Item><Link to="/Login">Login Here</Link></NavDropdown.Item>
                      <NavDropdown.Item> <Link to="/register">Register Now</Link></NavDropdown.Item>
                    </NavDropdown>
    
                  </ul>
                </div>
              </div>
            </nav>
    
    
            <header className="masthead">
              <div className="container">
                <div className="intro-text">
                  <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="#About">Know More</a>
                </div>
              </div>
            </header>
    
    
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
                    <p className="text-muted">Daily deals product lines include several media (books, DVDs, music CDs, videotapes, and software), apparel, products, consumer electronics, beauty products, gourmet food, groceries, health and personal-care items, industrial & scientific supplies, kitchen items, , lawn and garden items, musical instruments, sporting goods, tools, automotive items and toys/games. </p>
                  </div>
                  <div className="col-md-4">
                  
                    <h4 className="service-heading">Delivery</h4>
                    <p className="text-muted">To reduce costs, Daily Deals has been shifting away from traditional shipping providers for last mile delivery. The company owns over 30,000 delivery vans, which are sublet to small companies, who choose to work exclusively with the company under its Amazon Logistics program.[70] In 2019, 100,000 electric delivery vans were ordered by Daily deals, to be delivered between 2021 and 2030.[
</p>
                  </div>
                  <div className="col-md-4">
                  
                    <h4 className="service-heading">Home Services</h4>
                    <p className="text-muted">In March 2015 Daily Deals launched a new on-demand service, Daily Deals Home Services, aimed at offering homeowners a marketplace for professional services such as plumbing, electrical, audio/visual installation, and lawn services (home improvement services). The Home Services category designed to make finding a specialist easy by verifying that providers are properly licensed and insured for the job. 
</p>
                  </div>
                </div>
              </div>
            </section>
                 
          <section className="page-section" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  
                  <Button variant="primary" href="/contacts">Keep in Touch</Button>
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
                          <i className="fa fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                      <li className="list-inline-item">
                        <a href="#something">Privacy Policy &</a>
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