document.querySelectorAll(".filter").forEach(button=>{button.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(item=>item.classList.remove("active"));button.classList.add("active");const selected=button.dataset.filter;document.querySelectorAll(".project-card").forEach(card=>{card.hidden=selected!=="all"&&card.dataset.category!==selected;});});});

/* Scroll reveals and subtle pointer lighting */
document.documentElement.classList.add("reveal-ready");
const revealTargets=document.querySelectorAll(".section-kicker,.hero-copy,.portrait-wrap,.about-grid,.timeline article,.projects-head,.project-card,.skill-grid>div,.credential-grid,.contact h2,.contact>p,.contact-links");
revealTargets.forEach(el=>el.classList.add("reveal"));
if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
  });
 },{threshold:.12,rootMargin:"0px 0px -35px 0px"});
 revealTargets.forEach(el=>observer.observe(el));
}else{revealTargets.forEach(el=>el.classList.add("is-visible"));}
document.querySelectorAll(".project-card").forEach(card=>{
 card.addEventListener("pointermove",event=>{
  const rect=card.getBoundingClientRect();
  card.style.setProperty("--pointer-x",(event.clientX-rect.left)+"px");
  card.style.setProperty("--pointer-y",(event.clientY-rect.top)+"px");
 });
});
