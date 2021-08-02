//Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

document.body.addEventListener("keydown", (event) => {
    const resizer = document.createElement("div");
    if (event.code === "KeyE" && event.ctrlKey) {
        event.returnValue = false;
        let elem = document.querySelector(".content__textarea");
        if (event.code === "KeyE" && elem.nodeName === "DIV") {
            let newElem = document.createElement("textarea");
            newElem.setAttribute("cols", 50);
            newElem.setAttribute("rows", 20);
            newElem.className = "content__textarea";
            newElem.textContent = elem.textContent;
            elem.replaceWith(newElem);
        } else if (elem.nodeName === "TEXTAREA") {
            let newElem = document.createElement("div");
            newElem.className = "content__textarea";
            newElem.textContent = elem.value;
            resizer.className = "content__textarea--resizer";

            const initResize = e => {
                e.preventDefault;
                window.addEventListener("mousemove", startResize);
                window.addEventListener("mouseup", stopResize);
            };

            const startResize = e => {
                newElem.style.width = (e.clientX - newElem.offsetLeft) + "px";
            };
            const stopResize = e => {
                window.removeEventListener('mousemove', startResize);
                window.removeEventListener('mouseup', stopResize);
            };

            resizer.addEventListener("mousedown", initResize);
            newElem.append(resizer);
            elem.replaceWith(newElem);
        }
    }
});