import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadNavComponent } from './navigation/head-nav/head-nav.component';
import { BotNavComponent } from './navigation/bot-nav/bot-nav.component';
import { HomeComponent } from './home/home/home.component';
import { ProgectsComponent } from './progect/progects/progects.component';
import { ServisesComponent } from './servises/servises/servises.component';
import { ServisesWePruvedComponent } from './home/home/servises-we-pruved/servises-we-pruved.component';
import { ServisesExplComponent } from './home/home/servises-expl/servises-expl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AskedQuestionsComponent } from './home/home/asked-questions/asked-questions.component';
import { QuestItemComponent } from './home/home/asked-questions/quest-item/quest-item.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './navigation/header/header.component';
import { StaffComponent } from './company/staff/staff.component';
import { DetailsCompanyComponent } from './company/details-company/details-company.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadNavComponent,
    BotNavComponent,
    HomeComponent,
    ProgectsComponent,
    ServisesComponent,
    ServisesWePruvedComponent,
    ServisesExplComponent,
    AskedQuestionsComponent,
    QuestItemComponent,
    FooterComponent,
    CompanyComponent,
    ContactsComponent,
    HeaderComponent,
    StaffComponent,
    DetailsCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
