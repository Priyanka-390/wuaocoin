/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': "'Montserrat'",
      },
      backgroundImage: {
        'textgradient': 'linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)',
      },
      backgroundSize: {
        'size': '100% 100%'
      },
      animation: {
        'spin-speed': 'spin 70s linear infinite',
        'ping-slow': 'ping 10s linear infinite',
        'wiggle-view': 'wiggle 10s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { 'border-radius': ' 62% 38% 65% 35% / 40% 67% 33% 60% ' },
          '20%': { 'border-radius': ' 30% 70% 70% 30% / 30% 69% 31% 70% ' },
          '40%': { 'border-radius': ' 30% 70% 82% 18% / 30% 80% 20% 70% ' },
          '60%': { 'border-radius': '49% 51% 82% 18% / 45% 69% 31% 55%  ' },
          '80%': { 'border-radius': '37% 63% 48% 52% / 77% 38% 62% 23%  ' },
          '100%': { 'border-radius': '62% 38% 65% 35% / 40% 67% 33% 60%  ' },
        },
      },
      plugins: [],
    }
  }
}
