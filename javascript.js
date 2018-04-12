// Når siden er loadet: startHistorie
$(window).on("load", startHistorie);

/*
Elementer: 
figurer_hilser
trump_udfordrer
unicorn_giver_op
unicorn_immigrerer
trump_container
trump_sprite
unicorn_container
unicorn_sprite

Animationer: 
trump_move
trump_gaer
trump_stand
trump_staer
trump_arms
trump_arme
trump_mood
trump_humoer
unicorn_move
unicorn_gaer
unicorn_wave
unicorn_vinker
unicorn_stand
unicorn_staer
unicorn_jump
unicorn_hopper

Lyde: 
*/

function startHistorie() {
    console.log("startHistorie");

    // Start lyd: stille vind, enkelte vindpust og fuglefløjt

    // Spil lyd: typisk prærielyd (ligesom i westernfilm)

    // Start flytte-anim: trump trump_move
    $("#trump_container").addClass("trump_move");

    // Start flytte-anim: unicorn unicorn_move
    $("#unicorn_container").addClass("unicorn_move");

    // Start sprite-anim: trump_gaer
    $("#trump_sprite").addClass("trump_gaer");

    // Start sprite-anim: unicorn_gaer
    $("#unicorn_sprite").addClass("unicorn_gaer");

    $("#figurer_hilser").on("click", figurerHilser);

}

// Når start anim: unicorn kommer ind: figurerHilser
function figurerHilser() {
    console.log("figurerHilser");

    // Stop anim: trump_gaer
    $("#trump_sprite").removeClass("trump_gaer");

    // Stop anim: unicorn_gaer
    $("#unicorn_sprite").removeClass("unicorn_gaer");

    // Sæt position trump trump_stand
    $("#trump_container").addClass("trump_stand");

    // Start sprite-anim: trump_staer
    $("#trump_sprite").addClass("trump_staer");

    // Sæt position unicorn unicorn_stand
    $("#unicorn_container").addClass("unicorn_stand");

    // Start sprite-anim: unicorn_staer
    $(".unicorn_sprite").addClass("unicorn_staer");

    // Spil lyd: trump siger "hello"

    // Spil lyd: unicorn vrinsker lidt 

    // Start sprite-anim: unicorn_vinker
    $("#unicorn_sprite").addClass("unicorn_vinker");

    $("#trump_udfordrer").on("click", trumpUdfordrer);
}

// Når start sprite-anim: unicorn_vinker er startet: trumpUdfordrer
function trumpUdfordrer() {
    console.log("trumpUdfordrer");

    $("#unicorn_sprite").removeClass("unicorn_vinker");

    // Stop lyd: stille vind, enkelte vindpust og fuglefløjt

    // Start lyd: spændingsmusik 

    // Start sprite-anim: trump_humoer
    $("#trump_sprite").addClass("trump_humoer");

    // Spil lyd: trump siger "jeg udfordrer dig til retten om USA. Accepterer du eller ej? Taberen skal immigrere til Mexico, og aldrig vise sig i USA igen"

    // Start sprite-anim: unicorn_gaer
    $("#unicorn_sprite").addClass("unicorn_gaer");

    $("#unicorn_giver_op").on("click", unicornGiverOp);
}

// Når start sprite-anim: unicorn_gaer er startet: unicornGiverOp
function unicornGiverOp() {
    console.log("unicornGiverOp");

    // Stop sprite-anim: trump_humoer
    $("#trump_sprite").removeClass("trump_humoer");

    // Stop sprite-anim: unicorn_gaer
    $("#unicorn_sprite").removeClass("unicorn_gaer");

    // Stop lyd: spændingsmusik

    // Spil lyd: unicorn giver op 

    // Spil lyd: taberlyd 

    // Start sprite-anim: trump_arme
    $("#trump_sprite").addClass("trump_arme");

    // Spil lyd: jubellyde fra Trump

    $("#unicorn_immigrerer").on("click", unicornImmigrerer);
}

// Når spil lyd: jubellyde fra Trump er startet: unicornImmigrerer
function unicornImmigrerer() {
    console.log("unicornImmigrerer");

    // Start lyd: mexicanskmusik

    // Start sprite-anim: unicorn_gaer
    $("#unicorn_sprite").addClass("unicorn_gaer");

    // Stop sprite-anim: trump_arme
    $("#trump_sprite").removeClass("trump_arme");

    // Stop lyd: mexicanskmusik
}
