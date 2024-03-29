import React, { useState } from 'react'

function AfterSubmit() {

  const [fromData, setFormData] = useState({
    name: '',
    contect: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data', fromData);
  }

  return (
    <div>
      <h1>Contect Information</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type='text'
          onChange={handleChange}
          name='name'
        />
        <br />
        <label>Contect:</label>
        <input
          type='text'
          onChange={handleChange}
          name='contect'
        />
        <br />
        <label>Message:</label>
        <input
          type='text'
          onChange={handleChange}
          name='message'
        />
        <br />
        <button
          type='submit'
        >Submit</button>
      </form>
    </div>
  )
}

export default AfterSubmit