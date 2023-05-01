function CheckoutCard(){
    return(
        <div className={`w-full min-h-[6rem] flex flex-col`}>
                    <div className={`w-full h-[6rem] flex items-center justify-between border-2 border-grey`}>
                        <div className={`h-full w-[6rem] flex items-center justify-center`}>
                            <img src={`/images/gadgets/bose.jpg`} className={`w-[5rem] h-[5rem]`} alt='' />
                        </div>
                        <div className={`h-full w-1/2 flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>Bose SoundLink Micro- Small Portable Bluetooth Speaker</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>1Pc (17,000)</h1>
                        </div>
                        <div className={`h-full w-[10rem] flex items-center justify-start`}>
                            <h1 className={`font-normal text-xl`}>#17,000</h1>
                        </div>
                        <div className={`h-full w-[5rem] flex items-center justify-start`}>
                            {/* <XIcon className={`stroke-[1px] h-[25px] cursor-pointer`}/> */}
                        </div>
                    </div>
                </div>
    )
}

export default CheckoutCard