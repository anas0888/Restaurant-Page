import image from "./restaurant-image.jpg";

const homeContent = () => {
const container = document.createElement('div');

const headline = document.createElement('div');
headline.innerHTML = "Welcome to our restaurant";

const imageDiv = document.createElement('img');
imageDiv.src = image ;

const para = document.createElement('div');
para.innerHTML = "We serve the best Italian food across the town";

container.append(headline,imageDiv,para)

return container;

}


export {homeContent}