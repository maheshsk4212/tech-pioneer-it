import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        ContactComponent,
        CareersComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
