import "./App.css";
import BackgroundImage from "./Components/BackgroundImage";
import Login from "./Pages/LoginPage";
import MoviePage from "./Pages/MoviePage";
import Netflix from "./Pages/Netflix";
import Player from "./Pages/Player";
import Signuppage from "./Pages/SignUpPage";
import TvShow from "./Pages/TvShows";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/movie" element={<MoviePage />}></Route>
          <Route path="/" element={<Netflix />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>
          <Route path="/tv" element={<TvShow />}></Route>
          <Route path="/lpgin" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
