(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{20:function(e,t,s){},21:function(e,t,s){},24:function(e,t,s){},26:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s.n(a),i=s(14),o=s.n(i),r=(s(20),s(7)),l=s(3),m=s(4),d=s(6),u=s(5),b=(s(21),s(2)),p=s.n(b),h=(s(24),s(9),s(10),s(11),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(m.a)(s,[{key:"getBadgeClasses",value:function(e){console.log("new list",e.status);var t="form-control-new-";return t+="Completed"===e.status?"completed":"notcompleted",console.log(t),t}},{key:"getPillClasses",value:function(e){var t="badge badge-pill badge-";return t+="Completed"===e.status?"success":"warning"}},{key:"render",value:function(){var e=this;console.log("Item list",this.props.items);var t=this.props.items.map((function(t){return console.log("single item",t),Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)("div",{className:"newRow",children:Object(n.jsx)("input",{type:"text",className:e.getBadgeClasses(t),id:t.key,value:t.text,onChange:function(s){e.props.setUpdate(s.target.value,t.key)}})}),Object(n.jsxs)("div",{className:"newButtonRow",children:[Object(n.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){p()("Deleted !","Task deleted :)","error"),e.props.deleteItem(t.key)},children:"Delete Task !"}),Object(n.jsx)("button",{className:"btn dusty-grass-gradient btn-sm",onClick:function(){p()("Done !","Marked as done :)","success"),e.props.markdoneItem(t)},children:"Mark as Done !"}),Object(n.jsx)("button",{className:"btn sunny-morning-gradient btn-sm",onClick:function(){p()("Pending !","Marked as pending :)","info"),e.props.markincompleteItem(t)},children:"Mark as incomplete !"}),Object(n.jsxs)("span",{className:e.getPillClasses(t),children:["Status: ",t.status]})]})]},t.key)}));return Object(n.jsx)("div",{children:Object(n.jsx)("span",{children:t})})}}]),s}(a.Component)),g=function(e){return Object(n.jsx)("nav",{className:"heavy-rain-gradient navbar navbar-light bg-light",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"navbar-brand",children:[Object(n.jsx)("img",{alt:"",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png",height:"60",loading:"lazy"}),Object(n.jsxs)("strong",{children:["  ","To-Do Application"," "]}),Object(n.jsx)("span",{className:"badge badge-pill badge-secondary",children:e.totalTasks})]})})})},j=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={currentItem:{key:"",text:"",status:""},items:[{key:4,text:"Do cool projects in React",status:"Completed"},{key:9,text:"Learn JavaScript",status:"Not Completed"}]},e.handleSubmit=function(){var t=e.state.currentItem;if(""!==t.text){p()("Added !","To Do Saved !","success");var s=[].concat(Object(r.a)(e.state.items),[t]);e.setState({items:s,currentItem:{text:"",key:"",status:""}})}},e.totalTasks=function(){return e.props.state.items.length},e.deleteItem=function(t){var s=e.state.items.filter((function(e){return e.key!==t}));e.setState({items:s})},e.markdoneItem=function(t){var s=e.state.items.filter((function(e){return e.key!==t.key})),n={key:t.key,text:t.text,status:"Completed"},a=[].concat(Object(r.a)(s),[n]);e.setState({items:a,currentItem:{text:"",key:"",status:""}}),console.log("done filtered",t)},e.markincompleteItem=function(t){var s=e.state.items.filter((function(e){return e.key!==t.key})),n={key:t.key,text:t.text,status:"Not Completed"},a=[].concat(Object(r.a)(s),[n]);e.setState({items:a,currentItem:{text:"",key:"",status:""}}),console.log("done filtered",t)},e.setUpdate=function(t,s){console.log("items:"+e.state.items);var n=e.state.items;n.map((function(e){return e.key===s&&(e.text=t),""})),e.setState({items:n})},e.handleReset=function(){navigator.vibrate(100),p()("Completed !","Marked all as done !","warning");e.setState({items:[]})},e}return Object(m.a)(s,[{key:"checkComplete",value:function(){return 0===this.state.items.length?Object(n.jsx)("div",{className:"imagebox",children:Object(n.jsx)("img",{className:"img-completed",alt:"",align:"center",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/completed.png"})}):Object(n.jsx)("div",{className:"imagebox",children:Object(n.jsx)("img",{className:"img-completed",alt:"",align:"center",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/todo.png"})})}},{key:"render",value:function(){var e=this;return console.log(this.state.items),Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(g,{totalTasks:this.state.items.length}),Object(n.jsx)("div",{className:"container-for-tasks",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.currentItem.text,placeholder:"Enter tasks",onChange:function(t){e.setState({currentItem:{text:t.target.value,key:Date.now(),status:"Not Completed"}}),console.log(e.state)}}),Object(n.jsx)("button",{type:"button",className:"btn winter-neva-gradient waves-effect waves-light ",onClick:this.handleSubmit,children:"Add task"}),Object(n.jsx)("button",{className:"btn sunny-morning-gradient waves-effect waves-light ",onClick:this.handleReset,children:"Mark all as done"})]}),this.checkComplete()]})}),Object(n.jsx)("main",{className:"container",children:Object(n.jsx)(h,{items:this.state.items,status:this.state.items.status,markdoneItem:this.markdoneItem,markincompleteItem:this.markincompleteItem,setUpdate:this.setUpdate,deleteItem:this.deleteItem})})]})}}]),s}(a.Component),k=(s(25),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,27)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))});o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.537410c1.chunk.js.map