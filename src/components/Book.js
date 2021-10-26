import React, { Component } from 'react';
import './style.css';

class Book extends Component{

    constructor(props){
        super(props)
        this.state={
            count:0,
            showInfo:true
        }
    }

handleInfo = () =>{
    this.setState({
        showInfo: !this.state.showInfo
    })
}

    
render(){
  const {id, img, title, author}= this.props.info; 
  const { deleteItem } =this.props;

  const checkInfo = (info) =>{
      if(info === true){
          return ( <p>In development, expressing............ </p> )
      }else{
          return null;
      }
  }
  

  return(
    <div className="book">
      <img src={img} width="150px" alt="book" />
      <div>
          <h4>Title: {title}</h4>
          <h6>By : {author}</h6>
          <button onClick={ deleteItem }>delete item</button>

          <button onClick={this.handleInfo}>show info</button>
          {checkInfo(this.state.showInfo)}
      </div>
    </div>
  )
}
}
export default Book;
