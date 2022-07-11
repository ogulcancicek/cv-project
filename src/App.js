import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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
      }],
      educationInfo: [{
        university: 'University Name',
        city: 'City',
        subject: 'Subject',
        'school-from': 'from',
        'school-to': 'to',
        edited: true,
      }],
      workFormCounter: [1],
      educationInfoCounter: [1],
      file: null,
    }

    this.onChange = this.onChange.bind(this);
    this.addNewWorkForm = this.addNewWorkForm.bind(this);
    this.removeWorkForm = this.removeWorkForm.bind(this);
    this.addNewEducationForm = this.addNewEducationForm.bind(this);
    this.removeEducationForm = this.removeEducationForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.printDocument = this.printDocument.bind(this);
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


  addNewWorkForm = (e) => {
    if (this.state.workFormCounter.length === 3) return;
    const newWorkForm = {
      position: 'Position',
      company: 'Company Name',
      city: 'City',
      'work-from': 'from',
      'work-to': 'to',
      edited: true,
    }

    let temState = this.state;
    temState.workExperiences.push(newWorkForm);
    temState.workFormCounter.push(1);
    this.setState(temState);
  }

  removeWorkForm = (e) => {
    const index = e.target.parentNode.getAttribute('data-key');

    let tempState = this.state;
    if(tempState.workFormCounter.length === 1) return;
    tempState.workExperiences.splice(index, 1);
    tempState.workFormCounter.splice(index, 1);
    this.setState(tempState);
  }

  addNewEducationForm = () => {
    if (this.state.educationInfoCounter.length === 3) return;
    const newSchoolForm = {
      university: 'University Name',
      city: 'City',
      subject: 'Subject',
      'school-from': 'from',
      'school-to': 'to',
      edited: true,
    }

    let tempState = this.state;
    tempState.educationInfo.push(newSchoolForm);
    tempState.educationInfoCounter.push(1);
    this.setState(tempState);
  }

  removeEducationForm = (e) => {
      const index = e.target.parentNode.getAttribute('data-key');
      
      let tempState = this.state;
      if(tempState.educationInfoCounter.length === 1) return;
      tempState.educationInfo.splice(index, 1);
      tempState.educationInfoCounter.splice(index, 1);
      this.setState(tempState);
  }

  clearForm = () => {
      const inputs = document.querySelectorAll('input');
      inputs.forEach( (input) => input.value = '' );
      
      const textarea = document.querySelector('textarea');
      textarea.value = '';

      this.setState( {
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
        }],
        educationInfo: [{
          university: 'University Name',
          city: 'City',
          subject: 'Subject',
          'school-from': 'from',
          'school-to': 'to',
          edited: true,
        }],
        workFormCounter: [1],
        educationInfoCounter: [1],
        file: null,
      })      
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({file: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  printDocument = () => {
    const divToPrint = document.querySelector('.cv-view-container');
    html2canvas(divToPrint)
      .then( (canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save('download.pdf');
      });
  }

  render() {
    return (
      <>
      <Header />
      <div className="content-container">
        <Form onChange={this.onChange}
              addNewWorkForm={this.addNewWorkForm}
              removeWorkForm={this.removeWorkForm}
              addNewEducationForm={this.addNewEducationForm}
              removeEducationForm={this.removeEducationForm}
              educationInfoCounter={this.state.educationInfoCounter}
              workFormCounter={this.state.workFormCounter}
              clearForm={this.clearForm}
              imageHandler={this.imageHandler}
              printDocument={this.printDocument}  />
              
        <Cvview personalInfo={this.state.personalInfo} workExperiences={this.state.workExperiences} educationInfo={this.state.educationInfo} file={this.state.file}/>  
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
