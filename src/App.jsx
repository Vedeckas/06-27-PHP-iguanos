import "./buttons.scss";
import { useEffect, useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>API</h1>
        <div className="container">
          <div className="row">
            <div className="col">Column</div>
            <div className="card">
              <div className="card-header">New client</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                Go somewhere
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button button="btn btn-primary" type="button">
                  Button
                </button>
                <button button="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
