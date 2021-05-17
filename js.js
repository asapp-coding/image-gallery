// Getting all images under img-preview div using queryselectorall.
let previews=document.querySelectorAll(".img-preview img");//previews is an array
console.log("Previews",previews);
//Getting the main picture
let mainPicture = document.querySelector(".imgActive");

previews.forEach(myFunction);//Run myFunction for each image inside previews array

function myFunction(image){//Working of myFunction
    image.addEventListener("click", function(){// Add click event to each image inside previews
        console.log("Image Clicked",image.src);// Print the src of the image
        const source=image.src; // Storing image src into a constant source
        mainPicture.src=source; // Changing main image src to source(the src of the image clicked)
    })
}

//FOREACH FUNTION EXAMPLE
// let numbers=[5,6,4,2]

// numbers.forEach(multiplyby2);

// function multiplyby2(item){
//     console.log(item*2)
// }






