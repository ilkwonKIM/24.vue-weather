import axios from 'axios'
import moment from 'moment'
import {windDir, iconUrl, location} from '../modules/util.js'

const API_KEY = '0a3cf0327ffa6fed3238a04bf2a636c4' // openwather 사이트에서 로그인하고 API_KEY
const CITY_URL = '/json/city.json';
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather' //API창에서 APIDOC에서 주소 복사
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const ICON_URL = 'https://openweathermap.org/img/wn/' // 10d@2x.png

const axCity = async () => {
	try {
		const r = await axios.get(CITY_URL);
		return r.data.cities;
	}
	catch(e) {
		console.log(e);
		return e;
	}
}
const axWeather = async (cityId) => {
	const params = { units: 'metric', appid: API_KEY};
	try {
		if(cityId) params.id = cityId
		else {
			let {lat, lon} = await location();
			params.lat = lat;
			params.lon = lon;
	} 
		const daily = await axios.get(DAILY_URL, { params });
		const weekly = await axios.get(WEEKLY_URL, { params });
		//Daily
		daily.data.icon = iconUrl(daily.data.weather[0].icon, ICON_URL);
		daily.data.windDir = windDir(daily.data.wind.deg);

		//Weekly
		for (let v of weekly.data.list ){
			v.icon = iconUrl(v.weather[0].icon, ICON_URL);
			v.date = moment(Number(v.dt) * 1000).format('YYYY년 MM월 DD일 HH시');
			v.windDir = windDir(v.wind.deg);
		}

		return { daily: daily.data, weekly: weekly.data };
	}//axios는 객체로 params여야지 데이터를 받아온다 data로 했을때는 error남
	catch(e) {
		console.log(e);
		return e;
	}
}

export { axCity, axWeather }