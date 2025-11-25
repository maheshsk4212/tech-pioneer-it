import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmailJSService {
    constructor() {
        emailjs.init(environment.emailjs.publicKey);
    }

    async sendContactEmail(formData: {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
    }): Promise<{ success: boolean; message: string }> {
        try {
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                message: formData.message,
                to_email: 'ss7690080@gmail.com'
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

    async sendCareerEmail(formData: {
        name: string;
        email: string;
        phone: string;
        message: string;
    }): Promise<{ success: boolean; message: string }> {
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message,
                to_email: 'ss7690080@gmail.com'
            };

            const response = await emailjs.send(
                environment.emailjs.serviceId,
                environment.emailjs.careerTemplateId,
                templateParams
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
        } catch (error) {
            console.error('EmailJS Error:', error);
            return {
                success: false,
                message: 'An error occurred while sending your application. Please try again.'
            };
        }
    }
}
