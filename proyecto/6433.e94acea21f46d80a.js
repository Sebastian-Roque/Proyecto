"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6433],{6433:(re,N,f)=>{f.r(N),f.d(N,{ion_popover:()=>ee});var S=f(467),l=f(4261),E=f(3617),j=f(8621),P=f(4920),F=f(7838),V=f(4929),h=f(9483),g=f(333),x=f(3604),v=f(9986);f(8476),f(7192),f(1970);const G=(t,e,o)=>{const r=e.getBoundingClientRect(),s=r.height;let n=r.width;return"cover"===t&&o&&(n=o.getBoundingClientRect().width),{contentWidth:n,contentHeight:s}},ie=(t,e,o)=>{let r=[];switch(e){case"hover":let s;r=[{eventName:"mouseenter",callback:(n=(0,S.A)(function*(i){i.stopPropagation(),s&&clearTimeout(s),s=setTimeout(()=>{(0,P.r)(()=>{o.presentFromTrigger(i),s=void 0})},100)}),function(a){return n.apply(this,arguments)})},{eventName:"mouseleave",callback:n=>{s&&clearTimeout(s);const i=n.relatedTarget;i&&i.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>o.presentFromTrigger(n,!0)}];break;case"context-menu":r=[{eventName:"contextmenu",callback:n=>{n.preventDefault(),o.presentFromTrigger(n)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>o.presentFromTrigger(n,!0)}];break;default:r=[{eventName:"click",callback:n=>o.presentFromTrigger(n)},{eventName:"ionPopoverActivateTrigger",callback:n=>o.presentFromTrigger(n,!0)}]}var n;return r.forEach(({eventName:s,callback:n})=>t.addEventListener(s,n)),t.setAttribute("data-ion-popover-trigger","true"),()=>{r.forEach(({eventName:s,callback:n})=>t.removeEventListener(s,n)),t.removeAttribute("data-ion-popover-trigger")}},H=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(o=>o===e):-1,Y=t=>{const o=(0,P.g)(t).querySelector("button");o&&(0,P.r)(()=>o.focus())},de=t=>{const e=function(){var o=(0,S.A)(function*(r){var s;const n=document.activeElement;let i=[];const a=null===(s=r.target)||void 0===s?void 0:s.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{i=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(r.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":r.preventDefault();const d=((t,e)=>t[H(t,e)+1])(i,n);void 0!==d&&Y(d);break;case"ArrowUp":r.preventDefault();const w=((t,e)=>t[H(t,e)-1])(i,n);void 0!==w&&Y(w);break;case"Home":r.preventDefault();const u=i[0];void 0!==u&&Y(u);break;case"End":r.preventDefault();const b=i[i.length-1];void 0!==b&&Y(b);break;case"ArrowRight":case" ":case"Enter":if(n&&(t=>t.hasAttribute("data-ion-popover-trigger"))(n)){const m=new CustomEvent("ionPopoverActivateTrigger");n.dispatchEvent(m)}}}});return function(s){return o.apply(this,arguments)}}();return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},J=(t,e,o,r,s,n,i,a,c,d,w)=>{var u;let b={top:0,left:0,width:0,height:0};if("event"===n){if(!w)return c;b={top:w.clientY,left:w.clientX,width:1,height:1}}else{const L=d||(null===(u=null==w?void 0:w.detail)||void 0===u?void 0:u.ionShadowTarget)||(null==w?void 0:w.target);if(!L)return c;const A=L.getBoundingClientRect();b={top:A.top,left:A.left,width:A.width,height:A.height}}const m=he(i,b,e,o,r,s,t),k=ue(a,i,b,e,o),_=m.top+k.top,I=m.left+k.left,{arrowTop:y,arrowLeft:T}=fe(i,r,s,_,I,e,o,t),{originX:D,originY:C}=le(i,a,t);return{top:_,left:I,referenceCoordinates:b,arrowTop:y,arrowLeft:T,originX:D,originY:C}},le=(t,e,o)=>{switch(t){case"top":return{originX:Q(e),originY:"bottom"};case"bottom":return{originX:Q(e),originY:"top"};case"left":return{originX:"right",originY:z(e)};case"right":return{originX:"left",originY:z(e)};case"start":return{originX:o?"left":"right",originY:z(e)};case"end":return{originX:o?"right":"left",originY:z(e)}}},Q=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},z=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},fe=(t,e,o,r,s,n,i,a)=>{const c={arrowTop:r+i/2-e/2,arrowLeft:s+n-e/2},d={arrowTop:r+i/2-e/2,arrowLeft:s-1.5*e};switch(t){case"top":return{arrowTop:r+i,arrowLeft:s+n/2-e/2};case"bottom":return{arrowTop:r-o,arrowLeft:s+n/2-e/2};case"left":return c;case"right":return d;case"start":return a?d:c;case"end":return a?c:d;default:return{arrowTop:0,arrowLeft:0}}},he=(t,e,o,r,s,n,i)=>{const a={top:e.top,left:e.left-o-s},c={top:e.top,left:e.left+e.width+s};switch(t){case"top":return{top:e.top-r-n,left:e.left};case"right":return c;case"bottom":return{top:e.top+e.height+n,left:e.left};case"left":return a;case"start":return i?c:a;case"end":return i?a:c}},ue=(t,e,o,r,s)=>{switch(t){case"center":return me(e,o,r,s);case"end":return ve(e,o,r,s);default:return{top:0,left:0}}},ve=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r-e.height),left:0};default:return{top:0,left:-(o-e.width)}}},me=(t,e,o,r)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(r/2-e.height/2),left:0};default:return{top:0,left:-(o/2-e.width/2)}}},Z=(t,e,o,r,s,n,i,a,c,d,w,u,b=0,m=0,k=0)=>{let _=b;const I=m;let D,y=o,T=e,C=d,O=w,p=!1,L=!1;const A=u?u.top+u.height:n/2-a/2,M=u?u.height:0;let R=!1;return y<r+c?(y=r,p=!0,C="left"):i+r+y+c>s&&(L=!0,y=s-i-r,C="right"),A+M+a>n&&("top"===t||"bottom"===t)&&(A-a>0?(T=Math.max(12,A-a-M-(k-1)),_=T+a,O="bottom",R=!0):D=r),{top:T,left:y,bottom:D,originX:C,originY:O,checkSafeAreaLeft:p,checkSafeAreaRight:L,arrowTop:_,arrowLeft:I,addPopoverBottomClass:R}},ye=(t,e)=>{var o;const{event:r,size:s,trigger:n,reference:i,side:a,align:c}=e,d=t.ownerDocument,w="rtl"===d.dir,u=d.defaultView.innerWidth,b=d.defaultView.innerHeight,m=(0,P.g)(t),k=m.querySelector(".popover-content"),_=m.querySelector(".popover-arrow"),I=n||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:y,contentHeight:T}=G(s,k,I),{arrowWidth:D,arrowHeight:C}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:o}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:o}})(_),p=J(w,y,T,D,C,i,a,c,{top:b/2-T/2,left:u/2-y/2,originX:w?"right":"left",originY:"top"},n,r),L="cover"===s?0:5,A="cover"===s?0:25,{originX:M,originY:R,top:$,left:W,bottom:K,checkSafeAreaLeft:X,checkSafeAreaRight:Ee,arrowTop:Ie,arrowLeft:Te,addPopoverBottomClass:Ce}=Z(a,p.top,p.left,L,u,b,y,T,A,p.originX,p.originY,p.referenceCoordinates,p.arrowTop,p.arrowLeft,C),Oe=(0,v.c)(),te=(0,v.c)(),oe=(0,v.c)();return te.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),oe.addElement(m.querySelector(".popover-arrow")).addElement(m.querySelector(".popover-content")).fromTo("opacity",.01,1),Oe.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===s&&t.style.setProperty("--width",`${y}px`),Ce&&t.classList.add("popover-bottom"),void 0!==K&&k.style.setProperty("bottom",`${K}px`);let q=`${W}px`;X&&(q=`${W}px + var(--ion-safe-area-left, 0)`),Ee&&(q=`${W}px - var(--ion-safe-area-right, 0)`),k.style.setProperty("top",`calc(${$}px + var(--offset-y, 0))`),k.style.setProperty("left",`calc(${q} + var(--offset-x, 0))`),k.style.setProperty("transform-origin",`${R} ${M}`),null!==_&&(((t,e=!1,o,r)=>!(!o&&!r||"top"!==t&&"bottom"!==t&&e))(a,p.top!==$||p.left!==W,r,n)?(_.style.setProperty("top",`calc(${Ie}px + var(--offset-y, 0))`),_.style.setProperty("left",`calc(${Te}px + var(--offset-x, 0))`)):_.style.setProperty("display","none"))}).addAnimation([te,oe])},xe=t=>{const e=(0,P.g)(t),o=e.querySelector(".popover-content"),r=e.querySelector(".popover-arrow"),s=(0,v.c)(),n=(0,v.c)(),i=(0,v.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-arrow")).addElement(e.querySelector(".popover-content")).fromTo("opacity",.99,0),s.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))}).duration(300).addAnimation([n,i])},ke=(t,e)=>{var o;const{event:r,size:s,trigger:n,reference:i,side:a,align:c}=e,d=t.ownerDocument,w="rtl"===d.dir,u=d.defaultView.innerWidth,b=d.defaultView.innerHeight,m=(0,P.g)(t),k=m.querySelector(".popover-content"),_=n||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:I,contentHeight:y}=G(s,k,_),D=J(w,I,y,0,0,i,a,c,{top:b/2-y/2,left:u/2-I/2,originX:w?"right":"left",originY:"top"},n,r),C="cover"===s?0:12,{originX:O,originY:p,top:L,left:A,bottom:M}=Z(a,D.top,D.left,C,u,b,I,y,0,D.originX,D.originY,D.referenceCoordinates),R=(0,v.c)(),$=(0,v.c)(),W=(0,v.c)(),K=(0,v.c)(),X=(0,v.c)();return $.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),W.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),K.addElement(k).beforeStyles({top:`calc(${L}px + var(--offset-y, 0px))`,left:`calc(${A}px + var(--offset-x, 0px))`,"transform-origin":`${p} ${O}`}).beforeAddWrite(()=>{void 0!==M&&k.style.setProperty("bottom",`${M}px`)}).fromTo("transform","scale(0.8)","scale(1)"),X.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),R.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===s&&t.style.setProperty("--width",`${I}px`),"bottom"===p&&t.classList.add("popover-bottom")}).addAnimation([$,W,K,X])},Pe=t=>{const e=(0,P.g)(t),o=e.querySelector(".popover-content"),r=(0,v.c)(),s=(0,v.c)(),n=(0,v.c)();return s.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")}).duration(150).addAnimation([s,n])},ee=class{constructor(t){(0,l.r)(this,t),this.didPresent=(0,l.d)(this,"ionPopoverDidPresent",7),this.willPresent=(0,l.d)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,l.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,l.d)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,l.d)(this,"didPresent",7),this.willPresentShorthand=(0,l.d)(this,"willPresent",7),this.willDismissShorthand=(0,l.d)(this,"willDismiss",7),this.didDismissShorthand=(0,l.d)(this,"didDismiss",7),this.ionMount=(0,l.d)(this,"ionMount",7),this.parentPopover=null,this.coreDelegate=(0,j.C)(),this.lockController=(0,F.c)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.onBackdropTap=()=>{this.dismiss(void 0,E.B)},this.onLifecycle=e=>{const o=this.usersElement,r=Ae[e.type];if(o&&r){const s=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(s)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:o,el:r,destroyTriggerInteraction:s}=this;if(s&&s(),void 0===e)return;const n=this.triggerEl=void 0!==e?document.getElementById(e):null;n?this.destroyTriggerInteraction=ie(n,o,r):(0,V.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el)},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:o}=this;e&&e(),this.destroyKeyboardInteraction=de(o)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:o,triggerAction:r,triggerEl:s,el:n}=this;!o||!s||(e&&e(),this.destroyDismissInteraction=((t,e,o,r)=>{let s=[];const i=(0,P.g)(r).querySelector(".popover-content");return s="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&o.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?o.dismiss(void 0,void 0,!1):a.stopPropagation()}}],s.forEach(({eventName:a,callback:c})=>i.addEventListener(a,c)),()=>{s.forEach(({eventName:a,callback:c})=>i.removeEventListener(a,c))}})(s,r,n,o))},this.presented=!1,this.hasController=!1,this.delegate=void 0,this.overlayIndex=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.component=void 0,this.componentProps=void 0,this.keyboardClose=!0,this.cssClass=void 0,this.backdropDismiss=!0,this.event=void 0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.triggerAction="click",this.trigger=void 0,this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment=void 0,this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.focusTrap=!0,this.keepContentsMounted=!1}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,E.j)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){var t,e;const{el:o}=this,r=null!==(e=null===(t=this.htmlAttributes)||void 0===t?void 0:t.id)&&void 0!==e?e:(0,E.k)(o);this.parentPopover=o.closest(`ion-popover:not(#${r})`),void 0===this.alignment&&(this.alignment="ios"===(0,h.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,P.r)(()=>this.present()),t&&(0,P.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}presentFromTrigger(t,e=!1){var o=this;return(0,S.A)(function*(){o.focusDescendantOnPresent=e,yield o.present(t),o.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,S.A)(function*(){const o=yield e.lockController.lock();if(e.presented)return void o();const{el:r}=e,{inline:s,delegate:n}=e.getDelegate(!0);e.ionMount.emit(),e.usersElement=yield(0,j.a)(n,r,e.component,["popover-viewport"],e.componentProps,s),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),(0,P.k)(r)?yield(0,x.e)(e.usersElement):e.keepContentsMounted||(yield(0,x.w)()),yield(0,E.f)(e,"popoverEnter",ye,ke,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),e.focusDescendantOnPresent&&(0,E.n)(r),o()})()}dismiss(t,e,o=!0){var r=this;return(0,S.A)(function*(){const s=yield r.lockController.lock(),{destroyKeyboardInteraction:n,destroyDismissInteraction:i}=r;o&&r.parentPopover&&r.parentPopover.dismiss(t,e,o);const a=yield(0,E.g)(r,t,e,"popoverLeave",xe,Pe,r.event);if(a){n&&(n(),r.destroyKeyboardInteraction=void 0),i&&(i(),r.destroyDismissInteraction=void 0);const{delegate:c}=r.getDelegate();yield(0,j.d)(c,r.usersElement)}return s(),a})()}getParentPopover(){var t=this;return(0,S.A)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,E.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,E.h)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,h.b)(this),{onLifecycle:e,parentPopover:o,dismissOnSelect:r,side:s,arrow:n,htmlAttributes:i,focusTrap:a}=this,c=(0,h.a)("desktop"),d=n&&!o;return(0,l.h)(l.f,Object.assign({key:"ffe8b37c9ffb5cac210a7307e6cdfcf78712905b","aria-modal":"true","no-router":!0,tabindex:"-1"},i,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},(0,g.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":c,[`popover-side-${s}`]:!0,[E.F]:!1===a,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&(0,l.h)("ion-backdrop",{key:"12b3ffa3928b4d56a4f09c3d2f5d493d47b45255",tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,l.h)("div",{key:"2c2862d5c7e75b637973c712b4982bf4978c0cdf",class:"popover-wrapper ion-overlay-wrapper",onClick:r?()=>this.dismiss():void 0},d&&(0,l.h)("div",{key:"0cfacc52afaa7abc28c1b7742889d7a1c23a37ad",class:"popover-arrow",part:"arrow"}),(0,l.h)("div",{key:"3ef570c44d4fe7f063dd419008c92c8c40d3cd22",class:"popover-content",part:"content"},(0,l.h)("slot",{key:"6fc5dfdce20fee1642bc1f05d41b5bf7d1034457"}))))}get el(){return(0,l.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},Ae={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};ee.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}"}},333:(re,N,f)=>{f.d(N,{c:()=>E,g:()=>P,h:()=>l,o:()=>V});var S=f(467);const l=(h,g)=>null!==g.closest(h),E=(h,g)=>"string"==typeof h&&h.length>0?Object.assign({"ion-color":!0,[`ion-color-${h}`]:!0},g):g,P=h=>{const g={};return(h=>void 0!==h?(Array.isArray(h)?h:h.split(" ")).filter(x=>null!=x).map(x=>x.trim()).filter(x=>""!==x):[])(h).forEach(x=>g[x]=!0),g},F=/^[a-z][a-z0-9+\-.]*:/,V=function(){var h=(0,S.A)(function*(g,x,v,B){if(null!=g&&"#"!==g[0]&&!F.test(g)){const U=document.querySelector("ion-router");if(U)return null!=x&&x.preventDefault(),U.push(g,v,B)}return!1});return function(x,v,B,U){return h.apply(this,arguments)}}()}}]);