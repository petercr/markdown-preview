import React, { Component } from "react";
import "./App.css";
import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    this.mainHtml = [
      <div></div>
    ];
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
    this.setState({ previewText: markdown   });
    const preview = document.querySelector("#preview");
    console.dir(this.mainHtml);
    // preview.innerHTML = preview;
  }

  componentDidMount() {
    // var to hold marked.js file
    let test = marked("This is **markdown** _text_ ");
    // test = document.querySelector('#editor').innerText;
    console.log(test);
    test = marked(`**Wow** _I can't believe it_`);
  }

  render() {
    return (
      <div className="App">
        <div className="editor">
          <textarea
            name=""
            id="editor"
            cols=""
            rows=""
            onChange={this.updateEditor}
          >
            {this.state.editorText}
          </textarea>
        </div>
        <div id="preview">{this.state.previewText}</div>
      </div>
    );
  }
}

export default App;
