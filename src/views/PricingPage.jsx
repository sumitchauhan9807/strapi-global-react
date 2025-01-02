
import PricingTabs from 'src/components/PricingTabs'
import GlobalWorldMap from "src/components/Basic/GlobalWorldMap";
import Countries from 'src/components/Basic/Counteries'
import {useLanguageInQuery} from 'src/Hooks/HelperHooks'

export const PricingPage = () => {
  useLanguageInQuery()
  return (
   <>
   <PricingTabs/>
   {/* <GlobalWorldMap/>
   <Countries/> */}
   </>
  );
};
export default PricingPage;