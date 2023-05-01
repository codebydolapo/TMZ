function Newsletter(){
    return(
        <div className={`w-full h-[10rem] bg-[#041e42] my-[2rem] flex md:flex-row xs:flex-col`}>
                <div className={`md:w-[50%] md:h-full flex flex-col items-start justify-center md:pl-4 xs:w-[100%] xs:h-[50%] xs:pl-2`}>
                    <h1 className={`text-xl text-white font-bold`}>Sign up for newsletters</h1>
                    <h1 className={`text-base font-thin text-white`}>Get E-mail updates about our latest shop and <b className={`font-bold text-[#ffbd27]`}>special offers.</b></h1>
                </div>
                <div className={`md:w-[50%] md:h-full flex items-center justify-center xs:h-[50%] xs:w-full`}>
                    <div className={`md:w-[35rem] h-[3.5rem] xs:w-[98%] flex`}>
                        <div className={`w-[80%] h-full bg-white rounded-l-lg`}>
                            <input type='email' className={`w-[85%] h-full border-0 outline-0 border-black px-2 rounded-l-lg`} placeholder='Input your email address' />
                        </div>
                        <div className={`w-[20%] h-full bg-[#ffbd27] rounded-r-lg flex items-center justify-center`}>
                            <h1 className={`md:text-base font-bold text-white cursor-pointer xs:text-sm`}>Subscribe</h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Newsletter