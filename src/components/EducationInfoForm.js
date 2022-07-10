import React from "react";

export default class EducationInfoForm extends React.Component {
    render() {
        return(
            <div className="single-education-info-form" data-key={this.props.dataKey}>
                <input type="text" name="uni-name" placeholder="University Name" />
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="degree" id="degree" placeholder="Degree"/>
                <input type="text" name="subject" id="subject" placeholder="Subject"/>
                <div className="year-form-container flex-input-cont">
                    <input type="text" name="from" placeholder="From" />
                    <input type="text" name="to" placeholder="To" />
                </div>
                <button className="school-remove option-buttons">Delete</button>
            </div>
        );
    }
}