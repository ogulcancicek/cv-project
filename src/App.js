import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Cvview from "./components/Cvview";
import Footer from "./components/Footer";

import './styles/app.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        fullname: '-',
        adress: '-',
        phoneNumber: '-',
        email: '-',
        linkedin: '-',
        description: '-',
      },
      workExperiences: [{
        position: '-',
        company: '-',
        city: '-',
        'work-from': 'from',
        'work-to': 'to',
      }],
      educationInfo: [],
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    const personalInfoTitles = ['fullname', 'adress', 'phoneNumber', 'email', 'linkedin', 'description'];
    const workExperienceTitle = ['position', 'company', 'city', 'work-from', 'work-to'];
    
    const input = e.target;
    const inputName = input.name;
    const inputValue = input.value;

    if(personalInfoTitles.includes(inputName)) {
      let newPersonalInfo = this.state.personalInfo;
      newPersonalInfo[inputName] = inputValue;
      this.setState({
        personalInfo: newPersonalInfo,
      })
    }else if(workExperienceTitle.includes(inputName)){
      let newWorkExperinece = this.state.workExperiences;
      newWorkExperinece[inputName] = inputValue;
      this.setState({
        workExperiences: newWorkExperinece,
      })
    }
  }

  render() {
    return (
      <>
      <Header />
      <div className="content-container">
        <Form onChange={this.onChange} />
        <Cvview personalInfo={this.state.personalInfo} workExperience={this.state.workExperiences}/>  
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
