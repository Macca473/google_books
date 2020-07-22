import React, { Component } from 'react';

class booksAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
          books: []
        };
      }

      componentDidMount() {
        fetch("http://localhost:3001/api/books", {
          mode: 'no-cors',
          // headers: {
          //   'Content-Type': 'application/json'
          // }
        })
          .then(res => res.json())
          .then(
            (result) => {
              console.log("result: " + result)
              // const result = res.json();
              this.setState({
                books: result.books
              });
            },
            (error) => {
              console.log(error)
              this.setState({
                error
              });
            }
            // console.log("state: " + JSON.stringify(this.state))
          )
      }
      
      render() {
        const items = this.state;
        console.log("state" + JSON.stringify(this.state))
        
        return (
          // <ul>
          //   {items.books.forEach(item => (
          //     <li key={item.title}>
          //       {item.title}
          //     </li>
          //   ))}
          // </ul>
          <div >
            {this.state.books}
          </div>
        )
      }
}

export default booksAPI
