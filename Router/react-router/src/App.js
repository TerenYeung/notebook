import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RichTextEditor from 'react-rte';
import ReactQuill from 'react-quill'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' ,  modules: {
    toolbar: [
      [{ size: [ 'small', false, 'large', 'huge' ]}],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
      [{ 'color': [] }, { 'background': [] }]
    ],
  },

  formats: [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ],}


  }

  handleChange(value) {
    this.setState({ text: value })
  }



  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <ReactQuill value={this.state.text}
                  // onChange={this.handleChange}
                    modules={this.state.modules}
                    formats={this.state.formats}
                  />
        </div>
    );
  }
}

export default App;
