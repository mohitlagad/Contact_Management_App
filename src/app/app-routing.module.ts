import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ChartsandmapsComponent } from './chartsandmaps/chartsandmaps.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-contact', pathMatch: 'full'},
  { path: 'create-contact', component: CreateContactComponent},
  { path: '', redirectTo: 'chartsandmaps', pathMatch: 'full'},
  { path: 'chartsandmaps', component: ChartsandmapsComponent},
  { path: '', redirectTo: 'sidebar', pathMatch: 'full'},
  { path: 'sidebar', component: SidebarComponent},
  { path: '', redirectTo: 'contactform', pathMatch: 'full'},
  { path: 'contactform', component: ContactFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
