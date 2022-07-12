import React from "react"
import ContentLoader from "react-content-loader"
import style from "../PizzaComponent/PizzaComponent.module.scss";

const PizzaPreloader = (props) => (
  <div className="app__pizza_section">
  <ContentLoader 
    speed={3}
    width={267}
    height={412}
    viewBox="0 0 267 412"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="151" cy="116" r="102" /> 
    <rect x="62" y="230" rx="0" ry="0" width="191" height="38" /> 
    <rect x="61" y="279" rx="0" ry="0" width="197" height="71" /> 
    <rect x="198" y="373" rx="0" ry="0" width="59" height="27" /> 
    <rect x="76" y="375" rx="0" ry="0" width="59" height="27" />
  </ContentLoader>
  </div>
)

export default PizzaPreloader