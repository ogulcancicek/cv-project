import React from "react";

export default class WorkExpCvView extends React.Component {
    render() {
        return (
            <div className="sub-work-exp-container">
                <div className="sub-work-exp-header">
                    <h4 className="work-exp-item-title">{this.props.workExperience.position}</h4>
                    <p className="from-to-info">{this.props.workExperience['work-from']} - {this.props.workExperience['work-to']}</p>
                </div>
                <p className="company-and-city">{this.props.workExperience.company}, {this.props.workExperience.city}</p>
            </div>
        );
    }
}