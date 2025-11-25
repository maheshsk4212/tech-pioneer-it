import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About Us' },
    { path: 'services', component: ServicesComponent, title: 'Services' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: 'careers', component: CareersComponent, title: 'Careers' },
    { path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
