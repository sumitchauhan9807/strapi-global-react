import TopMen from "src/components/Header/TopMen";
import TopMen2 from "src/components/Header/TopMen2";
import MobileMenu from "src/components/Header/MobileMenu";
import { useWindowDimensions } from 'src/Hooks/HelperHooks'
function Menu() {
	const { height, width } = useWindowDimensions();

	return (
		<>
			{width > 1064 && <LargeMenu />}
			{width < 1064 && <SmallMenu />}
		</>
	);
}

const LargeMenu = () => {
	return (
		<>
			<TopMen />
			<TopMen2 />
		</>
	);
};

const SmallMenu = () => {
	return (
		<>
			<TopMen />
			<MobileMenu />
		</>
	);
};

export default Menu;
