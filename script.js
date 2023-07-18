const jokeContainer=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single";
let getJoke = () =>{
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item  => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();
document.querySelector("#btn").addEventListener("click",function()
{
    var audio=new Audio("mixkit-big-crowd-laughing-460.wav");
    audio.play();
});