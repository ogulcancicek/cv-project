import React from "react";

export default class WorkExperienceForm extends React.Component {

    render() {
        return (
            <div className="single-work-exp-form" data-key={this.props.dataKey}>
                <input type="text" name="position" placeholder="Position" onChange={this.props.onChange}/>
                <input type="text" name="company" placeholder="Company" onChange={this.props.onChange}/>
                <input type="text" name="city" placeholder="City"  onChange={this.props.onChange}/>
                <div className="year-form-container flex-input-cont">
                    <input type="text" name="work-from" placeholder="From"  onChange={this.props.onChange}/>
                    <input type="text" name="work-to" placeholder="To"  onChange={this.props.onChange}/>
                </div>
                <button className="work-remove option-buttons" onClick={this.props.removeLastExperienceForm}>Delete</button>                        
            </div>
        );
    }
}