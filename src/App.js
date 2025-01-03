import Router from "src/router";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { setLang } from "src/redux/language";
import { useDispatch } from "react-redux";
import {Languages} from 'src/helpers'
function App() {
	const language = useSelector((state) => state.language);
	const dispatch = useDispatch();

	const { i18n } = useTranslation();
	let currentPath = window.location.pathname.split("/");
	let lastQuery = currentPath[currentPath.length - 1];
	if (lastQueryContainsLanguage(lastQuery)) {
		dispatch(setLang(lastQuery));
	} else {
		if(window.location.pathname != '/') {
			dispatch(setLang("en"));
		}
	}

	useEffect(() => {
		i18n.changeLanguage(language.language);
	}, [language.language]);
	return (
		<div className="App">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}

const lastQueryContainsLanguage = (query) => {
	let findLang = Languages.find(l => l.code == query)
	if (findLang) {
		return true;
	}
	return false;
};

export default App;
