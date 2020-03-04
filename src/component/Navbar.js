import React from 'react'
import {Link} from 'react-router-dom'
import '../component/navbar.css'
import Icon from '../assets/img/icon.png'

const Navbar = () => (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container  justify-content-end ">
                <Link className="navbar-brand" to="/Form">
                    <img src={Icon} width="50" height="50" className="d-inline-block align-top rounded-circle" alt="" />PhotoGallery</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#menu" aria-controls="menu" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link active " to="/Form">Upload</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/NewPhoto">Update Photo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/ViewPhotos">View Photo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

export default Navbar;
