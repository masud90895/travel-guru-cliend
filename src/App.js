import './App.css';
import {RouterProvider } from 'react-router-dom';

import router from './Routes/Routes';
import { createContext, useState } from 'react';

export const BookingContext=createContext()

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const info={setStartDate,setStartDate1,startDate,startDate1,setOrigin,setDestination,origin,destination}
  
  return (
    <BookingContext.Provider value={info}>
      <RouterProvider router={router}>

      </RouterProvider>
    </BookingContext.Provider>
      
  );
}

export default App;
