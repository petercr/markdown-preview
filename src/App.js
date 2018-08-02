import React, { Component } from "react";
import "./App.css";
import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    this.mainHtml = 
    "# Try this " +
    '## Cool Editor' +
    "A project from [Free Code Camp](https://learn.freecodecamp.org)" +
    "You can use code in-line `console.log('')`" +
    "Or Code Blocks" +
    "* An image or something" +
    "**Woah bold text**";
    
    this.state = {
      editorText: this.mainHtml,
      previewText: null
    };
    this.updateEditor = this.updateEditor.bind(this);
  }

  updateEditor() {
    // get MD text from #editor and update editorText
    const _text_ = document.querySelector("#editor").value;
    this.setState({ editorText: _text_ });
    
    // parse the markdown and update previewText
    const markdown = marked(_text_);
    this.setState({ previewText: markdown, mainHtml: markdown  });
    // eslint-disable-next-line
    console.dir(markdown);
  }

  componentDidMount() {
    this.updateEditor();
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
