import React from "react";

export default class EducationInfoCvView extends React.Component {
    render() {
        return(
            <div className="sub-education-info-container">
                <div className="sub-education-header">
                        <h4 className="education-info-item-title">{this.props.educationInfo.subject}</h4>
                        <p className="from-to-info">{this.props.educationInfo['school-from']} - {this.props.educationInfo['school-to']}</p>
                </div>
                <div className="uni-name">{this.props.educationInfo.university}, {this.props.educationInfo['school-city']}</div>
            </div>
        );
    }
}