import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  

  componentWillMount() {
    // var to hold marked.js file
  let test = marked("This is **markdown** _text_ ");
  console.log(test);
  }


  render() {
    return (
      <div className="App">
        <textarea name="" id="editor" cols="" rows="">Editor</textarea>
        <div id="preview"></div>
      </div>
    );
  }
}

export default App;
