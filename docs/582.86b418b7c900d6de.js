"use strict";(self.webpackChunkfundamentos_projeto_angular=self.webpackChunkfundamentos_projeto_angular||[]).push([[582],{7582:(v,u,a)=>{a.r(u),a.d(u,{CarrinhoModule:()=>x});var l=a(6895),h=a(9541),n=a(1571),d=a(5087),c=a(433);function C(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"li"),n._UZ(1,"img",6),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label"),n._uU(8," Quantidade: "),n.TgZ(9,"input",7),n.NdJ("ngModelChange",function(i){const s=n.CHM(t).$implicit;return n.KtG(s.quantidade=i)})("change",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.calculaTotal())}),n.qZA()(),n.TgZ(10,"button",8),n.NdJ("click",function(){const p=n.CHM(t).$implicit,s=n.oxw(2);return n.KtG(s.removerProdutoCarrinho(p.id))}),n._UZ(11,"i",9),n.qZA()()}if(2&o){const t=r.$implicit;n.xp6(1),n.Q6J("src",t.imagem,n.LSH),n.xp6(2),n.Oqu(t.descricao),n.xp6(2),n.hij("Pre\xe7o: ",n.xi3(6,4,t.preco,"BRL"),""),n.xp6(4),n.Q6J("ngModel",t.quantidade)}}function g(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"div")(1,"ul"),n.YNc(2,C,12,7,"li",3),n.qZA(),n.TgZ(3,"h2",4),n._uU(4),n.ALo(5,"currency"),n.qZA(),n.TgZ(6,"button",5),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.comprar())}),n._uU(7,"Comprar"),n.qZA()()}if(2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngForOf",t.itensCarrinho),n.xp6(2),n.hij("Total: ",n.xi3(5,2,t.total,"BRL"),"")}}function m(o,r){1&o&&n._uU(0,"Nenhum produto foi adicionado ao carrinho")}const f=[{path:"",component:(()=>{class o{constructor(t){this.carrinhoService=t,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((t,e)=>t+e.quantidade,0)}removerProdutoCarrinho(t){this.itensCarrinho=this.itensCarrinho.filter(e=>e.id!==t),this.carrinhoService.removerProdutoCarrinho(t),this.calculaTotal()}comprar(){alert("Parabens, voce finalizou a sua compra!"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(d.e))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,e){if(1&t&&(n.TgZ(0,"h2",0),n._uU(1,"Carrinho"),n.qZA(),n.YNc(2,g,8,5,"div",1),n.YNc(3,m,1,0,"ng-template",null,2,n.W1O)),2&t){const i=n.MAs(4);n.xp6(2),n.Q6J("ngIf",e.itensCarrinho.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[h.Bz.forChild(f),h.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.ez,_,c.u5]}),o})()}}]);