const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// screenshot size in 4K
const screenWidth = 3840
const screenHeight = 2160

// card size in screenshot (px)
const cardWidth = 1098
const cardHeight = 1568

const screenCenterX = screenWidth / 2
const screenCenterY = screenHeight / 2

const landscapeScreenshotsDir = path.resolve(__dirname, './screenshots/landscape')
const portraitScreenshotsDir = path.resolve(__dirname, './screenshots/portrait')
const cardsDir = path.resolve(__dirname, './cards')

// noinspection JSSuspiciousNameCombination
cropCards(cardHeight, cardWidth, landscapeScreenshotsDir, cardsDir, 90)
cropCards(cardWidth, cardHeight, portraitScreenshotsDir, cardsDir)

function cropCards (width, height, sourceDir, destinationDir, rotation = 0) {
    fs.readdirSync(sourceDir).forEach(filename => {
        const sourcePath = path.resolve(sourceDir, filename)
        const destinationPath = path.resolve(destinationDir, filename)

        sharp(sourcePath)
            .extract({
                left: screenCenterX - width / 2,
                top: screenCenterY - height / 2,
                width,
                height
            })
            .rotate(rotation)
            .toFile(destinationPath, err => {
                if (err) {
                    console.error(err)
                }
            })
    })
}




