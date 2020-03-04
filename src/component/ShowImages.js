import React from 'react'
import Card from './Card'

import '../component/ShowImages.css'

const ShowImages = ({Showimage})=> (
     

    <div className="container"  >

    <div className="row " >
      {Showimage.map((app) => {
            let {_id, name, detail,date, img}=app
            // console.log(img)
            return (
          
              <div className="col col-md-4" key={_id} >
                <Card 
                title={name} 
                description = {detail}
                img = {'http://localhost:3000/photo/'+img} 
                date = {date}
                />
              </div>
              
            )
          })}
    </div>

    </div>
)
  
  

export default ShowImages;