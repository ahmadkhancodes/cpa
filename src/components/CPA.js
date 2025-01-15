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
        trackdrive_number: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Construct the query string using formData
        const queryParams = new URLSearchParams({
          trackdrive_number: formData.trackdrive_number,
          caller_id: formData.caller_id,
          lead_token: formData.lead_token,
          submit_date: formData.submit_date,
          source_url: formData.source_url,
          traffic_source_id: formData.traffic_source_id,
          jornaya_leadid: formData.jornaya_leadid,
          first_name: formData.first_name,
          last_name: formData.last_name,
          state: formData.state,
          zip: formData.zip,
        });
      
        // Redirect the browser to the new URL
        const url = `https://global-digital-media.trackdrive.com/api/v1/inbound_webhooks/ping/check_for_medicare_inbound_buyer_availability?${queryParams}`;
        window.location.href = url;
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
              <label style={styles.label}>trackdrive_number</label>
              <input
                style={styles.input}
                type="text"
                name="trackdrive_number"
                value={formData.trackdrive_number}
                onChange={handleChange}
                placeholder="trackdrive_number"
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