// Api/Controllers/Server.js

app.use(require('./auth'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))