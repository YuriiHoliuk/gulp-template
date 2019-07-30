'use strict';

function main() {
  document.querySelector('.buttons').addEventListener('click', ({ target }) => {
    document.documentElement.style
      .setProperty('--text-color', `var(--color-${target.dataset.color})`);
  });
}

window.addEventListener('load', main);
