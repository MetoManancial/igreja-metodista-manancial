---
title: "Contato"
date: 2025-01-25
draft: false
type: "contato"
---

# Entre em Contato

Estamos aqui para atender você. Entre em contato conosco através dos canais abaixo:

## Horários de Culto

- **Domingo**: 9h e 19h
- **Quarta-feira**: 19h30

## Localização

Rua Gilberto Pinto Mileo, 150 - C.I.C  
Curitiba - PR

## Contatos

- **WhatsApp**: (00) 99999-9999
- **E-mail**: contato@metodistamanancial.com.br

## Redes Sociais

- [Instagram @metodistamanancial](https://instagram.com/metodistamanancial)
- [Facebook /metodistamanancial](https://facebook.com/metodistamanancial)
- [YouTube /metodistamanancial](https://youtube.com/metodistamanancial)

## Formulário de Contato

<form class="contact-form" action="https://formspree.io/f/mvgzzojb" method="POST">
    <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="phone">Telefone:</label>
        <input type="tel" id="phone" name="phone">
    </div>
    
    <div class="form-group">
        <label for="subject">Assunto:</label>
        <select id="subject" name="subject" required>
            <option value="">Selecione um assunto</option>
            <option value="informacoes">Informações</option>
            <option value="oracao">Pedido de Oração</option>
            <option value="visita">Solicitar Visita</option>
            <option value="outro">Outro</option>
        </select>
    </div>
    
    <div class="form-group">
        <label for="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit" class="submit-button">Enviar Mensagem</button>
</form>

<style>
.map-container {
    width: 100%;
    height: 400px;
    margin: 20px 0;
    border-radius: 8px;
    overflow: hidden;
}

.social-links {
    display: flex;
    gap: 20px;
    margin: 20px 0;
}

.social-link {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background: #f5f5f5;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
}

.social-link:hover {
    background: #e5e5e5;
}

.social-link i {
    margin-right: 10px;
}

.contact-form {
    max-width: 600px;
    margin: 30px 0;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--color-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--color-secondary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-group textarea {
    height: 150px;
    resize: vertical;
}

.submit-button {
    background: var(--color-primary);
    color: white;
    padding: 14px 28px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;
}

.submit-button:hover {
    background: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.submit-button:active {
    transform: translateY(0);
}

@media (max-width: 768px) {
    .contact-form {
        padding: 20px;
        margin: 20px 15px;
    }
}

@media (max-width: 768px) {
    .social-links {
        flex-direction: column;
        gap: 10px;
    }
}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
