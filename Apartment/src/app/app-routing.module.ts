import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedroomComponent } from './bedroom/bedroom.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { HallComponent } from './hall/hall.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [
  {
    path: 'bedroom', component: BedroomComponent
  },
  {
    path: 'bathroom', component: BathroomComponent
  },
  {
    path: 'livingRoom', component: LivingRoomComponent
  },
  {
    path: 'kitchen', component: KitchenComponent
  },
  {
    path: 'hall', component: HallComponent
  },

  {path  : 'new',component : NewComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
