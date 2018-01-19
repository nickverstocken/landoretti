import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SlickModule } from 'ngx-slick';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { IsearchComponent } from './isearch/isearch.component';
import { BannerComponent } from './banner/banner.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MyauctionsComponent } from './myauctions/myauctions.component';
import { ActiontableComponent } from './actiontable/actiontable.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { TimerComponent } from './timer/timer.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { NewAutcionComponent } from './new-autcion/new-autcion.component';
import { SelectComponent } from './select/select.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { FaqComponent } from './faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    CarouselComponent,
    FooterComponent,
    MainNavComponent,
    IsearchComponent,
    BannerComponent,
    BreadcrumbsComponent,
    PaginatorComponent,
    MyauctionsComponent,
    ActiontableComponent,
    WatchlistComponent,
    TimerComponent,
    TableFilterComponent,
    NewAutcionComponent,
    SelectComponent,
    AuctionsComponent,
    ProfileComponent,
    RegisterComponent,
    AuctionDetailComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
      Routing,
      SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
