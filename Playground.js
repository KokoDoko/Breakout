/*
    ******************
    *** Variabelen ***
    ******************
*/

var balk;
var balletje;
var blokken = [];


/*
    *********************************
    *** OPDRACHT 1: Maak een balk ***
    *********************************
*/

function maakEenBalk(){
    
    balk = new Hero(360, 400);
    
    return balk;
}

/*
    **********************************************************
    *** OPDRACHT 2: Balk laten bewegen met de toetsenbord! ***
    **********************************************************
*/

function beweegBalk(){
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            
        if(balk.getX() <= (viewWidth - balk.getWidth())){
            
            balk.beweeg(10);
        }
        
    }
    
    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        
        if(balk.getX() >= 0){
            
            balk.beweeg(-10);
        }
    }
}

/*
    ****************************************
    *** OPDRACHT 3: Een stuiterende bal! ***
    ****************************************
*/

function maakEenBal(){
    
    balletje = new Ball(300, 300);
    
    return balletje;
}

/*
    **********************************
    *** OPDRACHT 4: Blokken maken! ***
    **********************************
*/

function blokkenMaker(){
   
   // Handmatisch blokken maken 
   blokken.push(new Brick(100, 100, "rood"));
   blokken.push(new Brick(200, 100, "blauw"));
   blokken.push(new Brick(100, 200, "groen"));
   blokken.push(new Brick(300, 100, "rood"));
   blokken.push(new Brick(100, 300, "blauw"));
   
   // Automagisch blokken maken
   //blokGenerator();
   
   return blokken;
   
}

/*
    *************************
    *** OPDRACHT 4: EXTRA ***
    *************************
*/

// Automagische generator
function blokGenerator(){
    
     /*
        Dit is een array met hoe de blokken zal worden gemaakt. De nummers zijn allemaal zelf bepaalde kleur code,
        zodat het makkelijk is om de kleuren in te voegen. Dit is een vaak gebruikte techniek om alvast een overzicht te
        krijgen over wat het resultaat is.
        
        Maar dit is een klein gedeelte van de code! Dit bepaald alleen wat voor kleur er wordt gebruikt bij het maken van blokken.
        
        Blok kleuren
        0 = groen
        1 = blauw
        2 = rood
    */
    var blokKleur = [
        
        "0", "2", "2", "2", "0", "2", "2", "0", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "0", "0", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "0", "0", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "1", "1", "0", 
        "0", "2", "0", "0", "0", "2", "0", "2", "0", "0", "1", "0", 
        "0", "2", "2", "2", "0", "2", "2", "0", "0", "1", "0", "0" 
    ];
    
    /*
        Dit stuk code is het hart van het maken van blokken in een makelijk manier.
        
        Dit is dus een for loop die bij elke rondje een nieuwe blok toevoegd. Bij elke rondje wordt er ook
        een berekening gedaan om ze netjes naast elkaar te zetten. En met hulp van de blokKleur array, wordt 
        de kleuren dynamisch ingeladen.
        
        
    */
    
    // Het hoeveelheid blokken die per rij wordt gemaakt
    var count = 11;
    
    // De afstand Y tegenover andere blokken
    var nextRow = 0;
    
    // De afstand X tegenover andere blokken
    var nextColum = 0;
    
    // Het hoeveelheid blokken die wordt gemaakt
    var blokAmount = 96;
    
    // Een for loop om de blokken te maken. 
    for(var i = 0; i < blokAmount; i++){
        
        // Bij elke loop, een nieuwe blok toevoegen met de berekend variabelen en gegeven blok kleur
        blokken.push(new Brick(50 + ((41 * nextColum) + (10 * nextColum)), 100 + nextRow, blokKleur[i]));
        
        /*
            Na het toevoegen van het blok als de count gelijk is aan de i, gaat count met 12 blokken omhoog.
            De nextRow (y) wordt met 20 pixels omhoog berekend, dus de blokken gaan op de volgende rij.
            De nextColum (x) wordt terug gezet naar 0, om weer aan het begin van de rij beginnen.
            
            Als de count niet gelijk is aan de i, dan wordt nextColumn (x) met 1 geplusd om de volgende blok
            netjes naast de vorgie blok wordt geplaatst.
        
        */
        if(i == count){
            
            count = count + 12;
            nextRow = nextRow + 20;
            nextColum = 0;
            
        }else{ nextColum++; }
    }
}