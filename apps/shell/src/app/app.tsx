import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useGlobalStore } from '@docuflow/store';

const Diagram = React.lazy(() => import('diagram/Module'));

export function App() {
  const count = useGlobalStore((state) => state.count)
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/diagram">Diagram</Link>
        </li>
      </ul>
      {count}
      <Routes>
        <Route path="/" element={<div >Hello</div>} />
        <Route path="/diagram" element={<Diagram />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
