import React from 'react';
import './Navbar.css';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navigation'>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>


                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <NavLink class="navbar-brand" to='/home'>ResumeBuilder</NavLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <NavLink class="nav-link active" aria-current="page" to='/home'>Home</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to='/coverLattter'>CoverLatters</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to='/template'>Templates</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink class="nav-link" to='/about'>About Us</NavLink>
                                        </li>
                                    </ul>
                                    <form class="d-flex">

                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;