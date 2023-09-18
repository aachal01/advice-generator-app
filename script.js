// fetch('https://api.adviceslip.com/advice')
    // .then(res => res.json())
    // .then(data => console.log(data.slip.advice))

const api_url = "https://api.adviceslip.com/advice"    
const adviceButton = document.getElementById("ad_btn")
async function getapi(url){
    const res = await fetch(url)
    var data = await res.json()
    var adviceId = data.slip.id  
    var adviceText = data.slip.advice
    document.getElementById("ad_id").innerHTML = adviceId
    document.getElementById("ad_text").innerHTML = adviceText
}



adviceButton.addEventListener("click", (event) => {
    event.preventDefault()
    getapi(api_url)
})