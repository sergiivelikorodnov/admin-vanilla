import { ALERT_SHOW_TIME } from './constants.js';

/**
 * Show Alert Message
 */

const showAlert = message => {
  const alertContainer = document.createElement('div');

  alertContainer.textContent = message;

  document.body.append(alertContainer);
  alertContainer.classList.add('alert-message');

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export default showAlert;
