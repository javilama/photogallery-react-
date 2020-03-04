import React, { Component } from 'react'
import Img from '../assets/img/minions.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

class NewPhoto extends Component {
    render() {
        return (
        <div>


            <Navbar/>
            <div className="container  mt-5 pt-5 "  >
                <h1 className="display-4 text-center my-4 "  > change you want here!!</h1>
                <br/>

                <div className="row  justify-content-center">
                    <div className="col-12 col-md-4 card mt-2">
                        {/* <div className="card"> */}
                            <img src={Img} className="card-img-top mt-2 " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>

                        </div>

                        {/* <!-- .::FORM::. --> */}

                        <div className="col-12 col-md-4 mx-4 border-left align-self-center">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1"><h5>Title</h5></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1"> <h5> Description</h5></label>
                                    <textarea type="text" className="form-control" id="exampleInputText" />
                                </div>

                                <button type="submit" className="btn btn-primary float-right"><h5>Add</h5></button>
                            </form>

                        </div>
                    </div>
                </div>
                < Footer/>
        
        </div>
           
        )
    }
}
export default NewPhoto
