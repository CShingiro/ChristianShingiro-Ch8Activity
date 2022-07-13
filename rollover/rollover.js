"use strict";
$( () => {
    let image = null;

    // process each img tag
    $("#image_rollovers img").each((index,image) => {
        const oldURL = image.src;
        const newURL = image.id;

        // preload rollover image
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        //show rollover image after one second
        setTimeout(() => {
            image.src = newURL;
        }, 1000);
        //show original image after two seconds
        setInterval(() => {
            image.src = oldURL;
        }, 2000);;
        // set up event handlers for hovering an image
        $(image).mouseover( () => {
            image.src = newURL;
        });
        $(image).mouseout( () => {
            image.src = oldURL;
        });
    });
});