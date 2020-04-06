import React, { Component } from 'react'
// import CardImg from '../assets/img/minions.jpg'
import Update from '../component/Update'
import '../component/Card.css'



class Card extends Component {
    constructor (props){
           super(props)
     this.state = {}
       
    }
    

    render() {
        return (
            <div className="container pt-5 mt-5 ">
                <div className="row"  >
                    <div className="col col-md-6 " >
                        <div className="card">
                            <img src={this.props.img} className="card-img card-img-top img-tubnail " alt="..." />


                            {/* <input type="checkbox"  
                         onChange = {this.handleCheck}  
                         className="mx-2 my-2 " / > */}
                            <div className="card-body">
                                <div className=" row "   >
                                    <div className="col-md-6">
                                        <h5 className="card-title">{this.props.title}</h5>
                                    </div>
                                    <div className="col-md-6">
                                       <Update id={this.props.id} onChange = {this.setState} />
                                    </div>

                                </div>

                                <p className="card-text">{this.props.description}</p>
                                <p className="card-text text-right"><small>{this.props.date}</small></p>
                                {/* <a href="#" className="btn btn-primary">enviar</a> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Card;

