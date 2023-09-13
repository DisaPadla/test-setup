import styled from 'styled-components';

import { Button } from '@docuflow/ui';
import { useGlobalStore } from '@docuflow/store';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const increaseCount = useGlobalStore((state) => state.increaseCount)
  return (
    <StyledApp>
      <div>Diagram</div>
      <Button onClick={increaseCount}/>
    </StyledApp>
  );
}

export default App;
