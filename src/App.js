import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => {// Add this line
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data ? (
          <>
            <p>{data.data[0].email}</p>
            <p>{data.data[0].name}</p>
            <p>{data.data[0].created_at}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
