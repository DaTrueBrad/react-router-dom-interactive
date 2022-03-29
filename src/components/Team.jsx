import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Andrew from './Andrew';
import Brady from './Brady';

function Team() {
  return (
    <div>
      <h2>Team Component</h2>
      <h3>Please select a team member</h3>
      <Link to="/team/brady">Brady</Link>
      <Link to="/team/andrew">Andrew</Link>
      <Routes>
        <Route path="/brady" element={<Brady />} />
        <Route path="/andrew" element={<Andrew />} />
      </Routes>
    </div>
  )
}

export default Team