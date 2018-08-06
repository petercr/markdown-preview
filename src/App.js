import React, { Component } from "react";
import "./App.css";
import marked from "marked";

class App extends Component {
  constructor(props) {
    super(props);
    this.mainHtml =
      "# Try this \n" +
      "## Cool Editor \n" +
      "A project from [Free Code Camp](https://learn.freecodecamp.org) \n" +
      "You can use code in-line `console.log('')` \n" +
      "Or Code Blocks \n" +
      "* An image or something \n\n" +
      "**Woah bold text** \n\n" +
      "> A deep quote \n\n";

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
    this.setState({ previewText: markdown, mainHtml: markdown });
    // eslint-disable-next-line
    console.dir(markdown);
  }

  componentDidMount() {
    // call updateEditor() to parse editor markdown
    this.updateEditor();
    
    // get #editor text, parse it, and log it
    let test = marked(document.querySelector("#editor").value);
    console.log(test);
  }

  render() {
    return (
      <div className="App">
        <div className="editor">
          <textarea
            name=""
            id="editor"
            onChange={this.updateEditor}
          >
            {this.state.editorText}
          </textarea>
        </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: this.state.previewText }}
        />
      </div>
    );
  }
}

export default App;
