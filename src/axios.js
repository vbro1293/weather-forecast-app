import axios from "axios";

export default axios.create({
	baseURL: "http://interview.toumetisanalytics.com/location/",
	headers: {
		Accept: "application/json",
	}
});