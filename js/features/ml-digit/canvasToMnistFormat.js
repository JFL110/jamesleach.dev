import { size as mnistSize } from './mnistConfiguration'

const minPixelSumToSendRequest = 20;

// Canvas data -> pixels in MNIST size
export default (sizeMultiplier, fixedData, tempData) => {
    var pixels = createArray(mnistSize, mnistSize);

    // Take average value of each block of pixels
    var widthMean = 0;
    var heightMean = 0;
    var pixelSum = 0;
    for (var h = 0; h < mnistSize; h++) {
        for (var w = 0; w < mnistSize; w++) {
            var sum = 0;
            for (var hInside = 0; hInside < sizeMultiplier; hInside++) {
                for (var wInside = 0; wInside < sizeMultiplier; wInside++) {
                    const actualHeight = h * sizeMultiplier + hInside;
                    const actualWidth = w * sizeMultiplier + wInside;
                    const index = 4 * (actualWidth * (sizeMultiplier * mnistSize) + actualHeight);
                    sum += Math.max(fixedData[index + 3], tempData[index + 3]);
                }
            }
            const pixelValue = Math.round(sum / (sizeMultiplier * sizeMultiplier));
            pixels[h][w] = pixelValue;
            pixelSum += pixelValue;
            widthMean += pixelValue * w;
            heightMean += pixelValue * h;
        }
    }

    // Don't spam the backend with basically empty inputs
    if (pixelSum < minPixelSumToSendRequest) {
        return;
    }

    // Centre of mass
    widthMean = Math.round(widthMean / pixelSum);
    heightMean = Math.round(heightMean / pixelSum);

    // Shift - some pixels may get moved out of frame
    var shiftedPixels = createArray(mnistSize, mnistSize);
    for (h = 0; h < mnistSize; h++) {
        for (w = 0; w < mnistSize; w++) {
            const shiftWidth = w - (mnistSize / 2 - widthMean);
            const shiftHeight = h - (mnistSize / 2 - heightMean);
            shiftedPixels[h][w] = shiftWidth < 0 || shiftHeight < 0 || shiftWidth >= mnistSize || shiftHeight >= mnistSize
                ? 0 : pixels[shiftHeight][shiftWidth];
        }
    }

    return shiftedPixels;
}

function createArray(length) {
    var arr = new Array(length || 0), i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }
    return arr;
}