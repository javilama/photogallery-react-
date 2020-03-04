import React, { Component } from 'react'
// import CardImg from '../assets/img/minions.jpg'
import '../component/Card.css'



class Card extends Component {
    // constructor (){
       
    //     super()
    // }
    render() {
        return (
            <div className="container pt-5 mt-5 ">
                <div className="row"  >
                    <div className="col col-md-6 " >  
                    <div className="card">
                        <img src={this.props.img} className="card-img-top" alt="..." />
                        <input type="checkbox" className="mx-2 my-2 " / >
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
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

