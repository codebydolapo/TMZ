function Banner({hype, name, percentage, image}: any) {
    return (
        <div className={`md:min-w-[26rem] md:w-[26rem] md:h-[13rem] mx-2 relative xs:min-w-[20rem] xs:w-[20rem] xs:h-[10rem]`}>
            <img className={`w-full h-full rounded-lg`} src={image} alt='' />
            <div className={`absolute w-full h-full top-0 left-0 flex items-center justify-start`}>
                <div className={`w-[50%] h-full`}>
                    <div className={`h-[50%] w-full p-2`}>
                        <h1 className={`text-base`}>{hype}</h1>
                        <h1 className={`text-2xl font-bold`}>{name}</h1>
                    </div>
                    <div className={`h-[50%] w-full p-2 flex flex-col items-start justify-end`}>
                        <h1 className={`text-sm text-[#0007]`}>Weekend Discount</h1>
                        <h1 className={`text-2xl font-bold`}><b className={`text-2xl font-bold text-[#ff3636]`}>{percentage}%</b> Off</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner