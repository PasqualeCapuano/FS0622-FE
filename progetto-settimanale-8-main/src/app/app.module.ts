import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent,
    children:[
      {
        path: "postForm",
        component: PostFormComponent
      }
    ]
  },
  {
    path: "activePosts",
    component: ActivePostsComponent
  },
  {
    path: "inactivePosts",
    component: InactivePostsComponent
  },
  {
    path: "activePosts/:id",
    component: PostDetailsComponent
  },
  {
    path: "inactivePosts/:id",
    component: PostDetailsComponent
  },
  {
    path: "utenti",
    component: UsersComponent,
    children:[
      {
        path: ":id",
        component: UsersDetailsComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    HomeComponent,
    CardComponent,
    HighlightDirective,
    MaiuscoloPipe,
    PostDetailsComponent,
    UsersComponent,
    UsersDetailsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
