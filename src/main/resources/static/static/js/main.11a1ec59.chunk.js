(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,a){e.exports=a(158)},105:function(e,t,a){},106:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(28),c=a.n(l),o=(a(105),a(9)),s=a(10),i=a(12),m=a(11),d=a(13),u=(a(106),a(16)),p=a.n(u),E=(a(58),a(84)),h=(a(132),a(133),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={employees:[],columnDefs:[{headerName:"Id",field:"id",sortable:!0,filter:!0,autoHeight:!0},{headerName:"First Name",field:"firstname",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Last Name",field:"lastname",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Address",field:"address",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Phone",field:"phone",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Email",field:"email",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Date of birth",field:"date_of_birth",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Username",field:"username",sortable:!0,filter:!0,autoHeight:!0},{headerName:"Password",field:"password",sortable:!0,filter:!0,autoHeight:!0}]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/employee/viewall").then((function(e){return e.data})).then((function(t){e.setState({employees:t}),e.setState({employees:e.state.employees.filter((function(e){return null!=e.firstname}))}),console.log(e.state.employees)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{backgroundColor:"white",padding:"10px"}},r.a.createElement("div",{style:{width:"100%"},className:"col-md-12 ag-theme-balham"},r.a.createElement(E.AgGridReact,{domLayout:"autoHeight",colResizeDefault:"true",columnDefs:this.state.columnDefs,rowData:this.state.employees})))}}]),t}(n.Component)),f=a(38),b=a(5),y=a(8),v=a(7),g=a(26),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstname:"",lastname:"",address:"",phone:"",email:"",date_of_birth:"",username:"",password:""},a.handleInput=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.formSubmit=function(e){e.preventDefault();var t={firstname:a.state.firstname,lastname:a.state.lastname,address:a.state.address,phone:a.state.phone,email:a.state.email,date_of_birth:a.state.date_of_birth,username:a.state.username,password:a.state.password};p.a.post("/employee/add",t).then((function(e){console.log(e),200===e.status&&alert("Registered Succesfully")}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"10px",backgroundColor:"white"},className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h2",{className:"text-center"},"Add Employee"))),r.a.createElement("div",{style:{backgroundColor:"white"},className:"row"},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(b.a,{onSubmit:this.formSubmit},r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Name"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(y.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a.Control,{onChange:this.handleInput,name:"firstname",id:"firstName",type:"text",placeholder:"First Name"})),r.a.createElement(v.a,null,r.a.createElement(b.a.Control,{onChange:this.handleInput,name:"lastname",id:"lastName",type:"text",placeholder:"Last Name"}))))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Address"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.handleInput,id:"address",name:"address",as:"textarea",placeholder:"Address"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Email"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.handleInput,id:"email",name:"email",type:"email",placeholder:"Email"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Phone"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.handleInput,name:"phone",id:"phone",type:"text",placeholder:"Phone Number"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Date of birth"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.handleInput,name:"date_of_birth",id:"date_of_birth",type:"date"}))),r.a.createElement("span",null,r.a.createElement("div",{className:"row",style:{borderBottom:"1px solid #A9A9A9",paddingBottom:"5px",marginBottom:"30px"}})),r.a.createElement(b.a.Group,{as:y.a,style:{marginTop:"2px"}},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Username"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.handleInput,name:"username",id:"username",type:"text",placeholder:"Username"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Password"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.handleInput,name:"password",id:"password",type:"password",placeholder:"Password"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Confirm Password"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.handleInput,name:"confirm",id:"confirm",type:"password",placeholder:"Confirm Password"}))),r.a.createElement("div",{as:y.a},r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(g.a,{size:"lg",align:"center",className:"text-center",type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("br",null))))),r.a.createElement("div",{className:"col-md-3"})))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allEmployees:[],allProjects:[],title:"",description:"",priority:"Medium",story_points:0,project_id:0,sprint:null,assignee:102,assigned_to:null,date_created:"2020-01-19",status:"Ready For Review",date_ended:null},a.controlInput=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.submitForm=function(e){e.preventDefault();var t={title:a.state.title,description:a.state.description,priority:a.state.priority,story_points:a.state.story_points,project_id:{id:a.state.project_id},sprint:a.state.sprint,assignee:{id:a.state.assignee},assigned_to:{id:a.state.assigned_to},date_created:a.state.date_created,status:a.state.status,date_ended:null};p.a.post("/jira/add",t).then((function(e){console.log(e),200===e.status&&alert("Registered Succesfully")}))},a.componentDidMount=function(){p.a.get("/employee/getnames").then((function(e){return e.data})).then((function(e){a.setState({allEmployees:e}),a.setState({allEmployees:a.state.allEmployees.filter((function(e){return null!=e.firstname}))}),console.log(a.state.allEmployees)})),p.a.get("/project/getnames").then((function(e){return e.data})).then((function(e){a.setState({allProjects:e}),console.log(a.state.allProjects)}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"10px",backgroundColor:"white"},className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h2",{className:"text-center"},"Add Jira"))),r.a.createElement("div",{style:{backgroundColor:"white"},className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement(b.a,{onSubmit:this.submitForm},r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Title"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"title",id:"title",type:"text",placeholder:"Title"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Description"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"description",id:"description",as:"textarea",placeholder:"Description"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Priority"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"priority",id:"priority",as:"select"},r.a.createElement("option",{value:"High"},"High"),r.a.createElement("option",{value:"Medium"},"Medium"),r.a.createElement("option",{value:"Low"},"Low")))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Story Points"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"story_points",id:"story_points",type:"number",min:"0",max:"10"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Project"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"project_id",id:"project_id",as:"select"},this.state.allProjects.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})),r.a.createElement("option",{value:"1"},"1 - DAC Refinement"),r.a.createElement("option",{value:"2"},"2 - DAM Refinement"),r.a.createElement("option",{value:"3"},"3 - CES Refinement")))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Sprint"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"sprint",id:"sprint",as:"select"},r.a.createElement("option",{value:"52.1"},"52.1"),r.a.createElement("option",{value:"52.2"},"52.2"),r.a.createElement("option",{value:"53.1"},"53.1")))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Assignee"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"assignee",id:"assignee",plaintext:!0,readOnly:!0,defaultValue:"Praful Martis"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Assigned To"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"assigned_to",id:"assigned_to",as:"select"},r.a.createElement("option",null,"--Select--"),this.state.allEmployees.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.firstname+" "+e.lastname)}))))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Date Created"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"date_created",id:"date_created",plaintext:!0,readOnly:!0,defaultValue:"2020-02-21"}))),r.a.createElement(b.a.Group,{as:y.a,style:{}},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Status"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"status",id:"status",as:"select"},r.a.createElement("option",{value:"Ready for review"},"Ready For review"),r.a.createElement("option",{value:"Ready"},"Ready"),r.a.createElement("option",{value:"In Play"},"In Play")))),r.a.createElement("div",{as:y.a},r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(g.a,{size:"lg",align:"center",className:"text-center",type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("br",null))))),r.a.createElement("div",{className:"col-md-2"})))}}]),t}(n.Component),w=a(54),C=(a(81),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={jiras:[],tableContent:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/jira/viewall").then((function(e){return e.data})).then((function(t){e.setState({jiras:t}),console.log(e.state.jiras);var a=[];e.state.jiras.forEach((function(e){var t={id:e.id,title:e.title,description:e.description,priority:e.priority,story_points:e.story_points,project_id:null!=e.project?e.project.id:"Not Assigned",sprint:e.sprint,assignee:e.assignee.firstname+" "+e.assignee.lastname,assigned_to:e.assigned_to.firstname+" "+e.assigned_to.lastname,date_created:e.date_created,status:e.status,date_ended:e.date_ended};a.push(t)})),e.setState({tableContent:a})}))}},{key:"render",value:function(){var e={columns:[{label:"ID",field:"id",sort:"asc"},{label:"Title",field:"title",sort:"asc"},{label:"Description",field:"description",sort:"asc"},{label:"Priority",field:"priority",sort:"asc"},{label:"Story Points",field:"story_points",sort:"asc"},{label:"Project ID",field:"project_id",sort:"asc"},{label:"Sprint",field:"sprint",sort:"asc"},{label:"Assignee",field:"assignee",sort:"asc"},{label:"Assigned To",field:"assigned_to",sort:"asc"},{label:"Date Created",field:"date_created",sort:"asc"},{label:"Status",field:"status",sort:"asc"},{label:"Date Ended",field:"date_ended",sort:"asc"}],rows:this.state.tableContent};return r.a.createElement("div",{className:"row",style:{backgroundColor:"white",padding:"10px"}},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(w.c,{striped:!0,hover:!0,responsive:!0,data:e})))}}]),t}(n.Component)),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[],dataDisplay:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/project/viewall").then((function(e){return e.data})).then((function(t){e.setState({projects:t}),console.log(e.state.projects);var a=[];e.state.projects.forEach((function(e){var t={id:e.id,name:e.name,description:e.description,project_head:e.project_head.firstname+" "+e.project_head.lastname};a.push(t)})),e.setState({dataDisplay:a}),console.log(e.state.dataDisplay)}))}},{key:"render",value:function(){var e={columns:[{label:"ID",field:"id",sort:"asc"},{label:"Name",field:"name",sort:"asc"},{label:"Description",field:"description",sort:"asc"},{label:"Project Head",field:"project_head",sort:"asc"}],rows:this.state.dataDisplay};return r.a.createElement("div",{className:"row",style:{backgroundColor:"white",padding:"10px"}},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(w.c,{striped:!0,bordered:!0,hover:!0,responsive:!0,data:e})))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={employeesList:[],name:"",description:"",project_head:null},a.controlInput=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.submitForm=function(e){e.preventDefault();var t={name:a.state.name,description:a.state.description,project_head:{id:a.state.project_head}};console.log(t),p.a.post("/project/add",t).then((function(e){console.log(e),200===e.status&&alert("Registered Succesfully")}))},a.componentDidMount=function(){p.a.get("/employee/getnames").then((function(e){return e.data})).then((function(e){a.setState({employeesList:e}),a.setState({employeesList:a.state.employeesList.filter((function(e){return null!=e.firstname}))}),console.log(a.state.employeesList)}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"10px",backgroundColor:"white"},className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h2",{className:"text-center"},"Add Project"))),r.a.createElement("div",{style:{backgroundColor:"white"},className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement(b.a,{onSubmit:this.submitForm},r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Name"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"name",id:"name",type:"text",placeholder:"Project Name"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Description"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"description",id:"description",as:"textarea",placeholder:"Project description"}))),r.a.createElement(b.a.Group,{as:y.a},r.a.createElement(b.a.Label,{column:!0,sm:"2"},"Project Head"),r.a.createElement(v.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:this.controlInput,name:"project_head",id:"project_head",as:"select"},r.a.createElement("option",null,"Select Head"),this.state.employeesList.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.firstname+" "+e.lastname)}))))),r.a.createElement("div",{as:y.a},r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(g.a,{size:"lg",align:"center",className:"text-center",type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("br",null))))),r.a.createElement("div",{className:"col-md-2"})))}}]),t}(n.Component),_=a(91),k=a(25),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allJiras:[]},a.componentDidMount=function(){p.a.get("https://akkiapp.herokuapp.com/jira/viewall").then((function(e){return e.data})).then((function(e){a.setState({allJiras:e}),console.log(a.state.allJiras)}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,null,r.a.createElement(k.a,{border:"primary"},r.a.createElement(k.a.Header,{className:"text-center h4"},"TPM - 19591"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{className:"text-center"},"Reduce DAC Build Time"),r.a.createElement(k.a.Text,{className:"text-center text-justify"},"As an IDL user, I want to reduce the DAC build time in order to make it faster to run.")),r.a.createElement(k.a.Footer,{className:"text-center"},r.a.createElement(g.a,{variant:"primary"},"Open"))),this.state.allJiras.map((function(e){return r.a.createElement(k.a,{key:e.id,border:"primary"},r.a.createElement(k.a.Header,{className:"text-center h4"},"TPM - ",e.id),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{className:"text-center"},e.title),r.a.createElement(k.a.Text,{className:"text-center text-justify"},e.description)),r.a.createElement(k.a.Footer,{className:"text-center"},r.a.createElement("a",{href:"/indi",class:"btn btn-primary",variant:"primary"},"Open")))})))}}]),t}(n.Component),S=a(92),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={jiraStatus:[]},a.componentDidMount=function(){p.a.get("/jira/getstatus").then((function(e){return e.data})).then((function(e){a.setState({jiraStatus:e}),console.log(a.state.jiraStatus)}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"white",padding:"20px"}},r.a.createElement("h2",{className:"text-center"},"Status"),r.a.createElement(y.a,null,r.a.createElement(v.a,{md:12},r.a.createElement(S.a,{size:"sm",responsive:!0,hover:!0,striped:!0,bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"#"))),r.a.createElement("tbody",null,this.state.jiraStatus.map((function(e){return r.a.createElement("tr",{key:e.status},r.a.createElement("td",null,e.status),r.a.createElement("td",null,e.count))})),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-success"},"DONE"),r.a.createElement("td",null,"5")),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-info"},"IN PLAY"),r.a.createElement("td",null,"2")),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-primary"},"ON HOLD"),r.a.createElement("td",null,"3")),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-danger"},"CANCELLED"),r.a.createElement("td",null,"2")))))))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(v.a,{md:8},r.a.createElement(A,null)),r.a.createElement(v.a,{md:1}),r.a.createElement(v.a,{md:3},r.a.createElement(D,null)))}}]),t}(n.Component),L=(a(154),a(82),a(155),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.4/sockjs.min.js",e.async=!0,document.body.appendChild(e);var t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js",t.async=!0,document.body.appendChild(t);var a=document.createElement("script");a.src="/js/main.js",a.async=!0,document.body.appendChild(a);var n=document.createElement("script");n.src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",n.async=!0,document.body.appendChild(n);var r=document.createElement("script");r.src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",r.async=!0,document.body.appendChild(r);var l=document.createElement("script");l.src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",l.async=!0,document.body.appendChild(l)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"main-content",className:"row",style:{backgroundColor:"white",padding:"10px"}},r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"username",type:"text",placeholder:"Enter Name"}),r.a.createElement("button",{id:"connect",className:"btn btn-default",type:"button"},"Connect"),r.a.createElement("button",{id:"disconnect",className:"btn btn-default",type:"button",disabled:"disabled"},"Disconnect")))),r.a.createElement("div",{className:"col-md-3"}),r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8",id:"chattab"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Enter your message"),r.a.createElement("textarea",{className:"form-control",id:"name",placeholder:"Enter yor message here"})),r.a.createElement("button",{id:"send",className:"btn btn-default",type:"button"},"Send"))),r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("table",{id:"conversation",className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ChatRoom"))),r.a.createElement("tbody",{id:"greetings"}))))}}]),t}(n.Component)),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{backgroundColor:"white",padding:"10px"}},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"ID : "),"22"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Title : "),"Reduce DAC Build Time"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Assignee : "),"Praful Martis"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Story Points : "),"4"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Project : "),"DAC Refinement")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Status : "),"4"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Sprint : "),"11.3"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Date Created : "),"26-Feb-2020"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Date Ended : "),"---"),r.a.createElement("p",null,r.a.createElement("span",{className:"h6"},"Priority : "),"High")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"text-center"},"Quick Actions"),r.a.createElement("div",{className:"text-center"},r.a.createElement(g.a,{variant:"success"},"Mark as Completed"),r.a.createElement(g.a,{variant:"danger"},"Mark as Aborted"),r.a.createElement(g.a,{variant:"warning"},"Mark as On hold"),r.a.createElement(g.a,{variant:"info"},"Mark as In Play"))))}}]),t}(n.Component),G=a(44),F=a(56),M=a(24),R=a(47),T=a(41),H=a(34),J=a(163),B=a(162),W={employees:r.a.createElement(h,null),jiras:r.a.createElement(C,null),addEmployeeForm:r.a.createElement(j,null),addJiraForm:r.a.createElement(N,null),projects:r.a.createElement(x,null),addProjectForm:r.a.createElement(O,null),yourJiras:r.a.createElement(I,null),liveText:r.a.createElement(L,null),individualJira:r.a.createElement(P,null)},U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selectedComponent:W.employees},a.changeComponent=function(e){a.setState({selectedComponent:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,null,r.a.createElement(G.a,{bg:"primary",variant:"dark",expand:"lg"},r.a.createElement(G.a.Brand,{href:"#home"},"Akshat Singhal App"),r.a.createElement(G.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(G.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(F.a,{variant:"pills",className:"mr-auto"},r.a.createElement(M.a,{title:"Employee",id:"basic-nav-dropdown"},r.a.createElement(M.a.Item,{href:"/employees"},"View All"),r.a.createElement(M.a.Item,{href:"/addnewemployee"},"Add New")),r.a.createElement(M.a,{title:"Jira",id:"basic-nav-dropdown"},r.a.createElement(M.a.Item,{href:"/jiras"},"View All"),r.a.createElement(M.a.Item,{href:"/addnewjira"},"Add New")),r.a.createElement(M.a,{title:"Project",id:"basic-nav-dropdown"},r.a.createElement(M.a.Item,{href:"/projects"},"View All"),r.a.createElement(M.a.Item,{href:"/addnewproject"},"Add New"))),r.a.createElement(F.a,{className:"mr-auto"},r.a.createElement(F.a.Link,{href:"/yourjiras",style:{color:"white"}},"Your Jiras"),r.a.createElement(M.a,{title:"Extras",id:"basic-nav-dropdown"},r.a.createElement(M.a.Item,{href:"/liveedit"},"Live Edit\xa0\xa0",r.a.createElement(J.a,{animated:!0,variant:"success",now:40,label:"Done ".concat(40,"%")})),r.a.createElement(M.a.Item,{href:"/individualjira"},"Individual Jiras\xa0\xa0",r.a.createElement(J.a,{animated:!0,variant:"success",now:50,label:"Done ".concat(50,"%")}))),r.a.createElement("div",null,r.a.createElement(B.a,{pill:!0,variant:"warning"},"Under Construction"))),r.a.createElement(b.a,{inline:!0},r.a.createElement(R.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(g.a,{variant:"success"},"Search")))),r.a.createElement("div",{className:"container-fluid",style:{marginTop:"10px",padding:"10px"}},r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/yourjiras"},W.yourJiras),r.a.createElement(H.a,{path:"/employees"},W.employees),r.a.createElement(H.a,{path:"/jiras"},W.jiras),r.a.createElement(H.a,{path:"/projects"},W.projects),r.a.createElement(H.a,{path:"/addnewproject"},W.addProjectForm),r.a.createElement(H.a,{path:"/addnewjira"},W.addJiraForm),r.a.createElement(H.a,{path:"/addnewemployee"},W.addEmployeeForm),r.a.createElement(H.a,{path:"/liveedit"},W.liveText),r.a.createElement(H.a,{path:"/individualjira"},W.individualJira))))}}]),t}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()}},[[100,1,2]]]);
//# sourceMappingURL=main.11a1ec59.chunk.js.map