import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
export const routes: Routes = [
    
    
    {path:'login',  component:LoginComponent},
    {path:'signup' , component:SignupComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}