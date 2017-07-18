import React from "react";
import axios from 'axios';
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
        console.log('hello i am jimel')
        console.log(word);

        // Figure out the geolocation
        // const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + word + "&pretty=1&key=" + geocodeAPI;
        const queryURL = `http://api.datamuse.com/words?sp=${word}&md=s&max=1`;


        return axios.get(queryURL).then(function (response) {
            // If get get a result, return that result's formatted address property
            	console.log(response);

            // If we don't get any results, return an empty string
            return "";
        });
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
				<button onClick={() => this.runQuery(this.state.query)} type="button">Submit</button>
			</div>
			)
	}
}


export default Counter
