// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// gallery reveal
window.addEventListener("load",()=>{
  document.querySelectorAll(".card").forEach((el,i)=>{
    el.style.opacity=0; el.style.transform="translateY(10px)";
    setTimeout(()=>{ el.style.transition="all .45s ease"; el.style.opacity=1; el.style.transform="none"; }, i*80);
  });
});
