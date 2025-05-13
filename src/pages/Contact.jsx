import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }
    if (surname.trim() === "") {
      alert("Please enter your surname");
      return;
    }
    if (phone.trim() === "") {
      alert("Please enter your phone number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Sending data to backend
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, phone, email, message })
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message || "Form submitted successfully!");
        setName('');
        setSurname('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="container py-5">
      <div className="Contact text-center mb-4">
        <h1>Contact Me</h1>
      </div>
      <div className="row gy-4">
        <div className="col-md-6">
          <div className="wave-group">
            <input required type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            <span className="bar"></span>
            <label className="label">
              {'Name'.split('').map((char, index) => (
                <span className="label-char" style={{ '--index': index }} key={index}>{char}</span>
              ))}
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="wave-group">
            <input required type="text" className="input" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <span className="bar"></span>
            <label className="label">
              {'Surname'.split('').map((char, index) => (
                <span className="label-char" style={{ '--index': index }} key={index}>{char}</span>
              ))}
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="wave-group">
            <input required type="number" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <span className="bar"></span>
            <label className="label">
              {'PhoneNumber'.split('').map((char, index) => (
                <span className="label-char" style={{ '--index': index }} key={index}>{char}</span>
              ))}
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="wave-group">
            <input required type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span className="bar"></span>
            <label className="label">
              {'Email'.split('').map((char, index) => (
                <span className="label-char" style={{ '--index': index }} key={index}>{char}</span>
              ))}
            </label>
          </div>
        </div>

        <div className="col-12">
          <div className="wave-group">
            <textarea
              required
              className="input textarea"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <span className="bar"></span>
            <label className="label">
              {'Message'.split('').map((char, index) => (
                <span className="label-char" style={{ '--index': index }} key={index}>{char}</span>
              ))}
            </label>
          </div>
        </div>

        <div className="col-12 text-center">
          <button className="btn btn-primary mt-3" onClick={handleClick}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
