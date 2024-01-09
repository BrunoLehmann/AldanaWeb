const form = document.querySelector("form");


form.addEventListener('submit', e => {
    e.preventDefault()
    const data = new FormData(form);
    var output = "";
    var scriptURL = 'https://script.google.com/macros/s/AKfycbyi__5s9lxxFVJAfXG8I85LymIMtan9f-NaKDEgT1z6sLD1UEcfP2ku9oBNjFrFrTDVmQ/exec'
    
    for(const entry of data){
        output = `${output}${entry[0]}=${entry[1]}\r`;
        console.log(entry[1]);
    }
    
    document.querySelector("#datos").innerHTML = output;
    fetch(scriptURL, {method : 'POST', body: data})
       
});
