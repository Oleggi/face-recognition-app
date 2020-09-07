import React from 'react';
import RankInfo from '../RankInfo/RankInfo';
import ImageInput from '../ImageInput/ImageInput';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import Header from '../Header/Header';
import {clarifaiAPI} from '../../api/api';

class MainPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          isFetching: null,
          input: '',
          imageUrl: '',
          squareCoords: {},
          isAuth: null
        };
      };

      toggleIsAuth = (isAuth) => {
        this.setState({
            isAuth
        })  
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
            <>
            <Header isAuth={this.state.isAuth} toggleIsAuth={() => this.toggleIsAuth(true)}/>
            <RankInfo />
            <ImageInput inputData={this.state.input} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition isFetching={this.state.isFetching} squareCoords={this.state.squareCoords} imageUrl={this.state.imageUrl}/>
            </>           
             )
    }

};

export default MainPageContainer;