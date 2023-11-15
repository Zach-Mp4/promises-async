let $div
let facts = [];
const queryParams = {
    json: true
  };
$(document).ready(function() {
    $div = $('#facts');
    
    get_facts();
    
    
  });

async function get_facts(){
    for (let i = 1; i < 5; i++){
        facts.push(
            await axios.get('http://numbersapi.com/84', {params: queryParams})
        )
    }
    for (let fact of facts){
        console.log('DUDE');
        addToScreen(fact);
    }
    
}


function addToScreen(fact){
    console.log(fact);
    let text = fact.data.text;

    $div.append(`<p>${text}</p>`);
    $div.append('<hr>');
}

