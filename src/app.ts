import express from 'express';
const app = express();
require('dotenv').config();
import morgan from "morgan";
import routes from './router/routes';
import apiRoutes from "./router/api.routes";


// settings
export const PORT = process.env.PORT || 3000;
//handlebars o ejs


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use('/', routes);
app.use('/api', apiRoutes);
// app.use('/users', indexRoutes);
// app.use('upload', express.static(path.resolve('upload')));     resolve encuentra la ruta hasta la carpeta

export default app;
