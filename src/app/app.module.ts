import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { RightNavBarComponent } from "./shared/components/right-nav-bar/right-nav-bar.component";
import { ArticleComponent } from "./shared/components/article/article.component";
import { LayoutComponent } from "./shared/components/layout/layout.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightNavBarComponent,
    ArticleComponent,
    LayoutComponent,
  ],
  imports: [RouterModule.forChild(routes), BrowserModule, AppRoutingModule],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
