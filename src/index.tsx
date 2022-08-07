import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Song } from "./components/Song";
import Search from "./components/Search/Search";
import { Collection } from "./components/Collection";
import { Discover } from "./components/Discover";
import Playlist from "./components/Playlist/Playlist";
import Album from "./components/Album/Album";
import Artist from "./components/Artist/Artist";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/search/:searchValue" element={<Search />}></Route>
        <Route path="/search/" element={<Search />}></Route>
        <Route path="/song/:songUUID" element={<Song />}></Route>
        <Route path="/album/:albumUUID" element={<Album />}></Route>
        <Route path="/playlist/:playlistUUID" element={<Playlist />}></Route>
        <Route path="/artist/:artistUUID" element={<Artist />}></Route>
        <Route path="/collection" element={<Collection />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
