import Router from "src/router";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function App() {
	const language = useSelector((state) => state.language);
	const { i18n } = useTranslation();
	
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

export default App;
