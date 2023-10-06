/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState } from "react";
import Onboarding_Header from "../../Components/Onboarding/Onboarding_Header/Onboarding_header";
import Onboarding_Progress_Bar from "../../Components/Onboarding/Onboarding_Progress_Bar/Onboarding_Progress_Bar";
import Onboarding_Nav from "../../Components/Onboarding/Onboarding_Nav/Onboarding_Nav";
import Onboarding_Dropdown from "../../Components/Onboarding/Onboarding_Dropdown/Onboarding_Dropdown";
import DropdownButton from "../../Components/Onboarding/Onboarding_Dropdown/DropdownButton";
// import dotBlue from "../../Assets/Icons/Onboarding/dot-blue.svg";
// import dotOrange from "../../Assets/Icons/Onboarding/dot-orange.svg";
// import dotRed from "../../Assets/Icons/Onboarding/dot-red.svg";
// import dotGreen from "../../Assets/Icons/Onboarding/dot-green.svg";
// import add_icon from "../../Assets/Icons/Onboarding/plus.svg";
import ASAP from "../../Assets/Icons/Onboarding/ASAP.svg";
import flagRed from "../../Assets/Icons/Onboarding/flag-red.svg";
import flagYellow from "../../Assets/Icons/Onboarding/flag-yellow.svg";
import flagGrey from "../../Assets/Icons/Onboarding/flag-grey.svg";
import { Link } from "react-router-dom";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";
//TODO: Refactor this to use OOP

export default function Onboarding_5() {
  const [statusVisible, setStatusVisible] = useState(false);
  const [priorityVisible, setPriorityVisible] = useState(false);
  const [statusTitle, setStatusTitle] = useState("Not Selected");
  const [priorityTitle, setPriorityTitle] = useState("Not Selected");

  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into create an outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }

  // function generateStatusTitle(item) {
  //   if (item === "To Do") {
  //     return (
  //       <li className={listStyles}>
  //         <img src={dotBlue} className='w-[10px]' alt='' />
  //         To Do
  //       </li>
  //     );
  //   }
  // }

  // function getInput() {
  //   let userInput = prompt("Enter Status: ");
  //   console.log(userInput);
  //   return userInput;
  // }

  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_Header />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_Progress_Bar active='page5' />

      <div className='title-and-form-wrapper max-w-[541px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[541px] h-auto mb-[72px] flex flex-col justify-start items-center'>
          <h1 className='mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Let's create a project
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Add information about your project
          </p>
        </div>
        <form
          action=''
          className='w-[88.38%] h-auto flex flex-col gap-[24px] justify-center items-start'
        >
          <label
            className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px]
                '
          >
            Project Title *
            <input
              //
              type='text'
              name='project-title'
              required
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px] outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          <label
            className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
          >
            Date *
            <input
              //
              type='date'
              name='date'
              required
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px]  outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          <div className='status-priority-wrapper relative w-[100%] flex flex-row justify-between gap-[20px]'>
            <div className='status-wrapper w-[50%] flex flex-col gap-[8px]'>
              <p
                className='label w-[100%] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
              >
                Status *
              </p>
              {/* //& dropdown components here */}
              {/* //TODO: update button title via state changes */}
              <DropdownButton
                title={statusTitle}
                onClick={(e) => {
                  setStatusVisible(!statusVisible);
                  e.preventDefault();
                  console.log("Status Selector");
                }}
              />

              <Onboarding_Dropdown
                type='status'
                dropdownClassName={`${statusVisible ? "" : "hidden"}`}
                //  <li> elements rendered here via map function in onboardingDropdown.js
              />
            </div>
            <div className='priority-wrapper relative w-[50%] flex flex-col gap-[8px]'>
              <p
                className='label w-[100%] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
              >
                Priority *
              </p>

              <DropdownButton
                title={priorityTitle}
                onClick={(e) => {
                  setPriorityVisible(!priorityVisible);
                  e.preventDefault();
                  console.log("Priority Selector");
                }}
              />
              <Onboarding_Dropdown
                type='priority'
                dropdownClassName={`${priorityVisible ? "" : "hidden"}`}
                //  <li> elements rendered here via map function in onboardingDropdown.js
              />
            </div>
          </div>
          <label
            className='w-[100%] mb-[24px] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
          >
            Category (Optional)
            <input
              //
              type='text'
              name='project-title'
              placeholder='Not Selected'
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px] outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          {/* //* Navigation Button and form Submit Input */}
          <Onboarding_Nav />
        </form>
        <Link
          to=''
          className='h-[24px] mt-[12px] font-Poppins font-medium text-[16px] leading-[24px] text-[#556AEB] text-center underline underline-offset-2 cursor-pointer'
        >
          Ask Later
        </Link>
      </div>
    </div>
  );
}
