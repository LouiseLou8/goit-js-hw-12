import{a as h,S as g,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const L="https://pixabay.com/api/",b="50595135-236ed99e353605725b41c38ac";async function p(e,r=1){const t={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await h.get(L,{params:t})).data}catch{throw new Error("Помилка при отриманні зображень")}}const w=new g(".gallery a",{captions:!0,captionSelector:"self",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),S=document.querySelector(".gallery");function f(e){const r=e.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}" title="${t.tags}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>
          <div class="gallery-info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </li>`).join("");S.insertAdjacentHTML("beforeend",r),w.refresh()}function v(){const e=document.querySelector(".gallery");e.innerHTML=""}function m(){document.querySelector(".loader").classList.remove("is-hidden")}function y(){document.querySelector(".loader").classList.add("is-hidden")}const u=document.querySelector(".load-more"),q=document.querySelector(".form"),R=document.querySelector(".search-input");let i=1,l="",$=0;q.addEventListener("submit",async e=>{e.preventDefault();const r=R.value.trim();if(r===""){n.error({message:"Введіть запит для пошуку",position:"topRight"});return}l=r,i=1,v(),d(),m();try{const t=await p(l,i);if(t.hits.length===0){n.error({message:"Нічого не знайдено за запитом",position:"topRight"});return}f(t.hits)}catch{n.error({message:"Сталася помилка при отрманні даних",position:"topRight"})}finally{y()}});u.addEventListener("click",async()=>{i+=1,m(),d();try{const e=await p(l,i);f(e.hits),i*15>=$?(d(),n.info({message:"Ви завантажили всі доступні зображення",position:"topRight"})):E(),B()}catch{n.error({message:"Помилка при завантаженні додаткових зображень",position:"topRight"})}finally{y()}});function B(){const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function E(){u.classList.remove("is-hidden")}function d(){u.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
