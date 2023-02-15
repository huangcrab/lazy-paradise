import React, { useState, useEffect } from 'react';
import Control from '../../components/layout/Control';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import VideoBack from '../../components/layout/VideoBackGound';
import styled from 'styled-components';
import Skills from './Skill';
import About from './About';
import { useFirebase } from '../../firebase-context';
import { collection, getDocs, where, query } from 'firebase/firestore';

const Container = styled.div`
  position: relative;
  margin: 0 auto;
`;
const Item = styled.div`
  text-align: center;
  margin: 0 auto;
  position: absolute;
  height: 200px;
  left: 0;
  right: 0;
  overflow-y: scroll;

  @media only screen and (min-height: 768px) {
    height: 300px;
    overflow-y: hidden;
  }
`;

export default function Intro(props) {
  const [video] = useState('assets/videos/video.mp4');
  const [name, setName] = useState('About Me');
  const [info, setInfo] = useState({
    github: '',
    linkedin: '',
    email: '',
    intro: '',
  });
  const [content, setContent] = useState(0);
  const [components, setComponents] = useState([
    { name: 'Skills', load: <About intro="" /> },
    { name: 'About Me', load: <Skills /> },
  ]);

  const firebase = useFirebase();

  const switchView = () => {
    setContent((prevContent) => {
      return prevContent === 0 ? 1 : 0;
    });

    setName(() => {
      return content === 0 ? 'SKILLS' : 'ABOUT ME';
    });
  };

  useEffect(() => {
    async function getInfo() {
      const querySnapshot = await getDocs(
        query(collection(firebase.database(), 'info'), where('id', '==', '1'))
      );
      querySnapshot.forEach((doc) => {
        setInfo(doc.data());
        if (doc.data().intro) {
          setComponents([
            { name: 'SKILLS', load: <About intro={doc.data().intro} /> },
            { name: 'ABOUT ME', load: <Skills /> },
          ]);
        }
      });
    }

    getInfo();
  }, []);

  return (
    <div className="section about">
      <VideoBack video={video} />
      <div className="item-container">
        <div className="item">
          <h1>{name}</h1>
          <div className="social">
            <a href={info.github} rel="noopener noreferrer" target="_blank">
              <i className="about-icon fab fa-github" />
            </a>
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="about-icon fab fa-linkedin" />
            </a>
            <a href={'mailto:' + info.email}>
              <i className="about-icon fa fa-envelope" />
            </a>
          </div>
          <Container className="info-section">
            <TransitionGroup>
              <CSSTransition key={content} timeout={1000} classNames={'fade'}>
                <Item>{components[content].load}</Item>
              </CSSTransition>
            </TransitionGroup>
          </Container>
          <div className="btn info-btn" onClick={switchView.bind(this)}>
            {components[content].name}
          </div>
        </div>
      </div>
      <Control path={props.location} />
    </div>
  );
}
