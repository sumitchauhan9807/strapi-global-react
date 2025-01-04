import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Menu from "src/components/Menu";
import Footer from "./components/PageFooter";
// import Footer from "src/components/Footer";
import { useParams } from 'react-router';

import { PageSkeleton } from "src/components/small/Skeletons";
import Home from "src/views/Home";
import Solutions from "src/views/Solutions";
import ContactUs from "src/views/ContactUs.jsx";
import PricingPage from "src/views/PricingPage.jsx";
import AutomatedCallsPage from "src/views/AutoCalls.jsx";
import RobotController from "src/views/RobotController";
import HomeOffice from "src/views/HomeOffice";
import PhoneNumber from "src/views/PhoneNumber.jsx";
import SipTrunk from "src/views/SipTrunk";
import VoiceRobots from "src/views/VoiceRobots";
import AiContactcenter from "src/views/AiContactcenter.jsx";
import TextTospeach from "src/views/SpeachTotext.jsx";
import VoiceRobot from "src/views/VoiceRobot";
import PBx from "src/views/PBx";
import CallTranscription from "src/views/CallTranscription";
import CallRecording from "src/views/CallRecording";
import ChatbotNews from "src/views/ChatbotandNewsletter";
import AccSales from "src/views/AccelerationofSales";
import ChatBotbuilder from "src/views/ChatbotBuilder";
import FreelancerChatbot from "src/views/ChatbotdesignforFreelancers";
import OurPartners from "src/views/OurPartners";
import CountriesPage from "src/views/Countries";

import Team from "src/views/Team";
import Terms from "src/views/Terms";
import Privacy from "src/views/Privacy";
import Imprint from "src/views/Imprint";
import { filterDomainData } from 'src/helpers'
import { GlobalData } from "src/context";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAxios from "./Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import Impressum from "./views/ImpresSum";
import Datenschutz from "./views/DatenscHutz";
import { useLocation } from "react-router-dom";


let qs = constructQueryString(["LightLogo", "DarkLogo","DomainSpecificData"]);
let qs2 = constructQueryString(["Navigation.MenuItem.SubMenu","TopMenu"]);

function Router() {
	
	const [data, setData] = useState([]);
	const [translations, setTranslations] = useState([]);

	const language = useSelector((state) => state.language);
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `global?${qs}locale=${language.language}`,
	});
	const translationQuery = useAxios({
		method: "get",
		url: `translation?${qs2}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			let filteredData = filterDomainData(response)
			setData(filteredData);
		}
	}, [response]);
	useEffect(() => {
		if (translationQuery.response !== null) {
			setTranslations(translationQuery.response);
		}
	}, [translationQuery.response]);
	if (loading) return <PageSkeleton />;
	if (translationQuery.loading) return <PageSkeleton />;

	if (!data.data) return;
	if (!translations.data) return;
	return (
		<>
			<GlobalData.Provider value={{
				global:data.data,
				translations:translations.data
			}}>
				<Menu />
				<Routes>
					<Route exact path="/:lang?" element={<Home />} />
					<Route exact path="/solutions/phone-numbers/:lang?" element={<Solutions />} />
					<Route exact path="/solutions/robot-controller/:lang?" element={<RobotController />} />
					<Route exact path="/solutions/home-office/:lang?" element={<HomeOffice />} />
					<Route exact path="/solutions/voice-robots/:lang?" element={<VoiceRobots />} />
					<Route exact path="/contactus/:lang?" element={<ContactUs />} />
					<Route exact path="/pricing/:lang?" element={<PricingPage />} />
					<Route exact path="/automatedcalls/:lang?" element={<AutomatedCallsPage />} />
					<Route exact path="/aicontactcenter/:lang?" element={<AiContactcenter />} />
					<Route exact path="/phonenumber/:lang?" element={<PhoneNumber />} />
					<Route exact path="/siptrunk/:lang?" element={<SipTrunk />} />
					<Route exact path="/texttospeach/:lang?" element={<TextTospeach />} />
					<Route exact path="/voicerobot/:lang?" element={<VoiceRobot />} />
					<Route exact path="/pbx/:lang?" element={<PBx />} />
					<Route exact path="/calltranscription/:lang?" element={<CallTranscription />} />
					<Route exact path="/callrecording/:lang?" element={<CallRecording />} />
					<Route exact path="/chatbotnews/:lang?" element={<ChatbotNews />} />
					<Route exact path="/accsales/:lang?" element={<AccSales />} />
					<Route exact path="/chatbotbuilder/:lang?" element={<ChatBotbuilder />} />
					<Route exact path="/freelancerchatbot/:lang?" element={<FreelancerChatbot />} />
					<Route exact path="/partners/:lang?" element={<OurPartners />} />
					<Route exact path="/countries/:lang?" element={<CountriesPage />} />
					<Route exact path="/team/:lang?" element={<Team />} />
					<Route exact path="/terms/:lang?" element={<Terms />} />
					<Route exact path="/privacy/:lang?" element={<Privacy />} />
					<Route exact path="/imprint/:lang?" element={<Imprint />} />
					<Route exact path="/impressum/:lang?" element={<Impressum />} />
					<Route exact path="/datenschutz/:lang?" element={<Datenschutz />} />"
				</Routes>
				<Footer />
			</GlobalData.Provider>
		</>
	);
}

export default Router;
