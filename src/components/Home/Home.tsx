import { TopBar } from "../TopBar";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <TopBar></TopBar>
    </div>
  );
}

export default Home;
