const studentName = 'Mehardeep Singh';
const studentNumber = '1150979';
const result = (studentName).concat('-', studentNumber);
console.log(result);
const headrContent=document.querySelector("h1");
headrContent.innerHTML=result;
headrContent.classList.add("headings");