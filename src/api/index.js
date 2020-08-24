import axios from 'axios'
import {windDir, iconUrl} from '../modules/util.js'

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
	const params = { units: 'metric', appid: API_KEY, id: cityId };
	try {
		const daily = await axios.get(DAILY_URL, { params });
		const weekly = await axios.get(WEEKLY_URL, { params });
		daily.data.icon = iconUrl(daily.data.weather[0].icon, ICON_URL)
		daily.data.windDir = windDir(daily.data.wind.deg)
		
		return { daily: daily.data, weekly: weekly.data };
	}//axios는 객체로 params여야지 데이터를 받아온다 data로 했을때는 error남
	catch(e) {
		console.log(e);
		return e;
	}
}

export { axCity, axWeather }