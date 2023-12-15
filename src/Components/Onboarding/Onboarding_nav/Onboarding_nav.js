import React, { useState } from "react";
import { Link, useLocation , useNavigate } from "react-router-dom";
import back from "../../../Assets/Icons/Onboarding_Icons/back.svg"
import back_selected from "../../../Assets/Icons/Onboarding_Icons/back_selected.svg"
import exit from "../../../Assets/Icons/Onboarding_Icons/exit.svg"
import Onboarding_Action_Modal from "../Onboarding_Action_Modal/Onboarding_Action_Modal"
import syne_logo from "../../../Assets/Icons/syne-logo.svg";

export default function Onboarding_Nav(props) {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isExitHovered, setIsExitHovered] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const handleSkip = () => {
    setShowAlert(false);
    navigate(props.skipToPage);
  };

  //Back button functionality
  const traverseBack = (currentPath) => {
    switch (currentPath) {
      case "/onboarding_1":
        return;

      case "/onboarding_2":
        return "/onboarding_1";

      case "/onboarding_3":
        return "/onboarding_2";

      case "/onboarding_4":
        return "/onboarding_3";

      case "/onboarding_5":
        return "/onboarding_4";
        
      default:
        return;
    }
  };

  // Only show nav bar if we can go to previous page
  const renderNavBar = currentLocation.pathname !== '/onboarding_1';

  return (
    //* Back and Exit buttons
    <div className=' w-[100%] self-stretch'>
      <div className='header-inner-wrapper w-[1440px] h-[72px] mx-[24px] pt-[16px] pb-[16px] flex justify-start items-center pr-'>
        <img
          className='w-[30px] h-[30px] mr-[14px]'
          src={syne_logo}
          alt='Syne Logo'
        />
        <p className='font-Poppins text-[20px] font-normal leading-[30px] tracking-[-0.266px]'>
          Syne
        </p>
      </div>
      {renderNavBar && (
        <div className="flex p-16 px-74 h-[64px] pt-[16px] pb-[136px] justify-between items-center self-stretch">
      <Link
        className='flex'
        to={traverseBack(currentLocation.pathname)}
        onClick={() => {
          //calculate new path
          traverseBack(currentLocation.pathname);
          console.log(
            "traverseBack - current path: " + currentLocation.pathname
          );
          console.log(
            "traverseBack - new path: " + traverseBack(currentLocation.pathname)
          );
        }}
      >
        <div class="flex items-center gap-[2px] hover:text-[#556AEB]"
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)} >
          <img
            src={isBackHovered ? back_selected : back}
            alt='back'
          />  
          Back
        </div>
      </Link> 
      
    <button 
      className='flex'
      onMouseEnter={() => setIsExitHovered(true)}
      onMouseLeave={() => setIsExitHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        setShowAlert(true);
      }}      >    
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: isExitHovered ? 'var(--neutral-300, #e9ecef)' : 'var(--neutral-100, #F8F9FA)', // Conditional background color
          width: '32px', 
          height: '32px', 
        }}
      >
      <img
          className=''
          src={exit}
          alt='exit'
        />
                 
      </div>
    </button>
    <Onboarding_Action_Modal
      isVisible={showAlert ? "visible" : "hidden"}
      modalPosition=''
      title="Close your workspace setup?"
      message="You will skip all the set up and be taken to workspace dashboard."
      topBtnText="Continue setup"
      topBtnOnClick={() => setShowAlert(false)}
      bottomBtnText="Skip all setup"
      bottomBtnOnClick={handleSkip}
    />
    </div>
    )}
    </div>
  );
}
