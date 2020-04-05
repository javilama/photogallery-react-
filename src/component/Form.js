import React, { Component } from 'react'
import '../component/Form.css'
import Circulos from '../assets/img/circulosVector.svg'
import Navbar from './Navbar'
import Footer from './Footer'


const URL = 'http://localhost:3000/photo';
class Form extends Component {
    state = { }
handleSubmit = async (e) => {
e.preventDefault ()
console.log(this.state)
try {
    let formData = new FormData();
    let name = this.state.title
    let detail = this.state.detail
    let img = document.querySelector("input[type='file']");
    formData.append('name',name);
    formData.append('detail',detail);
    formData.append('img',img.files[0]);
    let config = {
        method: 'POST',
        body: formData 
    }
    console.log(formData);
    let res = await fetch(URL, config)
    let json = await res.json()
    console.log(json);
}catch {

}

}


    handleChange = (e) => {
             this.setState({
                 [e.target.name]: e.target.value
             })
             console.log(e.target.value)
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
                                    <label htmlFor="title" >Title</label>
                                    <input type="text" className="form-control"  name="title" 
                                     onChange={this.handleChange}
                                     value={this.state.value} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" >Description </label>
                                    <textarea type="text" className="form-control" name="detail" 
                                    onChange={this.handleChange}
                                    value={this.state.value} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="img" >Photo</label>
                                    <input type="file" className="form-control" name="img" 
                                    onChange={this.handleChange}
                                    value={this.state.value} />
                                </div>
                                <button type="submit" className="btn btn-primary pt-2 float-right  ">Add</button>
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
