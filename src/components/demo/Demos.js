import React, { useState, useEffect } from 'react';
import Demo from './Demo';
import ItemControl from '../../components/layout/ItemControl';
import VideoBack from '../../components/layout/VideoBackGound';
import { Consumer } from '../../context';
import { useFirebase } from '../../firebase-context';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export default function Demos() {
  const [video] = useState('assets/videos/demo.mp4');
  const firebase = useFirebase();
  const [demos, setDemos] = useState([]);

  useEffect(() => {
    async function getDemos() {
      const querySnapshot = await getDocs(
        query(collection(firebase.database(), 'demos'), orderBy('id', 'asc'))
      );
      const result = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });

      setDemos(result);
    }

    getDemos();
  }, []);

  return (
    <Consumer>
      {(value) => {
        const { index, direction } = value;
        return (
          <section className="section demos">
            <VideoBack video={video} />

            {demos.length && (
              <Demo items={demos} index={index} direction={direction} />
            )}

            {demos.length && (
              <ItemControl name={'Demo'} length={demos.length} />
            )}
          </section>
        );
      }}
    </Consumer>
  );
}
