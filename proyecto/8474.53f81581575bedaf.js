"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8474],{8474:(F,g,r)=>{r.r(g),r.d(g,{AddPlacePageModule:()=>v});var m=r(177),s=r(4341),i=r(3667),c=r(9384),P=r(467),e=r(4438),p=r(9180);function h(o,d){if(1&o&&(e.j41(0,"div",7),e.nrm(1,"img",8),e.k0s()),2&o){const u=e.XpG();e.R7$(),e.Y8G("src",u.photo,e.B4B)}}const f=[{path:"",component:(()=>{var o;class d{constructor(a,n,l){this.route=a,this.router=n,this.evaluationService=l,this.placeName="",this.latitude=0,this.longitude=0,this.comment="",this.photo=null}ngOnInit(){this.route.queryParams.subscribe(a=>{this.latitude=a.lat||0,this.longitude=a.lng||0})}uploadPhoto(){const a=document.createElement("input");a.type="file",a.accept="image/*",a.onchange=n=>{const l=n.target.files[0];if(l){const t=new FileReader;t.onload=A=>{this.photo=A.target.result},t.readAsDataURL(l)}},a.click()}savePlace(){var a=this;return(0,P.A)(function*(){if(!a.placeName.trim()||!a.comment.trim())return void alert("Por favor, completa todos los campos antes de guardar.");const n={name:a.placeName,latitude:a.latitude,longitude:a.longitude,comment:a.comment,photo:a.photo};try{yield a.evaluationService.addEvaluation(n),alert("Lugar guardado exitosamente."),a.router.navigate(["/evaluations"])}catch(l){console.error("Error al guardar el lugar:",l),alert("Ocurri\xf3 un error al guardar el lugar.")}})()}}return(o=d).\u0275fac=function(a){return new(a||o)(e.rXU(c.nX),e.rXU(c.Ix),e.rXU((0,e.Rfq)(()=>p.W)))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-add-place"]],decls:29,vars:5,consts:[[1,"ion-padding"],["position","stacked"],["placeholder","Ingresa el nombre",3,"ngModelChange","ngModel"],["readonly","",3,"ngModelChange","ngModel"],["placeholder","Escribe un comentario",3,"ngModelChange","ngModel"],["expand","block",3,"click"],["class","photo-preview",4,"ngIf"],[1,"photo-preview"],["alt","Vista previa",3,"src"]],template:function(a,n){1&a&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Agregar Lugar"),e.k0s()()(),e.j41(4,"ion-content",0)(5,"ion-item")(6,"ion-label",1),e.EFF(7,"Nombre del lugar"),e.k0s(),e.j41(8,"ion-input",2),e.mxI("ngModelChange",function(t){return e.DH7(n.placeName,t)||(n.placeName=t),t}),e.k0s()(),e.j41(9,"ion-item")(10,"ion-label",1),e.EFF(11,"Latitud"),e.k0s(),e.j41(12,"ion-input",3),e.mxI("ngModelChange",function(t){return e.DH7(n.latitude,t)||(n.latitude=t),t}),e.k0s()(),e.j41(13,"ion-item")(14,"ion-label",1),e.EFF(15,"Longitud"),e.k0s(),e.j41(16,"ion-input",3),e.mxI("ngModelChange",function(t){return e.DH7(n.longitude,t)||(n.longitude=t),t}),e.k0s()(),e.j41(17,"ion-item")(18,"ion-label",1),e.EFF(19,"Comentario"),e.k0s(),e.j41(20,"ion-textarea",4),e.mxI("ngModelChange",function(t){return e.DH7(n.comment,t)||(n.comment=t),t}),e.k0s()(),e.j41(21,"ion-item")(22,"ion-label",1),e.EFF(23,"Foto"),e.k0s(),e.j41(24,"ion-button",5),e.bIt("click",function(){return n.uploadPhoto()}),e.EFF(25,"Subir Foto"),e.k0s(),e.DNE(26,h,2,1,"div",6),e.k0s(),e.j41(27,"ion-button",5),e.bIt("click",function(){return n.savePlace()}),e.EFF(28,"Guardar Lugar"),e.k0s()()),2&a&&(e.R7$(8),e.R50("ngModel",n.placeName),e.R7$(4),e.R50("ngModel",n.latitude),e.R7$(4),e.R50("ngModel",n.longitude),e.R7$(4),e.R50("ngModel",n.comment),e.R7$(6),e.Y8G("ngIf",n.photo))},dependencies:[m.bT,s.BC,s.vS,i.Jm,i.W9,i.eU,i.$w,i.uz,i.he,i.nc,i.BC,i.ai,i.Gw]}),d})()}];let M=(()=>{var o;class d{}return(o=d).\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[c.iI.forChild(f),c.iI]}),d})(),v=(()=>{var o;class d{}return(o=d).\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({providers:[p.W],imports:[m.MD,s.YN,i.bv,M]}),d})()}}]);