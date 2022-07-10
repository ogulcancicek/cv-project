import React from "react";
import '../styles/app.css';

class Cvview extends React.Component {

    render(){
        return (
            <div className="cv-view-container">
                <div className="personal-info-container">
                    <img src="http://via.placeholder.com/200x200" alt="http://via.placeholder.com/200x200" className="cv-image"/>

                    <div className="personal-details">
                        <h3 className="sidebar-section-title">Personal Details</h3>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Name</h4>
                            <p className="sidebar-detail">Ogulcan Cicek</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Adress</h4>
                            <p className="sidebar-detail">14 Tottenham Court Road, London W1T1JY</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Phone number</h4>
                            <p className="sidebar-detail">+44 20 7946 0638</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Email adress</h4>
                            <p className="sidebar-detail">john.williams@mail.uk</p>
                        </div>
                        <div className="detail-container">
                            <h4 className="sidebar-title">Linkedin</h4>
                            <p className="sidebar-detail">linkedin.com/in/john.williams</p>
                        </div>
                    </div>
                </div>

                <div className="cv-right-side">
                    <div className="cv-personal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat harum amet consequatur nemo aut provident commodi, quae eos iusto voluptatibus illum libero autem saepe iure non at labore perferendis animi.
                    </div>
                    <div className="work-experience">
                        <h2 className="detail-info-title">Work Experinece</h2>
                        <div className="sub-work-exp-container">
                            <div className="sub-work-exp-header">
                                <h4 className="work-exp-item-title">Senior Developer</h4>
                                <p className="from-to-info">2015 - present</p>
                            </div>
                            <p className="company-and-city">Explore the web, London</p>
                        </div>
                        <div className="sub-work-exp-container">
                            <div className="sub-work-exp-header">
                                <h4 className="work-exp-item-title">Senior Developer</h4>
                                <p className="from-to-info">2015 - present</p>
                            </div>
                            <p className="company-and-city">Explore the web, London</p>
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