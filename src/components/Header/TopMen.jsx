import { FaUser } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import { GlobalData } from "src/context";
import { useContext } from "react";
import { SocialMedia } from "src/components/Header/SocialMedia.jsx";

export default function TopMen() {
	const globalData = useContext(GlobalData);
	console.log(globalData.translations.TopMenu, "globalDataglobalDataglobalData");
	return (
		<menu className="flex flex-col lg:flex-row items-center lg:justify-between lg:px-28 bg-[#141b24] p-4 text-white">
			{/* Left Section */}
			<div className="flex flex-wrap gap-6 lg:flex-row items-center ">
				{globalData.translations.TopMenu.map((menu) => {
					return (
						<div className="uppercase text-center lg:text-left font-light">
							<Link to={menu.Link} className="hover:underline">
              {menu.Name}
							</Link>
						</div>
					);
				})}
			</div>

			{/* Middle Section (Social Media Icons) */}
			<div className="my-4 lg:my-0  hidden lg:block ml-64 justify-center">
				<SocialMedia />
			</div>

			{/* Right Section */}
			<div className="flex lg:flex-wrap items-center lg:items-end lg:py-2 py-3 text-sm gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="20" height="20" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }} viewBox="0 0 6.827 6.827">
					<defs>
						<style dangerouslySetInnerHTML={{ __html: ".fil0{fill:none}.fil2{fill:#e64a19}" }} />
					</defs>
					<g id="Layer_x0020_1">
						<g id="_491463032">
							<path id="_491463320" className="fil0" d="M0 0h6.827v6.827H0z" />
							<path id="_491463128" className="fil0" d="M.853.853h5.12v5.12H.853z" />
						</g>
						<g id="_491478824">
							<path id="_491463224" d="M.909 2.24c.067 1.39 1.968 3.158 3.255 3.57.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462c-.992-.54-1.408-.966-1.953-1.951l.462-.462c.119-.119.132-.317.01-.439l-.803-.803C1.37.598.883 1.715.908 2.24z" style={{ fill: "#ff6e40" }} />
							<path id="_491478584" className="fil2" d="m.909 2.24 1.24.51.462-.46c.119-.12.132-.318.01-.44l-.803-.803C1.37.598.883 1.715.908 2.24z" />
							<path id="_491478176" className="fil2" d="M4.164 5.81c.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462.062 1.107z" />
						</g>
					</g>
				</svg>
				<span>{globalData.global.TopMenuPhone1} &nbsp;</span>
				<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="20" height="20" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }} viewBox="0 0 6.827 6.827">
					<defs>
						<style dangerouslySetInnerHTML={{ __html: ".fil0{fill:none}.fil2{fill:#e64a19}" }} />
					</defs>
					<g id="Layer_x0020_1">
						<g id="_491463032">
							<path id="_491463320" className="fil0" d="M0 0h6.827v6.827H0z" />
							<path id="_491463128" className="fil0" d="M.853.853h5.12v5.12H.853z" />
						</g>
						<g id="_491478824">
							<path id="_491463224" d="M.909 2.24c.067 1.39 1.968 3.158 3.255 3.57.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462c-.992-.54-1.408-.966-1.953-1.951l.462-.462c.119-.119.132-.317.01-.439l-.803-.803C1.37.598.883 1.715.908 2.24z" style={{ fill: "#ff6e40" }} />
							<path id="_491478584" className="fil2" d="m.909 2.24 1.24.51.462-.46c.119-.12.132-.318.01-.44l-.803-.803C1.37.598.883 1.715.908 2.24z" />
							<path id="_491478176" className="fil2" d="M4.164 5.81c.863.275 2.148-.269 1.64-.777L5 4.23c-.122-.123-.32-.108-.439.01l-.46.462.062 1.107z" />
						</g>
					</g>
				</svg>
				<span>{globalData.global.Phonenumber} &nbsp;</span>
				<a target="_blank" rel="noopener noreferrer" href={`mailto:${globalData.global.Email}`} className="underline hover:text-gray-300 hidden lg:block transition">
					{globalData.global.Email}
				</a>{" "}
				<br />
			</div>
			<a target="_blank" rel="noopener noreferrer" href={`mailto:${globalData.global.Email}`} className="underline hover:text-gray-300 lg:hidden block transition">
				{globalData.Email}
			</a>
			<div className="my-4 lg:my-0 flex lg:hidden block justify-center">
				<SocialMedia />
			</div>
		</menu>
	);
}
