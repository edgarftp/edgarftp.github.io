$(document).ready(function (){

    var pagesId = ["homePage", "portfolioPage", "contactPage"];
    var currentPage = "homePage";
    var imgArrayObj = [
        {
            name: "Gif Search",
            url: "https://edgarftp.github.io/gifSearch/",
            imgURL: "assets/images/gifSearchPortfolio.png"
        },
        {
            name: "Trivia Game",
            url: "https://edgarftp.github.io/TriviaGame/",
            imgURL: "assets/images/triviaGamePortfolio.png"
        },
        {
            name: "Unit 4 Game",
            url: "https://edgarftp.github.io/unit-4-game/",
            imgURL: "assets/images/unit4GamePortfolio.png"
        },
        {
            name: "Hangman Mobile",
            url: "https://edgarftp.github.io/Hangman-Mobile/",
            imgURL: "assets/images/hangmanMobilePortfolio.png"
        },
        {
            name: "Hangman",
            url: "https://edgarftp.github.io/Word-Guess-Game/",
            imgURL: "assets/images/wordGuessGamePortfolio.png"
        },
        {
            name: "Calculator",
            url: "https://edgarftp.github.io/calculator/jquery-calculator.html",
            imgURL: "assets/images/calculatorPortfolio.png"
        },
    ]
    
    function display_page(id, idHolder) {
        for (i=0; i<pagesId.length; i++) {
            if (idHolder == pagesId[i]) {
                var page = ("#" + idHolder);
                $(page).removeClass("hide");
                $("#" + id).addClass("active");
            }else {
                var page = ("#" + pagesId[i]);
                $(page).addClass("hide");
                $(page + "Link").removeClass("active");
                console.log(page + "Link");
            }
        }
    }
    function display_portfolio() {
        for(i=0; i<imgArrayObj.length; i++){
            var newDiv = $("<div>");
            newDiv.addClass("div-img col-md-5 col-xm-12");
            newDiv.attr("web-url", imgArrayObj[i].url);
            var blankDiv = $("<div>");
            blankDiv.addClass("col-md-1");
            var img = $("<img>");
            img.addClass("w-100 portImg");
            img.attr("src", imgArrayObj[i].imgURL);
            var divBtn = $("<div>").text(imgArrayObj[i].name);
            divBtn.addClass("text-center img-btn w-100");
            var id = imgArrayObj[i].name.replace(/\s/g, '');
            divBtn.attr("id", id);
            newDiv.append(img);
            newDiv.append(divBtn);
            if (i % 2 == 0){
                $("#portImgHolder").append(blankDiv);
                $("#portImgHolder").append(newDiv);
            }else{
                $("#portImgHolder").append(newDiv);
                $("#portImgHolder").append(blankDiv);
            }
            
        }
    }


    $(document.body).on("click", ".pageLink", function() {
        var id = this.id;
        console.log(id);
        var idHolder = $(this).attr("data-page");
        if (id != currentPage){
            display_page(id, idHolder);
        }
        
    })

    $("#portImgHolder").on("click", ".div-img", function() {
        var url = $(this).attr("web-url");
        window.open(url);
    })

    display_portfolio();

    


})

