import { Link } from "react-router-dom";

function Imprint() {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1">
			<h2 className="pb-5 text-4xl">Imprint</h2>
			<p />
			<div>Global World</div>
			<div>GWIK LLC, 5203 Juan Tabo Blvd.</div>
			<div>4NE Suite 2b, Albuquerque, NM 87111 USA</div>
			<div />
			<div />
			<div />
			<p>
				{" "}
				Email: info@global-world.rs
				<br />
				Internet :{" "}
				<Link to="https://global-world.us/" target="_blank" rel="noopener">
        https://global-world.us/
				</Link>
			</p>
			<h2>General Terms and Conditions</h2>
			<p>
				{" "}
				You can find our General Terms and Conditions{" "}
				<Link to="/terms" target="_blank" rel="noopener">
					here
				</Link>
				.{" "}
			</p>
			<br />
			<br />
			<h2 className="pb-5 text-4xl">Liability</h2>
			<p>
				{" "}
				In the court decision, 312 O 85/98 - 'Liability for links' from 12 May 1998 the county court in Hamburg resolved that, should links be included on a website, then the requisite site is thereby responsible for the content displayed on the linked site. To prevent this liability, it is necessary to expressly disassociate oneself from this content of these links. For this reason we, hereby, wish to ascertain, that we most decidedly do not endorse the content on these linked sites. This
				disclaimer applies to all links which appear on our website and to the complete content of these websites; including those underlying the displayed banners. These services contain links to other internet sites, to resources and to other users of those services. With this disclaimer we would like to state that we are also not in any way responsible for the availability of the external resources, or for their content; for the content of which we do not necessarily approve. In addition, we
				claim no responsibility for the advertising content, the products or for other matters which appear on these websites.
				<br />
				Under no circumstances are we responsible for any loss, or damage, caused by the use of the content, the goods, or the services of these sites; we can be made neither directly, nor indirectly, liable for these. All issues relating to external links should be referred to the relevant site administrator or webmaster.
				<br />
				We also wish to disassociate ourselves from offensive, illegal, morally unethical or objectionable content. We would be extremely grateful to you, if you would inform us, should you be confronted with such content.
				<br />
				All rights, including those concerning the duplication of materials, copyright, publication and translation, are reserved. None of the materials publicised may be duplicated in any form (as photocopies, microfilms or used within other processes) without the written permission of the author; this includes duplication or distribution by electronic means.{" "}
			</p>
		</div>
	);
}
export default Imprint;
