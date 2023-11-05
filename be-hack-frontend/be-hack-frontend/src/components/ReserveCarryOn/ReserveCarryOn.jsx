import "./ReserveCarryOn.css";
import OverheadCabin from "../OverheadCabin/OverheadCabin";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,

  Center, 
} from "@chakra-ui/react";


const ReserveCarryOn = () => {
  return (
    <div className="reserve-carry-on">
      <Center>
      <div className="header">
        
        <ul className="links">
          <li>
            <Link to={"/LandingPage"} className="link">
              Cancel
            </Link>
          </li>

          {/* FLIGHT INFORMATION */}
          <li>
            <p>DFW -- ATL </p>
          </li>

          {/* LEGEND */}
          <li>
            <Popover>
              <PopoverTrigger>
                <p>Legend</p>
              </PopoverTrigger>
              <PopoverContent color="black">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <p> ⬜️ Reserved</p>
                  <p> 🟦 Available </p>
                  <p> 🟥 Selected </p>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
        
      </div>
      </Center>
      <div>
        <p className="reserve-title">Reserve Bin Space Below</p>
      </div>
      <div className="bins-grid">
        <OverheadCabin />
        

      </div>


  
    </div>
  );
};

export default ReserveCarryOn;