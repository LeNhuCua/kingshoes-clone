/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Poppins','sans-serifs']
      },
      animation: {
        'ping': 'ping 3s linear',
      },
      boxShadow: {
    
        '3xl': 'rgba(17, 17, 26, 0.1) 0px 0px 0px 0.375rem',
      }
    },
  },
  plugins: [
      
  ],
};
