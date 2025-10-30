import{j as s,L as o}from"./index-kD6ouo3R.js";const l=({item:e,sizeIcon:t="size1",sizeTitle:a="size1",hover:i=!1})=>{const r={size1:"w-[120px] h-[120px]",size2:"w-[46px] h-[46px]"},n={size1:"text-ms leading-[1.4rem] min-h-[2.8rem] max-h-[2.8rem]",size2:"text-[14px]"},c=i?"text-[#646464] hover:text-[#C92127] transition-colors duration-300":"";return s.jsxs(o,{to:e.category_url,className:`flex flex-col items-center justify-center bg-white 
                ${c}`,children:[s.jsx("div",{className:`flex items-center justify-center ${r[t||"size1"]}`,children:s.jsx("img",{src:e.image_src,alt:e.name,loading:"lazy",className:"object-contain"})}),s.jsx("p",{className:`mt-2 mx-2 text-center line-clamp-2 
                    ${n[a||"size1"]}
                    `,children:e.name})]})};export{l as C};
