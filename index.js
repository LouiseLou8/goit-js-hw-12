import{a as c,S as l,i}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="https://pixabay.com/api/",d="50595135-236ed99e353605725b41c38ac";async function p(o){const s={key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await c.get(u,{params:s})).data}catch{throw new Error("Помилка при отриманні зображень")}}const f=new l(".gallery a",{captions:!0,captionSelector:"self",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),m=document.querySelector(".gallery");function y(o){const s=o.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}" title="${e.tags}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
          <div class="gallery-info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>`).join("");m.insertAdjacentHTML("beforeend",s),f.refresh()}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("is-hidden")}function b(){document.querySelector(".loader").classList.add("is-hidden")}const L=document.querySelector(".form"),w=document.querySelector(".search-input");L.addEventListener("submit",async o=>{o.preventDefault();const s=w.value.trim();if(s===""){i.error({message:"Введіть запит для пошуку",position:"topRight"});return}h(),g();try{const e=await p(s);if(e.hits.length===0){i.error({message:"Нічого не знайдено за запитом",position:"topRight"});return}y(e.hits)}catch{i.error({message:"Сталася помилка при отрманні даних",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
