import React from 'react';
import Navigation from '../components/Navigation';
import MobileNavigation from '../components/MobileNavigation';
import WritingSection from '../components/WritingSection';
import WritingData from '../data/WritingData';

const Home = () => {
  return (
    <div>
        <MobileNavigation/>
        <Navigation/>
          {Object.keys(WritingData).map((key, index) => (
            <WritingSection
              title={key}
              articles={WritingData[key]}
              linePosition={index % 2 === 0 ? "after" : "before"}
            />
          ))}
    </div>
  )
};

export default Home