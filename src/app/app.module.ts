import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReaderComponent } from "./reader/reader.component";
import { ZXingScannerModule } from "@zxing/ngx-scanner";

@NgModule({
  declarations: [AppComponent, ReaderComponent],
  imports: [BrowserModule, AppRoutingModule, ZXingScannerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
