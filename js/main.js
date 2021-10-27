const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach((tab)=>{
    tab.addEventListener('click',addTab);
});

function addTab(event){
    for(let num = 0;num<tabItems.length;num++){
        if(tabContentItems[num].id === `${event.target.id}-content`){
            tabContentItems[num].classList.add('show');
            tabItems[num].classList.add('tab-border');
            continue;
        }
        tabContentItems[num].classList.remove('show');
        tabItems[num].classList.remove('tab-border');
    }
}