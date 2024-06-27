import React from 'react'
import Form from './jobBoards/components/Form'
import '@coreui/coreui/dist/css/coreui.min.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import ActiveJob from './jobBoards/active/ActiveJob';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element = {<Form />} />
  <Route path='/active-jobs' element = {<ActiveJob />} />
</Routes>
</BrowserRouter>
    // <div>
    //   <Form/>
    // </div>
  )
}

export default App