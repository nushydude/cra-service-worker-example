import React from "react";

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 600;

const App: React.FC = () => {
  return (
    <div style={{ padding: "1em" }}>
      <p style={{ marginBottom: "1em" }}>
        Trying to see if this image gets precached...
      </p>

      <div
        style={{
          background: "pink",
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          marginBottom: "1em",
        }}
      >
        <img
          src="/image.jpg"
          alt=""
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
      </div>

      <p>version: {process.env.REACT_APP_GITHASH}</p>
    </div>
  );
};

export default App;
