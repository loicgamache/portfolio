/**
 * Created by 1448808 on 16-11-29.
 */
/**   2161a6fa9e9a304c24d15e9fe977a6ac    */

$( document ).ready(function() {
    $( "#hamburger" ).click(function() {

        $("#navigation2").toggleClass("show");
    });
});



function afficheSlick(){
    $('#carrousel').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow:"<div><img class='a-left control-c prev slick-prev' src='images/leftArrow.png'></div>",
        nextArrow:"<div><img class='a-right control-c next slick-next' src='images/rightArrow.png'></div>"
    });
}

function afficheTopRated(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&api_key=2161a6fa9e9a304c24d15e9fe977a6ac",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        for (i = 0; i < 9; i++){

            var cloned;

            cloned = $("#template-carrousel").find("div").clone();

            cloned.find("#mainImage").attr("src", "https://image.tmdb.org/t/p/w500" + response.results[i].poster_path);

            cloned.find("a").attr("href", "fiche-film.html?id=" + response.results[i].id);

            cloned.find("h3").text(response.results[i].title);

            var nbVote = response.results[i].vote_average;

            for(j = 0; j < Math.floor(nbVote); j++){
                cloned.find('.vote').prepend('<img id="starImg" src="images/star.png" />');
            }
            cloned.appendTo("#carrousel");
        }

        afficheSlick();


    });
}


function afficheInfoFilm(idFilm){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/" + idFilm + "?language=fr-FR&api_key=2161a6fa9e9a304c24d15e9fe977a6ac",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        $("#titre").text(response.title);

        $("#image-principal").attr("src", "https://image.tmdb.org/t/p/w780" + response.poster_path);

        $('#backdrop1').css("background-image", "url(https://image.tmdb.org/t/p/original" + response.backdrop_path + ")");

        $("#synopsis").text(response.overview);

        $("#pstatut").text(response.status);

        $("#plangue").text(response.original_language);

        $("#pduree").text(response.runtime);

        $("#pbudget").text(response.budget);

        $("#precettes").text(response.revenue);

        $("#sectionCast").css("background-image", "url(https://image.tmdb.org/t/p/original" + response.backdrop_path + ")");

        var nbVote = response.vote_average;

        for(j = 0; j < Math.floor(nbVote); j++){
            $(".voteFicheFilm").prepend('<img id="starImg" src="images/star.png" />');
        }



    });

}

function afficheCast(idFilm){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/" + idFilm + "/credits?api_key=2161a6fa9e9a304c24d15e9fe977a6ac",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);


        for (i = 0; i < 4; i++){

            var cloned;

            cloned = $("#template-cast").find(".acteur").clone();

            //cloned.find("img").attr("src", "https://image.tmdb.org/t/p/w640" + response.cast[i].profile_path);

            cloned.find('div').css("background-image", "url(https://image.tmdb.org/t/p/original" + response.cast[i].profile_path + ")");

            cloned.find("h4").text(response.cast[i].name);

            cloned.find("p").text(response.cast[i].character);

            cloned.appendTo("#divSectionCast");
        }


    });

}

function urlParam(nameParam){
    var results = new RegExp('[\?&]' + nameParam + '=([^&#]*)').exec(window.location.href);

    return results[1]||0;
}


function afficheCoupCoeur(idFilm){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/upcoming?page=1&language=fr-FR&api_key=2161a6fa9e9a304c24d15e9fe977a6ac",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        $("#btnVoirFilm").attr("href", "fiche-film.html?id=" + response.results[0].id);
        $('#sectionCoupCoeur').css("background-image", "url(https://image.tmdb.org/t/p/original" + response.results[0].backdrop_path + ")");
    });



}




function afficheCinema(idFilm) {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/now_playing?page=1&language=fr-FR&api_key=2161a6fa9e9a304c24d15e9fe977a6ac",
        "method": "GET",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        for (i = 0; i < 6; i++){

            var cloned;

            cloned = $("#template-liste").find(".list-item").clone();

            cloned.find(".afficheListe").attr("src", "https://image.tmdb.org/t/p/w780" + response.results[i].poster_path);

            cloned.find("a").attr("href", "fiche-film.html?id=" + response.results[i].id);

            cloned.find("h4").text(response.results[i].title);

            cloned.find("p").text(response.results[i].overview.trim().split(/\s+/).slice(0,35).join(" ") + " ...");

            var nbVote = response.results[i].vote_average;

            for(j = 0; j < Math.floor(nbVote); j++){
                cloned.find('#voteListe').prepend('<img id="starImg" src="images/star.png" />');
            }
            cloned.appendTo("#sectionListe");
        }


    });


}

