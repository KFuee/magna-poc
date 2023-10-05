import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReaderComponent } from "./reader/reader.component";

const routes: Routes = [
  {
    path: "reader",
    component: ReaderComponent,
  },
  {
    path: "",
    redirectTo: "reader",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
