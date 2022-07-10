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
        fullname: 'Ogulcan Cicek',
        adress: 'Istanbul/Turkey',
        phoneNumber: '+90 000 000 00 00',
        email: 'example@gmail.com',
        linkedin: 'linkedin.com/in/example',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      workExperiences: [{
        position: 'Position',
        company: 'Company Name',
        city: 'City',
        'work-from': 'from',
        'work-to': 'to',
        edited: true,
      },
      {
        position: 'Position',
        company: 'Company Name',
        city: 'City',
        'work-from': 'from',
        'work-to': 'to',
        edited: false,
      },
      {
        position: 'Position',
        company: 'Company Name',
        city: 'City',
        'work-from': 'from',
        'work-to': 'to',
        edited: false,
      }],
      educationInfo: [{
        university: 'University Name',
        city: 'City',
        subject: 'Subject',
        'school-from': 'from',
        'school-to': 'to',
        edited: true,
      },
      {
        university: 'University Name',
        city: 'City',
        subject: 'Subject',
        'school-from': 'from',
        'school-to': 'to',
        edited: false,
      },
      {
        university: 'University Name',
        'school-city': 'City',
        subject: 'Subject',
        'school-from': 'from',
        'school-to': 'to',
        edited: false,
      }],
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    const personalInfoTitles = ['fullname', 'adress', 'phoneNumber', 'email', 'linkedin', 'description'];
    const workExperienceTitles = ['position', 'company', 'city', 'work-from', 'work-to'];
    const educationInfoTitles = ['university', 'school-city', 'subject', 'school-from', 'school-to'];

    const input = e.target;
    const inputName = input.name;
    const inputValue = input.value;

    if(personalInfoTitles.includes(inputName)) {
      let newPersonalInfo = this.state.personalInfo;
      newPersonalInfo[inputName] = inputValue;
      this.setState({
        personalInfo: newPersonalInfo,
      })
    }else if(workExperienceTitles.includes(inputName)){
      const workExpIndex = input.parentNode.getAttribute('data-key');

      let temp = this.state.workExperiences;
      temp[workExpIndex][inputName] = inputValue;
      temp[workExpIndex].edited = true;
      this.setState({
        workExperiences: temp,
      })
    }else if(educationInfoTitles.includes(inputName)){
      const eduInfoIndex = input.parentNode.getAttribute('data-key');

      let temp = this.state.educationInfo;
      temp[eduInfoIndex][inputName] = inputValue;
      temp[eduInfoIndex].edited = true;
      this.setState({
        educationInfo: temp,
      })
    }
  }

  render() {
    return (
      <>
      <Header />
      <div className="content-container">
        <Form onChange={this.onChange} />
        <Cvview personalInfo={this.state.personalInfo} workExperiences={this.state.workExperiences} educationInfo={this.state.educationInfo}/>  
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
