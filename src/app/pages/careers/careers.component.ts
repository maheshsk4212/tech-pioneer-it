import { Component, inject } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';
import { EmailJSService } from '../../core/services/emailjs.service';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html'
})
export class CareersComponent {
  private toastService = inject(ToastService);
  private emailJSService = inject(EmailJSService);
  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  async onSubmit(form: any) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    const result = await this.emailJSService.sendCareerEmail(this.formData);

    if (result.success) {
      this.toastService.show(result.message, 'success', 5000);
      form.resetForm();
    } else {
      this.toastService.show(result.message, 'error', 5000);
    }

    this.isSubmitting = false;
  }
}