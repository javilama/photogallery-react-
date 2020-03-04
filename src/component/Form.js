import React, { Component } from 'react'
import '../component/Form.css'
import Circulos from '../assets/img/circulosVector.svg'
import Navbar from './Navbar'
import Footer from './Footer'

class Form extends Component {
    state = { }
handleSubmit = e => {
e.preventDefault ()
console.log(this.state)
}

    handleChange = e=> {
             this.setState({
                 [e.target.name]: e.target.value
             })
    }
    render() {
        return (
            <div>
                < Navbar/>
                <h1 className="display-4 text-center mt-5"  > choose your photo and upload it!!</h1>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-12 col-md-5 pb-5">
                            <div className="conainer" >
                                <img src={Circulos} width="1000" height="1000" className="img img-fluid mt-5"  alt="..."/>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mt-5 pt-5 ">
                            <form onSubmit = {this.handleSubmit}  >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"  ><h5>Title</h5></label>
                                    <input type="text" className="form-control"  name="title" 
                                     onChange={this.handleChange}
                                     value={this.state.title} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" ><h5> Description </h5> </label>
                                    <textarea type="text" className="form-control" name="description" 
                                    onChange={this.handleChange}
                                    value={this.state.description} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" > <h5>Photo</h5></label>
                                    <input type="text" className="form-control" name="img" 
                                    onChange={this.handleChange}
                                    value={this.state.img} />
                                </div>
                                <button type="submit" className="btn btn-primary pt-2 float-right  "><h5>Add</h5></button>
                            </form>
                        </div>

                    </div>
                </div>
                < Footer/>
            </div>
        )
    }
}
export default Form;
