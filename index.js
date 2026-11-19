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

function gepValasztas(jatekosTipp){
    const kep = document.querySelector("#gep img");
    let veletlen=Math.floor(Math.random()*3)
    console.log("gép tippje", veletlen)

    if (veletlen == 0){
    kep.src = `kepek/ko.PNG`
  }
  else if(veletlen == 1){
    kep.src = `kepek/papir.PNG`
  }
  else{
    kep.src = `kepek/ollo.PNG`
  }
  ellenorzes(veletlen,jatekosTipp )
}
function ellenorzes(veletlen,jatekosTipp){

    let eredmeny=""
    let f1=(veletlen===0 && jatekosTipp==="papir")
    let f2=(veletlen===1 && jatekosTipp==="ollo")
    let f3=(veletlen===2 && jatekosTipp==="ko")

    let f4=(veletlen===0 && jatekosTipp==="ko")
    let f5=(veletlen===1 && jatekosTipp==="papir")
    let f6=(veletlen===2 && jatekosTipp==="ollo")

    if (f1 || f2 || f3){
        eredmeny="Játékos nyert!"
    }else if (f4 || f5 || f6){
        eredmeny="Döntetlen!"
    }else{
        eredmeny="Gép nyert!"
    }


    const kiirElem=document.getElementById("gyoztes")
    kiirElem.innerHTML=`<p>${eredmeny}</p>`;
}

