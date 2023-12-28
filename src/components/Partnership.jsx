import partnerimg from '../assets/images/partenerimg.png'

const Partnership = () => {
  return (
    <div>
          <div className="container max-w-[1140px] mx-auto px-3">
              <div className='flex justify-center flex-col md:pb-14 pb-10 items-center'>
                  <h2 className=' text-white font-montserrat md:pb-12 pb-5 font-bold md:text-[50px] text-4xl md:pt-[78px] pt-10'>Partnership</h2> 
                  <img src={partnerimg} alt="partner" />
              </div>
      </div>
    </div>
  )
}

export default Partnership
