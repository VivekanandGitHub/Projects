const btn = document.querySelector("#submit_btn")
const thanks_page = document.querySelector("html")
const rating = document.querySelectorAll(".rating")

let rating_provide = 0

rating.forEach(function(a,b){
    a.addEventListener("click", function(){
        
        if (b === 0){
            rating_provide = 1
        }
        else if (b === 1){
            rating_provide = 2
        }
        else if (b === 2){
            rating_provide = 3
        }
        else if (b === 3){
            rating_provide = 4
        }
        else if (b === 4){
            rating_provide = 5
        }
    })
})

btn.addEventListener("click", function() {
    thanks_page.innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Interactive_Rating_component_main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            width: 100vw;
            height: 100vh;
            background-color: #141519;
            color: white;
            font-family: "Overpass", sans-serif;
            font-size: 18px;
            display: grid;
            place-items: center;
            text-align: center;
        }   

        main {
            background-color: #1D242E;
            width: 290px;
            height: fit-content;
            padding: 30px;
            display: grid;
            row-gap: 25px;
            border-radius: 25px;
        }

        #your_choosen_rating {
            background-color: #252B35;
            width: 65%;
            height: 40px;
            border-radius: 25px;
            display: grid;
            place-items: center;
            justify-content: center;
            color: #f77817c9;
            margin: auto;
        }

        main > h5 {
            color: #737A84;
        }

        @media (max-width: 500px) {
    
            main {
                width: 250px;
                height: fit-content;
            }
        }
        #your_choosen_rating {
            background-color: #252B35;
            width: 75%;
        }
    </style>
</head>
<body>
    <main>
        <div id="thanks_img">
            <img src="items_used/illustration-thank-you.svg" alt="thanks_img">
        </div>
        <div id="your_choosen_rating">
            <h5>You selected out ${rating_provide} of 5</h5>
        </div>
        <h2>Thanks you!</h2>
        <h5>We appreciate you taking the time to give a
            rating. If you ever need more support, don't
            hesitate to get in touch!
        </h5>
    </main>
</body>`
})
