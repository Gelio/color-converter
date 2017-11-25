import 'index.scss';
import 'normalize.css';

import { Application } from 'Application';
import { bind } from 'hyperhtml/esm';

window.onload = bootstrap;

function bootstrap() {
  const applicationContainer = document.querySelector('.application');

  if (!applicationContainer) {
    throw new Error('Application container not found');
  }

  const application = new Application();
  // tslint:disable-next-line no-unused-expression
  bind(applicationContainer)`${application}`;
}
