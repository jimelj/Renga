import React from "react";
import './Counter.scss';



class Counter extends React.Component {
	constructor(props) {
    super(props);

    this.state = {term: '', syllable:0, word: '', wordBundle: [], wordLine: [], wordArr: [],line: 1, sylCount: 0 };
  }

 newCount(word) {

    var arrayOfLines = word.match(/[^\r\n]+/g);
    var arrayOfWords =  word.match(/[^\s\n]+/g);
        var tempArr = [];
        // var Chunks = [];
        // var word;
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

              // console.log("CONTENT: ",content);
              tempArr.push(content);

              
            this.setState({
              word: arrayOfWords[i],
              line: arrayOfLines.length,
              sylCount: tempArr,
              wordLine: arrayOfLines,
              wordArr: arrayOfWords
            })

    }

    for (var v = 0; v < arrayOfWords.length; v++) {
       var content1 = arrayOfWords[v];
           
            content1 = content1.toLowerCase();
            
            if (content1.length <= 3) {
                return 1;
            }
            if (content1.length === 0) {
                return 0;
            }
            // if (content1.substring(content1.length-3 == "ere")){
            //   return 1;
            // }
            
            content1 = content1.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
                .replace(/^y/, '')
                .match(/[aeiouy]{1,2}/g).length;

              // console.log("CONTENT1: ",content1);
              tempArr.push(content1);
              console.log("content1: ", content1);
              console.log("tempArr: ", tempArr);
              var wordObj = {
                word: arrayOfWords[v],
                syllable: content1
              }
                this.setState({
              wordBundle: wordObj
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
			console.log(this.newCount(word));
			this.setState({
				syllable: this.newCount(word)
			});

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
// <button onClick={() => this.runQuery(this.state.term)} type="button">Submit</button>
