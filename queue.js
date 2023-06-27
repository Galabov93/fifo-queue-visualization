"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty())
            return undefined;
        return this.items.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Queue.prototype.getLength = function () {
        return this.items.length;
    };
    Queue.prototype.getAllItems = function () {
        return this.items;
    };
    return Queue;
}());
var queue = new Queue();
var addBtn = document.getElementById('add-btn');
var removeBtn = document.getElementById('remove-btn');
var queueDisplay = document.getElementById('queue-display');
addBtn.addEventListener('click', function () {
    var randomNumber = Math.floor(Math.random() * 300) + 1;
    queue.enqueue(randomNumber);
    updateDisplay();
    if (queue.getLength() >= 1) {
        enableRemoveBtn();
    }
});
removeBtn.addEventListener('click', function () {
    queue.dequeue();
    updateDisplay();
    if (queue.isEmpty()) {
        disableRemoveBtn();
    }
});
function updateDisplay() {
    queueDisplay.innerHTML = '';
    queue.getAllItems().forEach(function (item, index) {
        var span = document.createElement('span');
        span.textContent = "".concat(item);
        if (index === 0) {
            span.style.color = 'blue'; // Front of the queue
        }
        else if (index === queue.getLength() - 1) {
            span.style.color = 'green'; // End of the queue
        }
        queueDisplay.appendChild(span);
    });
}
function enableRemoveBtn() {
    removeBtn.disabled = false;
}
function disableRemoveBtn() {
    removeBtn.disabled = true;
}
