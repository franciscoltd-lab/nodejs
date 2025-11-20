// console.log( process.env )

const { SHELL, HOMEBREW_PREFIX } = process.env;

// console.log('SHELL =>', SHELL);
// console.log('HOMEBREW_PREFIX =>', HOMEBREW_PREFIX);

const characters = ['Goku', 'Vegeta', 'Freezer', 'Trunks'];

const [goku, vegeta, trunks] = characters;

// console.log('goku =>', goku);
// console.log('vegeta =>', vegeta);
console.log('trunks =>', trunks);