import React, { Component } from 'react';
import '../component/update.css'
// import Img from '../assets/img/update.png'                                                                                                                                                      '
const URL = 'http://localhost:3000/photo/'
class Update extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ' other'}
        // this.handleChange = this.handleChange.bind(this);


    }

    confirmDelete() {
        var message = window.confirm('Realmente deseas eliminar este archivo?');
        if (message) {
            this.photoDelete()
        } else {
            alert('En hora buena!!...has decidido conservar tu archivo!!')
        }
    }

    async  photoDelete() {
        let id = this.props.id;
        let config = {
            method: 'delete'
        }

        try {
            let res = await fetch(URL + id, config)
            let json = await res.json();
            console.log(json);
            if(json.ok){

                alert(json.message)
            }
        } catch (err) {
            console.log(err);
        }
        // console.log('deleting...' );
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        })
        // console.log(e.target.value);

        // console.log(this.props);
    }
    
    render() {
        if (this.state.value === 'delete') {

            this.confirmDelete()
        } 
        if (this.state.value === 'update') {
            alert('el estado es update')
        }
        return (
            <div>
                <div>
                    <label className="update"  >
                        {/* <img src={Img} alt="..." /> */}
                         Options:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="update">Update</option>
                            <option value="delete">Delete</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

export default Update;






