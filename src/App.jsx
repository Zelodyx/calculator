import './App.css'
function App() {
  return(
  <div>
    <h1>Calculator</h1>
    <hr />
    <table style={{
      width:'400px'}}>
{/*FIRST ROW*/}
      <tr >
        <td colSpan={4}>RESULT</td>
      </tr>
{/*SECOND ROW*/}      
      <tr>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >C</button>
        </td>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >/</button>
        </td>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >*</button>
        </td>
        <td>        
        <button 
          type='button' 
          className='btn btn-primary'
          >-</button>
          </td>
      </tr>
{/*THIRD ROW*/}
      <tr>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'          
          >7</button>
        </td>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >8</button>
        </td>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >9</button>
        </td>
        <td rowSpan={2}>
        <button 
          type='button' 
          className='btn btn-primary'
          >+</button>
        </td>
      </tr>
{/*FOURTH ROW*/}
      <tr>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >4</button>
        </td>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >5</button>
        </td>
        <td>          <button 
          type='button' 
          className='btn btn-primary'
          >6</button></td>
      </tr>
{/*FIFTH ROW*/}
      <tr>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >1</button>
        </td>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >2</button>
        </td>
        <td>
        <button 
          type='button' 
          className='btn btn-primary'
          >3</button>
        </td>
        <td rowSpan={2}>
        <button 
          type='button' 
          className='btn btn-primary'
          >=</button>
        </td>
      </tr>
{/*SIXTH ROW*/}
      <tr>
        <td colSpan={2}>
        <button 
          type='button' 
          className='btn btn-primary'
          >0</button>
        </td>
        <td>
          <button 
          type='button' 
          className='btn btn-primary'
          >.</button>
        </td>
      </tr>
    </table>
  </div>
  )
}         

export default App