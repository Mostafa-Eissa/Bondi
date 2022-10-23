// main items
let allLi = document.querySelectorAll(".our-work ul li");
let boxs = document.querySelectorAll(".our-work .row .box2");



// array contain all imgs
let allImgs = ["imgs/work-01.jpg", "imgs/work-02.jpg", "imgs/work-03.jpg", "imgs/work-04.jpg", "imgs/work-05.jpg", "imgs/work-06.jpg", "imgs/work-07.jpg", "imgs/work-08.jpg"];
// array contain design imgs
let desginImg = ["imgs/work-02.jpg"];
// array contain code design
let codeImg = ["imgs/work-01.jpg", "imgs/work-07.jpg"];
// array contain Photo
let photoImg = ["imgs/work-03.jpg", "imgs/work-04.jpg"];
// array contain App 
let appImg = ["imgs/work-05.jpg", "imgs/work-06.jpg","imgs/work-08.jpg"]

function allLiClick() {
    allImg(allImgs);
    allLi.forEach((e) => {
        e.addEventListener("click", function () {
            allLi.forEach((j) => {
                j.classList.remove("active");
            });
            let allBoxs = document.querySelectorAll(".our-work .row .box2 .box");
            if (e.innerHTML === "All") {
                e.classList.add("active");
                allBoxs.forEach((e) => {
                    e.remove();
                });
                allImg(allImgs);
            } else if (e.innerHTML === "Design") {
                e.classList.add("active");
                allBoxs.forEach((e) => {
                    e.remove();
                });
                allImg(desginImg);
            }else if (e.innerHTML === "Code") {
                e.classList.add("active");
                allBoxs.forEach((e) => {
                    e.remove();
                });
                allImg(codeImg);
            }
            else if (e.innerHTML === "Photo") {
                e.classList.add("active");
                allBoxs.forEach((e) => {
                    e.remove();
                });
                allImg(photoImg);
            }
            else if (e.innerHTML === "App") {
                e.classList.add("active");
                allBoxs.forEach((e) => {
                    e.remove();
                });
                allImg(appImg);
            }
        })
    })
}

allLiClick();

function allImg(targetArray) {
    
    for (let j = 0; j < boxs.length; j++) {
        for (let i = 0; i < targetArray.length; i++) {
            if (j === i) {
                let box = document.createElement("div");
                box.classList.add("box", "mb-3", "bg-white");
                box.setAttribute("data-work" , "See More");
                let img = document.createElement("img");
                img.src = targetArray[i];
                img.classList.add("img-fluid");
                box.appendChild(img);
                boxs[j].appendChild(box);
            }
        }
    }
}

