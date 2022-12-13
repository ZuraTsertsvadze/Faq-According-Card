"use strict";

const question = document.querySelectorAll(".question");
const arrow = document.querySelector(".arrow-svg");
const mainText = document.querySelector(".main-text");
const mainTextAll = document.querySelectorAll(".main-text");
const arrowSvg = document.querySelectorAll(".arrow-svg");

question.forEach((el) => {

    el.addEventListener("click", (e) => {



        const reseter = () => {



            question.forEach((el) => {

                el.dataset.active = "false";
            });


            arrowSvg.forEach((el) => {

                el.style.transform = "rotate(360deg)";

            });
        };

        reseter();


        e.target.dataset.active = "true";

        e.target.children[0].children[0].style.transform = "rotate(180deg)";


        const selfClick = () => {


            const evenTargetChilds = [...e.target.closest(".text-cont").children];

            evenTargetChilds.forEach((el) => {

                if (el.classList.contains("main-text")) {

          

                    if (el.style.display === "none") {

                        el.style.display = "block";

                        e.target.style.fontWeight = "700";

                    } else {

                        el.style.display = "none";
                        e.target.style.fontWeight = "400";
                        e.target.children[0].children[0].style.transform = "rotate(360deg)";

                    }
                }

            });

        };



        selfClick()



        const otherClick = () => {



            question.forEach((el) => {

                if (el.dataset.active === "false") {




                    el.style.fontWeight = "400";

                    const allTextContChilds = [...el.closest(".text-cont").children];

                    allTextContChilds.forEach((el) => {
                        if (el.classList.contains("main-text")) {
                            el.style.display = "none";
                        }
                    });
                }
            })

        };

        otherClick();


    });
});
