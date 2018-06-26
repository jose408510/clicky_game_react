import React from "react";
import "./Title.css";

const Title = props => 
<div className="jumbotron" className="title">

<h1 className="display-4">{props.children}</h1>


  <p className="lead">Simply click on a image and watch your score Go up! But, click on the wrong one and the games Over!!</p>

  <hr className="my-4"></hr>

</div>

export default Title;
