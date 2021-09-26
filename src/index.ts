import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express()

//Application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(statusRoute)
app.use(usersRoute)

//Handlers errors
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server rodando na porta 3000!');
})
