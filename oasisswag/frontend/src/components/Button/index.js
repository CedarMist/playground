import classes from "./index.module.css"
import arrowLeft from "./images/arrow-left.svg"

export const Button = ({ className, onClick, children, disabled }) => {
  return (
    <button className={[className, classes.Button, ...(disabled ? [classes.ButtonDisabled] : [])].join(' ')} onClick={onClick}>
      {children}
      <img src={arrowLeft} alt="Arrow left" />
    </button>
  )
}