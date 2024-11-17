import Partners from "src/components/Partners";
import Team from 'src/components/Team'
function OurPartners() {
	return (
		<>
    <section className="flex relative items-center w-full h-[400px] overflow-hidden border">
				<img className="absolute w-full" src="https://cdn.sanity.io/images/yk5gp8um/prod/2bfdb6e79211d931344d574cf773b94dd4690b20-3600x2160.jpg?w=1280&h=720&auto=format" alt="" />
			</section>
			<Partners />
      <Team/>
		</>
	);
}
export default OurPartners;
