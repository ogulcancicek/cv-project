import React from "react";

export default class EducationInfoForm extends React.Component {

    render() {
        return(
            <div className="single-education-info-form" data-key={this.props.dataKey}>
                <input type="text" name="university" placeholder="University Name" onChange={this.props.onChange} value={this.props.educationInfo.university}/>
                <input type="text" name="school-city" placeholder="City" onChange={this.props.onChange} value={this.props.educationInfo.city}/>
                <input type="text" name="subject" id="subject" placeholder="Subject" onChange={this.props.onChange} value={this.props.educationInfo.subject}/>
                <div className="year-form-container flex-input-cont"  data-key={this.props.dataKey}>
                    <input type="text" name="school-from" placeholder="From" onChange={this.props.onChange} value={this.props.educationInfo['school-from']}/>
                    <input type="text" name="school-to" placeholder="To" onChange={this.props.onChange} value={this.props.educationInfo['school-to']}/>
                </div>
                {(this.props.dataKey !== 0) ? (
                    <button className="school-remove option-buttons" onClick={this.props.removeEducationForm}>Delete</button>
                ): false}
                
            </div>
        );
    }
}