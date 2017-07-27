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
    haikus.push(response);
    this.setState({
      haikus: haikus,
    });
  }


	render(){
		// console.log('hello hahahah', this.state.haikus);
		let {haikus} = this.state;
		console.log(haikus.length);
		console.log('here',haikus);
		// let resultDiv;
		// haikus.map(function(haiku, i){
		// 	return(
		// 		<div>
		// 				<div key={i}>
		// 		        <div className="poemLines">
		// 		          {/* <h2>{haiku.line}</h2> */}
		// 							<h1>hi</h1>
		// 		          {/* <h2>{this.state.wordLine[1]}</h2>
		// 		          <h2>{this.state.wordLine[2]}</h2> */}
		// 		        </div>
		// 		      <div className="sylCount">
		// 		        {/* <h2>{this.state.sylCount[0]}</h2>
		// 		        <h2>{this.state.sylCount[1]}</h2>
		// 		        <h2>{this.state.sylCount[2]}</h2>
		// 		        <h2>{this.state.sylCount[3]}</h2> */}
		// 		      </div>
		// 				</div>
		// 		</div>
		// )
		// })
		return(
			<h1>hello world</h1>
		)
	}
}


export default CounterHaikus
