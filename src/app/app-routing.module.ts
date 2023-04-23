import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ServisesComponent } from './servises/servises/servises.component';
import { ProgectsComponent } from './progect/progects/progects.component';
import { CompanyComponent } from './company/company.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  { path: 'home_page', component: HomeComponent },
  { path: 'company_page', component: CompanyComponent },
  { path: 'servises_page', component: ServisesComponent },
  { path: 'progects_page', component: ProgectsComponent },
  { path: 'contacts_page', component: ContactsComponent },
  { path: '', redirectTo: 'home_page', pathMatch: 'full' },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
