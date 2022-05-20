import MockAPI from "../MockAPI";
import { Routes, Route } from "react-router-dom";

import React from 'react'

export const RouterPath = () => {
  return (
      <Routes>
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    
  )
}





