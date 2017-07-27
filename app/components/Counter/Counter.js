import React from "react";
import './Counter.scss';
import firebase from 'firebase/app';
import 'firebase/database';
import CounterHaikus from '../../containers/Haikus/CounterHaikus';
import Gallery from '../Gallery/Gallery';




// console.log('app', this.app);
// console.log('database', this.database);


class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.loadPoem = this.loadPoem.bind(this);

		var config = {
		   apiKey: "AIzaSyBsooAPWrtbiK6R1DnW4vWWia3HMj8HiZU",
    authDomain: "renga-b3c41.firebaseapp.com",
    databaseURL: "https://renga-b3c41.firebaseio.com",
    projectId: "renga-b3c41",
    storageBucket: "renga-b3c41.appspot.com",
    messagingSenderId: "609961053602"
		 };

		this.app = firebase.initializeApp(config);
		this.database = this.app.database();
		// console.log(this.database);

		this.databaseRef = this.database.ref().child('haikus');
		// console.log(this.databaseRef);

    this.state = {
			term: '', wordLine: [], line: 1, sylCount: 0, haikus: []};

  }

    componentWillMount(){
    const previousPoems = this.state.haikus;

    // DataSnapshot
    this.databaseRef.on('child_added', snap => {
      previousPoems.push({
        id: snap.key,
        term: snap.val().term,
      })

      this.setState({
        haikus: previousPoems
      })
    })

    this.databaseRef.on('child_removed', snap => {
      for(var i=0; i < previousPoems.length; i++){
        if(previousPoems[i].id === snap.key){
          previousPoems.splice(i, 1);
        }
      }

      this.setState({
        haikus: previousPoems
      })
    })
  }

  loadPoem(poem){
    this.setState({
      textVal: poem
    })
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

              // this.state.wordBundle.push(wordObj)  

            this.setState({
              // word: arrayOfWords,
              line: arrayOfLines.length,
              sylCount: tempArr,
              wordLine: arrayOfLines,
              wordArr: arrayOfWords,
            })

    }


 }



 handleChange(event) {

      let newState = {};

      newState[event.target.id] = event.target.value;   //newState[term] = "sdfsdfsdf"
      this.setState(newState);
			this.newCount(event.target.value);
      // if(!event.target.value){
      // this.setState({
      //        syllable: 0
      //       });
      //     } else {
      //       this.setState({
      //       //  syllable:
      //       });
      //     }

              }

  runQuery(word) {
			// console.log(word);
			this.setState({
				haiku: word
			});
			let postToSave = this.state
			// console.log(postToSave);
			this.databaseRef.push().set(postToSave);


      }

  render(){
    let poemtxt = this.state.textVal;
    console.log(poemtxt);
		return(
			<div>
				<textarea

        type="text"
        id="term"
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
      
      <div className="poemGallery">
          {
            this.state.haikus.map((haiku) => {
              return (
                <CounterHaikus haikuContent={haiku.term} 
                haikuId={haiku.id} 
                key={haiku.id}
                databaseRef={this.databaseRef}
                loadPoem={this.loadPoem}/>
              )
            })
          }
        </div>
      <Gallery/>
			</div>
			)
	}

}


export default Counter

// This was the submit button
//
