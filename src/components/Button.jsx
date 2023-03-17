const Button = ({classes, handleClick, value, style, rows}) => {
return(
    <td rowSpan={rows}>
    <button 
      type='button' 
      className={classes}
      style={style}
      value={value}
      onClick={(e) => handleClick(e)}
      >{value}</button>
    </td>
    )
}
export default Button;