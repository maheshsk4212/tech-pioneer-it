
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services.component';
import { AboutComponent } from './about.component';
import { CareersComponent } from './careers.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'Home' },
	{ path: 'services', component: ServicesComponent, title: 'Services' },
	{ path: 'about', component: AboutComponent, title: 'About Us' },
	{ path: 'careers', component: CareersComponent, title: 'Careers' },
	{ path: 'contact', component: ContactComponent, title: 'Contact' },
];
