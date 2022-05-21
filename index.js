const exp = require('express')
const app = exp();
const PORT = 3000;
const prd = require('./products.json')



// logger
const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
  }

//middleware
app.use(logger);
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

app.get('/product', (req, res) => {
    res.status(200).send(prd)
})

app.post('/product', (req, res) => {
    res.status(201).send({ msg: "Berhasil menambahkan Produk" })
})

app.put('/product', (req, res) => {
    res.status(201).send({ msg: "Berhasil mengubah Produk" })
})

app.delete('/product', (req, res) => {
    res.status(202).send({ msg: "Berhasil menghapus Produk" })
})

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  })