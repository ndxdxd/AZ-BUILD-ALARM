import React from 'react';
import { NavBarBootstrap } from './navbarBS.js';
import allison from "./pictures/allison.jpeg"
import aden from "./pictures/aden.jpeg";
import andy from "./pictures/andy.jpeg"
import anna from "./pictures/anna.jpeg"
import calvin from "./pictures/calvin.jpeg"
import clarkson from "./pictures/clarkson.jpeg"
import hana from "./pictures/hana.jpeg"
import matthew from "./pictures/matthew.jpeg"
import megan from "./pictures/megan.jpeg"
import michael from "./pictures/michael.jpeg"
import norah from "./pictures/norah.jpeg"
import dylan from "./pictures/dylan.jpeg"
import sam from "./pictures/sam.jpeg"
import { Card, Row, Col, Button } from 'react-bootstrap';
import "./About.css"
import {useEffect, useState } from 'react'
export default function About() {
    const cardData = [
        { title: 'Calvin Anderson', content: 'I\'m Calvin, a third year electrical engineering. I love reading and playing chess. My interests are in sales and circuit design!', imageUrl: calvin, linkUrl: "https://www.linkedin.com/in/calvin-anderson-3b34a6192/" },
        { title: 'Matthew Chiang', content: 'Hi! My name is Matthew Chiang and I\'m a first-year Math:CS student! ', imageUrl: matthew, linkUrl:'https://www.linkedin.com/in/matthew-chiang-b8b048229/'},
        { title: 'Michael Dimapilis', content: 'Hi, my name is Michael Dimapilis and I am in my second year of Computer Engineering at UCSD.', imageUrl: michael, linkUrl: 'https://www.linkedin.com/in/michael-dimapilis/' },
        { title: 'Anna Ho', content: 'Hi! My name is Anna Ho and I am in my second year of studying chemical engineering!', imageUrl: anna, linkUrl: 'https://www.linkedin.com/in/anna-ho-1104a8296/'},
        { title: 'Sam Lau', content: 'Hi I\'m a second year computer science major at UCSD.', imageUrl: sam, linkUrl: 'https://www.linkedin.com/in/sam-lau-aa6217297/' },
        { title: 'Megan Liem', content: 'My name is Megan Liem, and I am studying Bioengineering at UCSD. I am passionate about neural-prosthetics and biomechatronics. Post-grad, I hope to pursue my masters and delve into the industry of developing medical devices.' , imageUrl: megan, linkUrl: 'https://www.linkedin.com/in/megan-elizabeth-liem-ba539b296/'},
        { title: 'Dylan Mirhan', content: 'My name is Dylan Mirhan, and I am currently a sophomore at UCSD pursuing a B.S. in chemical engineering.', imageUrl: dylan, linkUrl: 'https://www.linkedin.com/in/dylan-mirhan/' },
        { title: 'Allison Nguyen', content: 'Yullooo! I\’m Allison Nguyen and I\’m pursuing Computer Engineering at UCSD. I aspire to be a product designer in the future!', imageUrl: allison, linkUrl: 'https://www.linkedin.com/in/allison-nguyen-668598296/' },
        { title: 'Clarkson Phan', content: 'Hello! My name is Clarkson Phan, and I am a Math-CS major with a minor in Cognitive Science. Post-graduation, I aspire to work in full-stack development to combine front-end aesthetics with back-end functionality.', imageUrl: clarkson, linkUrl: 'https://www.linkedin.com/in/clarkson-phan-0966831a8/' },
        { title: 'Aden Tan', content: 'Hey I’m Aden, a first-year electrical engineering major. Hands on projects are my thing, but I don’t mind switching up the roles to something less hands on', imageUrl: aden, linkUrl: 'https://www.linkedin.com/in/aden-tan-b14419272/' },
        { title: 'Hana Tjendrawasi', content: 'Hello! My name is Hana Tjendrawasi, a second year Data Science Major at UCSD!', imageUrl: hana, linkUrl: 'https://www.linkedin.com/in/hanajuliatj/' },
        { title: 'Andy Truong', content: 'Hey i’m Andy Truong, a third year data science major! I hope you enjoy using our project!', imageUrl: andy, linkUrl: 'https://www.linkedin.com/in/andy-truong-03310323b/' },
        { title: 'Norah Zhou', content: 'I’m Norah, a first-year electrical engineering major! I love doing hands-on projects and working with others.', imageUrl: norah, linkUrl: 'https://www.linkedin.com/in/norah-zhou/' }
      ];
      const [isDarkMode, setIsDarkMode] = useState(false);


      useEffect(() => {
          // Check for saved preference in local storage
          const savedMode = localStorage.getItem('darkMode');
          if (savedMode) {
              setIsDarkMode(JSON.parse(savedMode));
          }
      }, []);
  
      useEffect(() => {
          // Update class on the body based on dark mode state
          document.body.classList.toggle('dark-mode', isDarkMode);
          document.body.classList.toggle('light-mode', !isDarkMode);
  
          // Save preference to local storage
          localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      }, [isDarkMode]);
return (
    
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {cardData.map((card, index) => (
        <Col key={index}>
          <Card className="rounded-10">
            <Card.Body>
              <Card.Img variant='top' src={card.imageUrl}/>
              <Card.Title style={{padding:'10px', fontWeight: 'bold', fontFamily: 'georgia', textAlign: 'center'}}>{card.title}</Card.Title>
              <Card.Text style={{fontFamily: 'georgia'}}>{card.content}</Card.Text>
              <a href={card.linkUrl} target="_blank"><Button variant='primary'>linkedin</Button></a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
);
}