import express from 'express';
import bearerAuthenticationMiddleware from './middlewares/bearer-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express()

//Application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(statusRoute)
app.use(bearerAuthenticationMiddleware, usersRoute)
app.use(authorizationRoute)

//Handlers errors
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server rodando na porta 3000!');
})
