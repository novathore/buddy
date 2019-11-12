import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RemindersComponent} from './views/components/reminders/reminders.component';
import {BookmarksComponent} from './views/components/bookmarks/bookmarks.component';
import {JournalComponent} from './views/components/journal/journal.component';
import {SettingsComponent} from './views/components/settings/settings.component';
import {HomeComponent} from './views/components/home/home.component';


const routes: Routes = [
  {
    path: 'reminders', component: RemindersComponent
  },
  {
    path: 'settings', component: BookmarksComponent
  },
  {
    path: 'journal', component: JournalComponent
  },
  {
    path: 'bookmarks', component: SettingsComponent
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


