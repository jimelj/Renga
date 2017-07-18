// Include React
import React from 'react';
import Counter from './Counter'
import ReactDOM from 'react-dom'
import './style.scss';

// Creating the Main component
class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  // Render Page
  render() {

    return (
      <div>
        <h1>i am here</h1>
        <Counter/>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Main;
