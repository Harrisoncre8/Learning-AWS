import React, { Component } from 'react';
import './App.css';
import { Storage } from 'aws-amplify';

class App extends Component {

  componentDidMount(){
    this.readFromStorage();
  }

  state = { 
    fileURL: '', 
    file: '', 
    filename: '',
    newURL: ''
  }

  // handle file input selection
  handleChange = event => {
    const file = event.target.files[0]
    this.setState({
      fileURL: URL.createObjectURL(file),
      file,
      filename: file.name
    })
  }

  // save file in S3 bucket
  saveFile = () => {
    Storage.put(this.state.filename, this.state.file)
      .then(() => {
        console.log('Successfully saved file!');
        this.setState({
          fileURL: '', 
          file: '', 
          filename: ''
        })
        // .catch(error => {
        //   console.log('Error uploading file!', error);
        // })
      })
  }

  // get data from S3 bucket
  readFromStorage = () => {
    Storage.get('squritleSQAUD.jpg')
      .then(data => this.setState({newURL: data}))
      .catch(err => console.log('error', err))
  }

    // this.setState({newURL: data}
    // console.log('data from S3: ', data)

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <input type='file' onChange={this.handleChange}></input>
        <img alt='Sending to AWS' src={this.state.fileURL} />
        <button onClick={this.saveFile}>Save File</button>
        {/* {JSON.stringify(this.state.newURL)} */}
        <p>Sent from AWS:</p>
        {<img alt='Sent From AWS' src={this.state.newURL}/>}
        </header>
      </div>
    );
  }
}

export default App;
