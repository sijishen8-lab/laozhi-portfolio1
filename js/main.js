/* =================================
   LaoZhi Portfolio
   Interaction Script
================================= */



// 页面加载完成

document.addEventListener(
    "DOMContentLoaded",
    () => {



    /*
    ==========================
    滚动显示动画
    ==========================
    */


    const elements =
    document.querySelectorAll(
        ".card, .about, .contact"
    );



    const observer =
    new IntersectionObserver(
        (entries)=>{


            entries.forEach(
                entry=>{


                    if(entry.isIntersecting){


                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                        "translateY(0)";


                    }


                }
            );


        },


        {

            threshold:0.15

        }


    );




    elements.forEach(
        el=>{


            el.style.opacity="0";

            el.style.transform=
            "translateY(50px)";


            el.style.transition=
            "all .8s ease";


            observer.observe(el);


        }
    );









    /*
    ==========================
    图片轻微视差
    ==========================
    */


    const heroImage =
    document.querySelector(
        ".hero-image img"
    );



    window.addEventListener(
        "scroll",
        ()=>{


            if(!heroImage)
            return;



            let offset =
            window.scrollY * 0.08;



            heroImage.style.transform =
            `
            scale(1.05)
            translateY(${offset}px)
            `;


        }
    );









    /*
    ==========================
    平滑锚点滚动
    ==========================
    */


    document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link=>{


            link.addEventListener(
                "click",
                function(e){


                    e.preventDefault();



                    const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );



                    if(target){


                        target.scrollIntoView({

                            behavior:"smooth"

                        });


                    }



                }
            );


        }
    );







    /*
    ==========================
    鼠标移动图片效果
    ==========================
    */


    const cards =
    document.querySelectorAll(
        ".card"
    );



    cards.forEach(
        card=>{


            card.addEventListener(
                "mousemove",
                e=>{


                    const rect =
                    card.getBoundingClientRect();



                    const x =
                    e.clientX -
                    rect.left;



                    const y =
                    e.clientY -
                    rect.top;



                    const rotateX =
                    (y - rect.height/2)
                    /20;



                    const rotateY =
                    (rect.width/2-x)
                    /20;



                    card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-10px)
                    `;


                }
            );



            card.addEventListener(
                "mouseleave",
                ()=>{


                    card.style.transform=
                    "translateY(0)";


                }
            );


        }
    );





});
