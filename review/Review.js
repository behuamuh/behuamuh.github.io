function Review(id, message) {
    Container.call(this);
    this.id = 'review' + id;
    this.message = message;
    this.allowed = false;
    this.render();
}

Review.prototype = Object.create(Container.prototype);
Review.prototype.constructor = Review;
Review.prototype.render = function () {
    var self = this;
    var $review = $('#review');
    var div = $('<div/>', {id: this.id});
    var message = $('<p/>',{
        text: this.message
    });
    if (this.allowed) {
        div.append(message, $('<hr>'));
    } else {
        var allow = $('<button/>', {
            text: 'Одобрить'
            , click: function () {
                self.allowed = true;
                self.remove();
                self.render();
            }
        });
        var del = $('<button/>', {
            text: 'Удалить'
            , click: function () {
                self.remove();
            }
        });
        div.append(message,allow, del, $('<hr>'));
        //console.log(moderated);
    }
    $review.append(div);
};
Review.prototype.remove = function () {
    //var $review = $('#review');
    $('#' + this.id).detach();
}