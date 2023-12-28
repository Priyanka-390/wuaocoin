import logo from '../assets/images/footerlogo.png';
import ellipse1 from '../assets/images/ellipse-1.png';
import ellipse2 from '../assets/images/e.png';
import arrow from '../assets/images/footeraroow.png'

const Footer = () => {
  return (
    <div>
       <div className='lg:pt-[105px] md:pt-20 pt-10 relative z-[1]'>
            <img src={ellipse1} alt="ellip2" className='absolute left-0 top-[-30%] z-[-1]' />
            <img src={ellipse2} alt="ellip1" className='absolute right-0 bottom-0' />
            <img src={arrow} alt="arrow" className='absolute bottom-[5%] left-[24%]' />
            <div className="container max-w-[1140px] mx-auto px-3 md:pb-[70px] pb-10">
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className="md:w-1/2  w-full px-3 mb-10 md:mb-0">
                        <img src={logo} alt="logo" />
                        <p className='font-montserrat lg:text-base text-[12px] opacity-70 text-[#32352C] leading-[27.84px] max-w-[252.35px] mt-[22px] '>Welcome to The Future of the Market. The world's first Global TechFi Platform</p>
                        <div className="flex gap-3 mt-6">
                            <a href="https://discord.com/" target='blank'>
                                <div className="w-[29.86px] h-[29.86px] hover:-translate-y-2 duration-500 rounded-full bg-textgradient flex justify-center items-center">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6483 3.77512C12.7062 3.33596 11.6862 3.01721 10.6237 2.83304C10.6144 2.83274 10.6051 2.83449 10.5965 2.83816C10.588 2.84183 10.5803 2.84734 10.5741 2.85429C10.4466 3.08804 10.2979 3.39262 10.1987 3.62637C9.07174 3.45637 7.92566 3.45637 6.7987 3.62637C6.69953 3.38554 6.55078 3.08804 6.4162 2.85429C6.40912 2.84012 6.38787 2.83304 6.36662 2.83304C5.30412 3.01721 4.2912 3.33596 3.34203 3.77512C3.33495 3.77512 3.32787 3.78221 3.32078 3.78929C1.39412 6.67221 0.862866 9.47721 1.12495 12.2539C1.12495 12.268 1.13203 12.2822 1.1462 12.2893C2.4212 13.2243 3.64662 13.791 4.85787 14.1664C4.87912 14.1735 4.90037 14.1664 4.90745 14.1522C5.19078 13.7626 5.44578 13.3518 5.66537 12.9197C5.67953 12.8914 5.66537 12.863 5.63703 12.856C5.23328 12.7001 4.85078 12.516 4.47537 12.3035C4.44703 12.2893 4.44703 12.2468 4.46828 12.2255C4.5462 12.1689 4.62412 12.1051 4.70203 12.0485C4.7162 12.0343 4.73745 12.0343 4.75162 12.0414C7.18828 13.1535 9.8162 13.1535 12.2245 12.0414C12.2387 12.0343 12.2599 12.0343 12.2741 12.0485C12.352 12.1122 12.4299 12.1689 12.5079 12.2326C12.5362 12.2539 12.5362 12.2964 12.5008 12.3105C12.1324 12.5301 11.7429 12.7072 11.3391 12.863C11.3108 12.8701 11.3037 12.9055 11.3108 12.9268C11.5374 13.3589 11.7924 13.7697 12.0687 14.1593C12.0899 14.1664 12.1112 14.1735 12.1324 14.1664C13.3508 13.791 14.5762 13.2243 15.8512 12.2893C15.8654 12.2822 15.8724 12.268 15.8724 12.2539C16.1841 9.04512 15.3554 6.26137 13.6766 3.78929C13.6695 3.78221 13.6624 3.77512 13.6483 3.77512ZM6.0337 10.561C5.30412 10.561 4.69495 9.88804 4.69495 9.05929C4.69495 8.23054 5.28995 7.55762 6.0337 7.55762C6.78453 7.55762 7.37953 8.23762 7.37245 9.05929C7.37245 9.88804 6.77745 10.561 6.0337 10.561ZM10.9708 10.561C10.2412 10.561 9.63203 9.88804 9.63203 9.05929C9.63203 8.23054 10.227 7.55762 10.9708 7.55762C11.7216 7.55762 12.3166 8.23762 12.3095 9.05929C12.3095 9.88804 11.7216 10.561 10.9708 10.561Z" fill="white" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://twitter.com/" target='blank'>
                                <div className="w-[29.86px] h-[29.86px] hover:-translate-y-2 duration-500 rounded-full bg-textgradient flex justify-center items-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8506 4.62022C15.3426 4.83936 14.7898 4.99708 14.2203 5.0585C14.8115 4.70727 15.2543 4.15239 15.4654 3.49796C14.9107 3.82798 14.3029 4.05939 13.6692 4.18194C13.4043 3.89876 13.0839 3.67317 12.728 3.51922C12.3721 3.36527 11.9884 3.28626 11.6006 3.28712C10.0317 3.28712 8.77003 4.5588 8.77003 6.11934C8.77003 6.33848 8.79659 6.55762 8.83976 6.76846C6.49064 6.64561 4.39552 5.52335 3.00265 3.80508C2.74885 4.23858 2.61586 4.73216 2.61749 5.23448C2.61749 6.21729 3.1172 7.08389 3.87921 7.59356C3.43015 7.57588 2.9916 7.45245 2.59923 7.23331V7.26817C2.59923 8.64444 3.57208 9.78497 4.86866 10.0473C4.62522 10.1105 4.37478 10.1429 4.12325 10.1436C3.93898 10.1436 3.76466 10.1253 3.58868 10.1004C3.94728 11.2227 4.99152 12.0378 6.23497 12.0644C5.26212 12.8264 4.04357 13.2746 2.72042 13.2746C2.48302 13.2746 2.26388 13.2663 2.03644 13.2398C3.29152 14.0449 4.78068 14.5098 6.38439 14.5098C11.5906 14.5098 14.4395 10.1967 14.4395 6.45303C14.4395 6.33018 14.4395 6.20733 14.4312 6.08448C14.9823 5.68106 15.4654 5.18135 15.8506 4.62022Z" fill="white" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://web.telegram.org/a/" target='blank'>
                                <div className="w-[29.86px] h-[29.86px] hover:-translate-y-2 duration-500 rounded-full bg-textgradient flex justify-center items-center">
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9856 3.27418L13.7411 13.8593C13.5716 14.6063 13.1302 14.7922 12.5028 14.4405L9.08257 11.9203L7.43251 13.5076C7.24976 13.6904 7.09729 13.8429 6.74507 13.8429L6.99104 10.36L13.3294 4.63258C13.6051 4.38715 13.2694 4.25061 12.9012 4.49658L5.06526 9.43083L1.69182 8.37471C0.958166 8.14574 0.944884 7.64105 1.84482 7.28883L15.0395 2.2053C15.6504 1.97633 16.1849 2.3413 15.9856 3.27471V3.27418Z" fill="white" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/" target='blank'>
                                <div className="w-[29.86px] h-[29.86px] hover:-translate-y-2 duration-500 rounded-full bg-textgradient flex justify-center items-center">
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_0_2320" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="14">
                                            <path d="M1.61184 2.87179C2.42573 2.87179 3.08552 2.22892 3.08552 1.4359C3.08552 0.642873 2.42573 0 1.61184 0C0.797944 0 0.138153 0.642873 0.138153 1.4359C0.138153 2.22892 0.797944 2.87179 1.61184 2.87179Z" fill="white" />
                                            <path d="M0.138153 5.02563H3.08552V14H0.138153V5.02563ZM6.03289 8.43589V14H8.61184V8.97435C8.61184 8.07692 9.16447 7.35897 10.0855 7.35897C11.0066 7.35897 11.5592 8.2564 11.5592 8.97435V14H14.1382V8.43589C14.1382 7.35897 12.8487 5.02563 10.0855 5.02563C7.32236 5.02563 6.03289 7.35897 6.03289 8.43589Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_0_2320)">
                                            <path d="M-1.70389 -1.43604H15.9803V15.7947H-1.70389V-1.43604Z" fill="white" />
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full px-3 flex flex-col  ">
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="sm:w-1/3  w-1/2 px-3 flex md:justify-end">
                                <ul>
                                    <li className='font-montserrat lg:text-lg text-[14px] font-semibold leading-[27px] mb-[14px]'>Documents</li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px]'>WhitePaper</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>Customers</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>Business</a></li>
                                </ul>
                              </div>
                               <div className="sm:hidden block px-3  w-1/2  md:justify-end">
                                <ul>
                                    <li className='font-montserrat lg:text-lg text-[14px] font-semibold leading-[27px] mb-[14px]'>Company</li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:opacity-80'>WUAOCOIN</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:opacity-80'>WUAOSHOP</a></li>
                                </ul>
                            </div>

                            <div className="sm:w-1/3 px-3 w-full flex md:justify-center">
                                <ul>
                                    <li className='font-montserrat lg:text-lg text-[14px] font-semibold leading-[27px] mb-[14px]'>Quick Links</li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>Home</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80 '>About Us</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>Benefits</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>ICO</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>RoadMap</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>Tokenomics</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>Partnership</a></li>
                                </ul>
                            </div>
                            <div className="sm:w-1/3 px-3 sm:block w-1/2 hidden   md:justify-end">
                                <ul>
                                    <li className='font-montserrat lg:text-lg text-[14px] font-semibold leading-[27px] mb-[14px]'>Company</li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>WUAOCOIN</a></li>
                                    <li className='mb-3'><a href="" className='font-montserrat lg:text-base text-[12px] text-[#32352C] leading-[34.4px] opacity-80 after:duration-700 after:w-0 hover:after:w-full after:absolute relative after:bg-textgradient after:left-[50%] after:hover:left-0 after:right-0 after:bottom-[-2px] after:h-[4px] after:opacity-80'>WUAOSHOP</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-solid border-t-[#9;F9F9F]"></div>
            <div className='container max-w-[1140px] mx-auto px-3 lg:py-[25px] py-5'>
                <p className='text-center font-montserrat text-base leading-[24px] text-[#32352C] opacity-60 '>© Copyright 2022 - Wuaocoin</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
