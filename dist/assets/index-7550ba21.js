(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const i=(o,e)=>{e.innerHTML=o.map(r=>`<li>${r}</li>`).join("")},u=o=>{var e=document.querySelector(`#${o}`);e.play()},d=async o=>o==="food"?(await(await fetch("https ://ap-examen.surge.sh/vogels.json")).json()).map(s=>s.latijnse_benaming):await new Promise(r=>r(["Apple","Cheese","Egg","Grapefruit","Hazelnut","Kiwi","Mango","Orange","Quiche","Strawberry","Banana","Doughnut","Fig","Ice","Lemon","Nuts","Pizza","Rice","Tomato","Watermelon"])),a=document.querySelector(".app__left__list"),c=document.querySelector(".app__right__list"),f=async()=>{const o=await d("birds"),e=o.slice(0,Math.floor(o.length/2)),r=o.slice(Math.floor(o.length/2));i(e,a),i(r,c),a.onclick=s=>{e.splice(e.indexOf(s.target.innerHTML),1),r.push(s.target.innerHTML),u("audio-tic"),i(e,a),i(r.sort(),c)},c.onclick=s=>{r.splice(r.indexOf(s.target.innerHTML),1),e.push(s.target.innerHTML),u("audio-toc"),i(r,c),i(e.sort(),a)}};f();