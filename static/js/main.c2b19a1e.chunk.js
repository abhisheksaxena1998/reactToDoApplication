(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(13),r=n.n(i),o=(n(20),n(14)),l=n(3),d=n(4),m=n(6),u=n(5),h=(n(21),n(2)),b=n.n(h),j=(n(24),n(8),n(9),n(10),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;console.log("Item list",this.props.items);var t=this.props.items.map((function(t){return Object(a.jsxs)("div",{className:"list",children:[Object(a.jsx)("div",{className:"newRow",children:Object(a.jsx)("input",{type:"text",className:"form-control",id:t.key,value:t.text,onChange:function(n){e.props.setUpdate(n.target.value,t.key)}})}),Object(a.jsx)("div",{className:"newButtonRow",children:Object(a.jsx)("button",{className:"btn btn-warning btn-sm",onClick:function(){b()("Deleted !","Marked as done :)","error"),e.props.deleteItem(t.key)},children:"Mark as Done !"})})]},t.key)}));return Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:t})})}}]),n}(s.Component)),p=function(e){return Object(a.jsx)("nav",{className:"heavy-rain-gradient navbar navbar-light bg-light",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"navbar-brand",children:[Object(a.jsx)("img",{alt:"",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png",height:"60",loading:"lazy"}),Object(a.jsxs)("strong",{children:["  ","To-Do Application"," "]}),Object(a.jsx)("span",{className:"badge badge-pill badge-secondary",children:e.totalTasks})]})})})},g=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={currentItem:{key:"",text:""},items:[{key:1,text:"Learn JavaScript"},{key:4,text:"Do cool projects in React"}]},e.handleSubmit=function(){var t=e.state.currentItem;if(""!==t.text){b()("Added !","To Do Saved !","success");var n=[].concat(Object(o.a)(e.state.items),[t]);e.setState({items:n,currentItem:{text:"",key:""}})}},e.totalTasks=function(){return e.props.state.items.length},e.deleteItem=function(t){var n=e.state.items.filter((function(e){return e.key!==t}));e.setState({items:n})},e.setUpdate=function(t,n){console.log("items:"+e.state.items);var a=e.state.items;a.map((function(e){return e.key===n&&(e.text=t),""})),e.setState({items:a})},e.handleReset=function(){navigator.vibrate(100),b()("Completed !","Marked all as done !","warning");e.setState({items:[]})},e}return Object(d.a)(n,[{key:"checkComplete",value:function(){if(0===this.state.items.length)return Object(a.jsx)("div",{className:"imagebox",children:Object(a.jsx)("img",{className:"img-completed",alt:"",align:"center",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/completed.png"})})}},{key:"render",value:function(){var e=this;return console.log(this.state.items),Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(p,{totalTasks:this.state.items.length}),Object(a.jsx)("div",{className:"container-for-tasks",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("input",{type:"text",className:"form-control",value:this.state.currentItem.text,placeholder:"Enter tasks",onChange:function(t){e.setState({currentItem:{text:t.target.value,key:Date.now()}}),console.log(e.state)}}),Object(a.jsx)("button",{type:"button",className:"btn blue-gradient waves-effect waves-light ",onClick:this.handleSubmit,children:"Add task"}),Object(a.jsx)("button",{className:"btn blue-gradient waves-effect waves-light ",onClick:this.handleReset,children:"Mark all as done"})]}),this.checkComplete()]})}),Object(a.jsx)("main",{className:"container",children:Object(a.jsx)(j,{items:this.state.items,setUpdate:this.setUpdate,deleteItem:this.deleteItem})})]})}}]),n}(s.Component),v=(n(25),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))});r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.c2b19a1e.chunk.js.map