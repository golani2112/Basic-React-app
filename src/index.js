import React from 'react';
import  ReactDOM from 'react-dom';
import Card from "./App";
import "./index.css";
import Data from './Data';



ReactDOM.render(
     <>
     <h1 className="heading">Lists of top 5 Netflix Series</h1>

  {Data.map((val)=>{
     return(
          <Card 
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
     />
      );
  })}
</>,
document.getElementById('root')

);