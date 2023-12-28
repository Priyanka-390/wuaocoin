/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': "'Montserrat'",
      },
      backgroundImage:{
       'textgradient': 'linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)',
      },
      backgroundSize: {
        'size':'100% 100%'
      },
      animation: {
        'spin-speed': 'spin 10s linear infinite',
        'ping-slow': 'ping 10s linear infinite'
      }
    },
    plugins: [],
  }
}
