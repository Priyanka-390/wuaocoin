import tokenimg from '../assets/images/tokenimg.png'
import tokenellipse from '../assets/images/tokenellipse.png'
import tokenellipse2 from '../assets/images/tokenellipse2.png'
import tokenarrow from '../assets/images/tokenarrow.png'

const Tokensec = () => {
  return (
    <div className='relative'>
          <div className="container mx-auto px-3 max-w-[1140px]">
              <div className='flex justify-center items-center flex-col'>
                  <h2 className='font-bold font-montserrat md:text-[50px] text-3xl text-[32352C] lg:pt-28 md:pt-20 pt-10 '>Tokenomics</h2>
                  <img src={tokenimg} alt="token" className='pt-4 lg:pb-28 md:pb-20 pb-10'/>
              </div>
          </div>
          <img src={tokenellipse} alt="token" className='absolute right-0 bottom-[-3%]' />
          <img src={tokenellipse2} alt="token2" className='absolute left-0 top-0' />
          <img src={tokenarrow} alt="tokenarrow" className='absolute sm:block hidden  left-[3%] bottom-[20%]'/>
    </div>
  )
}

export default Tokensec
