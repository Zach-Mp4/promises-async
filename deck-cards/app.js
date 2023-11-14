let $div;
let deck_id;
let $button;
$(document).ready(function() {
    $div = $('#cards');
    $button = $('button');
    let resp = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    resp.then(data => {
        deck_id = data.data.deck_id;
        $button.on('click', clickHandler);
    })

  });

function clickHandler(){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    let resp = axios.get(url);
    resp.then(resp => {
        let imageUrl = resp.data.cards[0].image;
        $div.append(`<img src='${imageUrl}'>`);

        if (resp.data.remaining === 0){
            $button.remove();
        }
    })
}