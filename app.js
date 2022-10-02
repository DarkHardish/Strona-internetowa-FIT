new fullpage("#fullpage",{
    autoScrolling: true,
    menu: '#nav-links',
    onLeave: (origin, destination, direction) =>{
        const tl = new TimelineMax({delay: 0.5});
        const tl1 = new TimelineMax({delay: 0.5});

        if (destination.index ===2){
            const module = document.querySelectorAll(".module");
            tl.fromTo(module, 1, {x: "500%"}, {x: "0%"});
        }
         if (destination.index ===3){
            const porady = document.querySelectorAll(".porady");
            tl.fromTo(porady, 1, {x:"-200%"}, {x: "0%"});
            const porada = document.querySelectorAll(".porada-zdj");
            tl1.fromTo(porada, 1, {x:"200%"}, {x:"0%"});
        }
        if(destination.index ===0){
            const haslo = document.querySelectorAll(".haslo");
            tl.fromTo(haslo, 1, {x: "-200%"}, {x: "0%"});
            const haslo2 = document.querySelectorAll(".zaczynamy");
            tl.fromTo(haslo2, 1, {x: "-200%"}, {x: "0%"});
        }
        if(destination.index ===4){
            const haslo2 = document.querySelectorAll(".module2");
            tl.fromTo(haslo2, 1, {y: "200%"}, {y: "0%"});
        }

    }
    
});
function showDiv() {
    document.getElementById('wynik').style.display = "block";
    document.getElementById('wynik2').style.display = "block";
 }
 