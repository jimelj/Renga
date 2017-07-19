import React from "react";
// import unirest from 'unirest';




class Counter extends React.Component {
	constructor(props) {
    super(props);

    this.state = {term: '' };
  }
	// onFormSubmit(event) {
 //    event.preventDefault();
 //    this.props.fetchWeather(this.state.term);
 //    this.setState({
 //      term: ''
 //    });
 //  }

 newCount(word) {
   word = word.toLowerCase();                                     //word.downcase!
   if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
     word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
     word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
     return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
 }



 handleChange(event) {

            // this.setState({query: event.target.value});
            // this.setState({sYear: event.target.value});
            // this.setState({eYear: event.target.value});
            let newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

        }

        // handleSubmit(event) {
        //       // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        //       // clicking the button
        //       event.preventDefault();
        //
        //       // Set the parent to have the search term
        //       // this.props.setQuery(this.state.query,this.state.sYear,this.state.eYear);
        //       this.setState({term: ''});
        //   }

  runQuery(word) {
			console.log(word);
			console.log(this.newCount(word));

      }

	render(){

		return(
			<div>
				<input type="text"
        id="term"
        value={this.state.query}
        onChange={this.handleChange.bind(this)}
        required

        />
				<button onClick={() => this.runQuery(this.state.term)} type="button">Submit</button>
			</div>
			)
	}
}


export default Counter
