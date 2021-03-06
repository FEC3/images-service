
import React, { Component } from 'react';
import Styled from 'styled-components';

const ZoomedImgaes = Styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 50%;
  margin-left: -50%;
  background: white;
  height: min-content;
  i{
    position: fixed;
    top: 10px;
    right: 15px;
    font-size:36px;
    cursor: pointer;
    color: hsla(0,0%,100%,.5);

  }
  i:hover {
    color: hsla(0,0%,100%,2);
  }
  img{
    margin-bottom: 80px;
  }
`;

const ImagesList = (props) => (
  <ZoomedImgaes>
    <i className="fa fa-times-circle" onClick={() => props.handleExit()} ></i>
    {props.images.map((image, index) => <img id={index} className="d-block w-100" src={image.url} key={index} />)}

  </ZoomedImgaes>
);
export default ImagesList;