import { useState } from 'react'
import './App.css'
const buttonClasses = 'btn btn-primary w-75 mt-2';
function App() {
  const [screen, setScreen] = useState('0');
  const handleButtonClick = ()=> {
    if (screen === '0'){
      setScreen('9')
    }else{
      setScreen(`${screen}9`);
    }
  };
  const handleButtonClick2 = ()=> {
    if (screen === '0'){
      setScreen('8')
    }else{
      setScreen(`${screen}8`);
    }
  };
  const handleButtonClick3 = ()=> {
    if (screen === '0'){
      setScreen('7')
    }else{
      setScreen(`${screen}7`);
    }
  };
  return(
  <div className='app'>
    <h1>Calculator</h1>
    <hr />
    <table style={{
      width:'400px',
      margin: 'auto'}}>
{/*FIRST ROW*/}
      <tr >
        <td 
        colSpan={4} 
        style={{border:'1px solid black',
        textAlign:'end'}}> 
        <h2>{screen}</h2> 
        </td>
      </tr>
{/*SECOND ROW*/}      
      <tr>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >C</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >/</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >*</button>
        </td>
        <td>        
        <button 
          type='button' 
          className={buttonClasses}
          >-</button>
          </td>
      </tr>
{/*THIRD ROW*/}
      <tr>
        <td>
        <button 
          type='button' 
          className={buttonClasses}  
          onClick={handleButtonClick3}        
          >7</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          onClick={handleButtonClick2}
          >8</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          onClick={handleButtonClick}
          >9</button>
        </td>
        <td rowSpan={2}>
        <button 
          type='button' 
          className={buttonClasses}
          style={{height: "85px"}}
          >+</button>
        </td>
      </tr>
{/*FOURTH ROW*/}
      <tr>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >4</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >5</button>
        </td>
        <td>          <button 
          type='button' 
          className={buttonClasses}
          >6</button></td>
      </tr>
{/*FIFTH ROW*/}
      <tr>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >1</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >2</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >3</button>
        </td>
        <td rowSpan={2}>
        <button 
          type='button' 
          className={buttonClasses}
          style={{height: "85px"}}
          >=</button>
        </td>
      </tr>
{/*SIXTH ROW*/}
      <tr>
      <td>
        <button 
          type='button' 
          className={buttonClasses}
          >DEL</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          >0</button>
        </td>
        <td>
          <button 
          type='button' 
          className={buttonClasses}
          >.</button>
        </td>
      </tr>
    </table>
  </div>
  )
}         

export default App