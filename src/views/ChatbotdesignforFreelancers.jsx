import useAxios from 'src/Hooks/UseAxios'
import { PageSkeleton } from 'src/components/small/Skeletons'
import { constructQueryString } from 'src/helpers'
import { useSelector } from 'react-redux'
import { useEffect ,useState } from 'react';
import ProductDescription from 'src/components/Product/ProductDescription'
import ProductSpecsList from 'src/components/Product/ProductSpecsList'
import DeployingSteps from 'src/components/Product/DeployingSteps'
import {useLanguageInQuery} from 'src/Hooks/HelperHooks'


let qs = constructQueryString([
  "Description",
  "Description.ProductSpecs",
  "Description.Image",
  "ProductSpecs",
  "ProductSpecs.ProductSpecs",
  "ProductSpecs.Image",
  "DeployingSteps",
  "DeployingSteps.Steps",
  "DeployingSteps.Image"
]);

const PhoneNumber = () => {
  useLanguageInQuery()
  const [data, setData] = useState([]);
  const language = useSelector((state) => state.language);
  const { response, loading, error } = useAxios({
    method: "get",
    url: `freelance-developer?${qs}locale=${language.language}`,
  });
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  if (loading) return <PageSkeleton />
  if (!data.data) return
  return (
    <div className="flex items-center justify-center p-10 bg-gray-50 rounded-lg">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <ProductDescription
         data={data.data.Description}
        />
        <ProductSpecsList
          data={data.data.ProductSpecs}
        />
        <DeployingSteps
        data={data.data.DeployingSteps}
        />
      </div>
    </div>
  );
};

export default PhoneNumber;
