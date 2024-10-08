import React, { useState } from 'react';
import './ContactForm.scss'
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation simple de l'email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Fonction pour envoyer l'email avec EmailJS
  const sendEmail = (templateParams) => {
    // Remplacer par votre propre Service ID, Template ID et User ID
    const serviceID = 'service_twldyyu';
    const templateID = 'template_70ohod8';
    const userID = 'lh9pqZdkamPYgoSUw'

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess('Votre message a été envoyé avec succès.');
        setError('');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (err) => {
        console.error('FAILED...', err);
        setError('Une erreur s\'est produite lors de l\'envoi de votre message.');
      });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (!formData.name || !formData.email || !formData.message) {
      setError('Tous les champs obligatoires doivent être remplis.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    // Création des paramètres du template pour EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Envoyer l'email
    sendEmail(templateParams);
  };

  return (
    <div className="contact-form">
      <h2>Contactez-moi</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div>
          <label>Sujet:</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
          />
        </div>
        
        <div>
          <label>Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

