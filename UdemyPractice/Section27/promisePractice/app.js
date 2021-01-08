const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('h1').style.color = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'ALL DONE!'
}

// rainbow().then(() => console.log('END OF RAINBOW!'))

async function printRainbow() {
    try{
        await rainbow();
        console.log('END OF RAINBOW!')
    } catch (e) {
        console.log('Oh crap something went wrong and the promise was rejected', e)
    }
}

printRainbow();