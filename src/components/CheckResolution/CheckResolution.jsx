import { useState } from "react"
function CheckResolution(){
  
    const checkResolution = () => (window.innerWidth <= 810 ? true : false)
      const [windowResolution, setResolution] = useState(checkResolution)
      window.addEventListener('resize', () => setResolution(checkResolution))

      return windowResolution
}

export default CheckResolution