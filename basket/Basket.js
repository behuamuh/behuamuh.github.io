function Basket(userId){
    Container.call(this);
    this.id = 'basket';
    this.userId = userId;
    this.items = [];
    this.amount = 0;
}
Basket.prototype = Object.create(Container.prototype);
Basket.prototype.constructor = Basket;
Basket.prototype.render = function(){
    var $basket = $('#'+ this.id);
    $basket.html('Товаров в корзине : ' + this.items.length + '<br>' + 'На сумму : ' + this.amount
    );
}
Basket.prototype.get = function(){
    $.getJSON({
        url: '/basket/get/',
        context: this,
        data: '{"id_user" :'+ this.userId +'}',
        success: function(data) {
	       if(!data.result){
               console.error(data.error_message);
               return;
           }
            this.amount = data.amount;
            this.items = data.basket;
            this.render();
            
	    }
    });
}
