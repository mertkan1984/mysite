import React from "react"
//import React, { Component } from "react"
import "./style.css"
import { FaBars } from 'react-icons/fa'
import { Link } from "gatsby"

/*class Nav extends Component {

	handleClick = () => {
		//e.preventDefault();
		var x = document.getElementById("myTopnav");
		  if (x.className === "topnav") {
		    x.className += " responsive";
		  } else {
		    x.className = "topnav";
		  }
	}

	render(){
		return (
			<div className={"topnav"} id="myTopnav">
			  <Link to="/page-2/" className="active">güncel</Link>
			  <Link to="/page-2/">infografik</Link>
			  <Link to="/page-2/">Contact</Link>
			  <Link to="/page-2/">About</Link>
			  <Link to="#" className="icon" onClick={this.handleClick}>
			 
			    <FaBars />
			  </Link>
			</div>
			)
	}
} */

const show = () =>{
	var x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
	    x.className += " responsive";
	  } else {
	    x.className = "topnav";
	  }
}

const Nav = () =>(
<div className="wrapper">	
	<div className="topnav" id="myTopnav">
	  <Link to="/">Blog</Link>
	  <Link to="#" className="icon" onClick={show}> 
	    <FaBars />
	  </Link>
	</div>
</div>
)

export default Nav