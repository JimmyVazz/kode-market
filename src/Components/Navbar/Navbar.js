import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Products from '../Products/Products'
import Form from '../Form/Form'

class Navbar extends Component {
    render(){
        return(
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Piolin's Store</a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="mx-3 text-white" to="/">Piolines</Link>
              </li>
              <li className="nav-item">
              <Link className="mx-3 text-white" to="/form/">Upload Piolin</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Products}/>
        <Route path="/form/" component={Form}/>
        </Router>
        )
    }
}

export default Navbar