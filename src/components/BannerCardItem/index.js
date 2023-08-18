// Write your code here.
import './index.css'

const BannerCardItemComponent = props => {
  console.log(props)
  const {eachProp, eachPropStyle} = props
  const {headerText, description, className} = eachProp
  const {hStyle, bStyle, liStyle, p} = eachPropStyle

  return (
    <div className={liStyle}>
      <li className={className}>
        <div>
          <h1 className={hStyle}>{headerText}</h1>
          <p className={p}>{description}</p>

          <button className={bStyle}>Show More</button>
        </div>
      </li>
    </div>
  )
}
export default BannerCardItemComponent
