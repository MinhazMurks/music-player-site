import { useParams } from "react-router-dom";

function Song() {
  const { id } = useParams();

  return (
    <div>
      <span>{id}</span>
    </div>
  );
}

export default Song;
