"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2373],{2373:(h,c,t)=>{t.r(c),t.d(c,{ProfilePageModule:()=>F});var d=t(177),g=t(4341),i=t(3667),s=t(9384),f=t(467),e=t(4438),m=t(4796);const P=[{path:"",component:(()=>{var o;class a{constructor(r,n){this.authService=r,this.router=n,this.userEmail="",this.userName="",this.authService.isLoggedIn().subscribe(u=>{u?(this.userEmail=u.email||"",this.userName=u.displayName||"Usuario"):(console.log("No hay usuario autenticado"),this.router.navigate(["/login"]))})}logout(){var r=this;return(0,f.A)(function*(){try{yield r.authService.logout(),r.router.navigate(["/login"])}catch(n){alert("Error al cerrar sesi\xf3n: "+(n.message||"Error desconocido"))}})()}}return(o=a).\u0275fac=function(r){return new(r||o)(e.rXU(m.u),e.rXU(s.Ix))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-profile"]],decls:27,vars:3,consts:[[1,"ion-padding"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-gray-600"],["expand","block","color","danger",3,"click"],["expand","block","color","medium","routerLink","/home",1,"mt-2"]],template:function(r,n){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Mi Perfil"),e.k0s()()(),e.j41(4,"ion-content",0)(5,"div",0)(6,"h2",1),e.EFF(7),e.k0s(),e.j41(8,"p",2),e.EFF(9,"Aqu\xed puedes ver tu informaci\xf3n y gestionar tu cuenta."),e.k0s(),e.j41(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title"),e.EFF(13,"Informaci\xf3n del Usuario"),e.k0s()(),e.j41(14,"ion-card-content")(15,"p")(16,"strong"),e.EFF(17,"Email:"),e.k0s(),e.EFF(18),e.k0s(),e.j41(19,"p")(20,"strong"),e.EFF(21,"Nombre:"),e.k0s(),e.EFF(22),e.k0s()()(),e.j41(23,"ion-button",3),e.bIt("click",function(){return n.logout()}),e.EFF(24,"Cerrar Sesi\xf3n"),e.k0s(),e.j41(25,"ion-button",4),e.EFF(26,"Volver al Inicio"),e.k0s()()()),2&r&&(e.R7$(7),e.SpI("\xa1Hola, ",n.userName||"Usuario","!"),e.R7$(11),e.SpI(" ",n.userEmail||"No disponible",""),e.R7$(4),e.SpI(" ",n.userName||"No disponible",""))},dependencies:[i.Jm,i.b_,i.I9,i.ME,i.tN,i.W9,i.eU,i.BC,i.ai,i.N7,s.Wk]}),a})()}];let p=(()=>{var o;class a{}return(o=a).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[s.iI.forChild(P),s.iI]}),a})(),F=(()=>{var o;class a{}return(o=a).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[d.MD,g.YN,i.bv,p]}),a})()}}]);