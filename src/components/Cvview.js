import React from "react";
import WorkExpCvView from "./WorkExpCvView";
import EducationInfoCvView from "./EducationInfoCvView";
import '../styles/app.css';
import placeholderImg from '../images/placeholder.jpeg';

class Cvview extends React.Component {

    render(){
        return (
            <div className="cv-view-container">
                <div className="personal-info-container">
                    {(this.props.file === null) ? (
                        <img src={placeholderImg} alt='Alt' className="cv-image"/>
                    ): (
                        <img src={this.props.file} alt='Alt' className="cv-image"/>
                    )}
                    
                    <div className="personal-details">
                        <h3 className="sidebar-section-title">Personal Details</h3>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Name</h4>
                            <p className="sidebar-detail">{this.props.personalInfo.fullname}</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Adress</h4>
                            <p className="sidebar-detail">{this.props.personalInfo.adress}</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Phone number</h4>
                            <p className="sidebar-detail">{this.props.personalInfo.phoneNumber}</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Email adress</h4>
                            <p className="sidebar-detail">{this.props.personalInfo.email}</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Linkedin</h4>
                            <p className="sidebar-detail">{this.props.personalInfo.linkedin}</p>
                        </div>
                    </div>
                </div>

                <div className="cv-right-side">
                    <div className="cv-personal-description">
                        {this.props.personalInfo.description}
                    </div>
                    <div className="work-experience">
                        <h2 className="detail-info-title">Work Experinece</h2>
                        {this.props.workExperiences.map( (workExperience, index) => (workExperience.edited) ? (
                            <WorkExpCvView workExperience={workExperience} key={index}/> 
                        ): false )}
                    </div> 


                    <div className="education-info">
                        <h2 className="detail-info-title">Education Information</h2>
                        {this.props.educationInfo.map( (educationInfo, index)  => (educationInfo.edited) ? (
                            <EducationInfoCvView educationInfo={educationInfo} key={index} /> 
                        ): false )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cvview;