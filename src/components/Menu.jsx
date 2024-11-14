import { useState, useEffect } from 'react';
import TopMen from "src/components/Header/TopMen";
import TopMen2 from "src/components/Header/TopMen2";
import MobileMenu from 'src/components/Header/MobileMenu'

function Menu() {
  const { height, width } = useWindowDimensions();
  console.log(height,width)
  return (
    <>
      {width > 1064 && <LargeMenu />}
      {width < 1064 && <MobileMenu />}
    </>
  );
}

const LargeMenu = () => {
  return (
    <>
      <TopMen />
      <TopMen2 />
    </>
  )
}



function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


export default Menu;
