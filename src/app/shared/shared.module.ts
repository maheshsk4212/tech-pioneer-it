import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/layout/header.component';
import { FooterComponent } from './components/layout/footer.component';
import { ToastComponent } from './components/ui/toast.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        MainLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToastComponent,
        MainLayoutComponent,
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
