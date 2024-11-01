import Contacts from '@/components/Contacts/Contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/hw18/'>
      <div className='container mx-auto space-y-5 py-12 text-2xl'>
        <Routes>
          <Route path='/' element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
