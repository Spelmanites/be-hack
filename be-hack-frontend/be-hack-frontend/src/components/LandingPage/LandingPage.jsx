import './LandingPg.css'
import {Button} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        
        <div> 
            <p> Landing Page </p>
        </div>

        <Button variant='outline'>
            <Link to={"/carryon"}> Carry On Prompt Page </Link>
        </Button>


    </div>
  )
}

export default LandingPage