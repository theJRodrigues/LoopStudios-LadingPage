import { useState, useEffect } from "react";

function useIsMobile() {

  const checkResolution = () => (window.innerWidth <= 810 ? true : false);
  const [windowResolution, setResolution] = useState(checkResolution);

  useEffect(()=>{
    window.addEventListener("resize", () => setResolution(checkResolution));
  }, [])
  
  return windowResolution;
}

export default useIsMobile;
