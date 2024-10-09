import React from 'react';
import '../style/AdmissionsPage.css';
import pic from '../assests/Admission.jpg';

const AdmissionsPage = () => {
  return (
    <div className="admissions-container">
      <div className="image-container">
        <img src={pic} alt="Admissions Banner" />
      </div>
      <form className="admissions-form">
        <h2>Admission Enquiry Form</h2>
        <p>As the admissions process varies according to which year a child is entering, please complete and submit the initial Admission Enquiry Form below:</p>
        
        <h3>Parent/Guardian's Details</h3>
        
        <label htmlFor="parent-name">Name (Required)</label>
        <input type="text" id="parent-name" name="parent-name" required placeholder="Title, First, Last" />
        
        <label htmlFor="email">Email Address (Required)</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="phone">Contact Phone Number (Required) (with country code)</label>
        <input type="tel" id="phone" name="phone" required />
        
        <label htmlFor="occupation">Occupation</label>
        <input type="text" id="occupation" name="occupation" />
        
        <label htmlFor="address">Address</label>
        <input type="text" id="street-address" name="street-address" placeholder="Street Address" />
        <input type="text" id="address-line-2" name="address-line-2" placeholder="Address Line 2" />
        <input type="text" id="city" name="city" placeholder="City" />
        <input type="text" id="state" name="state" placeholder="County / State / Region" />
        <input type="text" id="zip" name="zip" placeholder="ZIP / Postal Code" />
        <input type="text" id="country" name="country" placeholder="Country" />
        
        <h3>Pupil's Details</h3>
        
        <label htmlFor="pupil-name">Name (Required)</label>
        <input type="text" id="pupil-name" name="pupil-name" required placeholder="First, Last" />
        
        <label htmlFor="dob">Date of Birth (dd/mm/yyyy)</label>
        <input type="text" id="dob" name="dob" placeholder="DD/MM/YYYY" />
        
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
        </select>
        
        <label htmlFor="current-school">Current School</label>
        <input type="text" id="current-school" name="current-school" />
        
        <label htmlFor="nationality">Nationality</label>
        <input type="text" id="nationality" name="nationality" />
        
        <label htmlFor="entry-year">Term and Year of Entry</label>
        <input type="text" id="entry-year" name="entry-year" />
        
        <label>Is English his/her first language?</label>
        <div>
          <input type="radio" id="english-yes" name="first-language" value="yes" />
          <label htmlFor="english-yes">Yes</label>
          
          <input type="radio" id="english-no" name="first-language" value="no" />
          <label htmlFor="english-no">No</label>
        </div>
        
        <label>Have any learning difficulties been identified?</label>
        <div>
          <input type="radio" id="learning-yes" name="learning-difficulties" value="yes" />
          <label htmlFor="learning-yes">Yes</label>
          
          <input type="radio" id="learning-no" name="learning-difficulties" value="no" />
          <label htmlFor="learning-no">No</label>
        </div>
        
        <label>Other children for admission?</label>
        <div>
          <input type="radio" id="other-children-yes" name="other-children" value="yes" />
          <label htmlFor="other-children-yes">Yes</label>
          
          <input type="radio" id="other-children-no" name="other-children" value="no" />
          <label htmlFor="other-children-no">No</label>
        </div>
        
        <label htmlFor="other-info">If yes, please give more information</label>
        <textarea id="other-info" name="other-info" rows="4" maxLength="500"></textarea>
        
        <label htmlFor="additional-info">Any other relevant information or questions</label>
        <textarea id="additional-info" name="additional-info" rows="4"></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionsPage;
