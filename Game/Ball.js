var Ball = function (x, y) {
    
    this.speed = 4;
    this.directionX = 1;
    this.directionY = 1;
    
    // Create a new sprite (x, y, asset)
    this.sprite = game.add.sprite(x, y, 'ball');
    
};

Ball.prototype.move = function(){
    
    this.sprite.x += (this.speed * this.directionX);
    this.sprite.y += (this.speed * this.directionY);
    
};

Ball.prototype.getX = function(){ return this.sprite.x; };
Ball.prototype.getY = function(){ return this.sprite.y; };
Ball.prototype.setX = function(x){ this.sprite.x = x; };
Ball.prototype.setY = function(y){ this.sprite.y = y; };
Ball.prototype.getWidth = function(){ return this.sprite.width; };
Ball.prototype.getHeight = function(){ return this.sprite.height; };
Ball.prototype.setDirectionY = function(){ this.directionY *= -1;  };
Ball.prototype.setDirectionX = function(){ this.directionX *= -1;  };
Ball.prototype.getSprite = function(){ return this.sprite; }
Ball.prototype.setSpeed = function(s){ this.speed = s; }