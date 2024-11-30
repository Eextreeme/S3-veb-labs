import express from 'express'
import cors from 'cors'
import { db } from './db.js'

const app = express();

app.use(express.json())
app.use(cors())

const sortList = ({ filterOrder, search }) => {
    let sortedList = [...db];

    sortedList.sort((a, b) => a.Price - b.Price)

    if (filterOrder === 'toLower') {
        sortedList.reverse()
    }

    if (search) {
        sortedList = sortedList.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
    }

    return sortedList
}

app.get('/products', (req, res) => {
    const { filterOrder, search } = req.query;
    res.json(sortList({filterOrder, search}))
});

app.get('/products/:product_id', (req, res) => {
    const { product_id } = req.params;
    res.json( db[parseInt(product_id)] )
})

app.listen(3001, () => {
    console.log('Server was started!')
});
