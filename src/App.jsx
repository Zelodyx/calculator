import { useState } from 'react'
import './App.css'
const buttonClasses = 'btn btn-primary w-75 mt-2';
function App() {
  const [screen, setScreen] = useState('0');
  const handleButtonClick = (e)=> {
    const value = e.target.value;
    if (value === 'C'){
      setScreen('0');
      return
    }
    if (screen === '0'){
      setScreen(value)
    }else{
      setScreen(`${screen}${value}`);
    }
  };

  /*const handleButtonClick = (value)=> {
    if (screen === '0'){
      setScreen(value)
    }else{
      setScreen(`${screen}${value}`);
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
  };*/
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
          value='C'
          onClick={(e) => handleButtonClick(e)}
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
          value='7'
          onClick={(e) => handleButtonClick(e)}
          >7</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          value='8'
          onClick={(e) => handleButtonClick(e)}
          >8</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          value='9'
          onClick={(e) => handleButtonClick(e)}
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
          value='4'
          onClick={(e) => handleButtonClick(e)}
          >4</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          value='5'
          onClick={(e) => handleButtonClick(e)}
          >5</button>
        </td>
        <td>          <button 
          type='button' 
          className={buttonClasses}
          value='6'
          onClick={(e) => handleButtonClick(e)}
          >6</button></td>
      </tr>
{/*FIFTH ROW*/}
      <tr>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          value='1'
          onClick={(e) => handleButtonClick(e)}          
          >1</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          value='2'
          onClick={(e) => handleButtonClick(e)}          
          >2</button>
        </td>
        <td>
        <button 
          type='button' 
          className={buttonClasses}
          value='3'
          onClick={(e) => handleButtonClick(e)}
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
          value='0'
          onClick={(e) => handleButtonClick(e)}          
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