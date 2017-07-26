import React from "react";
import './Counter.scss';
import firebase from 'firebase/app';
import 'firebase/database';


class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: '', syllable:0, word: '', wordLine: [], wordArr: [],line: 1, sylCount: 0, wordBundle:[]};
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

              var wordObj = {
                word: arrayOfWords[i],
                syllable: 0
              }
              // var singleSyl = count(arrayOfWords[i]);

              // var wordObj = {
              //   word: arrayOfWords[v],
              //   syllable:singleSyl              } 

              this.state.wordBundle.push(wordObj)  

            this.setState({
              word: arrayOfWords[i],
              line: arrayOfLines.length,
              sylCount: tempArr,
              wordLine: arrayOfLines,
              wordArr: arrayOfWords,
            })

    }


 }

//   count(word) {
    
//             var content = arrayOfLines[i];
           
//             word = word.toLowerCase();
            
//             if (word.length <= 3) {
//                 return 1;
//             }
//             if (word.length === 0) {
//                 return 0;
//             }
//             // if (word.substring(word.length-3 == "ere")){
//             //   return 1;
//             // }
            
//             word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//                 .replace(/^y/, '')
//                 .match(/[aeiouy]{1,2}/g).length;

//                 return word;
  
// }

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
      // console.log(this.newCount(word));
      this.setState({
        haiku: word
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
// <button onClick={() => this.runQuery(this.state.term)} type="button">Submit</button>
