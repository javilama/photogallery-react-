import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//.::COMPONENTS IMPORT::.
import ShowImages from './ShowImages'
import Navbar from './Navbar'
import Footer from './Footer'

class ViewPhotos extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
          data: []
    
        }
      }
      
      async componentDidMount(){
          await this.fetchViewPhotos()
      }

      fetchViewPhotos = async ( )=> {
        let res = await fetch ('http://localhost:3000/photo/')
        let photos = await res.json()
        let data = [];
        for ( let item of photos.photos){
          data.push(item)
          // console.log(data)
        }
        this.setState({
          data
        })
        
      }

    render() {
        return (
            <div>
                < Navbar/>
               <ShowImages Showimage={this.state.data} /> 
               < Footer/>
            </div>
        )
    }
}
export default ViewPhotos;
