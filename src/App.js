 import './App.css';
 import imageTwo from './imageTwo.jpg';
import { Checklist } from './InputComponent';
 
 

function App() {
  return (
    <div className="container">
      <div className='title'>
      <h1>CHECKLIST</h1>
      </div>
    <div className='title'>
     <img src={imageTwo} width="130px" alt='womanTwo'/>
</div>
<Checklist/>
    </div>
  );
}

export default App;
