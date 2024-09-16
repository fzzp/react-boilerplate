import React from 'react'
import { RouterProvider } from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={routes} />
      </React.Suspense>
    </>
  )
}

export default App
