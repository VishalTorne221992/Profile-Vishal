import React from 'react';
import Profileimg from './Assets/photo 11.jpg'
import SlideImg1 from './Assets/VRestaurant-ReactApp.jpg'
import SlideImg2 from './Assets/Whatsapp-Clone-React.jpg'
import SlideImg3 from './Assets/Reactjs-TODO-APP.png'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Card, Table } from 'react-bootstrap';

function App() {


  return (
    <div className="App">
      <div className='topImageContainer'>

        <div className='middleContainer'>
          <div style={{ height: '470px', border: '1px solid grey', position: 'relative', left: '315px' }}> </div>


          <Card border='light' style={{ width: '12rem', height: '22rem', margin: '65px', marginTop:'47px' }}>
            <Card.Img variant="top" src={Profileimg} style={{ width: '189px', borderRadius: '10%', position: 'relative', border: '2px solid black', left: '0px' }} />
            <Card.Body>
              <Card.Title style={{ marginLeft: '16px', fontWeight: 'bolder' }}> Vishal Torne </Card.Title>
              <Card.Text style={{ marginLeft: '1px', fontWeight: 'bolder', color: 'darkmagenta' }}>
                <span>Full Stack Developer <span style={{ marginLeft: '10px'}}> ( MERN STACK) </span></span>
                <span style={{ display: 'inline-block', marginLeft: '5px' }}>React JS Developer</span>
              </Card.Text>

              <div className='btn btn-dark dwnbtn'> <span style={{ fontWeight: 'bold' }}> 
              <a onClick={() => alert('You will be redirected to another page ! Please use Back button to come back here !! Thanks.')} href="https://docs.google.com/document/d/1BoO8hsmFncefbq5i0LyrdqzikAA1LYsG/edit?usp=sharing&ouid=102697892005570365493&rtpof=true&sd=true" style={{ textDecoration:'none', color:'white'}} >
                 View CV </a> </span> </div>
            </Card.Body>
          </Card>



          <div className='RightSide'>

            <span style={{ fontSize: '3rem', fontWeight: 'bolder', fontFamily: 'calibri' }}> Hi I am Vishal Torne,  </span>
            <span> <p style={{ fontSize: '1rem', textIndent: '5px' }}> A MERN full Stack Developer, React JS Developer and a Java Programmer. </p> </span>
            <span> <p style={{ fontSize: '1rem', marginTop: '-15px', textIndent: '5px' }}> A Hardworking and Focused Individual who wants to create a career in </p> </span>
            <span> <p style={{ fontSize: '1rem', marginTop: '-15px', textIndent: '5px' }}> Web Programming, and Web Development. </p> </span>

            <span style={{ fontSize: '1rem', marginTop: '-15px', textIndent: '5px', fontWeight: 'bolder' }}>Personal Information : </span>

            <Table striped bordered size='sm' style={{ width: '500px', fontFamily: 'Calibri', marginTop: '10px' }}>
              <tbody>
                <tr>

                  <td style={{ width: '100px' }}>Name : </td>
                  <td>Vishal Vivek Torne</td>
                </tr>
                <tr>
                  <td style={{ width: '110px' }}>Date of Birth : </td>
                  <td>22nd May 1992</td>
                </tr>
                <tr>
                  <td>Address : </td>
                  <td>The Salvation Army, Jubilee Hall Compound Sankli street, Byculla, Mumbai - 400008</td>
                </tr>
                <tr>
                  <td>Mobile No :</td>
                  <td>9892002815</td>
                </tr>
              </tbody>
            </Table>

            {/* <div style={{color:'red', fontWeight:'bolder', marginLeft:'50px', fontSize:'24px'}}> PLEASE SCROLL DOWN FOR PROJECTS !! </div> */}

          </div>


        </div>

      </div>

      <div className='Carouseldiv'>

        <Carousel className='Carousel'>
          <Carousel.Item>
            <img 
              className="d-block"
              src={SlideImg1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{color:'black', fontWeight:'bolder'}}>Restaurant App made with MERN Stack </h3>
              <p style={{color:'black', fontWeight:'bolder'}}>VRestaurant APP made using ReactJS Frontend and Nodejs, Express and MongoDB Backend </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block"
              src={SlideImg2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{color:'black', fontWeight:'bolder'}}>Chat-App Made in ReactJS</h3>
              <p style={{color:'black', fontWeight:'bolder'}}>Chat App made in ReactJS with SocketJs. Multiple People can Login & Join Room and Chat</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block "
              src={SlideImg3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{color:'black', fontWeight:'bolder'}}>TODO-APP in ReactJS and React bootstrap</h3>
              <p style={{color:'black', fontWeight:'bolder'}}>
                Classic TO-DO App made in ReactJS and React bootstrap allows User
                to create a Task and Label it whether Created, DOING or DONE
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='Footer'> <span style={{color:'black', fontWeight:'bolder', marginLeft:'40vw', marginTop:'15px', display:'inline-block'}}> Created By Vishal Torne </span></div>


    </div>
  );
}

export default App;
