let question = document.querySelectorAll(".faq_que");

let ans = document.querySelectorAll(".faq_ans");
console.log(ans);

let ques = document.querySelectorAll("ask");

let addBtn = document.querySelectorAll('.btn');
console.log(addBtn);

let closeBtn = document.querySelectorAll('.close');

for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = "none";
    
}


for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', () => {
        ans[i].style.display = "flex";
        addBtn[i].style.display = "none";
    })
    
}

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', () => {
        ans[i].style.display = "none";
        addBtn[i].style.display = "block";
    })
    
}