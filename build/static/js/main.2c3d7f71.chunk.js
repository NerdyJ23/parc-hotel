(this["webpackJsonpparc-hotel"]=this["webpackJsonpparc-hotel"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"items":[{"id":1,"name":"Stylish Flannel","desc":"A staple of fashion, this flannel shirt will give anyone a confidence boost","price":22.59,"icon":"fancyShirt.jpg"},{"id":2,"name":"Fashionable Pants","desc":"Fine stitched jeans produced by some of the finest jean stitchers in the lands","price":25,"icon":"pants.jpg"},{"id":3,"name":"Sheer Scarf","desc":"A merino wool scarf made from the finest wools","price":50,"icon":"merinoWoolScarf.jpg"},{"id":4,"name":"Perfume","desc":"Don\'t you deserve to smell as good as you look? With this new perfume by Parc Scents, you can!","price":99.99,"icon":"perfume.jpg"},{"id":5,"name":"Hotel quality sheets (1000 GSM)","desc":"High end sheets, featuring 1000 GSM, these sheets will make you feel like you\'re in your very own hotel!","price":149.99,"icon":"sheets.jpg"}]}')},29:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(22),r=s.n(n),i=(s(29),s(2)),l=s(3),o=s(12),d=s(5),j=s(4),b=s(13),m=s(6),u=s(8),p=s.n(u),h=s(18),O=s(0),x=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(s,[{key:"send",value:function(){window.alert("message sent")}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container-fluid form",children:[Object(O.jsxs)("div",{className:"col-md-4",style:{padding:"15px",display:"inline-grid"},children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Email address"}),Object(O.jsx)("input",{type:"email",className:"form-control",name:"emailAddr",placeholder:"name@example.com"})]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"First Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"firstname",placeholder:"John"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Last Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",name:"lastname",placeholder:"Smith"})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Message"}),Object(O.jsx)("textarea",{style:{height:"25vh"},className:"form-control",name:"message",placeholder:"cool site"})]}),Object(O.jsx)("button",{type:"button",className:"btn",onClick:this.send,children:" Send "})]}),Object(O.jsxs)("div",{className:"col-md-8",style:{display:"inline-grid"},children:[Object(O.jsx)("p",{children:"Parc Hotel is located at 1091 Plenty Rd Bundoora. If you would like more information about our serviced apartments or to book accommodation for an upcoming stay, please contact us today.\u200b"}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsx)("iframe",{title:"Parc Hotel Map",style:{border:"0",height:"50vh"},width:"100%",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.4411064282053!2d145.04728205098087!3d-37.709322735748245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad648aacc4f75ad%3A0xeb5930b5d7f2964a!2sParc!5e0!3m2!1sen!2sau!4v1631832537423!5m2!1sen!2sau",allowFullScreen:"",loading:"lazy"})})," ",Object(O.jsx)("br",{})]})]})}}]),s}(a.Component),f=(s(31),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={slides:["ph-carousel-4.jpg","ph-carousel-2.jpg","ph-carousel-3.jpg","ph-carousel-1.jpg"],path:"./slides/"},a.renderCarouselIndicators=a.renderCarouselIndicators.bind(Object(o.a)(a)),a.renderCarouselItems=a.renderCarouselItems.bind(Object(o.a)(a)),a}return Object(l.a)(s,[{key:"carouselPrev",value:function(){p()("#carousel").carousel("prev")}},{key:"carouselNext",value:function(){p()("#carousel").carousel("next")}},{key:"renderCarouselItems",value:function(){for(var e=[],t=0;t<this.state.slides.length;t++){var s="carousel-item ";0===t&&(s+="active"),e.push(Object(O.jsx)("div",{className:s,children:Object(O.jsx)("img",{src:this.state.path+this.state.slides[t],className:"d-block w-100",alt:"Carousel","data-interval":"10000"})},t))}return console.log(e),e}},{key:"renderCarouselIndicators",value:function(){for(var e=[],t=0;t<this.state.slides.length;t++)e.push(Object(O.jsx)("li",{"data-slide-to":t},t));return console.log(e),e}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"container-fluid col-sm-10",children:Object(O.jsxs)("div",{id:"carousel",className:"carousel slide","data-ride":"carousel",children:[Object(O.jsx)("ol",{className:"carousel-indicators",children:this.renderCarouselIndicators()}),Object(O.jsx)("div",{className:"carousel-inner",children:this.renderCarouselItems()}),Object(O.jsxs)("a",{href:"#sliderPrev",className:"carousel-control-prev",role:"button",onClick:this.carouselPrev,"data-slide":"prev",children:[Object(O.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(O.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(O.jsxs)("a",{className:"carousel-control-next",href:"#sliderNext",role:"button",onClick:this.carouselNext,"data-slide":"next",children:[Object(O.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(O.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}}]),s}(a.Component)),v=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("div",{className:"row justify-content-center flex-row col-lg-12",style:{marginLeft:"0px"},children:this.props.loadStore()}),Object(O.jsx)("br",{})]})}}]),s}(a.Component),g=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"display-1",style:{textAlign:"center"},children:"Parc Hotel"}),Object(O.jsx)(f,{}),Object(O.jsx)(v,{onPurchase:this.props.addToCart,loadStore:this.props.loadStore,items:this.props.items})]})}}]),s}(a.Component),y=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("h2",{className:"display-2",style:{textAlign:"center"},children:"News"}),Object(O.jsx)("div",{className:"container-fluid col-sm-8 border",style:{backgroundColor:"white",marginBottom:"10px"},children:Object(O.jsxs)("div",{className:"panel panel-default",children:[Object(O.jsxs)("div",{className:"panel-header",children:[Object(O.jsx)("h3",{children:" Parc Hotel wins best hotel 2015 award"}),Object(O.jsx)("em",{children:Object(O.jsxs)("sub",{children:[Object(O.jsx)("span",{children:"John Smith"}),"    1/1/2015"]})})]}),Object(O.jsxs)("div",{className:"panel-body",style:{paddingBottom:"10px"},children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab numquam voluptas modi tenetur? Ex alias est sed aliquam optio architecto minima blanditiis aspernatur pariatur, dolores dignissimos ipsam, cum, veritatis aut."]})]})}),Object(O.jsx)("div",{className:"container-fluid col-sm-8 border",style:{backgroundColor:"white"},children:Object(O.jsxs)("div",{className:"panel panel-default",children:[Object(O.jsxs)("div",{className:"panel-header",children:[Object(O.jsx)("h3",{children:" Parc Hotel opens for business"}),Object(O.jsx)("em",{children:Object(O.jsxs)("sub",{children:[Object(O.jsx)("span",{children:"John Smith"}),"    1/1/2011"]})})]}),Object(O.jsxs)("div",{className:"panel-body",style:{paddingBottom:"10px"},children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab numquam voluptas modi tenetur? Ex alias est sed aliquam optio architecto minima blanditiis aspernatur pariatur, dolores dignissimos ipsam, cum, veritatis aut."]})]})})]})}}]),s}(a.Component),A=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container-fluid col-sm",style:{display:"inline-flex"},children:[Object(O.jsx)("div",{className:"media col-sm-4 container-fluid border",style:{margin:"10px",backgroundColor:"#ffffff"},children:Object(O.jsxs)("div",{style:{marginTop:"15px",marginBottom:"15px"},children:[Object(O.jsx)("div",{className:"media-body",style:{padding:"5px",textAlign:"center"},children:Object(O.jsx)("h4",{className:"display-5",children:"Our beachside resort"})}),Object(O.jsx)("img",{src:"./slides/ph-carousel-1.jpg",alt:"beach",className:"mr-3 img-thumbnail img-fluid float-left"})]})}),Object(O.jsx)("div",{className:"media col-sm-4 container-fluid border",style:{margin:"10px",backgroundColor:"#ffffff"},children:Object(O.jsxs)("div",{style:{marginTop:"15px",marginBottom:"15px"},children:[Object(O.jsx)("div",{className:"media-body",style:{padding:"5px",textAlign:"center"},children:Object(O.jsx)("h4",{className:"display-5",children:"One of our 5 star award winning hotel rooms"})}),Object(O.jsx)("img",{src:"./slides/ph-carousel-3.jpg",alt:"hotel room",className:"mr-3 img-thumbnail img-fluid float-left"})]})}),Object(O.jsx)("div",{className:"media col-sm-4 container-fluid border",style:{margin:"10px",backgroundColor:"#ffffff"},children:Object(O.jsxs)("div",{style:{marginTop:"15px",marginBottom:"15px"},children:[Object(O.jsx)("div",{className:"media-body",style:{padding:"5px",textAlign:"center"},children:Object(O.jsx)("h4",{className:"display-5",children:"Roberto"})}),Object(O.jsx)("img",{src:"./items/cfo.jpg",alt:"Roberto",className:"mr-5 img-thumbnail img-fluid float-left",style:{height:"55vh"}})]})})]})}}]),s}(a.Component),N=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"row col-md-10 border",id:"cart",children:[Object(O.jsx)("div",{className:"col-sm-1",children:Object(O.jsx)("img",{src:this.props.icon,alt:this.props.name,style:{margin:"5px"},className:"img-thumbnail img-fluid float-left"})}),Object(O.jsx)("div",{className:"col",style:{padding:"5px",height:"95%",position:"inherit"},children:Object(O.jsxs)("div",{class:"row",children:[Object(O.jsxs)("div",{className:"col-sm",children:[Object(O.jsx)("h5",{children:" Item Name"}),Object(O.jsx)("br",{}),this.props.name]}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("h5",{children:"Price"})," ",Object(O.jsx)("br",{}),"$",this.props.price]}),Object(O.jsxs)("div",{className:"col container",style:{display:"inline-flex"},children:[Object(O.jsx)("button",{type:"button",className:"btn btn-secondary",style:{padding:"10px"},onClick:function(){return e.props.modifyItemCount(e.props.id,-1)},children:"\xa0-\xa0"}),Object(O.jsx)("span",{type:"text",style:{padding:"15px",backgroundColor:"#d0ccbf"},children:this.props.count}),Object(O.jsx)("button",{type:"button",className:"btn btn-secondary",style:{padding:"10px"},onClick:function(){return e.props.modifyItemCount(e.props.id,1)},children:"+"})]}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("h5",{children:"Total Price"}),"$",Math.round(this.props.price*this.props.count*100)/100]}),Object(O.jsxs)("span",{children:[" ",Object(O.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.modifyItemCount(e.props.id,-1*e.props.count)},children:"Remove Item"})]})]})})]})}}]),s}(a.Component),C=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).showAll=a.showAll.bind(Object(o.a)(a)),a}return Object(l.a)(s,[{key:"showAll",value:function(){var e=this;return 0!==this.props.cart.length?this.props.cart.map((function(t){return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)(N,{id:t.id,name:t.name,price:t.price,count:t.count,icon:"./items/"+t.icon,modifyItemCount:e.props.modifyCart},t.id)," ",Object(O.jsx)("br",{})]})})):Object(O.jsx)("div",{className:"container-fluid col-sm-4 col-xl-12",style:{textAlign:"center",padding:"15px"},children:Object(O.jsx)("h4",{children:" No items in your cart! :O"})})}},{key:"calculateTotal",value:function(){var e=0;for(var t in this.props.cart)e+=this.props.cart[t].price*this.props.cart[t].count;return e=Math.round(100*e)/100,console.log(e),e}},{key:"checkout",value:function(){alert("checked out successfully!"),window.location.replace("/")}},{key:"render",value:function(){return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("div",{className:"container-fluid justify-left",children:Object(O.jsx)("div",{className:"row justify-content-center flex-row col-lg-12",children:this.showAll()})}),Object(O.jsxs)("div",{className:"container-fluid",style:{textAlign:"right"},children:[Object(O.jsxs)("h3",{children:[this.props.cart.length>0?" Cart Total: $"+this.calculateTotal():""," "]}),Object(O.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.checkout,children:"Checkout"})]})]})}}]),s}(a.Component),k=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)("div",{className:"container-flex col-sm-3",style:{display:"inline-grid"},children:Object(O.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(O.jsx)("img",{className:"card-img-top",src:this.props.icon,alt:"Card image cap"}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsxs)("h5",{className:"card-title",children:[this.props.name," - ",this.props.title]}),Object(O.jsx)("p",{className:"card-text",children:this.props.blurb})]})]})})})}}]),s}(a.Component),w=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={people:[{name:"Bryana Baudasso",title:"CEO",desc:"Founded the business in 2011, she has a passion for customer service and a radiant smile",icon:"./items/ceo.jpg"},{name:"Ursa Krier",title:"Operations Manager",desc:"With management skills that rival the USSR, the staff are all kept perfectly in line by Ursa",icon:"./items/ops.jpg"},{name:"\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588",title:"HR Correspondant",desc:"n\u0338\u034c\u0313\u035d\u0341\u035b\u0305\u035a\u0326\u032f\u0339\u0330o\u0336\u0352\u0350\u0339\u0319\u0354\u0324\u033c\u0319n\u0338\u033d\u0309\u0310\u0360\u0356\u0355e\u0334\u030d\u030c\u0341\u034c\u0322\u0321\u0326\u0347\u0332\u034e \u0337\u030f\u0344\u030f\u030c\u0312\u0326\u0331\u0353\u0327s\u0334\u0305\u030d\u031b\u0314\u0344\u0352\u033c\u0318\u0356\u0323\u031c\u035ah\u0338\u033e\u0312\u0301\u031d\u031c\u031f\u0318\u0318a\u0335\u0306\u030c\u0312\u0325l\u0336\u0352\u0357\u033d\u0324\u0347\u0319\u0355l\u0336\u0312\u0328\u0354 \u0336\u030d\u031a\u0324\u032e\u031d\u0326\u031el\u0335\u0305\u031b\u0344\u035d\u031c\u0328\u0324\u0356\u032b\u0325e\u0334\u0315\u033f\u0306\u0313\u0300\u0352\u0353\u0345\u034d\u0325\u032d\u0347a\u0338\u0302\u0300\u031b\u0305\u0339\u0324v\u0335\u0307\u0343\u0314\u030e\u0349\u031de\u0335\u0360\u0352\u0332\u032c\u0317\u032e\u0332 \u0334\u0310\u033d\u0304\u035d\u0360\u0331\u0331\u0318o\u0334\u0310\u0343\u0351\u0310\u0300\u034d\u033c\u033cu\u0334\u0344\u0305\u0327\u033c\u031er\u0336\u031b\u0351\u0349\u0348\u0318\u0330\u031f\u0359 \u0334\u0313\u0315\u031b\u034a\u0317\u033b\u032f\u033a\u031de\u0338\u0312\u0300\u0345\u0347m\u0338\u030c\u030d\u0305\u0312\u0342\u0331\u0356\u0339\u0322\u0323b\u0337\u035d\u0354\u0321r\u0337\u031a\u035d\u0308\u0357\u031b\u033f\u0327\u0326a\u0336\u0303\u0302\u0340\u0313\u034a\u0312\u032e\u0349\u0348\u0321\u033cc\u0336\u0303\u0308\u0308\u032a\u0347\u032e\u0355\u0319\u0359e\u0338\u0351\u0304\u0342\u0358\u035b\u0344\u0331\u0356\u031d\u034d",icon:"./items/hr.jpg"},{name:"Roberto Munday",title:"CFO",desc:"With a sharp mind, Roberto keeps the books balanced and in check.",icon:"./items/cfo.jpg"}]},a.showPeople=a.showPeople.bind(Object(o.a)(a)),a}return Object(l.a)(s,[{key:"showPeople",value:function(){var e=[];for(var t in this.state.people)e.push(Object(O.jsx)(k,{name:this.state.people[t].name,title:this.state.people[t].title,blurb:this.state.people[t].desc,icon:this.state.people[t].icon}));return e}},{key:"render",value:function(){return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("h1",{className:"display-2",style:{textAlign:"center"},children:"About Us"}),Object(O.jsx)("p",{className:"container-flex col-sm",style:{textAlign:"center"},children:this.showPeople()})]})}}]),s}(a.Component),B=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){p()("#footer div").css("color","white"),p()("#footer div").css("text-align","center")}},{key:"render",value:function(){return Object(O.jsxs)("nav",{id:"footer",className:"navbar navbar-expand-lg navbar-dark bg-dark",style:{marginTop:"15px"},children:[Object(O.jsxs)("div",{className:"col",children:["Term of Service",Object(O.jsx)("br",{}),"Privacy Policy",Object(O.jsx)("br",{}),"Contact Us",Object(O.jsx)("br",{}),"Careers",Object(O.jsx)("br",{}),"Sitemap",Object(O.jsx)("br",{})]}),Object(O.jsxs)("div",{className:"col",children:["Apartments",Object(O.jsx)("br",{}),"Facilities",Object(O.jsx)("br",{}),"Parc Vue Social",Object(O.jsx)("br",{}),"Business Travel",Object(O.jsx)("br",{}),"Long Stay           ",Object(O.jsx)("br",{})]}),Object(O.jsx)("div",{className:"col"}),Object(O.jsx)("div",{className:"col-sm-3",children:Object(O.jsxs)("i",{children:["Made in a panicked rushhhh help plz ",Object(O.jsx)("br",{}),Object(O.jsx)("sub",{children:"also heck you made me like react now wtf"})]})})]})}}]),s}(a.Component),M=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:"media col-md-5 col-lg-5 container-fluid border",style:{margin:"10px",backgroundColor:"#ffffff"},children:Object(O.jsxs)("div",{style:{marginTop:"15px",marginBottom:"15px"},children:[Object(O.jsx)("img",{src:this.props.icon,alt:this.props.name,className:"mr-3 img-thumbnail img-fluid float-left w-50"}),Object(O.jsxs)("div",{className:"media-body",style:{padding:"5px"},children:[Object(O.jsx)("h4",{children:this.props.name}),Object(O.jsxs)("span",{children:["$",this.props.price]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:Object(O.jsx)("em",{children:this.props.desc})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"button",className:"btn btn-lg float-right",onClick:function(){return e.props.buyItem(e.props.id)},style:{position:"relative",marginBottom:"10px"},children:"Buy"})]})]})})}}]),s}(a.Component),I=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){p()(".navbar-nav Link").on("click",(function(){p()(".navbar-nav").find("li.active").removeClass("active"),p()(this).parent("li").addClass("active")}))}},{key:"updateLink",value:function(){var e=window.location.pathname.slice(1,window.location.pathname.length);p()(".active").removeClass("active"),"/"===window.location.pathname?p()("#home").addClass("active"):p()("#".concat(e)).addClass("active")}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-collapse-xs navbar-expand-md bg-dark navbar-dark fixed-top",role:"navigation",onClick:this.updateLink,children:Object(O.jsxs)("div",{className:"container-fluid col-sm-12",children:[Object(O.jsx)("div",{className:"navbar-header",children:Object(O.jsx)(b.b,{to:"/",className:"navbar-brand",children:Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"Parc Hotel Logo",style:{width:100}})})}),Object(O.jsx)("div",{className:"collapse navbar-collapse",children:Object(O.jsxs)("ul",{className:"nav navbar-nav",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",id:"home",to:"/",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",id:"news",to:"/news",children:"News"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",id:"gallery",to:"/gallery",children:"Gallery"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",id:"contact",to:"/contact",children:"Contact Us"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(b.b,{className:"nav-link",id:"about",to:"/about",children:"About Us"})})]})}),Object(O.jsx)("div",{children:Object(O.jsx)("ul",{className:"navbar-nav nav",children:Object(O.jsx)("li",{children:Object(O.jsxs)(b.b,{className:"nav-link",id:"cart",to:"/cart",children:[Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"Cart Icon"})," ",Object(O.jsxs)("span",{className:"badge badge-secondary",children:[this.props.count," "]})," Cart"]})})})})]})})})}}]),s}(a.Component),S=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={cart:{count:0,items:[]},products:h.items},a.loadStore=function(){for(var e=[],t=0;t<a.state.products.length;t++)e.push(Object(O.jsx)(M,{name:a.state.products[t].name,price:a.state.products[t].price,id:a.state.products[t].id,desc:a.state.products[t].desc,buyItem:a.addToCart,icon:"./items/"+a.state.products[t].icon},a.state.products[t].id));return console.log(e),e},a.addToCart=function(e){for(var t in a.state.cart.items)if(a.state.cart.items[t].id===e){console.log("dupe found");var s=a.state.cart;return s.items[t].count=s.items[t].count+1,s.count=s.count+1,void a.setState({cart:s})}for(var c in console.log(e),a.state.products)if(a.state.products[c].id===e){console.log("works");var n=a.state.products[c];n.count=1,console.log("before : ".concat(a.state.cart.count));var r=a.state.cart;return r.items.push(n),r.count=r.count+1,a.setState({cart:r}),void console.log("after mod: ".concat(a.state.cart.count))}},a.modifyItemCount=function(e,t){for(var s in a.state.cart.items)if(console.log("is ".concat(s," === ").concat(e,"?")),a.state.cart.items[s].id===e){var c=a.state.cart;return c.items[s].count=c.items[s].count+t,c.items[s].count<=0&&c.items.splice(s,1),c.count=c.count+t,void a.setState({cart:c})}},console.log(h),a.addToCart=a.addToCart.bind(Object(o.a)(a)),a.loadStore=a.loadStore.bind(Object(o.a)(a)),p()("#root").css("background-color","#faf7eb"),a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)(c.a.Fragment,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(I,{count:this.state.cart.count}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{exact:!0,path:"/",component:function(){return Object(O.jsx)(g,{addToCart:e.addToCart,loadStore:e.loadStore,items:e.state.products})}}),Object(O.jsx)(m.a,{path:"/news",component:y}),Object(O.jsx)(m.a,{path:"/gallery",component:A}),Object(O.jsx)(m.a,{path:"/contact",component:x}),Object(O.jsx)(m.a,{path:"/about",component:w}),Object(O.jsx)(m.a,{path:"/cart",component:function(){return Object(O.jsx)(C,{cart:e.state.cart.items,modifyCart:e.modifyItemCount})}})]}),Object(O.jsx)(B,{})]})})}}]),s}(a.Component);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2c3d7f71.chunk.js.map