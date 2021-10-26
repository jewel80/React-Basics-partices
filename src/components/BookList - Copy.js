import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component{

state ={
    books:[
        {
            id:1,
            book:"this is first book",
            author:"jhon"
        },
        {
            id:2,
            book:"this is secound book",
            author:"Jewel"
        },
        {
            id:3,
            book:"this is third book",
            author:"body dol"
        },
        {
            id:4,
            book:"this is four book",
            author:"shakib"
        },
    ]
}



render(){
  return(
    <div>
     <h1>Hello from BookList</h1>
     {/* Another way of key pass in the state. {this.state.books.map((item, index) => <Book key={index} info={item}/> )} */}
     {this.state.books.map(item => <Book key={item.id} info={item}/> )}
    </div>
  )
}
}
export default BookList;
