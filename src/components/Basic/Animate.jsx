import ScrollAnimation from "react-animate-on-scroll";

function Animate({ config, children }) {
	let animateIn = "bounceInRight";
	let animateOut = "bounceOutLeft";
	let delay = 0;
	let offset = 150;
	let initiallyVisible = false;

	if (config) {
		if (config.animateOut) animateIn = config.animateOut;
		if (config.animateIn) animateIn = config.animateIn;
		if (config.delay) delay = config.delay;
		if (config.offset) offset = config.offset;
		if (config.initiallyVisible) initiallyVisible = config.initiallyVisible;
	}
	console.log(config, "configconfig");
	return (
		<ScrollAnimation animateIn={animateIn} animateOnce={true} delay={delay * 1000} offset={`${offset}`} initiallyVisible={initiallyVisible}>
			{children}
		</ScrollAnimation>
	);
}
export default Animate;
