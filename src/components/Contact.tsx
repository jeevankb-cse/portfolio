import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [isSending, setIsSending] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = name.trim() !== '';
    const isEmailValid = email.trim() !== '';
    const isMessageValid = message.trim() !== '';

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    setIsSending(true);
    setStatusMessage(null);

    try {
      // Direct email delivery to Jeevan's inbox via FormSubmit API
      const response = await fetch('https://formsubmit.co/ajax/jeevankenchalli514@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email_or_phone: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`,
          _template: 'table',
        }),
      });

      await response.json();

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: '✅ Message sent successfully! It has been delivered directly to Jeevan’s inbox (jeevankenchalli514@gmail.com).',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // If first-time activation needed or rate-limited, fall back to mailto draft
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nContact: ${email}\n\nMessage:\n${message}`);
        window.open(`mailto:jeevankenchalli514@gmail.com?subject=${subject}&body=${body}`, '_blank');

        setStatusMessage({
          type: 'success',
          text: '✅ Thank you! Your message draft has been prepared to send directly to jeevankenchalli514@gmail.com.',
        });
      }
    } catch (err) {
      // Network/offline fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nContact: ${email}\n\nMessage:\n${message}`);
      window.open(`mailto:jeevankenchalli514@gmail.com?subject=${subject}&body=${body}`, '_blank');

      setStatusMessage({
        type: 'success',
        text: '✅ Your email client has been opened to send this inquiry directly to jeevankenchalli514@gmail.com.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Interested in collaborating on AI/ML projects or software development? Let's connect!</p>

          <div className="contact-info-list">
            <p>📍 Basavanagudi, Bengaluru, Karnataka - 560004</p>
            <p>
              📧 <a href="mailto:jeevankenchalli514@gmail.com">jeevankenchalli514@gmail.com</a>
            </p>
            <p>
              📞 <a href="tel:+918317453797">+91-8317453797</a>
            </p>
          </div>

          {statusMessage && (
            <div
              className="contact-success-msg"
              style={{
                borderColor: statusMessage.type === 'success' ? '#2ea043' : '#f85149',
                color: statusMessage.type === 'success' ? '#3fb950' : '#f85149',
              }}
            >
              {statusMessage.text}
            </div>
          )}

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                disabled={isSending}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim() !== '') setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="contact-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                disabled={isSending}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.trim() !== '') setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries, project proposals, or feedback..."
              multiline
              rows={8}
              disabled={isSending}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.trim() !== '') setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? 'Please enter your message' : ''}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSending}
              endIcon={isSending ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
              onClick={sendEmail}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
