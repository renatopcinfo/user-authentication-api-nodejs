import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express()

//Application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(statusRoute)
app.use(authorizationRoute)

app.use(jwtAuthenticationMiddleware)
app.use(usersRoute)

//Handlers errors
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server rodando na porta 3000!');
})
