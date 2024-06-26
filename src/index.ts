import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import { userRouter } from './users/users.routes';
import { productRouter } from './products/products.routes';

if (!process.env.port) {
	console.log('No port value specified...')
}
const PORT = parseInt(process.env.PORT as string, 10)
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(helmet())

app.use('/', userRouter)
app.use('/', productRouter)

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
