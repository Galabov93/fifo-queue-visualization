class Queue {
    private items: number[];

    constructor() {
        this.items = [];
    }

    enqueue(element: number) {
        this.items.push(element);
    }

    dequeue(): number | undefined {
        if(this.isEmpty())
            return undefined;
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length == 0;
    }

    getLength(): number {
        return this.items.length;
    }

    getAllItems(): number[] {
        return this.items;
    }
}

let queue = new Queue();

const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const removeBtn = document.getElementById('remove-btn') as HTMLButtonElement;
const queueDisplay = document.getElementById('queue-display') as HTMLDivElement;

addBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 300) + 1;
    queue.enqueue(randomNumber);
    updateDisplay();

    if (queue.getLength() >= 1) {
        enableRemoveBtn();
    }
});

removeBtn.addEventListener('click', () => {
    queue.dequeue();
    updateDisplay();

    if (queue.isEmpty()) {
        disableRemoveBtn();
    }
});

function updateDisplay() {
    queueDisplay.innerHTML = '';
    queue.getAllItems().forEach((item, index) => {
        const span = document.createElement('span');
        span.textContent = `${item}`;
        if (index === 0) {
            span.style.color = 'blue'; // Front of the queue
        } else if (index === queue.getLength() - 1) {
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