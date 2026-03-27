import emailjs from '@emailjs/browser';
import { type FormEvent, useState } from 'react';
import { Container } from 'react-bootstrap';
import AppButton from '../AppButton/AppButton';
import Title from '../Title/Title';

const Contact = (): JSX.Element => {
  const instagramIcon = `${import.meta.env.BASE_URL}instagram-black.svg`;
  const githubIcon = `${import.meta.env.BASE_URL}github-black.svg`;
  const linkedinIcon = `${import.meta.env.BASE_URL}linkedin-black.png`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (field: 'name' | 'email' | 'phone' | 'message', value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        text: 'Email service is not configured. Add your EmailJS env vars to continue.'
      });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        {
          publicKey
        }
      );
      setSubmitStatus({ type: 'success', text: 'Message sent successfully.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setSubmitStatus({
        type: 'error',
        text: 'Failed to send message. Please try again in a moment.'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div
        id="contact"
        className="pb-5"
        style={{ background: '#000000', paddingTop: '10rem' }}
      >
        <Container fluid className="mx-auto" style={{ width: 'min(97%, 1500px)' }}>
          <Title content="CONTACT" className="text-center" />
          <form
            onSubmit={handleSubmit}
            className="mx-auto d-flex flex-column"
            style={{ width: 'min(100%, 760px)', gap: '0.95rem' }}
          >
            <input
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
              required
            />
            <input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
              required
            />
            <input
              type="text"
              placeholder="Message*"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="form-control rounded-pill border-0"
              style={{ height: '2.65rem', fontSize: '0.82rem' }}
              required
            />
            <AppButton
              title={isSending ? 'SENDING...' : 'SEND'}
              type="submit"
              className="align-self-center mt-3"
              action="submit_contact_form"
              disabled={isSending}
            />
            {submitStatus ? (
              <p
                className="mb-0 mt-2 text-center"
                style={{
                  color: submitStatus.type === 'success' ? '#22c55e' : '#f87171',
                  fontSize: '0.82rem',
                  letterSpacing: '0.04em'
                }}
              >
                {submitStatus.text}
              </p>
            ) : null}
          </form>
        </Container>
      </div>

      <footer style={{ background: '#e8e8e8', color: '#111111' }}>
        <Container fluid className="mx-auto py-4" style={{ width: 'min(97%, 1500px)' }}>
          <div className="d-flex flex-wrap align-items-start justify-content-between" style={{ gap: '1rem' }}>
            <div>
              <p className="mb-2 fw-semibold" style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                Creator
              </p>
              <p className="mb-0" style={{ fontSize: '0.75rem' }}>
                Carlos J. Vega
              </p>
            </div>
            <div>
              <p className="mb-2 fw-semibold" style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                CONTACT
              </p>
              <p className="mb-0" style={{ fontSize: '0.75rem' }}>
                Phone: 321-552-1462
              </p>
              <p className="mb-0" style={{ fontSize: '0.75rem' }}>
                Email: carlosvega@email.com
              </p>
            </div>
            <div>
              <p className="mb-2 fw-semibold" style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}>
                SOCIALS
              </p>
              <div className="d-flex align-items-center gap-2">
                <a href="https://www.instagram.com/charlie.vegac/" target="_blank" aria-label="Instagram" className="d-inline-flex">
                  <img src={instagramIcon} alt="Instagram" style={{ width: '1rem', height: '1rem' }} />
                </a>
                <a href="https://github.com/Charlievegac" target="_blank" aria-label="GitHub" className="d-inline-flex">
                  <img src={githubIcon} alt="GitHub" style={{ width: '1rem', height: '1rem' }} />
                </a>
                <a href="https://www.linkedin.com/in/carlosjvega05/" target="_blank" aria-label="LinkedIn" className="d-inline-flex">
                  <img src={linkedinIcon} alt="LinkedIn" style={{ width: '1rem', height: '1rem' }} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Contact;
