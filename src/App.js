// App.js or your main component

import IntakeForm from '../src/components/Page1/Form';
import {Routes,Route} from 'react-router-dom'
import Form2 from '../src/components/Page2/Form2'
import Form3 from '../src/components/Page3/Form3'
function App() {
  return (
    <Routes>
    <Route path='/' element={<IntakeForm/>}/>
    <Route path='/form2' element={<Form2/>}/>
    {/* <Route path='/about' element={<About/>}/> */}
    <Route path='/form3' element={<Form3/>}/>
  </Routes>
     
  );
}

export default App;

