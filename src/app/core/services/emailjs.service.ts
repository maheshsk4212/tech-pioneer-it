import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailJSService {
    private isConfigured = false;

    constructor(private http: HttpClient) {
        if (environment.emailjs.publicKey && environment.emailjs.publicKey !== 'YOUR_PUBLIC_KEY_HERE') {
            emailjs.init(environment.emailjs.publicKey);
            this.isConfigured = true;
        } else {
            console.warn('EmailJS not configured: Missing Public Key. Emails will be simulated.');
        }
    }

    sendCareerApplicationNetlify(formData: FormData): Promise<{ success: boolean; message: string }> {
        const headers = new HttpHeaders({ 'Accept': 'application/json' });

        // Check if we are on localhost
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.group('Netlify Forms Simulation');
            console.log('Form Data:', Object.fromEntries((formData as any).entries()));
            console.log('Note: Netlify Forms only receive data when deployed to Netlify.');
            console.groupEnd();

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        success: true,
                        message: 'Application simulated successfully! (Deploy to Netlify for real submission)'
                    });
                }, 1000);
            });
        }

        // We need to construct the body URL-encoded for basic fields if not using FormData, 
        // BUT for files we MUST use FormData and let the browser set the Content-Type to multipart/form-data.
        // Netlify handles FormData submissions sent to "/" with the form-name attribute.

        return new Promise((resolve, reject) => {
            this.http.post('/', formData, { headers, responseType: 'text' }).subscribe({
                next: () => {
                    resolve({
                        success: true,
                        message: 'Your application has been submitted successfully! We will review it and get back to you soon.'
                    });
                },
                error: (error) => {
                    console.error('Netlify Form Error:', error);
                    resolve({
                        success: false,
                        message: 'Failed to send application. Please try again.'
                    });
                }
            });
        });
    }

    private isReady(): boolean {
        return this.isConfigured &&
            environment.emailjs.serviceId !== 'YOUR_SERVICE_ID_HERE' &&
            environment.emailjs.contactTemplateId !== 'YOUR_CONTACT_TEMPLATE_ID_HERE';
    }

    async sendContactEmail(formData: {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
    }): Promise<{ success: boolean; message: string }> {
        // Simulation for development/testing without keys
        if (!this.isReady()) {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Fake network delay
            console.group('EmailJS Simulation (Contact Form)');
            console.log('Would send to:', 'info@techpioneerit.com');
            console.log('Data:', formData);
            console.warn('Please update src/environments/environment.ts with actual EmailJS keys to send real emails.');
            console.groupEnd();
            return {
                success: true,
                message: 'Message sent successfully! (Simulation Mode)'
            };
        }

        try {
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                message: formData.message,
                to_email: 'info@techpioneerit.com',
                reply_to: formData.email
            };

            const response = await emailjs.send(
                environment.emailjs.serviceId,
                environment.emailjs.contactTemplateId,
                templateParams
            );

            if (response.status === 200) {
                return {
                    success: true,
                    message: 'Your message has been sent successfully! We will get back to you within 24 hours.'
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to send message. Please try again.'
                };
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            return {
                success: false,
                message: 'An error occurred while sending your message. Please try again.'
            };
        }
    }

    async sendCareerEmail(form: HTMLFormElement): Promise<{ success: boolean; message: string }> {
        // Simulation for development/testing without keys
        if (!this.isReady()) {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.group('EmailJS Simulation (Career Form)');
            console.log('Would send form data to:', 'info@techpioneerit.com');
            const formData = new FormData(form);
            for (const [key, value] of (formData as any).entries()) {
                console.log(`${key}:`, value);
            }
            console.warn('Please update src/environments/environment.ts with actual EmailJS keys to send real emails.');
            console.groupEnd();
            return {
                success: true,
                message: 'Application submitted successfully! (Simulation Mode)'
            };
        }

        try {
            const response = await emailjs.sendForm(
                environment.emailjs.serviceId,
                environment.emailjs.careerTemplateId,
                form
            );

            if (response.status === 200) {
                return {
                    success: true,
                    message: 'Your application has been submitted successfully! We will review it and get back to you soon.'
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to send application. Please try again.'
                };
            }
        } catch (error: any) {
            console.error('EmailJS Error:', error);
            // Try to extract a meaningful error message
            const errorMessage = error?.text || error?.message || 'An error occurred while sending your application.';
            return {
                success: false,
                message: `Error: ${errorMessage}. Please try again.`
            };
        }
    }
}
