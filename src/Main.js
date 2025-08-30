import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./components/organisms/home-page";
import ReservationForm from "./components/organisms/reservation-form";


function Main() {
  return (
    <div className="App">
      <Header
        menu={{
          '/': 'Home',
          '/about': 'About',
          '/menu':'Menu',
          '/reservation': 'Reservations',
          '/order-online': 'Order Online',
          '/login': 'Login',
        }}
      />
      <main className="App-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
