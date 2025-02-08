import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const[formData, setFormDate] = useState({
    name:'',
    email:'',
    feedback:'',
    rating:''
  });

  const handleChange= (event)=>{
    console.log(event.target);
    const {name, value} = event.target;
    setFormDate({
      ...formData,
      [name]: value
    });
     
  };

  const handleSubmit= (event)=>{
      event.preventDefault();
      const confirmationMessage = `
       Name: ${formData.name}
       Email: ${formData.email}
       Feedback: ${formData.feedback}
       Rating: ${formData.rating}
      `;
      const isConfirmed = window.confirm(`Please confirm your information : ${confirmationMessage}`);
      if(isConfirmed){
        console.log('Submitting feedback: ', formData);
        //Notice how we didn't spread formData (...formData) because we want the values of the properties of the object to be empty 
        //reset the formData state to empty values, clearing the form fields after submission
        setFormDate({
          name:'',
          email:'',
          feedback:'',
          rating:''
        }
        );
        
        alert('Thank you for your Feedback(^-^)');
      }

  }


  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Put Name Here'/>
        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Put Email Here' />
        <textarea name='feedback' value={formData.feedback} onChange={handleChange} placeholder='Give your feedback here'></textarea>
        
         
        <div>
        <h4>Rate Us: </h4><br/>
        <input type="radio" name='rating' value="1"  onChange={handleChange} id="RatingChoice1"/>
        <label for="RatingChoice1">1</label> <br/><br/>
        
        <input type="radio" name='rating' value="2"  onChange={handleChange} id="RatingChoice2"/>
        <label for="RatingChoice2">2</label> <br/><br/>
        
        <input type="radio" name='rating' value="3"  onChange={handleChange} id="RatingChoice3"/>
        <label for="RatingChoice3">3</label> <br/><br/>
        
        <input type="radio" name='rating' value="4"  onChange={handleChange} id="RatingChoice4"/>
        <label for="RatingChoice4">4</label> <br/><br/>
        
        <input type="radio" name='rating' value="5" onChange={handleChange} id="RatingChoice5"/>
        <label for="RatingChoice5">5</label> <br/><br/>
    </div>

        
        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
