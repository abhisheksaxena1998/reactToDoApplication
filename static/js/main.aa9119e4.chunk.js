(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{20:function(t,e,s){},21:function(t,e,s){},24:function(t,e,s){},26:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s(1),c=s.n(a),i=s(14),o=s.n(i),r=(s(20),s(7)),l=s(3),m=s(4),d=s(6),u=s(5),b=(s(21),s(2)),h=s.n(b),p=(s(24),s(9),s(10),s(11),function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(m.a)(s,[{key:"getBadgeClasses",value:function(t){console.log("new list",t.status);var e="form-control-new-"+t.status;return console.log(e),e}},{key:"render",value:function(){var t=this;console.log("Item list",this.props.items);var e=this.props.items.map((function(e){return console.log("single item",e),Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)("div",{className:"newRow",children:Object(n.jsx)("input",{type:"text",className:t.getBadgeClasses(e),id:e.key,value:e.text,onChange:function(s){t.props.setUpdate(s.target.value,e.key)}})}),Object(n.jsxs)("div",{className:"newButtonRow",children:[Object(n.jsx)("button",{className:"btn btn-warning btn-sm",onClick:function(){h()("Deleted !","Task deleted :)","error"),t.props.deleteItem(e.key)},children:"Delete Task !"}),Object(n.jsx)("button",{className:"btn btn-info btn-sm",onClick:function(){h()("Done !","Marked as done :)","success"),t.props.markdoneItem(e)},children:"Mark as Done !"}),Object(n.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){h()("Pending !","Marked as pending :)","info"),t.props.markincompleteItem(e)},children:"Mark as incomplete !"})]})]},e.key)}));return Object(n.jsx)("div",{children:Object(n.jsx)("span",{children:e})})}}]),s}(a.Component)),j=function(t){return Object(n.jsx)("nav",{className:"heavy-rain-gradient navbar navbar-light bg-light",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"navbar-brand",children:[Object(n.jsx)("img",{alt:"",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png",height:"60",loading:"lazy"}),Object(n.jsxs)("strong",{children:["  ","To-Do Application"," "]}),Object(n.jsx)("span",{className:"badge badge-pill badge-secondary",children:t.totalTasks})]})})})},g=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={currentItem:{key:"",text:"",status:""},items:[{key:1,text:"Learn JavaScript",status:"completed"},{key:4,text:"Do cool projects in React",status:"completed"},{key:9,text:"Do cool projects",status:"notcompleted"}]},t.handleSubmit=function(){var e=t.state.currentItem;if(""!==e.text){h()("Added !","To Do Saved !","success");var s=[].concat(Object(r.a)(t.state.items),[e]);t.setState({items:s,currentItem:{text:"",key:"",status:""}})}},t.totalTasks=function(){return t.props.state.items.length},t.deleteItem=function(e){var s=t.state.items.filter((function(t){return t.key!==e}));t.setState({items:s})},t.markdoneItem=function(e){var s=t.state.items.filter((function(t){return t.key!==e.key})),n={key:e.key,text:e.text,status:"completed"},a=[].concat(Object(r.a)(s),[n]);t.setState({items:a,currentItem:{text:"",key:"",status:""}}),console.log("done filtered",e)},t.markincompleteItem=function(e){var s=t.state.items.filter((function(t){return t.key!==e.key})),n={key:e.key,text:e.text,status:"notcompleted"},a=[].concat(Object(r.a)(s),[n]);t.setState({items:a,currentItem:{text:"",key:"",status:""}}),console.log("done filtered",e)},t.setUpdate=function(e,s){console.log("items:"+t.state.items);var n=t.state.items;n.map((function(t){return t.key===s&&(t.text=e),""})),t.setState({items:n})},t.handleReset=function(){navigator.vibrate(100),h()("Completed !","Marked all as done !","warning");t.setState({items:[]})},t}return Object(m.a)(s,[{key:"checkComplete",value:function(){return 0===this.state.items.length?Object(n.jsx)("div",{className:"imagebox",children:Object(n.jsx)("img",{className:"img-completed",alt:"",align:"center",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/completed.png"})}):Object(n.jsx)("div",{className:"imagebox",children:Object(n.jsx)("img",{className:"img-completed",alt:"",align:"center",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/todo.png"})})}},{key:"render",value:function(){var t=this;return console.log(this.state.items),Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(j,{totalTasks:this.state.items.length}),Object(n.jsx)("div",{className:"container-for-tasks",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.currentItem.text,placeholder:"Enter tasks",onChange:function(e){t.setState({currentItem:{text:e.target.value,key:Date.now(),status:"notcompleted"}}),console.log(t.state)}}),Object(n.jsx)("button",{type:"button",className:"btn blue-gradient waves-effect waves-light ",onClick:this.handleSubmit,children:"Add task"}),Object(n.jsx)("button",{className:"btn blue-gradient waves-effect waves-light ",onClick:this.handleReset,children:"Mark all as done"})]}),this.checkComplete()]})}),Object(n.jsx)("main",{className:"container",children:Object(n.jsx)(p,{items:this.state.items,status:this.state.items.status,markdoneItem:this.markdoneItem,markincompleteItem:this.markincompleteItem,setUpdate:this.setUpdate,deleteItem:this.deleteItem})})]})}}]),s}(a.Component),k=(s(25),function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,27)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),c(t),i(t)}))});o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.aa9119e4.chunk.js.map