import { Nav as Navbar } from '../components/Navbar.jsx'; // Named import
import HeroBanner from '../components/HeroBanner.jsx';
import bgimage from '../assets/home/1.png'
import SectionTwo from 'src/components/SectionTwo.jsx';
import  SectionThree  from 'src/components/SectionThree.jsx';
import SectionFour from 'src/components/SectionFour.jsx';
import Footer from 'src/components/PageFooter.jsx';
import Pricing from 'src/components/PricingTable.jsx';
import SectionFive from 'src/components/SectionFive.jsx';
function Home() {
  return (
    <>
      <div>
        <div className="">
          <Navbar />


          {/* header section starts here */}
          <HeroBanner />

          {/* header section ends here */}
{/* SectionFour */}
<SectionFour/>
          {/* SectionFour */}
          {/* other section  */} 
          <SectionTwo/>
          {/* other section  */}

<SectionFive/>
<Pricing/>
          {/* Sectionthree */}
          < SectionThree/>
          {/* SectionThree */}

          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Home;
