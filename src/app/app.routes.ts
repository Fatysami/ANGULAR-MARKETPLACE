import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
export const routes: Routes = [
    {path:"",component:MarketplaceComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
}

)

export class appRoutingModule{}