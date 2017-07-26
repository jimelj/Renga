import React from "react";
import './Counter.scss';
import firebase from 'firebase/app';
import 'firebase/database';



// console.log('app', this.app);
// console.log('database', this.database);


class Counter extends React.Component {
	constructor(props) {
    super(props);

		var config = {
		   apiKey: "AIzaSyDAzfuhm0T1zgy7FllNwQuBUyHcLZCm5-A",
		   authDomain: "renga-7eff3.firebaseapp.com",
		   databaseURL: "https://renga-7eff3.firebaseio.com",
		   projectId: "renga-7eff3",
		   storageBucket: "",
		   messagingSenderId: "378335852054"
		 };

		this.app = firebase.initializeApp(config);
		this.database = this.app.database();
		console.log(this.database);

		this.databaseRef = this.database.ref().child('haikus');
		console.log(this.databaseRef);

    this.state = {
			term: '', syllable:0, word: '', wordLine: [], line: 1, sylCount: 0 };
  }

 newCount(word) {

    var arrayOfLines = word.match(/[^\r\n]+/g);
    var arrayOfWords =  word.match(/[^\s\n]+/g);
        var tempArr = [];
        var Chunks = [];
        var word;
        var content;

    for (var i = 0; i < arrayOfLines.length; i++) {
            var content = arrayOfLines[i];

            content = content.toLowerCase();

            if (content.length <= 3) {
                return 1;
            }
            if (content.length === 0) {
                return 0;
            }
            // if (content.substring(content.length-3 == "ere")){
            //   return 1;
            // }
            content = content.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
                .replace(/^y/, '')
                .match(/[aeiouy]{1,2}/g).length;

              console.log("CONTENT: ",content);
              tempArr.push(content);

            this.setState({
              word: arrayOfWords[i],
              line: arrayOfLines.length,
              sylCount: tempArr,
              wordLine: arrayOfLines
            })

    }


 }



 handleChange(event) {

      let newState = {};

      newState[event.target.id] = event.target.value;   //newState[term] = "sdfsdfsdf"
      this.setState(newState);

      if(!event.target.value){
      this.setState({
             syllable: 0
            });
          } else {
            this.setState({
             syllable: this.newCount(event.target.value)
            });
          }

              }

  runQuery(word) {
			console.log(word);
			this.setState({
				haiku: word
			});

			this.databaseRef.push().set(this.state.term);

      }

	render(){

		return(
			<div>
				<textarea
        type="text"
        id="term"
        value={this.state.query}
        onChange={this.handleChange.bind(this)}
        required
        />
				<button onClick={() => this.runQuery(this.state.term)} type="button">Submit</button>
        <h2>Current line: {this.state.line}</h2>

        <div className="poemLines">
          <h2>{this.state.wordLine[0]}</h2>
          <h2>{this.state.wordLine[1]}</h2>
          <h2>{this.state.wordLine[2]}</h2>
        </div>
      <div className="sylCount">
        <h2>{this.state.sylCount[0]}</h2>
        <h2>{this.state.sylCount[1]}</h2>
        <h2>{this.state.sylCount[2]}</h2>
        <h2>{this.state.sylCount[3]}</h2>
      </div>
			</div>
			)
	}
}


export default Counter

// This was the submit button
//
