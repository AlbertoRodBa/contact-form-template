import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: 'error',
                title: '¡Oops!',
                text: 'Por favor, completa todos los campos.',
            });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        Swal.fire({
            icon: 'success',
            title: '¡Formulario enviado!',
            text: 'Tu mensaje ha sido enviado con éxito.',
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container">
            <h1>Contacto</h1>
            <h4>Envíanos un mensaje</h4>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Escribe tu nombre"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Escribe tu correo electrónico"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje"
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Enviar mensaje" />
                </div>
            </form>

            <div className="contact-info">
                <div>
                    <p><i className="fas fa-map-marker-alt"></i> Dirección: Calle 123, Ciudad</p>
                    <p><i className="fas fa-phone-alt"></i> Teléfono: +1 234 567 890</p>
                </div>
                <div>
                    <p><i className="fas fa-envelope"></i> Correo electrónico: <a href="mailto:contacto@empresa.com">contacto@empresa.com</a></p>
                    <p><i className="fas fa-window-restore"></i> Página web: <a href="https://www.empresa.com" target="_blank" rel="noopener noreferrer">www.empresa.com</a></p>
                </div>
            </div>
        </div>
    );
}

export default App;
