import React from "react";
import WorkExperienceForm from "./WorkExperienceForm";
import EducationInfoForm from "./EducationInfoForm";
import '../styles/app.css';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            workFormCounter: [1],
            educationInfoCounter: [1],
        }

        this.addNewWorkForm = this.addNewWorkForm.bind(this);
    }

    addNewWorkForm = (e) => {
        const temp = [...this.state.workFormCounter];
        if (temp.length === 3) return;
        temp.push(1);
        this.setState({workFormCounter: temp});
    }

    addNewEducationForm = () => {
        const temp = [...this.state.educationInfoCounter];
        if(temp.length >= 3) return;
        temp.push(1);
        this.setState({educationInfoCounter: temp});
    }

    render() {
        return (
            <div className="form-container">
                <section className="personal-info-form">
                    <h2 className="form-title">Personal Information</h2>
                    <input type="text" name="fullname" placeholder="Name" onChange={this.props.onChange}/>
                    <input type="file" id="upload-img" name="img" accept="image/*" />
                    <input type="text" name="adress" placeholder="Adress" onChange={this.props.onChange}/>
                    <input type="tel" id="phone" name="phoneNumber" placeholder="Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.props.onChange}></input>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={this.props.onChange}/>
                    <input type="text" name="linkedin" placeholder="Linkedin" onChange={this.props.onChange}/>
                    <textarea name="description" id="" cols="30" rows="5" placeholder="Description" onChange={this.props.onChange}></textarea>
                </section>

                <section className="education-info-form">
                    <h2 className="form-title">Education Information</h2>
                    {this.state.educationInfoCounter.map( (_, index) => <EducationInfoForm key={index} dataKey={index} onChange={this.props.onChange} />)}
                    <button className="school-add option-buttons" onClick={this.addNewEducationForm}>Add</button>
                </section>

                <section className="experience-info-form">
                    <h2 className="form-title">Experience Information</h2>
                    {this.state.workFormCounter.map( (_, index) => < WorkExperienceForm key={index} dataKey={index} onChange={this.props.onChange} /> )}                
                    <button className="work-add option-buttons" onClick={this.addNewWorkForm}>Add</button>

                    
                </section>

                <section className="form-options">
                    <button type="submit" className="save-btn option-buttons ">Save as PDF</button>
                    <button className="form-clear-btn option-buttons ">Clear</button>
                </section>
            </div>
        );
    }
}

export default Form;