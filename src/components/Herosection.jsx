import React, { useState } from "react";
import navlogo from "../assets/images/navlogo.png";

const Herosection = () => {
  const [show, setshow] = useState(true);

  function menu() {
    setshow(!show);
  }
  return (
    <div>
      <nav className="py-6 max-lg:bg-[#FFB23C]">
        <div className=".container max-w-[1140px] mx-auto px-3">
          <div className="flex justify-between items-center">
            <a href="">
              <img src={navlogo} alt="logo" />
            </a>
            <ul
              className={`${
                show ? "right-[-100%]" : "right-0"
              } flex mobileView items-center`}
            >
              <li>
                <a
                  href="#ico"
                  className="text-white after:absolute after:h-[3px] after:bg-white after:w-0 hover:after:w-full  after:duration-300 relative after:left-0 after:bottom-[-3px] font-montserrat text-base font-semibold"
                >
                  ICO
                </a>
              </li>
              <li className="md:pl-8">
                <a
                  href="#white"
                  className="text-white after:absolute after:h-[3px] after:bg-white after:w-0 hover:after:w-full  after:duration-300 relative after:left-0 after:bottom-[-3px] font-montserrat text-base font-semibold"
                >
                  WHITEPAPER
                </a>
              </li>

              <li className="flex gap-2 pl-2">
                <li className="group">
                  <a
                    href="https://discord.com/"
                    className="w-[35px] h-[35px] group-hover:bg-[#FFB33C] duration-300 transition-all group-hover:border group-hover:border-white   bg-white md:ml-6 rounded-full flex justify-center items-center"
                  >
                    {" "}
                    <span>
                      <svg
                        className="group"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M16.3855 4.55173C15.2813 4.037 14.0858 3.6634 12.8405 3.44755C12.8295 3.4472 12.8187 3.44925 12.8086 3.45355C12.7986 3.45785 12.7896 3.46431 12.7824 3.47245C12.6329 3.74642 12.4586 4.10342 12.3423 4.37739C11.0215 4.17813 9.67819 4.17813 8.35732 4.37739C8.24109 4.09511 8.06675 3.74642 7.90901 3.47245C7.9007 3.45585 7.8758 3.44755 7.85089 3.44755C6.60557 3.6634 5.41837 4.037 4.30588 4.55173C4.29758 4.55173 4.28928 4.56003 4.28098 4.56833C2.0228 7.9473 1.40014 11.2349 1.70732 14.4894C1.70732 14.506 1.71562 14.5226 1.73223 14.5309C3.22661 15.6268 4.66288 16.2909 6.08254 16.7309C6.10744 16.7392 6.13235 16.7309 6.14065 16.7143C6.47274 16.2577 6.77161 15.7762 7.02898 15.2698C7.04558 15.2366 7.02898 15.2034 6.99577 15.1951C6.52255 15.0124 6.07424 14.7966 5.63422 14.5475C5.60102 14.5309 5.60102 14.4811 5.62592 14.4562C5.71724 14.3897 5.80857 14.315 5.89989 14.2486C5.9165 14.232 5.9414 14.232 5.95801 14.2403C8.81394 15.5437 11.894 15.5437 14.7167 14.2403C14.7333 14.232 14.7583 14.232 14.7749 14.2486C14.8662 14.3233 14.9575 14.3897 15.0488 14.4645C15.082 14.4894 15.082 14.5392 15.0405 14.5558C14.6088 14.8132 14.1522 15.0207 13.679 15.2034C13.6458 15.2117 13.6375 15.2532 13.6458 15.2781C13.9114 15.7845 14.2103 16.266 14.5341 16.7226C14.559 16.7309 14.5839 16.7392 14.6088 16.7309C16.0368 16.2909 17.473 15.6268 18.9674 14.5309C18.984 14.5226 18.9923 14.506 18.9923 14.4894C19.3576 10.7285 18.3863 7.46578 16.4187 4.56833C16.4104 4.56003 16.4021 4.55173 16.3855 4.55173ZM7.46069 12.5052C6.60557 12.5052 5.89159 11.7165 5.89159 10.7451C5.89159 9.77377 6.58897 8.98506 7.46069 8.98506C8.34072 8.98506 9.03809 9.78207 9.02979 10.7451C9.02979 11.7165 8.33241 12.5052 7.46069 12.5052ZM13.2473 12.5052C12.3922 12.5052 11.6782 11.7165 11.6782 10.7451C11.6782 9.77377 12.3755 8.98506 13.2473 8.98506C14.1273 8.98506 14.8247 9.78207 14.8164 10.7451C14.8164 11.7165 14.1273 12.5052 13.2473 12.5052Z"
                          fill="url(#paint0_linear_0_44) "
                          className="group-hover:fill-white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_44"
                            x1="10.3464"
                            y1="2.24996"
                            x2="10.3464"
                            y2="15.3463"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFBA3B" />
                            <stop offset="0.5315" stopColor="#FFA53B" />
                            <stop offset="1" stopColor="#FF983B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://twitter.com/login"
                    className="w-[35px] h-[35px] group-hover:bg-[#FFB33C]  duration-300 transition-all group-hover:border group-hover:border-white bg-white md:ml-3 rounded-full flex justify-center items-center"
                  >
                    {" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M18.7393 5.54247C18.1439 5.79932 17.4959 5.98417 16.8285 6.05617C17.5214 5.6445 18.0403 4.99414 18.2879 4.22711C17.6376 4.61391 16.9253 4.88515 16.1825 5.02878C15.872 4.69688 15.4966 4.43247 15.0794 4.25203C14.6623 4.07159 14.2125 3.97898 13.758 3.97999C11.9192 3.97999 10.4404 5.47048 10.4404 7.29954C10.4404 7.55639 10.4716 7.81323 10.5221 8.06035C7.76883 7.91636 5.31321 6.60099 3.68068 4.58708C3.38321 5.09516 3.22733 5.67367 3.22925 6.26242C3.22925 7.41434 3.81494 8.43006 4.70807 9.02742C4.18173 9.00669 3.66773 8.86202 3.20785 8.60518V8.64604C3.20785 10.2591 4.34809 11.5959 5.86777 11.9033C5.58243 11.9774 5.2889 12.0154 4.9941 12.0162C4.77812 12.0162 4.57381 11.9948 4.36755 11.9656C4.78784 13.281 6.01176 14.2364 7.46917 14.2675C6.32893 15.1606 4.9007 15.686 3.34989 15.686C3.07164 15.686 2.81479 15.6763 2.54822 15.6451C4.01925 16.5888 5.76464 17.1337 7.64429 17.1337C13.7464 17.1337 17.0854 12.0784 17.0854 7.69065C17.0854 7.54666 17.0854 7.40267 17.0756 7.25868C17.7216 6.78585 18.2879 6.20016 18.7393 5.54247Z"
                          fill="url(#paint0_linear_0_48)"
                          className="group-hover:fill-white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_48"
                            x1="10.6394"
                            y1="2.79444"
                            x2="10.6394"
                            y2="15.7595"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFBA3B" />
                            <stop offset="0.5315" stopColor="#FFA53B" />
                            <stop offset="1" stopColor="#FF983B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://web.telegram.org/"
                    className="w-[35px] h-[35px]  group-hover:bg-[#FFB33C]  duration-300 transition-all group-hover:border group-hover:border-white bg-white md:ml-3 rounded-full flex justify-center items-center"
                  >
                    {" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M18.845 3.96463L16.2143 16.3711C16.0156 17.2466 15.4982 17.4645 14.7628 17.0523L10.7542 14.0984L8.82018 15.9589C8.60598 16.1731 8.42728 16.3518 8.01446 16.3518L8.30275 12.2697L15.7317 5.55677C16.0549 5.2691 15.6613 5.10908 15.2298 5.39737L6.04561 11.1806L2.09172 9.94278C1.23183 9.67442 1.21626 9.08289 2.27105 8.67007L17.736 2.71184C18.4521 2.44348 19.0785 2.87124 18.845 3.96525V3.96463Z"
                          fill="url(#paint0_linear_0_52)"
                          className="group-hover:fill-white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_52"
                            x1="10.1736"
                            y1="1.31637"
                            x2="10.1736"
                            y2="15.7263"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFBA3B" />
                            <stop offset="0.5315" stopColor="#FFA53B" />
                            <stop offset="1" stopColor="#FF983B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://www.linkedin.com/login"
                    className="w-[35px] h-[35px]  group-hover:bg-[#FFB33C]  duration-300 transition-all group-hover:border group-hover:border-white bg-white md:ml-3 rounded-full flex justify-center items-center"
                  >
                    {" "}
                    <span>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_0_56"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="17"
                          height="17"
                        ></mask>
                        <path
                          d="M2.28606 3.83736C3.24 3.83736 4.01331 3.08388 4.01331 2.1544C4.01331 1.22492 3.24 0.471436 2.28606 0.471436C1.33212 0.471436 0.558807 1.22492 0.558807 2.1544C0.558807 3.08388 1.33212 3.83736 2.28606 3.83736Z"
                          fill="url(#paint0_linear_0_56)"
                          className="group-hover:fill-white"
                        />
                        <path
                          d="M0.558807 6.36157H4.01331V16.8801H0.558807V6.36157ZM7.46782 10.3586V16.8801H10.4905V10.9897C10.4905 9.93787 11.1382 9.09639 12.2178 9.09639C13.2973 9.09639 13.945 10.1482 13.945 10.9897V16.8801H16.9677V10.3586C16.9677 9.09639 15.4564 6.36157 12.2178 6.36157C8.97916 6.36157 7.46782 9.09639 7.46782 10.3586Z"
                          fill="url(#paint0_linear_0_56)"
                          className="group-hover:fill-white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_56"
                            x1="8.75887"
                            y1="-3.0319"
                            x2="8.75887"
                            y2="16.8741"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFBA3B" />
                            <stop offset="0.5315" stopColor="#FFA53B" />
                            <stop offset="1" stopColor="#FF983B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </li>
              </li>
              <li>
                <a
                  href=""
                  className="p-[5px] rounded-[165px] md:ml-7 flex border border-white border-solid"
                >
                  {" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M13.6836 1.16699C6.69397 1.16699 1.02734 6.83362 1.02734 13.8232L1.02777 13.8456L1.02734 13.868C1.02734 20.8331 6.66233 26.4795 13.614 26.4795L13.641 26.4786L13.6836 26.4795C20.6732 26.4795 26.3398 20.8129 26.3398 13.8232C26.3398 6.83362 20.6732 1.16699 13.6836 1.16699ZM25.4961 13.8232C25.4961 14.8332 25.3687 15.8132 25.1307 16.7485C25.0206 16.6726 24.7295 16.9865 24.6578 16.5705C24.568 16.0541 23.9858 15.6955 23.6723 15.9423C23.3589 16.1891 22.4632 16.9067 22.4189 17.3556C22.3738 17.8041 21.9928 18.3424 21.8144 17.9618C21.6347 17.5805 21.098 16.3912 21.12 16.0773C21.1419 15.7634 20.8728 16.1895 20.4711 15.5614C20.0678 14.9332 19.3738 15.4711 18.814 15.1572C18.2542 14.8429 17.6273 14.4168 17.3134 14.2827C17.0008 14.1477 17.8732 15.5386 17.9855 15.3593C18.0981 15.18 18.5453 15.4939 18.6799 15.4939C18.8144 15.4939 19.1722 15.8077 18.9486 16.0997C18.725 16.3916 16.7325 17.6041 16.5308 17.2885C16.3283 16.973 15.1429 14.529 14.9408 14.6788C14.7391 14.8286 16.195 17.378 16.4414 17.5349C16.6869 17.6923 17.4265 17.5577 17.7842 17.4007C18.1428 17.2438 17.0455 19.1507 16.576 19.3751C16.106 19.5991 15.7255 20.2948 15.9263 20.6087C16.1279 20.9226 16.1503 22.1118 15.7255 22.2692C15.2994 22.4257 15.1429 22.6725 15.277 22.9644C15.4108 23.2555 14.964 23.7487 14.7623 24.063C14.5602 24.3769 13.7773 25.0274 13.7098 25.2071C13.6431 25.3868 12.6804 25.3417 12.299 25.3417C11.9189 25.3417 12.2096 24.8705 12.1644 24.4671C12.1205 24.063 11.7847 23.6816 11.7847 23.48C11.7847 23.2779 11.6721 22.8066 11.516 22.5826C11.3595 22.3578 11.3139 21.9317 11.4709 21.6853C11.6282 21.4381 11.7396 20.7209 11.427 20.4066C11.1131 20.0927 10.7545 19.554 11.0013 19.1279C11.2477 18.7018 10.7326 18.7469 10.3073 18.5444C9.88166 18.3424 9.00838 18.6119 8.56077 18.6794C8.11273 18.7465 7.66555 18.5672 7.53097 18.3424C7.39681 18.1184 7.10572 17.5577 6.80745 17.4227C6.51003 17.2885 6.68047 16.7051 6.85934 16.4811C7.03906 16.257 6.68047 15.8305 6.85934 15.6504C7.03906 15.4711 7.15044 14.821 7.50861 14.6788C7.8672 14.5371 7.7997 14.4396 7.81067 14.1029C7.82206 13.7663 8.21356 13.7663 8.28022 13.587C8.34772 13.4073 8.54895 13.3178 8.95311 13.3178C9.356 13.3178 10.0382 13.082 10.363 13.0035C10.6879 12.9251 11.2477 12.8129 11.2025 13.1271C11.1578 13.441 11.1692 13.7996 11.3814 13.7996C11.5945 13.7996 11.8856 13.9232 12.2214 14.1325C12.5572 14.3413 12.5682 14.1704 12.6133 13.9346C12.6584 13.6988 13.128 13.7886 13.614 14.0131C14.1 14.2375 14.7628 14.0802 14.9745 14.0582C15.1876 14.035 15.2774 13.3963 15.2213 13.1833C15.1648 12.9702 14.8294 13.2841 14.6168 13.1495C14.4042 13.0154 14.1126 13.1833 13.9004 12.9921C13.6874 12.8019 13.6536 12.353 13.9004 12.342C14.1464 12.3306 14.27 12.2522 14.4151 12.0843C14.5611 11.9159 15.1095 11.8151 15.3222 11.983C15.5344 12.1514 15.8487 12.2636 16.0381 12.0729C16.2283 11.8826 15.6584 11.5126 15.5344 11.4114C15.4112 11.3106 15.512 10.9853 15.3892 10.9853C15.2656 10.9853 15.1648 11.041 15.2323 11.1983C15.2994 11.3553 14.8741 11.6354 14.8062 11.4789C14.7395 11.3215 14.6278 11.019 14.4598 11.019C14.2924 11.019 14.0683 11.7818 14.057 11.905C14.0456 12.0286 13.7545 12.2302 13.5199 12.2302C13.2853 12.2302 13.2853 12.4998 13.4081 12.6234C13.5313 12.7466 13.4414 13.2402 13.2178 13.2685C12.9938 13.2972 12.9154 13.2179 12.882 13.0267C12.8487 12.8365 12.6247 12.8588 12.6133 12.4661C12.6019 12.0733 12.3555 11.883 12.199 11.7033C12.0425 11.5236 11.6392 10.9967 11.4827 11.2325C11.3262 11.4683 12.0425 11.9729 12.2323 12.1071C12.4235 12.2416 12.3897 12.5331 12.2889 12.6006C12.188 12.6681 11.9978 13.2179 11.886 13.2621C11.7733 13.3069 11.6666 13.0951 11.6666 13.0951C11.4987 13.028 11.9012 12.8259 11.9687 12.7251C12.0353 12.6243 11.2637 11.9176 11.1245 11.7156C10.9853 11.5135 10.3904 11.8835 10.1221 11.7493C9.85339 11.6151 9.45008 12.2539 9.41717 12.6239C9.383 12.9943 8.94636 13.0947 8.54347 13.0947C8.141 13.0947 7.87184 12.7922 8.00684 12.4893C8.141 12.1864 7.93934 11.6818 8.17475 11.6481C8.40973 11.6147 9.08052 11.6481 9.21509 11.2781C9.34925 10.9081 8.5768 10.5714 8.8797 10.5044C9.18134 10.4369 9.65216 9.96646 9.98797 9.69688C10.3229 9.42773 10.3567 9.09149 10.6587 9.06787C10.9617 9.04466 10.5921 8.48526 10.8608 8.31735C11.13 8.14902 11.1966 8.92316 11.3983 8.92316C11.6 8.92316 12.002 8.85566 12.3382 9.02399C12.6745 9.19232 12.7749 8.85566 12.9095 8.41776C13.0436 7.9807 13.3794 7.74487 14.0506 7.40863C14.7222 7.07198 13.279 7.50946 13.0099 7.1728C12.7411 6.83615 13.1107 6.09576 13.279 5.57305C13.4469 5.04993 12.7415 6.09576 12.372 6.63449C12.002 7.1728 12.4728 7.40821 12.4386 7.77819C12.4053 8.1486 11.8016 8.58566 11.8016 8.58566C11.5329 8.61941 11.5662 8.0811 11.432 7.8457C11.2975 7.61029 11.0621 7.71112 10.6925 7.98027C10.3229 8.24943 10.2896 7.34113 10.1892 6.97073C10.0892 6.60116 10.7937 6.12951 11.1249 5.87807C11.4557 5.62579 12.002 4.41374 12.607 3.47212C13.2119 2.53007 14.0848 3.00088 14.3198 3.37129C14.5556 3.74085 15.1589 3.50545 15.7305 4.17876C16.3018 4.85165 15.596 5.15413 14.9589 4.88076C14.3198 4.60738 15.0927 5.55829 15.4614 5.82745C15.8309 6.09618 16.0326 5.22163 16.1672 5.01998C16.3013 4.8179 16.8046 4.91915 17.1738 4.38041C17.5437 3.8421 18.3829 3.94335 18.8621 4.00241C19.3418 4.0619 19.2224 3.70752 18.9203 3.4177C18.6967 3.20338 19.154 3.39112 19.6924 3.65395C23.1657 5.70974 25.4961 9.49354 25.4961 13.8232ZM8.63881 9.80362C8.52744 9.68845 8.75145 9.23493 8.85186 9.10035C8.95311 8.96577 8.57173 9.01049 8.59494 9.2016C8.6173 9.39187 8.44897 9.6838 8.21398 9.76227C7.979 9.84074 7.71111 9.81796 7.84484 9.60491C7.97858 9.39187 7.85581 9.20118 7.75498 8.9991C7.65458 8.79702 8.31439 8.67384 8.44939 8.55065C8.58355 8.42746 8.23719 8.34857 8.24773 8.1583C8.25912 7.9672 8.33759 7.79929 8.47091 7.77693C8.60548 7.75457 8.7312 7.66851 8.85186 7.6761C9.22184 7.69888 9.10878 8.53968 9.24378 8.80926C9.37794 9.07799 9.75889 9.40368 9.72514 9.63866C9.69139 9.87449 9.61967 10.0091 9.34545 9.94157C9.06997 9.87407 8.62911 10.2892 8.46036 10.2107C8.29203 10.1318 8.75145 9.91879 8.63881 9.80362ZM6.22653 5.08663C6.56277 5.25454 6.83066 4.94995 7.06522 4.88455C7.34323 4.80777 7.50186 5.79327 7.23355 5.75952C6.96481 5.72577 6.66275 6.29784 6.27462 6.26409C5.88608 6.23034 6.0582 5.9616 5.62156 5.55787C5.52791 5.47096 5.48952 5.39249 5.48614 5.32373C5.57938 5.23387 5.67219 5.14359 5.7688 5.0571C5.91983 5.01702 6.09913 5.02293 6.22653 5.08663ZM16.7321 22.0211C17.0455 21.954 16.9852 21.3575 17.2695 21.3259C17.8741 21.2588 17.2919 22.9408 17.0683 23.412C16.8443 23.8833 16.754 23.8605 16.541 23.569C16.3271 23.2779 16.3962 22.8062 16.541 22.5822C16.6852 22.3574 16.4182 22.0886 16.7321 22.0211Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="">
                    <select
                      name="language"
                      id=""
                      className="bg-transparent pl-2 text-white items-center font-montserrat text-base font-normal"
                    >
                      <option value="eng">Eng</option>
                      <option value="Hindi" className="text-black">
                        hindi
                      </option>
                    </select>
                  </span>
                </a>
              </li>
            </ul>
            <label
              className="flex flex-col items-center md:hidden relative z-20"
              onClick={menu}
            >
              <span className="w-8 h-[3px] rounded-full bg-white mt-2 flex"></span>
              <span className="w-8 h-[3px] rounded-full bg-white mt-2 flex"></span>
              <span className="w-8 h-[3px] rounded-full flex bg-white mt-2"></span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Herosection;
