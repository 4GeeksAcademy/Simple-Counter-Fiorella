import React from "react";



const Digitos = (props)  =>{
    return (<div className = "d-flex">
        <div className="card text-bg-dark mb-3">
      <div class="card-body">
        <h5 className="card-title">{props.seconds}</h5>
      </div>
    </div>
    </div>
    ) ;
} ;
const SecondsCounter = (props) => {
    return (
    <div className = "d-flex">
      <Digitos seconds ={Math.floor(props.seconds/100000 %10)}/>,
        <Digitos seconds ={Math.floor(props.seconds/10000 %10)}/>,
         <Digitos seconds ={Math.floor(props.seconds/1000 %10)}/>,
         <Digitos seconds ={Math.floor(props.seconds/100 %10)}/>,
         <Digitos seconds ={Math.floor(props.seconds/10 %10)}/>,
         <Digitos seconds ={props.seconds % 10}/>,
        </div>
    ) ;
};










export default SecondsCounter ;