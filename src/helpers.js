import { production } from "src/axios";
import USA from "src/assets/flags/usa.png";
import arabic from "src/assets/flags/arabic.png";
import france from "src/assets/flags/france.png";
import germany from "src/assets/flags/germany.png";
import hungary from "src/assets/flags/hungary.png";
import italy from "src/assets/flags/italy.png";
import romania from "src/assets/flags/romania.png";
import russia from "src/assets/flags/russia.png";
import serbia from "src/assets/flags/serbia.png";
export const baseUrl = () => {
	return production ? "https://backend.globalchat.us" : "http://localhost:1337";
};

export const constructQueryString = (fields) => {
	let str = "";
	fields.forEach((element, index) => {
		str += `populate[${index}]=${element}&`;
	});
	return str;
};

export const Languages = [
	{
		code: "en",
		name: "English",
		flag: USA,
	},
	{
		code: "ar",
		name: "العربية",
		flag: arabic,
	},
	{
		code: "en",
		name: "française",
		flag: france,
	},
	{
		code: "de",
		name: "Deutsch",
		flag: germany,
	},
	{
		code: "en",
		name: "Magyarország",
		flag: hungary,
	},
	{
		code: "en",
		name: "Italia",
		flag: italy,
	},

	{
		code: "en",
		name: "română",
		flag: romania,
	},
	{
		code: "en",
		name: "Русский",
		flag: russia,
	},
	{
		code: "en",
		name: "Србија",
		flag: serbia,
	},
];

export const getLanguages = () => {
	let allLangs = [];
	let myarr = [];
	let arraysLength = 2;
  let itemsPushed = 0
  for (let i = 0; i < arraysLength; i++) {
    let arr = []
    arr.push(Languages[i])
	}

	for (let i = 0; i < Languages.length; i++) {
	
	}
	return allLangs;
};
