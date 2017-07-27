import React from "react";
import './CounterHaikus.scss';



class CounterHaikus extends React.Component {
	constructor(props) {
    super(props);
    this.haikuContent = props.haikuContent; 
    this.haikuId = props.haikuId; 
    this.sendPoem = this.sendPoem.bind(this);
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
      console.log("cWM Resp=",response);
    });
  }

  updateLocalState(response) {
    const haikus = this.state.haikus;
    haikus.push(response.haikus);
    this.setState({
      haikus: haikus,
    });
  }

  sendPoem() {
    this.props.loadPoem(this.haikuContent);
  }


	render(){

		return(
      <div>
        <div className="haikuWrap">
          <div className="haikuContent">{this.haikuContent}</div>
          <button onClick={this.sendPoem}>Edit</button>
        </div>
      </div>
			)
	}
}


export default CounterHaikus;
