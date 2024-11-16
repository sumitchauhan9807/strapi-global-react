import ScrollAnimation from "react-animate-on-scroll";

function Animate({ config,children }) {
  let animateIn = "bounceInRight"
  let animateOut = "bounceOutLeft"
  let delay = 0

  if(config) {
    if(config.animateOut) animateIn = config.animateOut
    if(config.animateIn) animateIn = config.animateIn
    if(config.delay) delay = config.delay

  }
  console.log(config,"configconfig")
	return (
		<ScrollAnimation animateIn={animateIn}  animateOnce={true} delay={delay * 1000}>
			{children}
		</ScrollAnimation>
	);
}
export default Animate;
