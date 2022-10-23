/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Poppins:['Poppins, sans-serif']
    },  
    colors:{
      'primary' :  '#376bfb',
      'secondary' : '#162a4c',
      'blues' : '#162a4c',
      'white' : '#ffffff',
    },
    extend: {
      
    },
  },
  plugins: [],
}
