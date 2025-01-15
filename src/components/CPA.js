import React, { useState } from 'react';

const styles = {
  formContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #2C7A7B, #234E52)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  formCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '10px',
    fontSize: '24px'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '20px',
    fontSize: '14px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#666',
    fontSize: '14px'
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box'
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2C7A7B',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '10px'
  },
  homeButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    color: '#2C7A7B',
    border: '1px solid #2C7A7B',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

function CPAForm() {
    const [formData, setFormData] = useState({
      caller_id: '',
      lead_token: '',
      submit_date: '',
      source_url: '',
      traffic_source_id: '',
      jornaya_leadid: '',
      first_name: '',
      last_name: '',
      state: '',
      zip: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(
          'https://global-digital-media.trackdrive.com/posting_instructions/InboundWebhook/0beb1761-61e4-47c9-b040-9a47c7526f79/?traffic_source_id=2195&trackdrive_number_id=22726186',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          }
        );
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('API response:', data);
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('There was an error submitting the form.');
      }
    };
  
    return (
      <div style={styles.formContainer}>
        <div style={styles.formCard}>
          <h1 style={styles.title}>CPA API FORM</h1>
          <p style={styles.subtitle}>Fill out the form below to learn more!</p>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>caller_id</label>
              <input
                style={styles.input}
                type="text"
                name="caller_id"
                value={formData.caller_id}
                onChange={handleChange}
                placeholder="caller_id"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>lead_token</label>
              <input
                style={styles.input}
                type="text"
                name="lead_token"
                value={formData.lead_token}
                onChange={handleChange}
                placeholder="lead_token"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>submit_date</label>
              <input
                style={styles.input}
                type="date"
                name="submit_date"
                value={formData.submit_date}
                onChange={handleChange}
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>source_url</label>
              <input
                style={styles.input}
                type="text"
                name="source_url"
                value={formData.source_url}
                onChange={handleChange}
                placeholder="https://Sagehealthplans.com/"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>traffic_source_id</label>
              <input
                style={styles.input}
                type="text"
                name="traffic_source_id"
                value={formData.traffic_source_id}
                onChange={handleChange}
                placeholder="traffic_source_id"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>jornaya_leadid</label>
              <input
                style={styles.input}
                type="text"
                name="jornaya_leadid"
                value={formData.jornaya_leadid}
                onChange={handleChange}
                placeholder="jornaya_leadid"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>first_name</label>
              <input
                style={styles.input}
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="first_name"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>last_name</label>
              <input
                style={styles.input}
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="last_name"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>state</label>
              <input
                style={styles.input}
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="state"
              />
            </div>
  
            <div style={styles.formGroup}>
              <label style={styles.label}>Zip</label>
              <input
                style={styles.input}
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="zip"
              />
            </div>
  
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

export default CPAForm;