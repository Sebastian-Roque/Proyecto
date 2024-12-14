"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3825],{3825:(v,c,i)=>{i.r(c),i.d(c,{RegisterPageModule:()=>F});var m=i(177),s=i(4341),r=i(3667),d=i(9384),p=i(467),e=i(4438),R=i(4796);const h=[{path:"",component:(()=>{var a;class n{constructor(t,o){this.authService=t,this.router=o,this.email="",this.password=""}register(){var t=this;return(0,p.A)(function*(){if(t.email.trim()&&t.password.trim())if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email))try{yield t.authService.register(t.email,t.password),alert("\xa1Registro exitoso!"),t.router.navigate(["/login"])}catch(g){switch(g.code){case"auth/email-already-in-use":alert("El correo ya est\xe1 en uso. Intenta iniciar sesi\xf3n.");break;case"auth/weak-password":alert("La contrase\xf1a es demasiado d\xe9bil. Usa al menos 6 caracteres.");break;case"auth/invalid-email":alert("El correo electr\xf3nico ingresado no es v\xe1lido.");break;default:alert(`Error inesperado: ${g.message||"Por favor, int\xe9ntalo de nuevo m\xe1s tarde."}`)}}else alert("El formato del correo electr\xf3nico no es v\xe1lido.");else alert("Por favor, completa todos los campos.")})()}}return(a=n).\u0275fac=function(t){return new(t||a)(e.rXU(R.u),e.rXU(d.Ix))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-register"]],decls:28,vars:2,consts:[[1,"ion-padding"],[1,"ion-padding","text-center"],[3,"ngSubmit"],["position","floating"],["type","email","name","email","required","",3,"ngModelChange","ngModel"],["type","password","name","password","required","",3,"ngModelChange","ngModel"],["expand","block","type","submit","color","primary",1,"mt-4"],[1,"mt-4"],["routerLink","/login",1,"text-blue-500","underline"],["expand","block","color","medium","routerLink","/home",1,"mt-2"]],template:function(t,o){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Registro"),e.k0s()()(),e.j41(4,"ion-content",0)(5,"div",1)(6,"h2"),e.EFF(7,"\xa1Reg\xedstrate ahora!"),e.k0s(),e.j41(8,"p"),e.EFF(9,"Crea una cuenta para disfrutar de todas las funcionalidades de nuestra aplicaci\xf3n."),e.k0s(),e.j41(10,"form",2),e.bIt("ngSubmit",function(){return o.register()}),e.j41(11,"ion-item")(12,"ion-label",3),e.EFF(13,"Correo"),e.k0s(),e.j41(14,"ion-input",4),e.mxI("ngModelChange",function(l){return e.DH7(o.email,l)||(o.email=l),l}),e.k0s()(),e.j41(15,"ion-item")(16,"ion-label",3),e.EFF(17,"Contrase\xf1a"),e.k0s(),e.j41(18,"ion-input",5),e.mxI("ngModelChange",function(l){return e.DH7(o.password,l)||(o.password=l),l}),e.k0s()(),e.j41(19,"ion-button",6),e.EFF(20," Registrarse "),e.k0s()(),e.j41(21,"p",7),e.EFF(22," \xbfYa tienes una cuenta? "),e.j41(23,"a",8),e.EFF(24,"Inicia sesi\xf3n aqu\xed"),e.k0s(),e.EFF(25,". "),e.k0s(),e.j41(26,"ion-button",9),e.EFF(27," Volver al Inicio "),e.k0s()()()),2&t&&(e.R7$(14),e.R50("ngModel",o.email),e.R7$(4),e.R50("ngModel",o.password))},dependencies:[s.qT,s.BC,s.cb,s.YS,s.vS,s.cV,r.Jm,r.W9,r.eU,r.$w,r.uz,r.he,r.BC,r.ai,r.Gw,r.N7,r.oY,d.Wk]}),n})()}];let f=(()=>{var a;class n{}return(a=n).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[d.iI.forChild(h),d.iI]}),n})(),F=(()=>{var a;class n{}return(a=n).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[m.MD,s.YN,r.bv,f]}),n})()}}]);