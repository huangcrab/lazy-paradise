import React, { useState, useEffect } from 'react';
import Project from './Project';
import ItemControl from '../../components/layout/ItemControl';
import VideoBack from '../../components/layout/VideoBackGound';
import { Consumer } from '../../context';
import { useFirebase } from '../../firebase-context';
import { collection, orderBy, getDocs, query } from 'firebase/firestore';

export default function Projects() {
  const [video] = useState('assets/videos/project.mp4');
  const firebase = useFirebase();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const querySnapshot = await getDocs(
        query(collection(firebase.database(), 'projects'), orderBy('id', 'asc'))
      );
      const result = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });

      setProjects(result);
    }

    getProjects();
  }, []);

  return (
    <Consumer>
      {(value) => {
        const { index, direction } = value;
        return (
          <section className="section projects">
            <VideoBack video={video} />
            {projects.length && (
              <Project items={projects} index={index} direction={direction} />
            )}

            {projects.length && (
              <ItemControl length={projects.length} name={'Project'} />
            )}
          </section>
        );
      }}
    </Consumer>
  );
}
