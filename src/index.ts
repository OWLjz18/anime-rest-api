import app from './app';

const PORT: number = app.get('port');

app.listen(PORT);
console.log(`Server running on port ${PORT}.`);
