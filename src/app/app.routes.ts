import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {IsearchComponent} from './isearch/isearch.component';
import { MyauctionsComponent } from './myauctions/myauctions.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NewAutcionComponent } from './new-autcion/new-autcion.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { FaqComponent } from './faq/faq.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'isearch', component: IsearchComponent},
    {path: 'myauctions', component: MyauctionsComponent},
    {path: 'watchlist', component: WatchlistComponent},
    {path: 'newauction', component: NewAutcionComponent},
    {path: 'auctions', component: AuctionsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'auctions/:id', component: AuctionDetailComponent},
    {path: 'faq', component: FaqComponent}
];

export const Routing = RouterModule.forRoot(routes, {
    useHash: true
});