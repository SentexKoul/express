import express from 'express'
import path from "path";
import { requestTime, logger } from './middlewares.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')), requestTime, logger)

app.get('/', (req, res) => {
    const data = { title: 'Главная страница' }
    res.render('index', data)
})

app.get('/features', (req, res) => {
    const data = { title: 'Другая страница' }
    res.render('features', data)
})

// app.get('/download', (req, res) => {
//     console.log(req.requestTime)
//     res.download(path.resolve(__dirname, 'static', 'index.html'))
// })

app.listen(PORT, () => {
    console.log(`Server has been started on port ${ PORT }...`)
})