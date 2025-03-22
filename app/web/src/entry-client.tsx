/* @refresh reload */

import { hydrate, render } from 'solid-js/web';
import { App } from './app';

if (import.meta.env.DEV) {
  render(() => <App />, document.getElementById('root')!);
}

if (!import.meta.env.DEV) {
  hydrate(() => <App />, document.getElementById('root')!);
}
