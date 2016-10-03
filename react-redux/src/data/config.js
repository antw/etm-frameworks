import Raven from 'raven-js';

const sentryKey = '4f5c0d3fd669451fb1479bb930230dd0';
const sentryApp = '99941';
export const sentryURL = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });

  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
