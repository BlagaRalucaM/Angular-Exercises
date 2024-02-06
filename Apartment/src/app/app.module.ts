import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HallComponent } from './hall/hall.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ApartamentMapComponent } from './apartament-map/apartament-map.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    BathroomComponent,
    BedroomComponent,
    LivingRoomComponent,
    KitchenComponent,
    ApartamentMapComponent,
    ItemsComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
