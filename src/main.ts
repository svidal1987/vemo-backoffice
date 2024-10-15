// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
  import { provideAuth0 } from '@auth0/auth0-angular';
  import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { provideHttpClient, withFetch } from '@angular/common/http';
const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
  theme:{primaryColor:"FFFFFF"}
};
  bootstrapApplication(AppComponent, {
    providers: [
      provideAuth0({
        domain: 'dev-vxlntca4ks00fqdt.us.auth0.com',
        clientId: '4LteZiRMQJXhvDCNsjfV4N4pcDjkw7kI',
        cacheLocation:'localstorage',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
      provideHttpClient(withFetch()),
      provideNzConfig(ngZorroConfig),
      provideRouter(routes),
      provideAnimations(),
      provideNoopAnimations(),
    ],
  });  

