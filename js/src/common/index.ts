import app from 'flarum/common/app';

app.initializers.add('tudor/read-mode', () => {
  console.log('[tudor/read-mode] Hello, forum and admin!');
});
