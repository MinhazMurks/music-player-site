import { useParams } from "react-router-dom";
import { TopBar } from "../TopBar";

function Song() {
  const { id } = useParams();

  return (
    <div>
      <TopBar></TopBar>
      <span>{id}</span>
    </div>
  );
}

export default Song;
