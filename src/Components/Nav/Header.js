import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>Shivam Vidhyalay</h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <Link to={"/"} class="nav-item nav-link active">Home</Link>
                    <Link to={"/about"} class="nav-item nav-link">About Us</Link>
                    <Link to={"/classses"} class="nav-item nav-link">Classes</Link>
                    <div class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a href="facility.html" class="dropdown-item">School Facilities</a>
                            <a href="team.html" class="dropdown-item">Popular Teachers</a>
                            <a href="call-to-action.html" class="dropdown-item">Become A Teachers</a>
                            <a href="appointment.html" class="dropdown-item">Make Appointment</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item">404 Error</a>
                        </div>
                    </div>
                    <Link to={"/contact-us"} class="nav-item nav-link">Contact Us</Link>
                </div>
                <a href class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i
                    class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>

    </>
}

export default Header