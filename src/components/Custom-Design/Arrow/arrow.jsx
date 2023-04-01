// //import "./styles.css"
 const Arrow = ({degree}) => {

    const arrow = {
    width:'75px',
    margin:'0px auto',
    transform:degree,
    background:`-webkit-gradient(
      linear,
      left top,
      right top,
      from(#12c2e9),
      color-stop(#c471ed),
      to(#f64f59)
    )`,
    background:' -webkit-linear-gradient(left, #12c2e9, #c471ed, #f64f59)',
    background:' -o-linear-gradient(left, #12c2e9, #c471ed, #f64f59)',
    background:' linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
      };

      const line = {
        marginTop:'13px',
        width:'55px',
      background:`-webkit-gradient(
          linear,
          left top,
          right top,
          from(#12c2e9),
          color-stop(#c471ed),
          to(#f64f59)
        )`,
        background:' -webkit-linear-gradient(right, #12c2e9, #c471ed, #f64f59)',
        background:' -o-linear-gradient(right, #12c2e9, #c471ed, #f64f59)',
        background:' linear-gradient(to left, #12c2e9, #c471ed, #f64f59)',
        height:'5px',
        float:'left',
      }

      const point = {
        width:' 0', 
        height:' 0', 
        borderTop:' 18px solid transparent',
        borderBottom:' 18px solid transparent',
        borderLeft:' 20px solid #12c2e9',
        float:'right',
      }

    return (
        <div  style={arrow}>
            <div style={line}></div>
            <div style={point}></div>
        </div>
    )
}

export default Arrow