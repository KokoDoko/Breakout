/*
    -------------------
    |     Notes       |
    -------------------
    
    CoderDojo brands: https://brandfolder.com/coderdojonederland

*/

//Global Variables
var game, logo, hero, background, ball, style;
var viewWidth = 710;
var viewHeight = 470;
var life = 3;
var score = 0;
var bricks = [];
var text = [];

var totalMotion = 0;

 window.onload = function() {
    
    // Open game engine
    game = new Phaser.Game(viewWidth, viewHeight, Phaser.AUTO, '', {
        preload: preload,
        create: create,
        update: update
    });
    
     // Preload assets for further use
    function preload () {
        
        game.load.image('logo', '/Assets/CDLogo.png');
        game.load.image('platform', '/Assets/Platform.png');
        game.load.image('ball', '/Assets/Ball.png');
         
        game.load.image('blauw', '/Assets/Blue_brick.png');
        game.load.image('rood', '/Assets/Red_brick.png');
        game.load.image('groen', '/Assets/Green_brick.png');
    }
    
    // Initialize
    function create () {
        
        /** text **/
        style = { font: "35px Arial", fill: "#ffffff", align: "center" };
        
        text["score"] = game.add.text( viewWidth/2, 50, "Score: " + score, style);
        text["score"].anchor.set(0.5);
        
        text["lifeX"] = game.add.text( 90, 50, "x", style);
        text["lifeX"].anchor.set(0.5);
        
        text["lifeAmount"] = game.add.text( 120, 52, life, style);
        text["lifeAmount"].anchor.set(0.5);
        
        var lifeIcon = game.add.sprite(50, 50, 'ball');
        lifeIcon.scale.set(3 , 3 );
        lifeIcon.anchor.set(0.5);
        
        /** Logo **/
        // Get the image asset as sprite
        logo = game.add.sprite(viewWidth - 150, 0, 'logo');
        logo.scale.set(0.25 , 0.25);
        
        /** Hero **/
        hero = maakEenBalk();
        
        ball = maakEenBal();
        
        /** Bricks **/
        bricks = blokkenMaker();
       
        
        // register for motion updates
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', processMotion, false);
        }
    }
    
    // Loop / update
    function update(){
        
        updatePlayerMovement();
        
        updateBallMovement();
        
        checkBrickStatus();
        
    }
    
    // Brick generator
    function generateBricks(){
        
        var count = 11;
        var nextRow = 0;
        var nextColum = 0;
        for(var i = 0; i < 72; i++){
            
            bricks.push(new Brick(50 + ((41 * nextColum) + (10 * nextColum)), 100 + nextRow));
            
             if(i == count){
                
                count = count + 12;
                nextRow = nextRow + 20;
                nextColum = 0;
                
            }else{ nextColum++; }
            
        }
    }
    
    // process motion events
    function processMotion(evt) {
        totalMotion -= evt.accelerationIncludingGravity.y;
    }
    
    // Update function for player
    function updatePlayerMovement(){
        
        /** Keyboard movement for Player **/
         beweegBalk();
        
        /** Motion control **/
        if (totalMotion > 0) {
            if(hero.getX() <= (viewWidth - hero.getWidth())){
                hero.move(totalMotion*2);
            }
        } else if (totalMotion < 0) {
            if(hero.getX() >= 0){
                
                hero.move(totalMotion*2);
            }
        }
        totalMotion = 0;
    }
    
    function updateBallMovement(){
        
        ball.move();
        
        if(ball.getX() >= (viewWidth - ball.getWidth()) || ball.getX() <= 0){
                
            ball.setDirectionX();
            
        }
        
        if(ball.getY() >= (viewHeight - ball.getWidth()) || ball.getY() <= 0){
            
            if(ball.getY() >= (viewHeight - ball.getWidth())){
                
                life = life - 1;
            
                text["lifeAmount"].setText(life);
            }
            
            if(life == 0){
                
                playerLose();
                
            }else{
                
                ball.setDirectionY();
            }
        }
        
        if(checkCollision(ball.getSprite(), hero.getSprite())){
            
            ball.setDirectionY();
        }
        
    }
    
    function checkBrickStatus(){
        
        for(var i = 0; i < bricks.length; i++){
            
            if(checkCollision(ball.getSprite(), bricks[i].getSprite())){
                
                score = score + 1;
                text["score"].setText("Score: " + score);
                
                if((ball.getY() + 2) > bricks[i].getY() && (ball.getY() + 2) < (bricks[i].getY() + bricks[i].getHeight())){
                    
                    ball.setDirectionX();
                }
                
                ball.setDirectionY();
                
                bricks[i].getSprite().destroy();
                
                bricks.splice(i, 1);
                
                break;
            }
        }
    }
    
    // When win conditions are met, do the following
    function playerLose(){
        
        ball.setSpeed(0);
        ball.setX(300);
        ball.setY(300);
    }
    
    
    // Check collision between sprites, returns Boolean
    function checkCollision(spriteA, spriteB){
        
        return Phaser.Rectangle.intersects(spriteA, spriteB);
    }
    
};