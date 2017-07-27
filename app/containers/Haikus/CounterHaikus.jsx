import React from "react";
import './CounterHaikus.scss';



class CounterHaikus extends React.Component {
	constructor(props) {
    super(props);

    this.databaseRef = this.props.databaseRef;
    this.updateLocalState = this.updateLocalState.bind(this);

    this.state = {
      haikus: [],
    }

  }

  componentWillMount(){
    const {updateLocalState} = this;
    this.databaseRef.on('child_added', snapshot => {
      const response = snapshot.val();
      updateLocalState(response);
      console.log(response);
    });
  }

  updateLocalState(response) {
    const haikus = this.state.haikus;
    haikus.push(response.haikus);
    this.setState({
      haikus: haikus,
    });
  }


	render(){

		return(
      <h1>hi</h1>
			)
	}
}


export default CounterHaikus
