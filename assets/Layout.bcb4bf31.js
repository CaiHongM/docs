var pe=Object.defineProperty,de=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var oe=(e,t,n)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&oe(e,n,t[n]);if(se)for(var n of se(t))_e.call(t,n)&&oe(e,n,t[n]);return e},ae=(e,t)=>de(e,me(t));import{l as ve,X as ge,Y as fe,_ as B,m as P,h as I,k as f,O as V,o as r,c,b as v,q as o,P as N,B as g,z as b,r as k,G as T,H as E,D as j,d as h,K as z,L as be,g as re,w as D,e as A,W as le,E as ke,F as ye,f as U,Z as $e,i as Le,s as ce,u as Ce,M as Be,N as Pe,$ as we,J as Se,a0 as R,T as Ie}from"./app.77e6d728.js";import{r as xe,L as ue,u as Ne,C as Xe}from"./index.d4318d50.js";import{P as Te,a as Ee,t as De,b as Fe}from"./Pagation.39d711e7.js";let H=null,M=null;const Me={wait:()=>H,pending:()=>{H=new Promise(e=>M=e)},resolve:()=>{M==null||M(),H=null,M=null}},ze=()=>Me,Ue={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Ve=({docsRepo:e,docsBranch:t,docsDir:n,path:p,editLinkPattern:a})=>{const l=xe(e);let i;if(a?i=a:l!==null&&(i=Ue[l]),!i)return null;const s=p.replace(/\.html$/,".md");return i.replace(/:repo/,ve(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,ge(`${fe(n)}/${s}`))};function Y(){const e=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"],t=Math.floor(Math.random()*e.length);return e[t]}const Re={class:"hero-content"},He=["src"],Oe={key:1},je={key:2},Ae=P({__name:"Banner",setup(e){const t=I(),n=f(()=>{var l,i,s,u;return(i=(l=t.value)==null?void 0:l.banner)!=null&&i.heroImage?V((u=(s=t.value)==null?void 0:s.banner)==null?void 0:u.heroImage):null}),p=f(()=>t.value.banner.heroImageStyle||{}),a=f(()=>{var u;const{bgImageStyle:l,bgImage:i}=((u=t.value)==null?void 0:u.banner)||{},s=i?{textAlign:"center",overflow:"hidden",background:`url(${V(i)}) center/cover no-repeat`}:{};return l?x(x({},s),l):s});return(l,i)=>{var s,u,m,d,_,$,L,y;return r(),c("section",{class:"banner-wrapper",style:N(x({},o(a)))},[v("div",Re,[o(n)?(r(),c("img",{key:0,src:o(n),style:N({heroImageStyle:o(p)}),alt:"heroImage"},null,12,He)):g("",!0),(u=(s=o(t))==null?void 0:s.banner)!=null&&u.heroText?(r(),c("h1",Oe,b((d=(m=o(t))==null?void 0:m.banner)==null?void 0:d.heroText),1)):g("",!0),($=(_=o(t))==null?void 0:_.banner)!=null&&$.tagline?(r(),c("p",je,b((y=(L=o(t))==null?void 0:L.banner)==null?void 0:y.tagline),1)):g("",!0)])],4)}}});var Ye=B(Ae,[["__file","Banner.vue"]]);const qe={class:"hero-content"},Ge=["src"],We={class:"hero-text"},Je={key:0},Ke={key:1},Qe={key:2,class:"btn-group"},Ze={key:3,class:"social-links"},et=P({__name:"BannerBrand",setup(e){const t=I(),n=f(()=>{var s,u,m,d;return(u=(s=t.value)==null?void 0:s.bannerBrand)!=null&&u.heroImage?V((d=(m=t.value)==null?void 0:m.bannerBrand)==null?void 0:d.heroImage):null}),p=f(()=>{var s,u;return((u=(s=t.value)==null?void 0:s.bannerBrand)==null?void 0:u.buttons)||[]}),a=f(()=>{var s,u;return(((u=(s=t.value)==null?void 0:s.bannerBrand)==null?void 0:u.socialLinks)||[]).map(m=>(m.color||(m.color=Y()),m))}),l=f(()=>t.value.bannerBrand.heroImageStyle||{}),i=f(()=>{var d;const{bgImageStyle:s,bgImage:u}=((d=t.value)==null?void 0:d.bannerBrand)||{},m=u?{overflow:"hidden",background:`url(${V(u)}) center/cover no-repeat`}:{};return s?x(x({},m),s):m});return(s,u)=>{var d,_,$,L,y,w,S,F;const m=k("Xicons");return r(),c("section",{class:"banner-brand-wrapper",style:N(x({},o(i)))},[v("div",qe,[o(n)?(r(),c("img",{key:0,src:o(n),style:N({heroImageStyle:o(l)}),alt:"heroImage"},null,12,Ge)):g("",!0),v("div",We,[(_=(d=o(t))==null?void 0:d.bannerBrand)!=null&&_.heroText?(r(),c("h1",Je,b((L=($=o(t))==null?void 0:$.bannerBrand)==null?void 0:L.heroText),1)):g("",!0),(w=(y=o(t))==null?void 0:y.bannerBrand)!=null&&w.tagline?(r(),c("p",Ke,b((F=(S=o(t))==null?void 0:S.bannerBrand)==null?void 0:F.tagline),1)):g("",!0),o(p).length>0?(r(),c("ul",Qe,[(r(!0),c(T,null,E(o(p),(C,X)=>(r(),c("li",{class:j(C.type),key:X},[h(m,{icon:C.icon,text:C.text,link:C.link,"icon-size":"20","text-size":"14"},null,8,["icon","text","link"])],2))),128))])):g("",!0),o(a).length>0?(r(),c("ul",Ze,[(r(!0),c(T,null,E(o(a),(C,X)=>(r(),c("li",{class:"social-item",key:X},[h(m,{icon:C.icon,link:C.link,style:N({color:C.color})},null,8,["icon","link","style"])]))),128))])):g("",!0)])])],4)}}});var tt=B(et,[["__file","BannerBrand.vue"]]);const nt=P({setup(e,t){const n=z(),p=I(),a=f(()=>{var l,i;return(((i=(l=p.value)==null?void 0:l.blog)==null?void 0:i.socialLinks)||[]).map(s=>(s.color||(s.color=Y()),s))});return{themeLocal:n,socialLinks:a}}}),st={class:"personal-info-wrapper"},ot=["src"],at={key:1,class:"name"},rt={class:"social-links"},it=v("hr",null,null,-1);function lt(e,t,n,p,a,l){const i=k("Xicons");return r(),c("div",st,[e.themeLocal.authorAvatar?(r(),c("img",{key:0,class:"personal-img",src:e.$withBase(e.themeLocal.authorAvatar),alt:"author-avatar"},null,8,ot)):g("",!0),e.themeLocal.author?(r(),c("p",at,b(e.themeLocal.author),1)):g("",!0),v("ul",rt,[(r(!0),c(T,null,E(e.socialLinks,(s,u)=>(r(),c("li",{class:"social-item",key:u},[h(i,{icon:s.icon,link:s.link,style:N({color:s.color})},null,8,["icon","link","style"])]))),128))]),it])}var ct=B(nt,[["render",lt],["__file","PersonalInfo.vue"]]);const ut={class:"home-blog-content"},pt={class:"blog-list"},dt={class:"info-wrapper"},mt={class:"module-title"},ht={class:"category-wrapper"},_t={class:"text"},vt={class:"num"},gt={class:"module-title"},ft={class:"tag-wrapper"},bt=P({__name:"Blog",setup(e){const{posts:t,classificationSummary:n}=be(),p=re(1),a=re(0),l=10,i=f(()=>{var d,_;return((_=(d=n.value)==null?void 0:d.categories)==null?void 0:_.items)||[]}),s=f(()=>{var d,_;return((_=(d=n.value)==null?void 0:d.tags)==null?void 0:_.items)||[]}),u=f(()=>{const d=(p.value-1)*l,_=p.value*l;return(t.value||[]).slice(d,_)});let m=d=>{};return m=d=>{if(p.value=d,a.value===0){const _=document.querySelector(".home-blog-content");_&&(a.value=_.getBoundingClientRect().top)}setTimeout(()=>{window.scrollTo({left:0,top:-a.value,behavior:"smooth"})},100)},(d,_)=>{const $=k("Xicons"),L=k("router-link");return r(),c("section",ut,[v("section",pt,[h(Te,{data:o(u),total:o(t).length,"page-size":10,"current-page":p.value},null,8,["data","total","current-page"]),h(Ee,{currentPage:p.value,total:o(t).length,onChange:o(m)},null,8,["currentPage","total","onChange"])]),v("section",dt,[h(ct),v("h4",mt,[h($,{icon:"Folder",text:"Categories"})]),v("ul",ht,[(r(!0),c(T,null,E(o(i),(y,w,S)=>(r(),c("li",{class:"category-item",key:S},[h(L,{class:"category-link",to:`/categories/${w}/1/`},{default:D(()=>[v("span",_t,b(y.label),1),v("span",vt,b(y.length),1)]),_:2},1032,["to"])]))),128))]),v("h4",gt,[h($,{icon:"Tag",text:"Tags"})]),v("ul",ft,[(r(!0),c(T,null,E(o(s),(y,w,S)=>(r(),c("li",{class:"tag-item",key:S,style:N({borderColor:o(Y)()})},[h(L,{class:"tag-link",to:`/tags/${w}/1/`},{default:D(()=>[A(b(y.label),1)]),_:2},1032,["to"])],4))),128))])])])}}});var kt=B(bt,[["__file","Blog.vue"]]);const yt={},$t={class:"theme-reco-default-content"};function Lt(e,t){const n=k("Content");return r(),c("section",$t,[h(n)])}var Ct=B(yt,[["render",Lt],["__file","MdContent.vue"]]);const Bt="vuepress-theme-reco",Pt="2.0.0-beta.30",wt="> TODO: description",St="https://github.com/recoluan/vuepress-theme-reco#readme",It={url:"https://github.com/recoluan/vuepress-theme-reco/issues"},xt={type:"git",url:"git+https://github.com/recoluan/vuepress-theme-reco.git"},Nt="MIT",Xt="reco_luan <recoluan@qq.com>",Tt="lib/node/index.js",Et="lib/node/index.d.ts",Dt={lib:"lib",test:"__tests__"},Ft=["lib","templates"],Mt={access:"public"},zt={"@vicons/tabler":"^0.12.0","@vicons/fa":"^0.12.0","@vuepress-reco/shared":"2.0.0-beta.30","@vuepress-reco/tailwindcss-config":"2.0.0-beta.30","@vuepress-reco/vuepress-plugin-bulletin-popover":"2.0.0-beta.30","@vuepress-reco/vuepress-plugin-comments":"2.0.0-beta.30","@vuepress-reco/vuepress-plugin-page":"2.0.0-beta.30","@vuepress-reco/vuepress-plugin-code-copy":"2.0.0-beta.30","@vuepress-reco/vuepress-plugin-vue-preview":"2.0.0-beta.30","@vuepress/bundler-vite":"2.0.0-beta.48","@vuepress/bundler-webpack":"2.0.0-beta.48","@vuepress/client":"2.0.0-beta.48","@vuepress/core":"2.0.0-beta.48","@vuepress/plugin-active-header-links":"2.0.0-beta.48","@vuepress/plugin-back-to-top":"^2.0.0-beta.48","@vuepress/plugin-container":"2.0.0-beta.48","@vuepress/plugin-external-link-icon":"2.0.0-beta.48","@vuepress/plugin-git":"2.0.0-beta.48","@vuepress/plugin-nprogress":"2.0.0-beta.48","@vuepress/plugin-palette":"2.0.0-beta.48","@vuepress/plugin-prismjs":"2.0.0-beta.48","@vuepress/plugin-register-components":"2.0.0-beta.48","@vuepress/plugin-search":"2.0.0-beta.48","@vuepress/plugin-theme-data":"2.0.0-beta.48","@vuepress/shared":"2.0.0-beta.48","@vuepress/utils":"2.0.0-beta.48",autoprefixer:"10.4.7",md5:"2.3.0",postcss:"8.4.14","postcss-each":"1.1.0","postcss-import":"14.0.2",tailwindcss:"3.1.6",vue:"^3.2.36","vue-router":"^4.0.16"},Ut={"eslint-config-vuepress":"3.2.1","eslint-config-vuepress-typescript":"2.2.1",prettier:"2.2.1","sort-package-json":"1.44.0"},Vt={test:'echo "Error: run tests from root" && exit 1',build:"tsc --build tsconfig.build.json","build:watch":"tsc --build -w tsconfig.build.json",clean:"rimraf lib *.tsbuildinfo",copy:'cpx "src/**/*.{d.ts,vue,scss,css,svg}" lib'};var Rt={name:Bt,version:Pt,description:wt,homepage:St,bugs:It,repository:xt,license:Nt,author:Xt,main:Tt,types:Et,directories:Dt,files:Ft,publishConfig:Mt,dependencies:zt,devDependencies:Ut,scripts:Vt};const Ht={class:"footer-wrapper"},Ot={key:0},jt={key:0},At=A("\xA0\xA0 "),Yt={key:1},qt={key:1,class:"cyber-security"},Gt=v("img",{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""},null,-1),Wt=["href"],Jt={__name:"Footer",setup(e){const t=z(),n=I(),{solution:p,options:a}=le(),{version:l}=Rt,i=f(()=>p.value!=="valine"?!1:a.value.visitor!=!1);return(s,u)=>{var $,L,y,w,S,F,C,X,q,G,W,J;const m=k("Xicons"),d=k("ValineViews"),_=k("Comments");return r(),c("div",Ht,[v("span",null,[h(m,{icon:"Palette",link:"http://v2.vuepress-reco.recoluan.com",target:"_blank",text:`vuepress-theme-reco@${o(l)}`},null,8,["text"])]),(L=($=o(n))==null?void 0:$.footer)!=null&&L.record?(r(),c("span",Ot,[h(m,{icon:"ShieldCheck",link:((w=(y=o(n))==null?void 0:y.footer)==null?void 0:w.recordLink)||"#",text:(F=(S=o(n))==null?void 0:S.footer)==null?void 0:F.record},null,8,["link","text"])])):g("",!0),v("span",null,[h(m,{icon:"Copyright"},{default:D(()=>{var K,Q,Z,ee,te,ne;return[o(t).author?(r(),c("a",jt,b(o(t).author),1)):g("",!0),At,((Q=(K=o(n))==null?void 0:K.footer)==null?void 0:Q.startYear)&&((ee=(Z=o(n))==null?void 0:Z.footer)==null?void 0:ee.startYear)!=new Date().getFullYear()?(r(),c("a",Yt,b((ne=(te=o(n))==null?void 0:te.footer)==null?void 0:ne.startYear)+" - ",1)):g("",!0),A(" "+b(new Date().getFullYear()),1)]}),_:1})]),ke(v("span",null,[h(m,{icon:"Eye"},{default:D(()=>[h(d,{idVal:"/",numStyle:{}})]),_:1})],512),[[ye,o(i)]]),(X=(C=o(n))==null?void 0:C.footer)!=null&&X.cyberSecurityRecord?(r(),c("p",qt,[Gt,v("a",{href:((G=(q=o(n))==null?void 0:q.footer)==null?void 0:G.cyberSecurityLink)||"#"},b((J=(W=o(n))==null?void 0:W.footer)==null?void 0:J.cyberSecurityRecord),9,Wt)])):g("",!0),h(_,{"hide-comments":!0})])}}};var Kt=B(Jt,[["__file","Footer.vue"]]);const Qt={class:"home-wrapper"},Zt=P({name:"HomeWrapper",components:{Banner:Ye,BannerBrand:tt,Blog:kt,MdContent:Ct,Footer:Kt}}),en=P(ae(x({},Zt),{setup(e){const t=I();return(n,p)=>(r(),c("div",Qt,[(r(!0),c(T,null,E(o(t).modules||["Banner","Blog","Footer"],a=>(r(),U($e(a),{key:a}))),128))]))}}));var tn=B(en,[["__file","index.vue"]]);const ie=e=>e===!1?null:Be(e)?Pe(e):we(e)?e:!1,O=(e,t,n)=>{const p=e.findIndex(a=>a.link===t);if(p!==-1){const a=e[p+n];return a!=null&&a.link?a:null}for(const a of e)if(a.children){const l=O(a.children,t,n);if(l)return l}return null},nn=P({name:"PageNav",components:{Link:ue},setup(){const e=I(),t=Le(),n=ce(),p=Ce(),a=f(()=>{const s=ie(e.value.prev);return s!==!1?s:O(t.value,n.path,-1)}),l=f(()=>{const s=ie(e.value.next);return s!==!1?s:O(t.value,n.path,1)});return{prevNavLink:a,nextNavLink:l,go:s=>{p.push(s)}}}}),sn={key:0,class:"page-nav"};function on(e,t,n,p,a,l){return e.prevNavLink||e.nextNavLink?(r(),c("nav",sn,[v("p",{class:j(["inner",{hasPrev:!!e.prevNavLink,hasNext:!!e.nextNavLink}])},[e.prevNavLink?(r(),c("span",{key:0,class:"page-nav-item prev",onClick:t[0]||(t[0]=i=>e.go(e.prevNavLink.link))}," \u2190 "+b(e.prevNavLink.text),1)):g("",!0),e.nextNavLink?(r(),c("span",{key:1,class:"page-nav-item next",onClick:t[1]||(t[1]=i=>e.go(e.nextNavLink.link))},b(e.nextNavLink.text)+" \u2192 ",1)):g("",!0)],2)])):g("",!0)}var an=B(nn,[["render",on],["__file","PageNav.vue"]]);const rn=()=>{const e=z(),t=R(),n=I();return f(()=>{var d,_;if(!((_=(d=n.value.editLink)!=null?d:e.value.editLink)!=null?_:!0))return null;const{repo:a,docsRepo:l=a,docsBranch:i="main",docsDir:s="",editLinkText:u}=e.value;if(!l)return null;const m=Ve({docsRepo:l,docsBranch:i,docsDir:s,path:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return m?{text:u!=null?u:"Edit this page",link:m,icon:"Edit",hideExternalLinkIcon:!0}:null})},ln=()=>{Se();const e=z(),t=R(),n=I();return f(()=>{var l,i,s,u;if(!((i=(l=n.value.lastUpdated)!=null?l:e.value.lastUpdated)!=null?i:!0)||!((s=t.value.git)!=null&&s.updatedTime))return null;const a=new Date((u=t.value.git)==null?void 0:u.updatedTime);return De(a)})},cn=P({name:"PageMeta",components:{Link:ue},setup(){const e=z(),t=rn(),n=ln();return{themeLocal:e,editNavLink:t,lastUpdated:n}}}),un={class:"page-meta"},pn={key:0,class:"meta-item edit-link"},dn={key:1,class:"meta-item last-updated"};function mn(e,t,n,p,a,l){const i=k("Xicons");return r(),c("footer",un,[e.editNavLink?(r(),c("div",pn,[h(i,{class:"meta-item-label",icon:e.editNavLink.icon,text:e.editNavLink.text,link:e.editNavLink.link,target:"_blank","icon-size":"20","text-size":"14"},null,8,["icon","text","link"])])):g("",!0),e.lastUpdated?(r(),c("div",dn,[h(i,{class:"meta-item-label",icon:"CalendarTime",text:`${e.themeLocal.lastUpdatedText||"Last Updated"} ${e.lastUpdated}`,"icon-size":"20","text-size":"14"},null,8,["text"])])):g("",!0)])}var hn=B(cn,[["render",mn],["__file","PageMeta.vue"]]);const _n=P({name:"Page",components:{PageInfo:Fe,PageNav:an,PageMeta:hn},setup(){const e=R(),{options:t}=le();ce();const n=f(()=>{var a,l,i;return((l=(a=e==null?void 0:e.value)==null?void 0:a.frontmatter)==null?void 0:l.title)||((i=e==null?void 0:e.value)==null?void 0:i.title)||""}),p=f(()=>{var i;const{hideComments:a}=(i=e==null?void 0:e.value)==null?void 0:i.frontmatter,{hideComments:l}=t.value;return a===!0||a!==!1&&l===!0});return{title:n,pageData:e,shouldHideComments:p}}}),vn={class:"page-container"},gn={key:0,class:"page-title"},fn={class:"theme-reco-default-content"};function bn(e,t,n,p,a,l){const i=k("PageInfo"),s=k("Content"),u=k("PageMeta"),m=k("PageNav"),d=k("Comments");return r(),c("main",vn,[e.title?(r(),c("h1",gn,b(e.title),1)):g("",!0),h(i,{"page-data":e.pageData},null,8,["page-data"]),v("div",fn,[h(s)]),h(u),h(m),h(d,{"hide-comments":e.shouldHideComments},null,8,["hide-comments"])])}var kn=B(_n,[["render",bn],["__file","Page.vue"]]);const yn={class:"theme-container"},$n=P({__name:"Layout",setup(e){const t=R(),n=I(),{isShowSidebar:p,isShowCatalog:a}=Ne(),l=ze(),i=l.resolve,s=l.pending;return(u,m)=>(r(),c("div",yn,[h(Xe,null,{default:D(()=>[o(n).home===!0?(r(),U(tn,{key:0})):(r(),U(Ie,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:o(i),onBeforeLeave:o(s)},{default:D(()=>[(r(),U(kn,{key:o(t).path,class:j({"show-series":o(p),"show-catalog":o(a)})},null,8,["class"]))]),_:1},8,["onBeforeEnter","onBeforeLeave"]))]),_:1})]))}});var wn=B($n,[["__file","Layout.vue"]]);export{wn as default};
