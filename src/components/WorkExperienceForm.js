import React from "react";

export default class WorkExperienceForm extends React.Component {

    render() {
        return (
            <div className="single-work-exp-form" data-key={this.props.dataKey}>
                <input type="text" name="position" placeholder="Position" onChange={this.props.onChange} value={this.props.workExperience.position}/>
                <input type="text" name="company" placeholder="Company" onChange={this.props.onChange} value={this.props.workExperience.company}/>
                <input type="text" name="city" placeholder="City"  onChange={this.props.onChange} value={this.props.workExperience.city}/>
                <div className="year-form-container flex-input-cont" data-key={this.props.dataKey}>
                    <input type="text" name="work-from" placeholder="From"  onChange={this.props.onChange} value={this.props.workExperience['work-from']}/>
                    <input type="text" name="work-to" placeholder="To"  onChange={this.props.onChange} value={this.props.workExperience['work-to']}/>
                </div>
                {(this.props.dataKey !== 0) ? (
                    <button className="work-remove option-buttons" onClick={this.props.removeWorkForm}>Delete</button>
                ): false}
                
            </div>
        );
    }
}