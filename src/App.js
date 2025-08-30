import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header menu={[
        'Home',
        'About',
        'Menu',
        'Reservations',
        'Order Online',
        'Login',
      ]} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
