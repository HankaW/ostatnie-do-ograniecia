const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
console.log(entry)
if(entry.isIntersecting)
{
    entry.target.classList.add('show');
}else {
    entry.target.classList.remove('show')
}
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const obs = new IntersectionObserver((en)=>{
    en.forEach((ent)=> {
console.log(ent)
if(ent.isIntersecting)
{
    ent.target.classList.add('show');
}else {
    ent.target.classList.remove('show')
}
    });
});

const hitElements = document.querySelectorAll('.hit');
hitElements.forEach((el) => obs.observe(el));

