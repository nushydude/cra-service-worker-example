import React from "react";

const App: React.FC = () => {
  return (
    <div style={{ padding: "1em" }}>
      <p style={{ marginBottom: "1em" }}>
        Trying to see if this image gets precached...
      </p>

      <div style={{ background: "pink", display: "inline-block" }}>
        <img src="/image.jpg" alt="" width={400} height="auto" />
      </div>
    </div>
  );
};

export default App;
