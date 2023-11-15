let $div;
let deck_id;
let $button;
$(document).ready(function() {
    $div = $('#cards');
    $button = $('button');
    start();
});


async function start(){
    let resp = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    deck_id = resp.data.deck_id;
    $button.on('click', clickHandler);
}

async function clickHandler(){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    let resp = await axios.get(url);
    let imageUrl = resp.data.cards[0].image;
    $div.append(`<img src='${imageUrl}'>`);

    if (resp.data.remaining === 0){
        $button.remove();
    }
}