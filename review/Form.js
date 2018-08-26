function Form() {
    Container.call(this);

    this.id = 'form';
}

Form.prototype = Object.create(Container.prototype);
Form.prototype.constructor = Form;

Form.prototype.render = function () {
    var count = 0;
    var review = $('#review');
    review.html('');
    var name = $('<input/>', {
        type: 'text'
        , placeholder: 'Your name'
        , id: this.id + 'name'
    });
    var email = $('<input/>', {
        type: 'email'
        , placeholder: 'Your email'
        , id: this.id + 'email'
    });
    var message = $('<textarea/>', {
        id: this.id + 'message'
        , placeholder: 'Your review'
        , });
    var button = $('<button/>', {
        id: this.id + 'button'
        , text: 'Оставить отзыв'
        , click: function () {
            var newReview = new Review(count++, name.val()+':' + email.val()+':'+ message.val());
        }
    });
    review.append($('<h3/>',{text: 'Оставьте отзыв'}));
    review.append(name, email, $('<br>'), message, $('<br>'), button, $('<hr>'));
    review.append($('<h3/>',{text: 'Отзывы'}), $('<hr>'));
}