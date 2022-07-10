import React from "react";
import '../styles/app.css';
import imgPlaceholder from '../images/cv-img-placeholder.jpeg';

class Cvview extends React.Component {

    render(){
        return (
            <div className="cv-view-container">
                <div className="personal-info-container">
                    <img src={imgPlaceholder} alt='Alt' className="cv-image"/>
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
                        <div className="sub-work-exp-container">
                            <div className="sub-work-exp-header">
                                <h4 className="work-exp-item-title">{this.props.workExperience.position}</h4>
                                <p className="from-to-info">{this.props.workExperience['work-from']} - {this.props.workExperience['work-to']}</p>
                            </div>
                            <p className="company-and-city">{this.props.workExperience.company}, {this.props.workExperience.city}</p>
                        </div>
                    </div>


                    <div className="education-info">
                        <h2 className="detail-info-title">Education Information</h2>
                        <div className="sub-education-info-container">
                            <div className="sub-education-header">
                                    <h4 className="education-info-item-title">Computer Science and Software Engineering</h4>
                                    <p className="from-to-info">Sep 2002 - Jun 2007</p>
                            </div>
                            <div className="uni-name">University of London</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cvview;