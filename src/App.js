import React from 'react';
import Particles from 'react-particles-js';
import RankInfo from './components/RankInfo/RankInfo';
import ImageInput from './components/ImageInput/ImageInput';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
// import Login from './components/Login/Login';
import './App.css';
import Header from './components/Header/Header';
import {clarifaiAPI} from './api/api';


const particlesConfig = {
        particles : {
          number: {
            value: 35,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
    }

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        isFetching: null,
        input: '',
        imageUrl: '',
        squareCoords: {}
      };
    };

    setSquareCoords = (squareCoords) => {
      this.setState({
        squareCoords 
      })
    };

    toggleIsFetching = (isFetching) => {
        this.setState({
          isFetching
        })
    };
    
    getSquareCoords = (data) => {
      const image = document.getElementById('faceImg');
      const width = Number(image.width);
      const height = Number(image.height);
         const squareCoords = {
          top: (data.top_row * height),
          left: (data.left_col * width),
          right: (width - (data.right_col * width)),
          bottom: (height - (data.bottom_row * height)),
        }
      return squareCoords;
    };

    onInputChange = (e) => {
      this.setState({
        input: e.target.value
      })
    };

    onButtonSubmit = () => {
      this.setState({
        imageUrl: this.state.input,
        input: ""
      });
      this.toggleIsFetching(true);
      clarifaiAPI.getRecognitionData(this.state.input)
        .then(data => {
         this.setSquareCoords(this.getSquareCoords(data));
         if (data) {
          this.toggleIsFetching(false);
         }
        });
    };

    render () {
      return (
        <div className='App'>
          <Particles params={particlesConfig} className='particles' />
          <Header />
          <RankInfo />
          <ImageInput inputData={this.state.input} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition isFetching={this.state.isFetching} squareCoords={this.state.squareCoords} imageUrl={this.state.imageUrl}/>
        </div>
      );
    }
  }

export default App;
