const express = require('express')
const cors = require('cors')
const multer = require ('multer')
const sharp = require('sharp')
const req = require('express/lib/request')
const fs = require('fs');
const app = express()
app.use(cors())

const PORT = 3000

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({ storage })

app.post('/upload', upload.single('file'), (req, res) => {
    res.send({ data : 'Uploaded Image' })
})

app.use(express.static('public')); 
app.use('/download', express.static('uploads'));

app.delete('/delete/:file', (req, res) => {
    const { file } = req.params
    fs.unlinkSync('uploads/' + file);

    res.send({data : 'Deleted Image'})
})

app.listen(PORT, () => {
    console.log('Running on port', PORT)
})