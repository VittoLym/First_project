import express from 'express'
import indexRoutes from './routes/index.routes.js'
import { engine } from 'express-handlebars'
import path from 'path'
import morgan from 'morgan'

const app = express()

app.set('views', path.join(__dirname, 'views'))

// handlebars
app.engine(
  '.hbs',
  engine({
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'parcher'),
    defaultLayout: 'main',
    extname: '.hbs'
  })
)

app.set('view engine', '.hbs')

// midleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
// Routes
app.use(indexRoutes)
export default app
