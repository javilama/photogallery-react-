import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//.::COMPONENTS IMPORT::.
import ShowImages from './ShowImages'
import Navbar from './Navbar'
import Footer from './Footer'

const URL = 'http://localhost:3000/photo/'
class ViewPhotos extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
          data: []
    
        }
      }
      
      async componentDidMount(){
          await this.getPhotos()
      }

      getPhotos= async ( )=> {
        let res = await fetch (URL)
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
