let input = document.getElementById('Api_input');
let btn = document.getElementById('api-btn');
let code_list = []
let con = document.querySelector('.flex-correct')

btn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(input.value);
  

  const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(input.value)}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // console.log(data.result.short_link);


      code_list.push(data.result.short_link)
      console.log(code_list)
      let html = `<div class="correct-wrapper">
        <div class="text-wrapper">
        <h3 class="own">${input.value.slice(0, 80)}...</h3>
        <h3 class="h3">${data.result.short_link}</h3>
        
      </div>
      <button class="btn btn-primary btn-copy">Copy</button>
        
       </div>`
      
      con.insertAdjacentHTML('beforeend', html);


      
let copyButton = document.getElementsByClassName('btn-copy');
console.log(copyButton)

Array.from(copyButton).forEach(element => {
  element.addEventListener('click', () =>{
    let div = element.parentElement
    let op = div.children[0].children[1]
    let final = op.innerHTML
    navigator.clipboard.writeText(final)
    
  })

  
});

    })
    .catch(error => {
      let html = `<div class="correct-wrapper">
        <div class="text-wrapper">
        <h3 class="own">'Invalid URL!'</h3>
      </div>       </div>`
      
      con.insertAdjacentHTML('beforeend', html);

      console.error(error);
      // Handle any errors
      console.log('boi error!')
    });
});


