import AllPurposeContainer from "../components/AllPurposeContainer";
import AllPurposeLabel from "../components/AllPurposeLabel";
import PrincipleLogo from "../components/PrincipleLogo";
import AllPurposeInput from "../components/allPurposeInput";
import { useState } from "react";

const LoginPage = () => {
  // Background styling for the login page
  const loginBackground = `bg-[url('/principleCleanLogoBackground.png')]  bg-cover bg-center h-screen w-full flex justify-center items-center`;
  const [buttonHovered, setButtonHoverStatus] = useState(false);
  const [forgotPasswordHovered, setforgotPasswordHoverStatus] = useState(false);

  const buttonStyling = `text-white px-4 py-2 rounded w-full ${buttonHovered? "bg-blue-600" : "bg-blue-700"}`;
  const forgotPasswordHoverStyle = `mt-4 text-blue-600 text-center ${forgotPasswordHovered? "" : "underline"}`;
  return (
    <div className={loginBackground}>
      <AllPurposeContainer containerStyling="bg-white p-8 rounded-xl border border-blue-300 shadow-lg max-w-md w-full flex flex-col justify-center  items-center min-h-[400px]">
        <PrincipleLogo principleLogoStyling="w-30 h-28"/>

        <div className="w-full flex flex-col mt-2 mb-2">
          <AllPurposeLabel
            labelStyling="text-black text-3xl font-bold mb-3 text-center"
            value="Log In"
          />
          
          <AllPurposeLabel
            labelStyling="text-black mb-5  text-center"
            value="Please Enter Your Login Details"
          />
        </div>

        
        <form className="w-full ">
          
          <AllPurposeLabel labelStyling="text-black" value="User Email" />
          <AllPurposeInput inputPlaceHolder="User Email" inputType="text" inputId="userEmail" />
          
          <AllPurposeLabel labelStyling="text-black" value="Password" />
          <AllPurposeInput inputPlaceHolder="Password" inputType="password" inputId="userPassword" />
        
          <button type="submit" onMouseEnter={() => setButtonHoverStatus(false)} onMouseLeave={() => setButtonHoverStatus(true)} className={buttonStyling}>
            Login
          </button>
        </form>

        <div className={forgotPasswordHoverStyle}>
          <a href="/forgot-password"
          onMouseEnter={() => setforgotPasswordHoverStatus(false)}
          onMouseLeave={() => setforgotPasswordHoverStatus(true)}>
            Forgot Password?
          </a>
        </div>
        <br/>
        <p className="text-sm text-gray-400">Principle Cleaning Services Ltd - @Sales & Commercial</p>
        <p className="text-sm text-gray-400">Passionate About People, Sustainability & Innovation</p>
      </AllPurposeContainer>
    </div>
  );
};

export default LoginPage;
