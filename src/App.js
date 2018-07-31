import React, { Component } from "react";
import "./App.css";
import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    this.mainHtml = ``;
    this.state = {
      editorText: "Editor",
      previewText: this.mainHtml
    };
    this.updateEditor = this.updateEditor.bind(this);
  }

  updateEditor() {
    const _text_ = document.querySelector("#editor").value;
    this.setState({ editorText: _text_ });
    const markdown = marked(_text_);
    // this.mainHtml.push(markdown);
    this.setState({ previewText: markdown  });
    // eslint-disable-next-line
    const preview = document.querySelector("#preview");
    console.dir(markdown);
    // preview.innerHTML = preview;
  }

  componentDidMount() {
    // var to hold marked.js file
    let test = marked("This is **markdown** _text_ ");
    // test = document.querySelector('#editor').innerText;
    console.log(test);
    test = marked(`**Wow** _I can't believe it_`);
  }

  // function Preview(props) {
  //   return (
     
  //   );
  // }

  

  render() {
    return (
      <div className="App">
        <div className="editor">
          <textarea
            name=""
            id="editor"
            cols=""
            rows="20"
            onChange={this.updateEditor}
          >
            {this.state.editorText}
          </textarea>
        </div>
        <div className="preview" dangerouslySetInnerHTML={{__html: this.state.previewText}}></div> 
      </div>
    );
  }
}

export default App;
