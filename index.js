const ujjatekGomb = document.querySelector("#ujjatek") /* HTML DOM elem */
const jatekterElem = document.getElementsByClassName("jatekter")
console.log(jatekterElem)
ujjatekGomb.addEventListener("click",megjelenit)

function megjelenit(){
    const htmlKod =`
    <div id="gep">
            <h2>A gép tippje</h2>
            <div class="kep">
                <img src="kepek/placeholder.jpg" alt="oliverpapirollo">
             </div>
            </div>
            <div id="jatekos">
                <h2>A játékos tippje:</h2>
            <div class="kep">
                <img src="kepek/placeholder.jpg" alt="oliverpapirollo">
            </div>
            
                <div class="gombok">
                <button id="ko">K</button>
                <button id="papir">P</button>
                <button id="ollo">O</button>
                </div>
            </div>
        </div>
    
    `
    jatekterElem[0].innerHTML=""
    jatekterElem[0].insertAdjacentHTML("beforeend",htmlKod)
    const gombElemek= document.querySelectorAll(".gombok button")
    gombElemek[0].addEventListener("click",kivalaszt)
    gombElemek[1].addEventListener("click",kivalaszt)
    gombElemek[2].addEventListener("click",kivalaszt)

}

function kivalaszt(event){
    const kep=document.querySelector("#jatekos img")
    console.log(kep)
    console.log(event.target)
    console.log(event.target.id)
    kep.src=`kepek/${event.target.id}.PNG`
    gepValasztas()
    
}

function gepValasztas(){
    const kep = document.querySelector("#gep img");
    let veletlen=Math.floor(Math.random()*3)
    console.log(veletlen)


}