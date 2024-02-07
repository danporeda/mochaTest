it('Shows an autocomplete', () => {
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Avengers'},
        { Title: 'Spider Man'},
        { Title: 'Dark Knight'}
      ];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });

  const dropdown = document.querySelector('.dropdown');
  
  expect(dropdown.className).not.to.include('is-active');
});

it('Should do a thing', () => {
  const ring = [1, 2, 3, 4, 5];

  const rando = Math.floor(Math.random() * 5);

  console.log(rando);

  expect(ring[rando]).to.be.lessThan(6);
});

it('works!', () => { document.querySelector('#target').innerText = greeting});