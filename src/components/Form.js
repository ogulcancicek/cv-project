import React from "react";
import '../styles/app.css';

class Form extends React.Component {

    render() {
        return (
            <div className="form-container">
                <section className="personal-info-form">
                    <h2 className="form-title">Personal Information</h2>
                    <div className="fullname-form-container flex-input-cont">
                        <input type="text" name="firstname" placeholder="First name" />
                        <input type="text" name="lastname" placeholder="Last name" />
                    </div>
                    <input type="text" name="worktitle" placeholder="Title" />
                    <input type="file" id="upload-img" name="img" accept="image/*" />
                    <input type="text" name="adress" placeholder="Adress" />
                    <input type="tel" id="phone" name="phone" placeholder="Phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <textarea name="description" id="" cols="30" rows="5" placeholder="Description"></textarea>
                </section>

                <section className="education-info-form">
                    <h2 className="form-title">Education Information</h2>
                    <input type="text" name="uni-name" placeholder="University Name" />
                    <input type="text" name="city" placeholder="City" />
                    <input type="email" name="degree" id="degree" placeholder="Degree"/>
                    <input type="email" name="subject" id="subject" placeholder="Subject"/>
                    <div className="year-form-container flex-input-cont">
                        <input type="text" name="from" placeholder="From" />
                        <input type="text" name="to" placeholder="To" />
                    </div>
                    <button className="school-remove option-buttons">Delete</button>
                    <button className="school-add option-buttons">Add</button>
                </section>

                <section className="experience-info-form">
                    <h2 className="form-title">Experience Information</h2>
                    <input type="text" name="position" placeholder="Position" />
                    <input type="text" name="company" placeholder="Company" />
                    <input type="text" name="city" placeholder="City" />
                    <div className="year-form-container flex-input-cont">
                        <input type="text" name="from" placeholder="From" />
                        <input type="text" name="to" placeholder="To" />
                    </div>
                    <button className="school-remove option-buttons">Delete</button>
                    <button className="school-add option-buttons">Add</button>
                </section>
            </div>
        );
    }
}

export default Form;