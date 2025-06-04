import{a as u,S as d,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",f="50595135-236ed99e353605725b41c38ac";async function m(o,s=1){const e={key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};try{return(await u.get(p,{params:e})).data}catch{throw new Error("Помилка при отриманні зображень")}}const y=new d(".gallery a",{captions:!0,captionSelector:"self",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),g=document.querySelector(".gallery");function h(o){const s=o.map(e=>`
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
        </li>`).join("");g.insertAdjacentHTML("beforeend",s),y.refresh()}function b(){const o=document.querySelector(".gallery");o.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function w(){document.querySelector(".loader").classList.add("is-hidden")}document.querySelector(".load-more");const S=document.querySelector(".form"),q=document.querySelector(".search-input");let c=1,l="";S.addEventListener("submit",async o=>{o.preventDefault();const s=q.value.trim();if(s===""){a.error({message:"Введіть запит для пошуку",position:"topRight"});return}l=s,c=1,b(),hideLoadMoreButton(),L();try{const e=await m(l,c);if(e.hits.length===0){a.error({message:"Нічого не знайдено за запитом",position:"topRight"});return}h(e.hits)}catch{a.error({message:"Сталася помилка при отрманні даних",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
