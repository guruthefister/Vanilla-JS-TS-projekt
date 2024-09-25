class Content {
    constructor(data) {

        const images = [];
        let imageIndex = 2;

        const header = document.createElement('header');
            header.id = "header";
            document.body.appendChild(header);

        const headline = document.createElement('h1')
            headline.id = "headline";
            headline.innerHTML = data.content[0].header;
            header.appendChild(headline)
            
        const logo = document.createElement('logo');
            logo.id = "logo";
            header.appendChild(logo);

        const imgContainer = document.createElement('imgGallery');
            imgContainer.id = "imgContainer";
            document.body.appendChild(imgContainer);

        const buttonLeft = document.createElement('buttonLeft');
            buttonLeft.classList.add("btn", "firstButton");
            buttonLeft.innerHTML = data.content[1].buttonLeft;
            imgContainer.appendChild(buttonLeft);

        // const text = document.createElement('p');
        //     text.id = "text";
        //     showIMG.appendChild(text);

        const footer = document.createElement('footer');
            footer.id = "footer";
            footer.textContent = data.content[data.content.length - 1].footer;
            document.body.appendChild(footer);
        
        for (let i = 2; i < 5; i++) {
            const item = data.content[i];
            const img = document.createElement('img');
                img.className = "preview-image"
                img.src  = item.billede;
                imgContainer.appendChild(img);
                images.push(img);
        }   

        const buttonRight = document.createElement('buttonRight');
            buttonRight.classList.add("btn", "secondButton");
            buttonRight.innerHTML = data.content[7].buttonRight;
            imgContainer.appendChild(buttonRight);
        
        buttonLeft.addEventListener("click", () => {
            imageIndex = (imageIndex - 1)

            if (imageIndex < 2) {
                imageIndex = 4;
            } 
            images.forEach((Image, index) => {
                Image.src = data.content[imageIndex + index].billede;
            })
        })

        buttonRight.addEventListener("click", () => {
            imageIndex = (imageIndex + 1) % images.length;

            images.forEach((Image, index) => {
                Image.src = data.content[2 + index + imageIndex].billede;
            })
        })

        

    }//end constructor
}//end class

export default Content;