//convert base64 to image

const makeImage = url => {
    const image = document.createElement('img');
    image.src = url;
    image.height = 200;
    image.width = 200;
    return image;
}

export default makeImage;
