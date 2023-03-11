import './style.css';
import './ionic';

import iconHome from '@ionic/core/dist/ionic/svg/home.svg';
import iconMenu from '@ionic/core/dist/ionic/svg/menu.svg';

const ICON_MAP = ['home.svg', iconHome, 'menu.svg', iconMenu];
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('ion-icon').forEach((el) => {
    const dataSrc = el.getAttribute('data-src');
    if (dataSrc != null) el.src = ICON_MAP[ICON_MAP.indexOf(dataSrc) + 1];
  });
});
