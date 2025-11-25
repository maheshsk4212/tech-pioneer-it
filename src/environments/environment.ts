// SECURITY NOTE: All values in this file are PUBLIC and visible in the browser.
// Never put sensitive secrets here (API keys, passwords, tokens).
// EmailJS public keys are safe here as they're designed to be public.
// See: https://www.emailjs.com/docs/faq/is-it-safe-to-use-emailjs-in-the-frontend/
export const environment = {
    production: false,
    emailjs: {
        publicKey: 'YOUR_PUBLIC_KEY_HERE',
        serviceId: 'YOUR_SERVICE_ID_HERE',
        contactTemplateId: 'YOUR_CONTACT_TEMPLATE_ID_HERE',
        careerTemplateId: 'YOUR_CAREER_TEMPLATE_ID_HERE'
    }
};
