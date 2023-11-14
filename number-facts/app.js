let $div

$(document).ready(function() {
    $div = $('#facts');
    let promises = [];
    const queryParams = {
        json: true
      };
    for (let i = 1; i < 5; i++){
        promises.push(
            axios.get('http://numbersapi.com/84', {params: queryParams})
        )
    }

    Promise.all(promises)
    .then(facts => (
        facts.forEach(f => addToScreen(f))
    ))
    .catch(err => console.log(err));
  });


function addToScreen(fact){
    let text = fact.data.text;

    $div.append(`<p>${text}</p>`);
    $div.append('<hr>');
}

