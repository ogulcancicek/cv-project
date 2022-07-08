import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Cvview from "./components/Cvview";
import Footer from "./components/Footer";

import './styles/app.css';

class App extends React.Component {

  render() {
    return (
      <>
      <Header />
      <div className="content-container">
        <Form />
        <Cvview />  
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
