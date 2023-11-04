import "./CarryOnPrompt.css"
import {Button} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

// THIS COMPONENT IS USE TO ASK THE USER IF THEY ARE STOWING A CARRYON
// IF THEY ARE --> DIRECT USER/ PAGE TO RESERVE CARRY ON PAGE/ COMPONENT 
// IF NOT --> DIRECT USER TO FINAL FLIGHT INFORMATION 



const CarryOnPrompt = () => {
  return (
    <div>
        <div> 
            <p> Carry On Page </p>
        </div>

        <Button variant='outline'>
            <Link to={"/reservecarryon"}> Reserve Bin Space </Link>
        </Button>


    </div>
  )
}

export default CarryOnPrompt