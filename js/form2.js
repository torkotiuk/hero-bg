(() => {
  document.querySelector('.js-speaker-form2').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    e.currentTarget.reset();
  });
})();
