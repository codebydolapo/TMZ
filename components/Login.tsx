import styles from "../styles/login.module.css";
import UniversalLogo from "./UniversalLogo";
import Link from 'next/link'


function Login() {

  return (
    <div className={`w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#8f329d]`}>
      <UniversalLogo />
      <img src={'/icons/purpleIcon.jpg'} className={`w-[20rem] h-[20rem] rounded-full`} alt="" />
      <Link href='/marketplace'>
        <button className={`w-[13rem] h-[45px] bg-[#000] text-white color-white rounded-lg my-[20px] cursor-pointer ${styles.loginButton}`}>Proceed To Shop</button>
      </Link>
      <p className={`text-base text-white text-center md:w-[40rem] xs:w-[95vw]`}>
        By signing-in you agree to Purple&apos;s Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>
    </div>
  );
}

//By signing-in you agree to NASIE COLLECTIONS' Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.

export default Login;
