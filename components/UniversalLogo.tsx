function UniversalLogo(){

    return(
        <div className = {`md:h-[4.5rem] md:w-[25rem] flex items-center justify-start fixed top-0 left-0 bg-black xs:h-[4rem] xs:w-[23rem]`}>
          <img src={'/icons/purpleIcon.jpg'} className={`w-[3rem] h-[3rem] rounded-full mx-2`} alt="" />
          <p className = {`text-3xl text-white`}>
            <strong>Purple</strong>Collections
          </p>
        </div>
    )

}

export default UniversalLogo