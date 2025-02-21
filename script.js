
document.addEventListener('DOMContentLoaded' , ()=>{
    let galleryItems= document.querySelectorAll('.gallery-container');
    galleryItems.forEach(item  => {
        item.addEventListener('click' , (e)=>{
            let overlay=document.createElement('div');
            overlay.classList.add('overlay');
            let enlargedImage= document.createElement('img');
            enlargedImage.src=e.target.src;
            enlargedImage.classList.add('enlarged-image');

            overlay.appendChild(enlargedImage);
            document.body.appendChild(overlay);
            overlay.addEventListener('click', function() {
                   document.body.removeChild(overlay);
            })
        })
    })
});