import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import OnboardingButton from "../Onboarding_Button/Onboarding_Button";
import OnboardingAlertModal from "../Onboarding_Alert_Modal/Onboarding_Alert_Modal";
import warning from "../../../Assets/Icons/Onboarding_Icons/warning.svg";
import exit from "../../../Assets/Icons/Onboarding_Icons/exit.svg";

// To use the Skip/Continue component, pass the following props: 
//   1) pass the filepath to navigate to (skipToPage)
//   2) pass the id of the form (formID)
//   3) pass the button text of the Continue Btn (btnText)
//   4) pass the state of the Continue Button (disabledState will be true or false)
//   5) pass Alert Message (message)

// Issues: Modal doesn't appear at top of the page

export default function Onboarding_Skip_Continue_Btns(props) {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleSkip = () => {
    setShowAlert(false);
    navigate(props.skipToPage)
  }

  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <OnboardingButton
        type="submit"
        form={props.formID}
        btnText={props.btnText}
        disabled={props.disabledState}
        className="w-[100%]"
      />
      <button
        onClick={() => setShowAlert(true)}
        className='text-[#0A70E8] underline my-[24px]'
      >
        Skip
      </button>
      <OnboardingAlertModal 
        isVisible={showAlert ? 'visible' : 'hidden'}
        message={props.message}
        border="border-[#D82D07]"
        background="bg-[#FFDDDF]"
        iconLeft={warning}
        iconLeftAlt='warning'
        iconRight={exit}
        iconRightAlt='exit button'
        skipBtnVisible={true}
        skipBtnOnClick={handleSkip}
        exitBtnOnClick={() => setShowAlert(false)}
      />
    </div>
  )
}