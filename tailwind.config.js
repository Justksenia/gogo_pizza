/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      "black": "#232323",
      "white":"#ffffff",
      "grey":"#f9f9f9",
      "header-grey": "#7b7b7b",
      "lg-grey":"#f3f3f3",
      "orange": "#fe5f1e",
      "bg": "#ffdf8c",
    },
    fontSize: {
      "32":"32px",
      "30":"30px",
      "24":"24px",
      "20":"20px",
    },
    borderWidth:{
      "1":"1px",
      "2":"2px",
    },
    borderRadius:{
      "30":"30px",
      "10":"10px",
      "5":"5px"
    },
    spacing: {

      "85":"85%",
      "316":"316px",
      "160":"160px",
      "150":"150px",
      "120":"120px",
      "50":"50px",
      "40":"40px",
      "20":"20px",
      "18":"18px",
      "15":"15px",
      "12":"12px",
      "10":"10px",
      "7": "7px",
      "4": "4px"

    },
    extend: {
    
    },
  },
  plugins: [],
}
