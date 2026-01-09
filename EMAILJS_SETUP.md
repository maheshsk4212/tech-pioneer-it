# EmailJS Setup Guide for Tech Pioneer IT

Since EmailJS keys are private to your account, you need to sign up for your own **free** account to make the email forms work.

The free tier allows **200 emails per month**, which is perfect for development and low-volume sites.

## Step 1: Sign up
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and click **Sign Up Free**.
2. Fill in your details and create an account.

## Step 2: Add Email Service
1. In the EmailJS Dashboard, go to **Email Services** on the left.
2. Click **Add New Service**.
3. Select **Gmail** (or your preferred provider).
4. Click **Connect Account** and login with the email where you want to receive messages (`ss7690080@gmail.com`).
5. Click **Create Service**.
6. **Copy the "Service ID"** (e.g., `service_xyz123`). You will need this later.

## Step 3: Create "Contact Us" Template
1. Go to **Email Templates** on the left.
2. Click **Create New Template**.
3. Name it "Contact Form".
4. **Subject Line**: `New Contact Message from {{from_name}}`
5. **Content**:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Message:
   {{message}}
   ```
6. **Auto-Reply (Optional)**: Switch to the "Auto-Reply" tab if you want to send a confirmation email to the user.
   - To Email: `{{from_email}}`
7. Click **Save**.
8. **Copy the "Template ID"** (e.g., `template_abc123`).

## Step 4: Create "Career Application" Template
1. Go back to **Email Templates** and click **Create New Template**.
2. Name it "Career Application".
3. **Subject Line**: `New Career Application: {{from_name}}`
4. **Content**:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message/Cover Letter:
   {{message}}
   
   Resume (Base64):
   {{resume}}
   ```
   *(Note: The resume comes as a text link or base64 string. For free tier, basic text is easiest. Paid tiers support real attachments).*
5. Click **Save**.
6. **Copy the "Template ID"** (e.g., `template_def456`).

## Step 5: Get Public Key
1. Click on **Account** (your name in the top right corner).
2. Look for **Public Key**.
3. **Copy the "Public Key"**.

## Step 6: Update Environment File
Open `src/environments/environment.ts` in this project and replace the placeholders:

```typescript
export const environment = {
    production: false,
    emailjs: {
        publicKey: 'YOUR_PUBLIC_KEY',       // Paste Public Key here
        serviceId: 'YOUR_SERVICE_ID',       // Paste Service ID here
        contactTemplateId: 'template_abc123', // Paste Contact Template ID
        careerTemplateId: 'template_def456'   // Paste Career Template ID
    }
};
```

Once saved, the "Simulation Mode" in the app will automatically turn off, and real emails will be sent!
