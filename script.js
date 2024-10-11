//  My name is Rushikesh kale and 
//      my email is rushikeshkale1995@gmail.com 
//      Thanks for reviewing my code. 



document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    // setting the default selected box tobe box1
    boxes[0].classList.add('selected');
    boxes[0].querySelector('.radio-button').checked = true;

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            const radioButton = this.querySelector('.radio-button');

            // uncheck non selected boxes
            const radioButtons = document.querySelectorAll('input[name="pairSelection"]');
            radioButtons.forEach(radio => {
                if (radio !== radioButton) {
                    radio.checked = false;
                }
            });

            // goes to default state
            const selectedBox = document.querySelector('.selected');
            if (selectedBox && selectedBox !== this) {
                selectedBox.classList.remove('selected');
                selectedBox.querySelector('.content-section').style.display = 'none';
            }
            this.classList.add('selected');
            radioButton.checked = !radioButton.checked;

            const contentSection = this.querySelector('.content-section');
            if (contentSection) {
                contentSection.style.display = radioButton.checked ? 'block' : 'none';
            }
        });

        box.addEventListener("mouseenter", function () {
            if (!this.classList.contains('selected')) {
                this.classList.add('hover');
            }
        });

        box.addEventListener("mouseleave", function () {
            this.classList.remove('hover');
        });

        // just checking
        const dropdownButton = box.querySelector('.dropdown select');
        if (dropdownButton) {
            dropdownButton.addEventListener("click", function (event) {
                box.click();
                event.stopPropagation(); 
            });
        }
    });
});