import React from 'react'
import '../component/Footer.css'

function Footer() {
    let copyright = 'Jairo Javier Avila Maury. Copyrigth & copy 2020. Alls rigths reserved.';
    return (
        <footer className="foot bg-dark text-center text-md-right text-white mt-5  ">
            <div className="container">
                <p className="m-0 py-3">
                    <small>{copyright}  </small></p>
            </div>
        </footer>
    )
}
export default Footer;
