import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import HomePage from "./HomePage";

function App() {
  const data = [
    { id: 1, place: "Fatehpur", location: "Amritsar, Punjab", status: true },
    {
      id: 2,
      place: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      status: true,
    },
    {
      id: 3,
      place: "Hawa Mahal",
      location: "Jaipur, Rajasthan",
      status: false,
    },
    {
      id: 4,
      place: "Gateway of India",
      location: "Mumbai, Maharashtra",
      status: true,
    },
    {
      id: 5,
      place: "Golden Temple",
      location: "Amritsar, Punjab",
      status: true,
    },
    { id: 6, place: "Red Fort", location: "Delhi", status: false },
    {
      id: 7,
      place: "Mysore Palace",
      location: "Mysore, Karnataka",
      status: true,
    },
    { id: 8, place: "Lotus Temple", location: "Delhi", status: false },
    {
      id: 9,
      place: "Victoria Memorial",
      location: "Kolkata, West Bengal",
      status: false,
    },
    { id: 10, place: "Kerala Backwaters", location: "Kerala", status: true },
  ];

  return (
    <>
      <Header />
      <HomePage data={data} />
    </>
  );
}

export default App;
