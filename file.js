alert("Zgadnij grę liczbową");
alert("Istotą gry jest odgadnięcie liczby odgadniętej przez robota w jak najmniejszej liczbie prób.")
alert("Zgadłem losową wartość między 0 a 100")

let randomValue = Math.floor(Math.random() * 101);
let attempt = 0;

while(true){
    attempt++;
    let user = prompt("Spróbuj zgadnąć. Wprowadź wartość");
    if(user == "stop"){
        break;
    }

    if(attempt == 5){
        alert("Jeśli chcesz zakończyć grę, napisz „stop”");
    }

    if(user < randomValue){
        alert("Domyśliłem się znaczenia słowa więcej niż " + user);
    }
    else if(user > randomValue){
        alert("Domyśliłem się, że wartość jest mniejsza niż " + user);
    }
    else if(user == randomValue){
        alert("Prawidłowo! Ustalić wartość " + randomValue + ". Zgadłeś z " + attempt + " -j próby.");
    }
}
