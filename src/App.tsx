import Header from '@components/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
}

export default App;
