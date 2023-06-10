import { useEffect, useState } from "react";

function MouseTracker() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  useEffect(() => {

    function getPosition(event) {
      setx(event.clientX);
      sety(event.clientY);
    }

    window.addEventListener("mousemove", getPosition);
    return () => window.removeEventListener("mousemove", getPosition);
  }, []);

  return (
    <div>
      <output>{x},{y}</output>
    </div>
  )

}

export default MouseTracker