import { useState } from 'react'
import './App.css'
import Button from './components/Button';
const buttonClasses = 'btn btn-primary w-75 mt-2';
function App() {
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [clearScreen, setClearScreen] = useState(false);
  const [screen, setScreen] = useState('0');

  const handleButtonClick = (e)=> {
    const value = e.target.value;
    if (value === '.'){
      if (screen.indexOf('.') !== -1) return;
    }
    if (value === 'C'){
      setScreen('0');
      return;
    }
    if(clearScreen){
      setScreen(value);
      setClearScreen(false);
      return;
    }
    if (screen === '0'&& value !== '.'){
      setScreen(value);
    }else{
      setScreen(`${screen}${value}`);
    }
};

const handleDelButtonClick = () =>{
    if(screen.length === 1){
      setScreen('0');
      return;
    }else{
    setScreen(screen.slice(0, -1));
    }
}

const handleOperationButtonClick = (e) =>{
  setClearScreen(true);
  setPreviousValue(screen);
  setOperator(e.target.value);
}

const handleEqualButtonClick = () =>{
  let result = 0;
  let a = +previousValue;
  let b = +screen; 
  switch (operator) {
    case '+':
      result = a + b;
      break;
  
    case '-':
      result = a - b;
      break;

    case '*':
      result = a * b;
      break;

    case '/':
      if(b === 0){
        result=('Infinito!');
        setClearScreen(true);
        break;
      }else{
        result = a / b
      }
      break;  
      
    default:
      break;
  }

  setScreen(result.toString());

}

const infoButtons = [
  [
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'C',
    },
    {
      classes:buttonClasses,
      handleClick:handleOperationButtonClick,
      rows:1,
      style:{},
      value:'/',
    },
    {
      classes:buttonClasses,
      handleClick:handleOperationButtonClick,
      rows:1,
      style:{},
      value:'*',
    },
    {
      classes:buttonClasses,
      handleClick:handleOperationButtonClick,
      rows:1,
      style:{},
      value:'-',
    },
  ],
  [
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'7',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'8',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'9',
    },
    {
      classes:buttonClasses,
      handleClick:handleOperationButtonClick,
      rows:2,
      style:{height: "85px"},
      value:'+',
    },
  ],
  [
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'4',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'5',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'6',
    },
  ],
  [
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'1',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'2',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'3',
    },
    {
      classes:buttonClasses,
      handleClick:handleEqualButtonClick,
      rows:2,
      style:{height: "85px"},
      value:'=',
    },
  ],
  [
    {
      classes:buttonClasses,
      handleClick:handleDelButtonClick,
      rows:1,
      style:{},
      value:'DEL',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'0',
    },
    {
      classes:buttonClasses,
      handleClick:handleButtonClick,
      rows:1,
      style:{},
      value:'.',
    },
  ]
]

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
      {infoButtons.map((row)=>{
        return(
          <tr>
            {row.map((btn)=>{
              return(<Button 
                classes={btn.classes}
                handleClick={btn.handleClick}
                value={btn.value}
                style={btn.style} 
                rows={btn.rows}
                />)
            })}
          </tr>
        )
      })}
    </table>
  </div>
  )
}         

export default App