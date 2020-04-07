import React, { Component } from 'react';
import '../component/update.css'
import iconUpdate from '../assets/img/update.png'
import iconDelete from '../assets/img/delete.png'



const URL = 'http://localhost:3000/photo/'
class Update extends Component {

    constructor(props) {
        super(props);

        this.state = {}
        // this.handleChange = this.handleChange.bind(this);


    }

    handleChange = (e) => {
        // e.preventDefault();
        this.setState({
            value: e.target.value
        })
        // console.log(e.target.value);

        // console.log(this.props);
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
            if (json.ok) {

                alert(json.message)
            }
        } catch (err) {
            console.log(err);
        }
        // console.log('deleting...' );
    }


    render() {
        if (this.state.value === 'delete') {
            console.log(this.state.delete);
            this.confirmDelete()
        }
        if (this.state.value === 'update') {
            alert('el estado es update')
            console.log(this.state.value);
        }
        return (
            <div>
                <div className="btn-group btn-group-sm" role="group" aria-label="Update&Delete">
                    <button type="button" className="btn btn-outline-secondary btn-img-delete"
                        onClick={this.handleChange} value="delete"> Delete
                        
                            {/* <img src= {iconDelete} alt="..." className="image"/>                            */}
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-img-update"
                        onClick={this.handleChange} value="update" > Update
                            {/* <img src= {iconUpdate} alt="..." className="image" /> */}
                    </button>
                </div>
            </div>


        );
    }
}

export default Update;






