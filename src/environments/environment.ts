// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app: {
    apiBaseUrl: "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/"
  },
  auth: {
    apiBaseUrl: "https://identitytoolkit.googleapis.com",
    key: "AIzaSyCEmcIqnsKrEUrWWkl-b4Va7s2GsZA_f-k"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
