/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import shareLink from "../../Assets/Icons/Onboarding_Icons/link.svg";
import info from "../../Assets/Icons/Onboarding_Icons/info.svg";
import Onboarding_Skip_Continue_Btns from "../../Components/Onboarding/Onboarding_Skip_Continue_Buttons/Onboarding_Skip_Continue_Buttons";
import Onboarding_Alert_Modal from "../../Components/Onboarding/Onboarding_Alert_Modal/Onboarding_Alert_Modal";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

export default function Onboarding_5() {
  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into create an outline

  const [showLinkAlert, setShowLinkAlert] = useState(false);

  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_nav />
      <div className='title-and-form-wrapper max-w-[730px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[730px] h-auto mb-[48px] flex flex-col justify-start items-center'>
          <h1 className='mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Invite your team members
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Add members to collaborate within a workspace. Type or paste in one
            or multiple emails separated by commas.
          </p>
        </div>
        <form
          action=''
          className='w-full max-w-[420px] h-auto flex flex-col gap-[24px] justify-center items-start gap-y-[24px]'
        >
          <label hidden='hidden' for='emails'>
            Emails:
          </label>
          <textarea
            className={`${detectBrowser()} block w-full h-[110px] border py-[10px] px-[14px] border-[#ADB5BD] focus:border-[#556AEB] outline outline-1 outline-[#CED4DA] rounded-lg resize-none`}
            placeholder='johndoe@gmail.com, janedoe@gmail.com, ...'
            name='emails'
          ></textarea>
          <button
            className='text-[#0A70E8] flex self-end'
            onClick={(e) => {
              e.preventDefault();
              setShowLinkAlert(true); // trigger is here to test the show link success modal, remove later when share Link confirmation modal is added

              // hide modal after 2 seconds
              setTimeout(() => {
                setShowLinkAlert(false);
              }, 2000);
            }}
          >
            <img src={shareLink} alt='Share Link Icon' className='mr-[4px]' />
            Share Link
          </button>
          <Onboarding_Skip_Continue_Btns
            skipToPage=''
            formId=''
            btnText='Invite and take me to Syne'
            disabled={false}
            modalPosition='top-[160px]'
            message='Are you sure you want to skip?'
            continueOnClick={(e) => {
              // continue logic
            }}
          />
        </form>
        {/* //* Navigation Button and form Submit Input */}
        {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
        <Onboarding_progress_bar active='page5' />
        <Onboarding_Alert_Modal
          isVisible={showLinkAlert ? "visible" : "hidden"}
          modalPosition='top-[140px]'
          message='Link copied!'
          border='border-[#237B4B]'
          background='bg-[#C1FFDD]'
          iconLeft={info}
          iconLeftAlt='Info Icon'
          skipBtnVisible={false}
          exitBtnOnClick={() => setShowLinkAlert(false)}
        />
      </div>
    </div>
  );
}
