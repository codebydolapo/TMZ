function UniversalLogo(){

    return(
        <div className = {`h-[4.5rem] w-[25rem] flex items-center justify-start fixed top-0 left-0 bg-black `}>
          <img src={'/icons/purpleIcon.jpg'} className={`w-[3rem] h-[3rem] rounded-full mx-2`} alt="" />
          <p className = {`text-3xl text-white`}>
            <strong>Purple</strong>Collections
          </p>
        </div>
    )

}

export default UniversalLogo