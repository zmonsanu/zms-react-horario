import './button.css';
const Button = (props) => {
  return (
    <div class="container">
       <div class="center">
          <button {...props} className='btn'/>
        </div>
     </div>
  )
}
export default Button
