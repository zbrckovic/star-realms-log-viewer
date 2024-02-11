const path = require("path")
const fs = require("fs")

const cardsDir = path.resolve(__dirname, './cards')

fs.readdirSync(cardsDir).forEach((filename) => {

    const match = filename.match(/^(.*)-CAB-(.{32}-.{18})/)
    if (match === null) throw new Error(`couldn't' recognize filename: ${filename}`)

    const [full, cardName] = match

    const filePath = path.resolve(__dirname, `./cards/${filename}`)
    const targetFilePath = path.resolve(__dirname, `./cards/${cardName}.png` )

    fs.renameSync(filePath, targetFilePath)
})
