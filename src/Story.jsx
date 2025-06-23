import React from 'react';
import storyImage from './story.png';
import './Home.css';

function Story() {
  return (
    <div className="story-fullscreen">
      <img src={storyImage} alt="Story Graphic" className="story-full-image" />
    </div>
  );
}

export default Story;
