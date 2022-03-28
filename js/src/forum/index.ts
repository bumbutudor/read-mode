import app from 'flarum/forum/app';

app.initializers.add('tudor/read-mode', () => {
  console.log('[tudor/read-mode] Hello, forum!');
});
