import{j as i}from"./jsx-runtime-DEdD30eg.js";import"./index-PkCEgQNm.js";import"./index-Ix-rRGHL.js";import{B}from"./index-Do_UZMKO.js";import"./index-D5oed_qF.js";import"./index-Cl3rke5C.js";import"./index-CRYvl8gG.js";import"./index-BUpQd2ap.js";import"./index-DjHFN3V-.js";import"./index-CKR8oQ-q.js";import"./index-CXLihdly.js";import"./index-B-JpnJ7o.js";import"./index-D4-Y4jVu.js";import"./index-mmiWYVBe.js";import"./index-BAQLUYAO.js";import{S as ee}from"./index-rStkvsg0.js";import"./index-Cq89qbBG.js";import"./index-CakAdBbL.js";import"./index-tvOiWzUI.js";import"./index-B_kSWs7Q.js";import"./index-BCOeAGTT.js";import{T as P}from"./index-CHCaRuU-.js";import{d as n,Y as re}from"./styled-components.browser.esm-DDAiM4bh.js";import"./index-RYns6xqu.js";import"./index-ts0_E7E4.js";import"./iconBase-DPnZGaMX.js";import"./index-BFmb1hA7.js";const ie=n.div`
  display: flex;
  flex-direction: column;
  width: ${r=>r.width};
  height: ${r=>r.height};
  padding: ${r=>r.padding};
  background-color: ${r=>r.backgroundcolor};
  border-radius: ${r=>r.borderradius};
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.178);
  font-family: Poppins, Helvetica, "sans-serif";
`,te=n.div`
  display: flex;
  margin-top: ${r=>r.margintop};
  justify-content: ${r=>r.justifycontent};
  flex-direction: ${r=>r.flexdirection};
  gap: ${r=>r.gap};
  align-items: ${r=>r.alignitems};
`,oe=n.div`
  margin: 0.5rem 0 0.5rem 0;
`,z=({maintext:r,title:A,backgroundcolor:_,borderradius:F,height:H,padding:Y,width:I,buttons:e,sizetext:N,sizetitle:O,textcolorcontainer:R,titlecolor:G,separatorcolor:J,separatorheight:K,separatorwidth:L,flexdirection:M,alignitems:Q,gap:U,onClose:V,justifycontent:W,margintop:X,...Z})=>{var a,d,l,c,g,s,p,m,f,u,x,h,y,v,q,k,w,b,T,j,C,$;return i.jsx(re,{shouldForwardProp:t=>!["backgroundcolor","borderradius","height","padding","width"].includes(t),children:i.jsxs(ie,{backgroundcolor:_,borderradius:F,height:H,padding:Y,width:I,onClose:V,...Z,children:[i.jsxs(oe,{children:[i.jsx(P,{as:"h1",size:O,color:G,children:A}),i.jsx(ee,{bgcolor:J,height:K,width:L}),i.jsx(P,{as:"p",size:N,color:R,children:r})]}),i.jsxs(te,{flexdirection:M,alignitems:Q,gap:U,justifycontent:W,margintop:X,children:[i.jsx(B,{textbutton:(a=e==null?void 0:e.confirmbutton)==null?void 0:a.textbutton,onClick:()=>{var t;return(t=e==null?void 0:e.confirmbutton)==null?void 0:t.onClick()},textdecoration:(d=e==null?void 0:e.confirmbutton)==null?void 0:d.textdecoration,textcolor:(l=e==null?void 0:e.confirmbutton)==null?void 0:l.textcolor,bgcolor:(c=e==null?void 0:e.confirmbutton)==null?void 0:c.bgcolor,hoverbgcolor:(g=e==null?void 0:e.confirmbutton)==null?void 0:g.hoverbgcolor,boxshadowbutton:(s=e==null?void 0:e.confirmbutton)==null?void 0:s.boxshadowbutton,widthbutton:(p=e==null?void 0:e.confirmbutton)==null?void 0:p.widthbutton,paddingbutton:(m=e==null?void 0:e.confirmbutton)==null?void 0:m.paddingbutton,borderbutton:(f=e==null?void 0:e.confirmbutton)==null?void 0:f.borderbutton,textcolorhover:(u=e==null?void 0:e.confirmbutton)==null?void 0:u.textcolorhover,fontweightbutton:(x=e==null?void 0:e.confirmbutton)==null?void 0:x.fontweightbutton}),i.jsx(B,{textbutton:(h=e==null?void 0:e.cancelbutton)==null?void 0:h.textbutton,onClick:()=>{var t;return(t=e==null?void 0:e.cancelbutton)==null?void 0:t.onClick()},textdecoration:(y=e==null?void 0:e.cancelbutton)==null?void 0:y.textdecoration,textcolor:(v=e==null?void 0:e.cancelbutton)==null?void 0:v.textcolor,bgcolor:(q=e==null?void 0:e.cancelbutton)==null?void 0:q.bgcolor,hoverbgcolor:(k=e==null?void 0:e.cancelbutton)==null?void 0:k.hoverbgcolor,boxshadowbutton:(w=e==null?void 0:e.cancelbutton)==null?void 0:w.boxshadowbutton,widthbutton:(b=e==null?void 0:e.cancelbutton)==null?void 0:b.widthbutton,paddingbutton:(T=e==null?void 0:e.cancelbutton)==null?void 0:T.paddingbutton,borderbutton:(j=e==null?void 0:e.cancelbutton)==null?void 0:j.borderbutton,textcolorhover:(C=e==null?void 0:e.cancelbutton)==null?void 0:C.textcolorhover,fontweightbutton:($=e==null?void 0:e.cancelbutton)==null?void 0:$.fontweightbutton})]})]})})};z.__docgenInfo={description:"",methods:[],displayName:"AlertDialog",props:{maintext:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},buttons:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  confirmbutton?: ButtonProps;\r
  cancelbutton?: ButtonProps;\r
}`,signature:{properties:[{key:"confirmbutton",value:{name:"signature",type:"object",raw:`{\r
  textdecoration?: string;\r
  textcolor?: string;\r
  textcolorhover?: string;\r
  bgcolor?: string;\r
  hoverbgcolor?: string;\r
  boxshadowbutton?: string;\r
  textbutton: string;\r
  widthbutton?: string;\r
  borderbutton?: string;\r
  fontweightbutton?: string;\r
  paddingbutton?: string;\r
  onClick: () => void;\r
}`,signature:{properties:[{key:"textdecoration",value:{name:"string",required:!1}},{key:"textcolor",value:{name:"string",required:!1}},{key:"textcolorhover",value:{name:"string",required:!1}},{key:"bgcolor",value:{name:"string",required:!1}},{key:"hoverbgcolor",value:{name:"string",required:!1}},{key:"boxshadowbutton",value:{name:"string",required:!1}},{key:"textbutton",value:{name:"string",required:!0}},{key:"widthbutton",value:{name:"string",required:!1}},{key:"borderbutton",value:{name:"string",required:!1}},{key:"fontweightbutton",value:{name:"string",required:!1}},{key:"paddingbutton",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}},{key:"cancelbutton",value:{name:"signature",type:"object",raw:`{\r
  textdecoration?: string;\r
  textcolor?: string;\r
  textcolorhover?: string;\r
  bgcolor?: string;\r
  hoverbgcolor?: string;\r
  boxshadowbutton?: string;\r
  textbutton: string;\r
  widthbutton?: string;\r
  borderbutton?: string;\r
  fontweightbutton?: string;\r
  paddingbutton?: string;\r
  onClick: () => void;\r
}`,signature:{properties:[{key:"textdecoration",value:{name:"string",required:!1}},{key:"textcolor",value:{name:"string",required:!1}},{key:"textcolorhover",value:{name:"string",required:!1}},{key:"bgcolor",value:{name:"string",required:!1}},{key:"hoverbgcolor",value:{name:"string",required:!1}},{key:"boxshadowbutton",value:{name:"string",required:!1}},{key:"textbutton",value:{name:"string",required:!0}},{key:"widthbutton",value:{name:"string",required:!1}},{key:"borderbutton",value:{name:"string",required:!1}},{key:"fontweightbutton",value:{name:"string",required:!1}},{key:"paddingbutton",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}}]}},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},borderradius:{required:!1,tsType:{name:"string"},description:""},backgroundcolor:{required:!1,tsType:{name:"string"},description:""},sizetitle:{required:!1,tsType:{name:"string"},description:""},sizetext:{required:!1,tsType:{name:"string"},description:""},titlecolor:{required:!1,tsType:{name:"string"},description:""},textcolorcontainer:{required:!1,tsType:{name:"string"},description:""},separatorcolor:{required:!1,tsType:{name:"string"},description:""},separatorheight:{required:!1,tsType:{name:"string"},description:""},separatorwidth:{required:!1,tsType:{name:"string"},description:""},flexdirection:{required:!1,tsType:{name:"string"},description:""},alignitems:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},gap:{required:!1,tsType:{name:"string"},description:""},justifycontent:{required:!1,tsType:{name:"string"},description:""},margintop:{required:!1,tsType:{name:"string"},description:""}}};const ze={title:"Design System/AlertDialog",component:z,argTypes:{maintext:{type:"string"},title:{type:"string"},textcolorcontainer:{control:"color"},flexdirection:{type:"string"},gap:{type:"string"},alignitems:{type:"string"},onClose:{action:"closed"},justifycontent:{type:"string"},margintop:{type:"string"}},tags:["autodocs"]},ne={confirmbutton:{bgcolor:"#2774b3",textbutton:"Confirmar",textdecoration:"none",textcolor:"#fff",hoverbgcolor:"#fff",textcolorhover:"#2774b3",boxshadowbutton:"0px 2px 5px rgba(0, 0, 0, 0.37)",onClick:()=>console.log("Confirm Button")},cancelbutton:{bgcolor:"transparent",textbutton:"Cancelar",textdecoration:"underline",textcolor:"#000",textcolorhover:"#2774b3",boxshadowbutton:"none",hoverbgcolor:"none",onClick:()=>console.log("Cancel Button")}},o={args:{buttons:ne,backgroundcolor:"#E2E8F0",height:"180px",width:"50%",padding:"20px",borderradius:".5rem",margintop:"1rem",gap:".5rem",justifycontent:"flex-end"}};var S,D,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    buttons: buttonsConfig,
    backgroundcolor: "#E2E8F0",
    height: "180px",
    width: "50%",
    padding: "20px",
    borderradius: ".5rem",
    margintop: "1rem",
    gap: ".5rem",
    justifycontent: "flex-end"
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const Ae=["Primary"];export{o as Primary,Ae as __namedExportsOrder,ze as default};
