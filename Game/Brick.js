var Brick = function (x, y, color) {
    
    this.speed = 6;
    
    // Create a new sprite (x, y, asset)
    
    if(color == "0"){ color = "groen"; }
    if(color == "1"){ color = "blauw"; }
    if(color == "2"){ color = "rood"; }
    
    this.sprite = game.add.sprite(x, y, color);
    
};

Brick.prototype.getX = function(){ return this.sprite.x; };
Brick.prototype.getY = function(){ return this.sprite.y; };
Brick.prototype.getWidth = function(){ return this.sprite.width; };
Brick.prototype.getHeight = function(){ return this.sprite.height; };
Brick.prototype.getSprite = function(){ return this.sprite; }