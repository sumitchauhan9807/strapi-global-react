import useAxios from 'src/Hooks/UseAxios'
import { PageSkeleton } from 'src/components/small/Skeletons'
import { constructQueryString } from 'src/helpers'
import { useSelector } from 'react-redux'
import { useEffect ,useState } from 'react';
import { baseUrl } from 'src/helpers'

import contactFormVectorImg from "../assets/images/contactForm.jpg";
import SolutionDescription from "src/components/Solution/SolutionDescription";
import SolutionCTA from "src/components/Solution/SolutionCTA";
import WhatSolutionDo from "src/components/Solution/WhatSolutionDo";
import SolutionTip from "src/components/Solution/SolutionTip";
import SolutionBenefits from "src/components/Solution/SolutionBenefits";
import HowSolutionWorks from "src/components/Solution/HowSolutionWorks";
import ActivateSolution from "src/components/Solution/ActivateSolution";

let qs = constructQueryString([
    "TopImage",
		"SolutionDescription",
		"SolutionsCTA",
		"SolutionsCTA.Image",
		"WhatSolutionDO.SolutionDos",
		"SolutionBenefits",
		"HowSolutionWorks"
]);
export default function Solutions() {
    const [data, setData] = useState([]);
    const language = useSelector((state) => state.language);
    const { response, loading, error } = useAxios({
      method: "get",
      url: `solution-phone-number?${qs}locale=${language.language}`,
    });
    useEffect(() => {
      if (response !== null) {
        setData(response);
      }
    }, [response]);
    if (loading) return <PageSkeleton />
    if (!data.data) return
		console.log(data.data)
	return (
		<>
			<section className="flex relative items-center w-full h-[400px] overflow-hidden border">
				<img className="absolute w-full" src={baseUrl() + data.data.TopImage.url} alt="" />
			</section>
			{/* <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: 'url("")', height: '400px' }} /> */}
			<SolutionDescription data={data.data.SolutionDescription}/>
			<SolutionCTA data={data.data.SolutionsCTA} />
			<WhatSolutionDo data={data.data.WhatSolutionDO} />
			<SolutionTip data={data.data.SolutionTip} />
			<SolutionBenefits data={data.data.SolutionBenefits} />
			<HowSolutionWorks data={data.data.HowSolutionWorks} />
			<ActivateSolution data={data.data.SolutionDescription} />
			{/* <section className="flex items-center my-32 border max-w-[1200px] mx-auto p-8 gap-8">
                <figure className="w-[600px]">
                    <img src={contactFormVectorImg} alt="" />
                </figure>
                <form>
                    <h5 className="text-2xl font-bold">Write us</h5>
                    <div className="flex flex-col">
                        <div className="flex items-center w-full my-2 gap-2">
                            <input type="text" placeholder="name" className="border w-full p-2"/>
                            <input type="text" placeholder="email" className="border w-full p-2" />
                        </div>
                        <input type="text" placeholder="phone number" className="border p-2" />
                        <button className="bg-green-600 w-max p-2 px-8 my-2 font-bold text-white">Submit</button>
                    </div>
                    <div className="flex justify-between gap-8">
                        <small className="text-gray-400 w-[60%]">
                            If you have any further questions, please call this number for a free consultation:
                        </small>
                        <small>000 000 000</small>
                    </div>
                </form>
            </section> */}
		</>
	);
}
