import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainViewModule} from './views/main-view.module';
import {AppOverlayModule} from './lib/overlay/overlay.module';
import {SettingsModule} from './views/components/settings/settings.module';
import {JournalModule} from './views/components/journal/journal.module';
import {BookmarksModule} from './views/components/bookmarks/bookmarks.module';
import {RemindersModule} from './views/components/reminders/reminders.module';
import {HomeModule} from './views/components/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainViewModule,
    AppOverlayModule,
    RemindersModule,
    BookmarksModule,
    JournalModule,
    SettingsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
