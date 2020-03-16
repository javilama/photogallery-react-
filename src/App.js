// import React, { Component } from 'react'
import React from 'react'
import ViewPhotos from './component/ViewPhotos'
import Form from './component/Form'
import NewPhoto from './component/NewPhoto'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// .::ROUTES::.

import { BrowserRouter, Route, Switch } from 'react-router-dom'




const App= () => (
    < BrowserRouter>
      <Switch>
        <Route path="/" component={Form}/>
        <Route path="/Form" component={Form}/>
        <Route path="/ViewPhotos" component={ViewPhotos} />
        <Route path="/NewPhoto" component={NewPhoto} />
      </Switch>
    </BrowserRouter>
  )

export default App


// .::IMPORTS COMPONENTS::.
// import Navbar from './component/Navbar'
// import Form from './component/Form'
// import Footer from './component/Footer'


// class App extends Component {



//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Form />
//         <Footer /> 
//       </div>
//     )
//   }
// }
// export default App;

