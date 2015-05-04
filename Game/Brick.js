var Brick = function (x, y) {
    
    this.speed = 6;
    
    // Create a new sprite (x, y, asset)
    this.sprite = game.add.sprite(x, y, 'brick');
    
};

Brick.prototype.getX = function(){ return this.sprite.x; };
Brick.prototype.getY = function(){ return this.sprite.y; };
Brick.prototype.getWidth = function(){ return this.sprite.width; };
Brick.prototype.getHeight = function(){ return this.sprite.height; };
Brick.prototype.getSprite = function(){ return this.sprite; }