import {
  FaWifi,
  FaChair,
  FaBolt,
  FaLightbulb,
  FaTint,
  FaSnowflake,
} from "react-icons/fa";
import { LuToilet } from "react-icons/lu";
import {
  MdSelfImprovement,
  MdOutlineSecurity,
  MdLibraryBooks,
  MdOutlineWc,
} from "react-icons/md";
import "./FacilitiesGrid.css";
import { Link } from "react-scroll";



function FacilitiesGrid() {
  const facilities = [
    { icon: <FaChair />, label: "Dedicated Personal Desks" },
    { icon: <FaWifi />, label: "Seamless High-Speed WiFi" },
    { icon: <FaLightbulb />, label: "Bright & Focused Lighting" },
    { icon: <FaSnowflake />, label: "Cool & Comfortable AC" },
    { icon: <FaTint />, label: "Fresh Purified Drinking Water" },
    { icon: <FaBolt />, label: "Uninterrupted Power Supply" },
    { icon: <MdSelfImprovement />, label: "Peaceful Study Vibe" },
    { icon: <MdOutlineSecurity />, label: "24×7 CCTV Surveillance" },
    { icon: <MdLibraryBooks />, label: "Daily News & Magazines" },
    { icon: <MdOutlineWc />, label: "Hygienic Washrooms" },
    // { icon: <LuToilet />, label: "Hygienic Washrooms" },
  ];

  return (
    <div className="facilities-wrapper" id="facilities">
      <h2 className="facilities-heading">Our Premium Facilities</h2>
      <div className="facilities-container">
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">{item.icon}</div>
            <div className="facility-label">{item.label}</div>
          </div>
        ))}
      </div>
      <Link to="pricing" smooth={true} duration={600} className="btn-explore">
        View Pricing Plans
      </Link>
    </div>
  );
}

export default FacilitiesGrid;
