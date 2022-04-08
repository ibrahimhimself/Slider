var imgs = document.getElementsByClassName("img-fluid");

var fixedBox = document.getElementById("fixedBox");

var smallBox = document.getElementById("smallBox");

var closeBtn = document.getElementById("closeBtn"),

    nextBtn = document.getElementById("nextBtn"),

    prevBtn = document.getElementById("prevBtn");

var imgArr = [];

var indexOfImg;

for(var i = 0 ; i < imgs.length ; i++){

    imgArr.push(imgs[i]);
}

for(var i = 0 ; i < imgs.length ; i++){

    imgs[i].addEventListener("click",function(e){

        var clickedImg = e.target;

        indexOfImg = imgArr.indexOf(clickedImg) ;

        var imgsrc = clickedImg.getAttribute("src");

        fixedBox.style.display = "flex";

        smallBox.style.backgroundImage = `url(${imgsrc})`;
    });
}

closeBtn.addEventListener("click",function(){

    fixedBox.style.display = "none";

})

document.addEventListener("keyup",function(e){

    if(e.key == "Escape"){

        fixedBox.style.display = "none";
    }
})

nextBtn.addEventListener("click",netxSlide);  // هيقلب بالزرار 

document.addEventListener("keyup",function(e){  // هيقلب بالسهم

    if(e.key == "ArrowRight"){

        netSlide()
    }
})

prevBtn.addEventListener("click",prevSlide); // هيقلب بالزرار 

document.addEventListener("keyup",function(e){ // هيقلب بالسهم

    if(e.key == "ArrowLeft"){

        prevSlide()
    }
})

function netxSlide(){

    indexOfImg++;

        if(indexOfImg == imgArr.length){

            indexOfImg = 0;
        }

        var srcOfNextmage = imgArr[indexOfImg].getAttribute("src");

        smallBox.style.backgroundImage = `url(${srcOfNextmage})`;
}

function prevSlide(){

    indexOfImg--;

        if(indexOfImg < 0){

            indexOfImg = imgArr.length - 1;
        }


        var srcOfNextmage = imgArr[indexOfImg].getAttribute("src");

        smallBox.style.backgroundImage = `url(${srcOfNextmage})`;
}