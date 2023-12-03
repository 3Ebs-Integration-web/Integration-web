import React from 'react';
import UncontrolledExample from './components/crousele';
import AutoLayoutExample from './components/aboutus';




const App = () => {
  return (
    <div>

      <UncontrolledExample style={{ marginBottom: '70px' }} /> {/* Adjust margin or padding as needed */}
      <div style={{ height: '220px' }} /> {/* Separator with 70px height */}
      <AutoLayoutExample />
      <div style={{ height: '70px' }} /> {/* Separator with 70px height */}
     
    </div>
  );
};

export default App;

  