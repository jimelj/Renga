import React from "react";
// import unirest from 'unirest';



class Counter extends React.Component {
	// constructor(props) {
 //    super(props);

 //    this.state = {
 //      term: ''
 //    };

	// onFormSubmit(event) {
 //    event.preventDefault();
 //    this.props.fetchWeather(this.state.term);
 //    this.setState({
 //      term: ''
 //    });
 //  }

  runQuery(word) {

        console.log(word);

        // Figure out the geolocation
        // const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + word + "&pretty=1&key=" + geocodeAPI;
        const queryURL = `http://api.datamuse.com/words?sp=${word}&md=s&max=1`;


        return axios.get(queryURL).then(function (response) {
            // If get get a result, return that result's formatted address property
            	console.log(response);
            
            if (response.data.results[0]) {
                return response.data.results[0].formatted;
            }
            // If we don't get any results, return an empty string
            return "";
        });

	render(){

		return(
			<div>
				<input type="text"/>
				<button onPress={this.runQuery.bind(this)} type="submit">Submit</button>
			</div>
			)
	}
}

export default Counter