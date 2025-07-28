import { useState } from 'react'
import { MantineProvider } from '@mantine/core';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
      </MantineProvider>;
    </>
  )
}

export default App
