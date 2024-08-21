let text = [
    ["зовут НИКТО", "Фишка..", "Hubbub народа!", "Скучно!", "Капот"],
    ["Хочешь попробовать начать с начала? Сочтут ли тебя достойным незная кто ты? Сможешь не выдать себя?!",
        "Без предвзятостей, без задней мысли нарекаю тебя... ЧЕЛДОБРЕК1 Но не беспокойся ники будут меняться каждую неделю, так что проблем возникнуть не должно...",
        "Не любишь статистику? Не фартануло на уроке? Забудь о лотереях... Надругаемся над сбором данных выбором стикера дня!\nи не только...",
        "Стой! Что скажешь о своей школьной жизни? Будет о чем вспомнить? Я здесь новичок, но мне кажется...",
        "..в моих руках, а я рода человек слышащий и готов поддержать все что вы сможете вообразить! :)"
    ]
];

let isMouseDown = false;
let timerId = null;

function next(i, len = text[0].length) {
    if (window.innerWidth>=420)
        document.querySelector('main').innerHTML = 
            `<div class="text">
                <h2>${text[0][i % len]}</h2>
                <p>${text[1][i % len]}</p>
            </div>
            <img src="image${i % len}.jpg" alt="Слайд ${i % len}" class="image">`;

    else
        document.querySelector('main').innerHTML = 
            `<img src="image${i % len}.jpg" alt="Слайд ${i % len}" class="image">
            <div class="text">
                <h2>${text[0][i % len]}</h2>
                <p>${text[1][i % len]}</p>
            </div>`;

    timerId = setTimeout(() => next(i + 1, len), 3000);
}

function handleMouseDown(event) {
    isMouseDown = true;
    clearTimeout(timerId); // Остановить слайдер при нажатии мыши
}

function handleMouseUp(event) {
    isMouseDown = false;
    next(0); // Перезапустить слайдер с текущего состояния
}

document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);

// Запускаем слайдер с первого слайда
next(0);
