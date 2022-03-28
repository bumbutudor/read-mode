import app from 'flarum/admin/app';

app.initializers.add('tudor/read-mode', () => {
  console.log('[tudor/read-mode] Hello, admin!');
});
