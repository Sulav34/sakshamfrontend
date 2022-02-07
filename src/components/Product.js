import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import Weekend from '../images/The Weekend.jpg'
import Bruno from '../images/Bruno Mars.jpg';
import David from '../images/David Guetta.jpg';
import Adele from '../images/Adele.jpg';
import PS4 from '../images/ps4.png';
import Psy from '../images/PSY.jpg';
import Axios from 'axios'
import Toplogo from '../images/toplogo.png'

console.log(PS4)
console.log(Weekend);
console.log(Bruno);
console.log(David);
console.log(Toplogo);


export default class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            alert_message: '',
            venue: '',
            ticketrate: '',
            timeperiod: '',
            products: [],
            config: {
                headers: { 'Authorization': "Bearer " + localStorage.getItem('token') }
            }
        }

    }

    componentDidMount() { 
        Axios.get(`http://localhost:3001/good`, this.state.config)
            .then((res) => {
                this.setState({
                    products: res.data
                })
            }).catch((err) => console.log(err.response));

    }
    handleChange = (e) =>
        this.setState({ [e.target.name]: e.target.value })

    Book = (id) => {
        console.log(id);
        this.props.history.push({
            pathname: '/booking',

            state: { Productid: id }
        })

    }
    handleSubmit = (e) => {
        e.preventDefault(); 


    }

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
                  <Link className="nav-link js-scroll-trigger" to="/Contacts">Contacts</Link>
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


                <header className="masthead">
              <div className="container">
                <div className="intro-text">
                  <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" href="#About">Know More</a>
                </div>
              </div>
            </header>

                <section className="bg-light page-section" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="section-heading text-uppercase">Products</h3>
                                <h4 className="section-subheading text-muted">Popular at our site</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img src={PS4} alt="Logo" />;
                                    <h4>Playstation</h4>
                                    <h6>Price 40,000/</h6>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="team-member">
                                <img src={Bruno} alt="Logo" />;
                                    <h4>Samsung</h4>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img src={David} alt="Logo" />;
                                    <h4>Electronics</h4>
                                    <h6>Pirce Rs 15,000-Rs 85000</h6>
                                </div>
                            </div>
                        </div>
                     
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img src={Psy} alt="Logo" />;
                                    <h4>Cell Phones & Accessories</h4>
                                    <h6>Price Rs 20,000- Rs 135,000</h6>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="team-member">
                                <img src={Adele} alt="Logo" />;
                                    <h4>Home & Kitchen</h4>
                                    <h6>Price Rs 18,000-Rs 45,000</h6>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                <img src={Weekend} alt="Logo" />;
                                    <h4>Musical Instruments</h4>
                                    <h6>Price Rs 25,000- Rs 95,000</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <p className="large text-muted"></p>
                            </div>
                        </div>


                        <div style={{ height: "55vh" }}>


                            <hr />

                            <Table>
                                <thead>
                                    <tr>

                                        <th>No.</th>
                                        <th>Products Name</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products.map(Product => (

                                        <tr>

                                            <td key={Product._id}>{Product.sn}</td>
                                            <td key={Product._id}>{Product.productname}</td>
                                            <td key={Product._id}>{Product.productprice}</td>


                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
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
            </div>
        );
    }
}




