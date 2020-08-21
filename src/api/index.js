import axios from './node_modules/axios'

const CITY_URL = '/json/city.json';

const axCity = async () => {
	try {
	const	r = await axios.get(CITY_URL);
	console.log(r)
	}
	catch(e) {
		console.log(e)
	}
}

export {axCity}