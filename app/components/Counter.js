// import React from "react";



// class Counter extends React.Component {
// 	constructor(props) {
//     super(props);

//     this.state = {term: '', syllable:0, word: '', wordLine: [], line: 1, sylCount: 0 };
//   }

//  newCount(word) {

//     var arrayOfLines = word.match(/[^\r\n]+/g);
//     var arrayOfWords =  word.match(/[^\s\n]+/g);
//         var tempArr = [];
//         var Chunks = [];
//         var word;
//         var content;

//     for (var i = 0; i < arrayOfLines.length; i++) {
//             var content = arrayOfLines[i];
           
//             content = content.toLowerCase();
            
//             if (content.length <= 3) {
//                 return 1;
//             }
//             if (content.length === 0) {
//                 return 0;
//             }
//             // if (content.substring(content.length-3 == "ere")){
//             //   return 1;
//             // }
//             content = content.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//                 .replace(/^y/, '')
//                 .match(/[aeiouy]{1,2}/g).length;

//               console.log("CONTENT: ",content);
//               tempArr.push(content);

//             this.setState({
//               word: arrayOfWords[i],
//               line: arrayOfLines.length,
//               sylCount: tempArr,
//               wordLine: arrayOfLines
//             })

//     }


//  }



//  handleChange(event) {

//       let newState = {};

//       newState[event.target.id] = event.target.value;   //newState[term] = "sdfsdfsdf"
//       this.setState(newState);

//       if(!event.target.value){
//       this.setState({
//              syllable: 0
//             });
//           } else {
//             this.setState({
//              syllable: this.newCount(event.target.value)
//             });
//           }

//               }

//   runQuery(word) {
// 			console.log(word);
// 			console.log(this.newCount(word));
// 			this.setState({
// 				syllable: this.newCount(word)
// 			});

//       }

// 	render(){

// 		return(
// 			<div>
// 				<textarea 
//         type="text"
//         id="term"
//         value={this.state.query}
//         onChange={this.handleChange.bind(this)}
//         required
//         />
//         <h3>Current line: {this.state.line}</h3>
//         <h2>{this.state.wordLine[0]}{this.state.sylCount[0]}</h2>
//         <h2>{this.state.wordLine[1]}{this.state.sylCount[1]}</h2>
//         <h2>{this.state.wordLine[2]}{this.state.sylCount[2]}</h2>
//         <h2>{this.state.sylCount[3]}</h2>
// 			</div>
// 			)
// 	}
// }


// export default Counter

// // This was the submit button
// // <button onClick={() => this.runQuery(this.state.term)} type="button">Submit</button>
