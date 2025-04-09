var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}

document.querySelectorAll('.tab__item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab__item').forEach(tab => {
            tab.classList.remove('tab__item--active');
        });

        // Add active class to the clicked tab
        item.classList.add('tab__item--active');
    });
});