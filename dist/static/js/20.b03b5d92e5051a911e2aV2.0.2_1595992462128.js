webpackJsonp([20],{nY80:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("pFYg"),a=i.n(s),o=i("INCx"),l=i.n(o),r=i("mvHQ"),n=i.n(r),u=(i("7+uW"),i("X2Oc")),c=i("diDo"),m={name:"curd",components:{},data:function(){return{temp_audit_app_name:"",app_list:[],colData:[{title:"名称",istrue:!0},{title:"应用",istrue:!1},{title:"团队",istrue:!1},{title:"类型",istrue:!0},{title:"Rank",istrue:!0},{title:"提交人",istrue:!0},{title:"提交时间",istrue:!0},{title:"状态",istrue:!0}],colOptions:["名称","Rank","提交人","提交时间","状态","类型"],colSelect:[],reverse:!1,activities:[{content:"提交漏洞",timestamp:"2018-04-12 20:46",size:"large",type:"primary",icon:"el-icon-more"},{content:"修改漏洞",timestamp:"2018-04-03 20:46",color:"#0bbd87"},{content:"处理漏洞",timestamp:"2018-04-03 20:46",size:"large"},{content:"完成漏洞",timestamp:"2018-04-03 20:46"}],old_app_name:"",timelineVisible:!1,isShowEditAppID:!1,cur_audit_status:"/auditing/confirm",auditVisible:!1,solveVisible:!1,delayVisible:!1,select_vul_status:null,app_id:null,app_id_name:null,status_options:[{value:"0",label:"未审核"}],rules:{vul_name:[{required:!0,message:"请输入漏洞标题",trigger:"blur"}],app_id:[{required:!0,message:"请选择关联应用",trigger:"change"}],layer:[{required:!0,message:"请选择漏洞层面",trigger:"blur"}],vul_type:[{required:!0,message:"请选择漏洞类型",trigger:"blur"}],self_rank:[{required:!0,message:"请填写Rank值",trigger:"blur"}],vul_source:[{required:!0,message:"请选择漏洞来源",trigger:"blur"}]},app_list_url:"/api/app/select",paper_list_url:"/api/paper/list",is_report_visible:!1,is_solution_visible:!1,cronPopover:!1,cron:"",rank:0,links:[],task_type:"立即任务",url:"",md_report:"一、URL地址：\n二、发现方式：\n\n\n请尽量详细描述，保留场景/截图/重现方法等 \n\n\n三、漏洞证明：\n\n\n请在这里写POC\n\n\n",form_errors:[],cur_entity:{},add_url:"/api/vul/add",list_url:"/api/vul/list",del_url:"/api/vul/del",send_email_url:"/api/vul/send_notification_email",delay_url:"/api/vul/delay",role_list_url:"/api/role/select",current_vullog_list:[],vullog_vul_name:"",del_list:new URLSearchParams,tableData:[],select_word:"",cur_page:1,page_size:10,total:0,multipleSelection:[],editVisible:!1,createVisible:!1,form:{self_rank:"1",layer:10,app_id:-1},delayForm:{},role_options:[{value:"-",label:"-"}],static_config:c.b}},mounted:function(){window.onbeforeunload=function(t){return(t=t||window.event)&&(t.returnValue="关闭提示"),"关闭提示"}},updated:function(){this.$desensitive()},watch:{colOptions:function(t){var e=this,i=this.colSelect.filter(function(e){return t.indexOf(e)<0});this.colData.filter(function(t){console.log(i.toString(),t.title,i.toString().indexOf(t.title)),-1!=i.indexOf(t.title)?(t.istrue=!1,e.$nextTick(function(){e.$refs.tableDataRef.doLayout()})):(t.istrue=!0,e.$nextTick(function(){e.$refs.tableDataRef.doLayout()}))})}},created:function(){for(var t=0;t<this.colData.length;t++)this.colSelect.push(this.colData[t].title),this.colData[t].title;this.getStatusGroup(),this.getRoleList(),this.getData()},computed:{isShowText:function(){return"{}"==n()(this.cur_entity)},isShowNoOp:function(){return!(this.isShowText||this.isShowConfirmButton||this.isShowApplyRetestButton||this.isShowAuditButton||this.isShowSubmitRetestButton)},isShowAuditDetail:function(){return"/auditing/confirm"==this.cur_audit_status},isShowAuditButton:function(){return!!this.cur_entity&&"10"==this.cur_entity.vul_status},isShowConfirmButton:function(){return!!this.cur_entity&&"40"==this.cur_entity.vul_status},isShowApplyRetestButton:function(){return!!this.cur_entity&&"50"==this.cur_entity.vul_status},isShowSubmitRetestButton:function(){return!!this.cur_entity&&"55"==this.cur_entity.vul_status},colortype:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"success":this.form.self_rank<11?"":this.form.self_rank<16?"danger":this.form.self_rank<=20?"warning":void 0},risklevel:function(){return this.form.self_rank>=0&&this.form.self_rank<6?"低危":this.form.self_rank<11?"中危":this.form.self_rank<16?"高危":this.form.self_rank<=20?"严重":void 0},real_risklevel:function(){return this.form.real_rank>=0&&this.form.real_rank<6?"低危":this.form.real_rank<11?"中危":this.form.real_rank<16?"高危":this.form.real_rank<=20?"严重":void 0}},filters:{getDateDiff_timestamp:function(t){return Object(u.e)(t)},formatDate:function(t){var e=new Date(l()(1e3*t));return Object(u.c)(e,"yyyy-MM-dd HH:mm:ss")},statusFilter:function(t){return{0:"info",1:"success","-1":"danger"}[t]},statusNameFilter:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"其他";c.b[e][t];return c.b[e][t]?c.b[e][t]:i}},methods:{delayVul:function(t){var e=this;this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.delay_url,Object(u.h)(e.delayForm)).then(function(t){t.data.status>=1?(e.getData(),e.$message.success("成功")):e.$message.error("失败, 错误码: "+t.data.status)})}).catch(function(){}),this.delayVisible=!1},sendEmail:function(t){var e=this;this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.send_email_url,Object(u.h)({id:t})).then(function(t){t.data.status>=1?(e.getData(),e.$message.success("发送成功")):e.$message.error("发送失败, 错误码: "+t.data.status)})}).catch(function(){})},showTimeLine:function(t,e){var i=this;this.timelineVisible=!0,this.vullog_vul_name=e,this.$axios.get("api/vullog/list?vul_id="+t).then(function(t){console.log(t.data.result),i.current_vullog_list=t.data.result})},is_related_me:function(){return console.log("LOCAL STOARGE",localStorage.getItem("__IS_ONLYME__")),JSON.parse(localStorage.getItem("__IS_ONLYME__"))},isRelatedMeChange:function(t){console.log(t),localStorage.setItem("__IS_ONLYME__",n()(t)),this.getData(),this.getStatusGroup()},desensitive:function(){var t=document.querySelectorAll(".insight_sensitive");for(var e in t)t[e]&&"object"==a()(t[e])&&(t[e].innerHTML="*******")},exportCSV:function(){this.$axios({method:"get",url:"/api/vul/export",data:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder,vul_status:this.select_vul_status,is_related_me:this.is_related_me()?1:0},responseType:"blob"}).then(function(t){if(t.data){var e=window.URL.createObjectURL(t.data),i=document.createElement("a");i.style.display="none",i.href=e,i.setAttribute("download","vulns_export.csv"),document.body.appendChild(i),i.click()}})},updateCur_entity:function(){this.form=this.cur_entity,this.form.vul_type=this.cur_entity.vul_type.toString()},statusColor:function(t){return Object(u.g)(t)},rankColor:function(t){return Object(u.f)(t)},pocChange:function(t,e){this.form.vul_poc_html=e},solutionChange:function(t,e){this.form.vul_solution_html=e},$imgAdd:function(t,e){var i=this,s=new FormData;s.append("image",e),this.$axios({url:"/api/image/upload",method:"post",data:s,headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e),i.$refs.poc_editor.$img2Url(t,e.data.path)})},$imgAddSolution:function(t,e){var i=this,s=new FormData;s.append("image",e),this.$axios({url:"/api/image/upload",method:"post",data:s,headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e),i.$refs.solution_editor.$img2Url(t,e.data.path)})},handleSelect:function(t){this.form.app_id=t.id,this.form.app_name=t.value},handleSelectPaper:function(t){this.form.article_id=t.id,this.form.solution_name=t.value},querySearchAsync:function(t,e){var i=this;this.$axios.get(this.app_list_url,{params:{search:t}}).then(function(t){i.app_list=new Array,t.data.result.map(function(t){i.app_list.push({value:t.appname,id:t.id.toString()})}),e(i.app_list)})},querySearchPaperAsync:function(t,e){this.$axios.get(this.paper_list_url,{params:{search:t}}).then(function(t){var i=new Array;t.data.result.map(function(t){i.push({value:t.title,id:t.id})}),e(i)})},handleClose:function(t){this.$confirm("数据还未提交，确认关闭？").then(function(e){t()}).catch(function(t){})},getRoleList:function(){var t=this;this.$axios.get(this.role_list_url,{params:{type:0}}).then(function(e){t.role_options=e.data.result,console.log(t.role_options)})},sortChange:function(t,e,i){this.sortcolumn=t.prop,this.sortorder=t.order,this.getData()},viewUser:function(){if(this.cur_entity.id){var t=this.$router.resolve({name:"viewvulndetail",query:{id:this.cur_entity.id}});window.open(t.href,"_blank")}else this.$message.info("请选择数据")},getStatusGroup:function(){var t=this;console.log(this.is_related_me),this.$axios.get("api/vul/status/group?is_related_me="+(this.is_related_me()?1:0)).then(function(e){t.status_options=e.data.result})},doCreate:function(t){var e=this;(this.$refs.createForm?this.$refs.createForm:this.$refs.editForm).validate(function(t){t?e.$axios.post(e.add_url,Object(u.h)(e.form)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.createVisible=!1,e.editVisible=!1}):e.$message.error("提交失败，请填写相应信息")})},doAudit:function(t){var e=this;this.$axios.post("api"+this.cur_audit_status,Object(u.h)(this.form)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.auditVisible=!1})},doSolve:function(t){var e=this;this.$axios.post("api"+this.cur_audit_status,Object(u.h)(this.form)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.solveVisible=!1})},getData:function(){var t=this;this.$axios.get(this.list_url,{params:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder,vul_status:this.select_vul_status,is_related_me:this.is_related_me()?1:0}}).then(function(e){t.tableData=e.data.result,t.total=e.data.total,t.cur_entity={}})},handleSizeChange:function(t){this.page_size=t,this.getData()},handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleCurrentChangeRow:function(t){this.cur_entity=t},search:function(){this.getData()},handleEdit:function(t,e){this.form_errors=[],this.editVisible=!0,this.form=e,delete this.form.create_time,this.form.enable=1==e.enable?"1":"0",this.form.app_name=e.appname,this.form.article_id=e.article_id,this.form.vul_poc=filterXSS(e.vul_poc),this.form.vul_solution=filterXSS(e.vul_solution),this.form.vul_type=e.vul_type.toString(),this.old_app_name=this.form.app_name},handleSelectionChange:function(t){this.multipleSelection=t},dataDel:function(t){var e=this,i=null;if(t)i=t;else{if(this.multipleSelection.length<=0)return void this.$message.info("未选择任何数据");this.del_list=this.multipleSelection.map(function(t){return t.id}),i=this.del_list}this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.del_url,Object(u.h)({id:i})).then(function(t){t.data.status>=1?(e.getData(),e.$message.success("删除成功")):e.$message.error("删除失败, 错误码: "+t.data.status)})}).catch(function(){})},filterVulType:function(t,e,i){return console.log(t,e,i),e[i.property]===t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),t._v(" 漏洞\n      ")]),t._v(" "),i("el-breadcrumb-item",[t._v("漏洞管理")])],1)],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(e){t.createVisible=!0,t.form={enable:"1"}}}},[t._v("新增漏洞")]),t._v(" "),i("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入关键词"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),i("el-select",{staticClass:"handle-select mr10",attrs:{size:"mini",placeholder:"状态筛选"},model:{value:t.select_vul_status,callback:function(e){t.select_vul_status=e},expression:"select_vul_status"}},t._l(t.status_options,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}},[i("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),t._v(" "),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.count))])])}),1),t._v(" "),i("el-checkbox",{staticStyle:{"margin-left":"10px"},attrs:{checked:t.is_related_me()},on:{change:t.isRelatedMeChange}},[t._v("只看我")]),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),i("div",{staticStyle:{float:"right"}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.isShowText,expression:"isShowText"}],staticStyle:{"font-weight":"400",color:"#606266","font-size":"13px"}},[t._v("请选择一条数据以显示可操作项")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.isShowNoOp,expression:"isShowNoOp"}],staticStyle:{"font-weight":"400",color:"#606266","font-size":"13px"}},[t._v("无可用的操作")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShowAuditButton,expression:"isShowAuditButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){t.updateCur_entity(),t.temp_audit_app_name=t.form.appname,t.form.real_rank=t.form.self_rank,t.auditVisible=!0}}},[t._v("审核")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShowConfirmButton,expression:"isShowConfirmButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){t.updateCur_entity(),t.solveVisible=!0,t.cur_audit_status="/auditing/fixing"}}},[t._v("已知悉")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShowApplyRetestButton,expression:"isShowApplyRetestButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){t.updateCur_entity(),t.solveVisible=!0,t.cur_audit_status="/auditing/retest"}}},[t._v("申请复测")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShowSubmitRetestButton,expression:"isShowSubmitRetestButton"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){t.updateCur_entity(),t.solveVisible=!0,t.cur_audit_status="/auditing/fixed"}}},[t._v("提交复测")]),t._v(" "),i("el-button",{attrs:{size:"mini",icon:"iconfont  el-iconCSV1"},on:{click:function(e){return t.exportCSV()}}},[t._v("导出CSV")]),t._v(" "),i("el-button",{attrs:{size:"mini",icon:"search"},on:{click:function(e){return t.dataDel()}}},[t._v("批量删除")])],1)],1),t._v(" "),i("el-table",{ref:"tableDataRef",attrs:{data:t.tableData,border:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange,"current-change":t.handleCurrentChangeRow,"sort-change":t.sortChange}},[i("el-table-column",{attrs:{type:"selection",width:"45"}}),t._v(" "),t.colData[0].istrue?i("el-table-column",{attrs:{prop:"vul_name",label:"名称","min-width":"150",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"primary-title insight_sensitive",staticStyle:{cursor:"pointer !important"},on:{click:function(i){t.cur_entity=e.row,t.viewUser()}}},[t._v(t._s(e.row.vul_name))])]}}],null,!1,93826029)}):t._e(),t._v(" "),t.colData[1].istrue?i("el-table-column",{attrs:{prop:"appname",label:"应用","min-width":"100",sortable:"custom"}}):t._e(),t._v(" "),t.colData[2].istrue?i("el-table-column",{attrs:{prop:"group_name",label:"团队","min-width":"100",sortable:"custom"}}):t._e(),t._v(" "),t.colData[3].istrue?i("el-table-column",{attrs:{prop:"vul_type",label:"类型","min-width":"100",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"in-tag",style:{color:t.statusColor(e.row.vul_type)}},[t._v(t._s(t._f("statusNameFilter")(e.row.vul_type,"VUL_TYPE")))])]}}],null,!1,3627094911)}):t._e(),t._v(" "),t.colData[4].istrue?i("el-table-column",{attrs:{prop:"self_rank",label:"Rank","min-width":"70",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{style:{color:t.rankColor(e.row.self_rank),"font-weight":"bold"}},[t._v(t._s(e.row.self_rank))])]}}],null,!1,2340744742)}):t._e(),t._v(" "),t.colData[5].istrue?i("el-table-column",{attrs:{prop:"username",label:"提交人","min-width":"100",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"insight_sensitive"},[t._v(t._s(e.row.username))])]}}],null,!1,3763205443)}):t._e(),t._v(" "),t.colData[6].istrue?i("el-table-column",{attrs:{prop:"submit_time",label:"提交时间","min-width":"80",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{attrs:{effect:"light",content:t._f("formatDate")(e.row.submit_time),placement:"right"}},[i("span",[t._v(t._s(t._f("getDateDiff_timestamp")(e.row.submit_time)))])])]}}],null,!1,3649539276)}):t._e(),t._v(" "),i("el-table-column",{attrs:{prop:"vul_status",label:"状态","min-width":"70",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"in-tag",style:{color:t.statusColor(e.row.vul_status)}},[t._v(t._s(t._f("statusNameFilter")(e.row.vul_status,"VUL_STATUS","未处理")))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"编辑",expression:"'编辑'"}],attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[i("i",{staticClass:"el-iconbianji2 iconfont_no_margin sumeru_op_button"})]),t._v(" "),i("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"时间线",expression:"'时间线'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.showTimeLine(e.row.id,e.row.vul_name)}}},[i("svg",{staticClass:"icon sumeru_op_button",attrs:{t:"1578992339496",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2958",width:"15",height:"15"}},[i("path",{attrs:{d:"M593.92 549.888c0-45.56800001-36.864-82.432-82.432-82.432s-82.432 36.864-82.43199999 82.432L428.544 819.2 304.64 819.2l0-545.792c0-45.56800001-36.864-82.432-82.432-82.432s-82.432 36.864-82.432 82.432L139.264 819.2 20.48 819.2c-11.264 0-20.47999999 9.216-20.48 20.48s9.216 20.47999999 20.48 20.48l118.784 0 0 20.48c0 45.56800001 36.864 82.432 82.432 82.432S304.128 926.208 304.128 880.64l0-20.48 123.904 0 0 20.48c0 45.56800001 36.864 82.432 82.432 82.432s82.432-36.864 82.432-82.432l0-20.48L716.8 860.16l0 20.48c0 45.56800001 36.864 82.432 82.432 82.432 45.56800001 0 82.432-36.864 82.432-82.432l0-20.48 119.296 0c10.752 0 20.48-7.68 21.504-18.432 1.024-12.288-8.704-22.528-20.48-22.528l-120.32 0 0-682.496c0-45.56800001-36.864-82.432-82.43200001-82.432-45.56800001 0-82.432 36.864-82.43199999 82.432L716.8 819.2l-122.88 1e-8 0-269.31200001zM263.168 880.64c0 23.04-18.432 41.472-41.472 41.472s-41.472-18.432-41.472-41.472l0-607.232c0-23.04 18.432-41.472 41.472-41.472s41.472 18.432 41.472 41.472L263.168 880.64z m496.128-743.936c0-23.04 18.432-41.472 41.472-41.472s41.472 18.432 41.472 41.472L842.24 880.64c0 23.04-18.432 41.472-41.472 41.47200001s-41.472-18.432-41.472-41.47200001l0-743.936zM552.448 880.64c0 23.04-18.432 41.472-41.472 41.472s-41.472-18.432-41.472-41.472l0-330.752c0-23.04 18.432-41.472 41.472-41.472s41.472 18.432 41.472 41.472L552.448 880.64z","p-id":"2959"}})])]),t._v(" "),i("el-dropdown",{staticStyle:{"margin-left":"3px"}},[i("span",{staticClass:"el-dropdown-link"},[i("i",[i("svg",{staticClass:"icon",attrs:{t:"1586761903202",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2172",width:"15",height:"15"}},[i("path",{attrs:{d:"M576.0999 511.294942c0 35.056424-28.41926 63.475683-63.475683 63.475684s-63.475683-28.41926-63.475684-63.475684 28.41926-63.475683 63.475684-63.475683 63.475683 28.41926 63.475683 63.475683z m255.82655-63.272046c-35.056424 0-63.475683 28.41926-63.475684 63.475684s28.41926 63.475683 63.475684 63.475683 63.475683-28.41926 63.475683-63.475683-28.41926-63.475683-63.475683-63.475684z m-638.60549 0c-35.056424 0-63.475683 28.41926-63.475683 63.475684s28.41926 63.475683 63.475683 63.475683 63.475683-28.41926 63.475684-63.475683-28.418236-63.475683-63.475684-63.475684z","p-id":"2173",fill:"#707070"}})])])]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[i("span",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.sendEmail(e.row.id)}}},[i("i",[i("svg",{staticClass:"icon",attrs:{t:"1586762376540",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1380",width:"15",height:"15"}},[i("path",{attrs:{d:"M945.664 128h-867.328c-43.008 0-78.336 35.328-78.336 78.336v611.328c0 43.008 35.328 78.336 78.336 78.336h867.328c43.008 0 78.336-35.328 78.336-78.336V206.336c0-43.008-35.328-78.336-78.336-78.336z m17.92 273.92s-430.08 179.712-435.2 181.248c-5.12 1.536-13.824 4.096-31.232-3.072l-437.248-178.688v-65.024l456.704 186.88 446.976-185.856v64.512z","p-id":"1381"}})])]),t._v("\n                  发送邮件\n                ")])]),t._v(" "),i("el-dropdown-item",[i("span",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.delayForm.id=e.row.id,t.delayForm.delay_days=e.row.delay_days,t.delayVisible=!0}}},[i("i",[i("svg",{staticClass:"icon",attrs:{t:"1586765543659",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1676",width:"15",height:"15"}},[i("path",{attrs:{d:"M896 896v128h-64v-128h-128v-64h128v-128h64v128h128v64h-128zM576 192v384H256V512h256V192h64z m363.2 448c12.224-40.832 20.8-83.2 20.8-128a448 448 0 1 0-448 448c44.8 0 87.168-8.576 128-20.8v68.032A511.488 511.488 0 0 1 512 1024a512 512 0 1 1 512-512c0 44.288-6.208 87.04-16.768 128h-68.032z","p-id":"1677"}})])]),t._v("\n                  延期处理\n                ")])]),t._v(" "),i("el-dropdown-item",{attrs:{divided:""}},[i("span",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.dataDel(e.row.id)}}},[i("i",{staticClass:"el-iconshanchu1 iconfont_no_margin sumeru_red"}),t._v(" "),i("span",{staticClass:"sumeru_red"},[t._v("删除漏洞")])])])],1)],1)]}}])},[i("template",{slot:"header"},[i("el-popover",{attrs:{placement:"right",trigger:"click"}},[i("el-checkbox-group",{model:{value:t.colOptions,callback:function(e){t.colOptions=e},expression:"colOptions"}},t._l(t.colSelect,function(t){return i("el-checkbox",{key:t,attrs:{label:t}})}),1),t._v(" "),i("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[t._v("筛选列")])],1)],1)],2)],1),t._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":t.cur_page,"page-sizes":[10,20,50,100],"page-size":t.page_size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.cur_page=e},"update:current-page":function(e){t.cur_page=e},"update:pageSize":function(e){t.page_size=e},"update:page-size":function(e){t.page_size=e},"update:total":function(e){t.total=e}}})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"新增漏洞",visible:t.createVisible,width:"75%","before-close":t.handleClose},on:{"update:visible":function(e){t.createVisible=e}}},[i("el-form",{ref:"createForm",attrs:{model:t.form,"label-width":"150px",rules:t.rules}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[i("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:"",placeholder:"请输入漏洞名称",size:"mini",type:"text",name:"task_name"},model:{value:t.form.vul_name,callback:function(e){t.$set(t.form,"vul_name",e)},expression:"form.vul_name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"关联应用",prop:"app_id"}},[i("el-autocomplete",{staticStyle:{width:"350px"},attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入关键字",clearable:""},on:{select:t.handleSelect},model:{value:t.form.app_name,callback:function(e){t.$set(t.form,"app_name",e)},expression:"form.app_name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"关联解决方案",prop:"solution_id"}},[i("el-autocomplete",{staticStyle:{width:"350px"},attrs:{"fetch-suggestions":t.querySearchPaperAsync,placeholder:"请输入关键字",clearable:""},on:{select:t.handleSelectPaper},model:{value:t.form.solution_name,callback:function(e){t.$set(t.form,"solution_name",e)},expression:"form.solution_name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"漏洞层面",prop:"layer"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.layer,callback:function(e){t.$set(t.form,"layer",e)},expression:"form.layer"}},t._l(t.static_config.VUL_LAYER,function(e,s){return i("el-radio-button",{key:e,attrs:{label:s}},[t._v(t._s(e))])}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.form.vul_type,callback:function(e){t.$set(t.form,"vul_type",e)},expression:"form.vul_type"}},t._l(t.static_config.VUL_TYPE,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"Rank值",prop:"self_rank"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:t.form.self_rank,callback:function(e){t.$set(t.form,"self_rank",e)},expression:"form.self_rank"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:t.colortype,size:"medium"}},[t._v(t._s(t.risklevel))])],1),t._v(" "),i("el-form-item",{attrs:{label:"漏洞来源",prop:"vul_source"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.vul_source,callback:function(e){t.$set(t.form,"vul_source",e)},expression:"form.vul_source"}},t._l(t.static_config.VUL_SOURCE,function(e,s){return i("el-radio-button",{key:e,attrs:{label:s}},[t._v(t._s(e))])}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"选项"}},[i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示漏洞证明编辑器",expression:"'显示漏洞证明编辑器'"}],model:{value:t.is_report_visible,callback:function(e){t.is_report_visible=e},expression:"is_report_visible"}},[t._v("漏洞证明")]),t._v(" "),i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示解决方案编辑器",expression:"'显示解决方案编辑器'"}],model:{value:t.is_solution_visible,callback:function(e){t.is_solution_visible=e},expression:"is_solution_visible"}},[t._v("解决方案")])],1),t._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.is_report_visible,expression:"is_report_visible"}],attrs:{label:"漏洞证明"}},[i("mavon-editor",{ref:"poc_editor",on:{change:t.pocChange,imgAdd:t.$imgAdd},model:{value:t.form.vul_poc,callback:function(e){t.$set(t.form,"vul_poc",e)},expression:"form.vul_poc"}})],1),t._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.is_solution_visible,expression:"is_solution_visible"}],attrs:{label:"解决方案"}},[i("mavon-editor",{ref:"solution_editor",on:{change:t.solutionChange,imgAdd:t.$imgAddSolution},model:{value:t.form.vul_solution,callback:function(e){t.$set(t.form,"vul_solution",e)},expression:"form.vul_solution"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.doCreate()}}},[t._v("创建")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑漏洞",visible:t.editVisible,width:"80%","before-close":t.handleClose},on:{"update:visible":function(e){t.editVisible=e}}},[i("el-form",{ref:"editForm",attrs:{model:t.form,"label-width":"80px",rules:t.rules}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[i("el-input",{attrs:{clearable:"",placeholder:"请输入漏洞名称",size:"mini",type:"text",name:"task_name"},model:{value:t.form.vul_name,callback:function(e){t.$set(t.form,"vul_name",e)},expression:"form.vul_name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"关联应用",prop:"app_id"}},[t._v("\n        "+t._s(t.old_app_name)+"\n        "),i("span",{staticStyle:{color:"#8c153e"}},[t._v("变更为")]),t._v(" "),i("el-autocomplete",{staticStyle:{width:"350px"},attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入关键字",clearable:""},on:{select:t.handleSelect},model:{value:t.form.app_id_name,callback:function(e){t.$set(t.form,"app_id_name",e)},expression:"form.app_id_name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"漏洞层面",prop:"layer"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.layer,callback:function(e){t.$set(t.form,"layer",e)},expression:"form.layer"}},t._l(t.static_config.VUL_LAYER,function(e,s){return i("el-radio-button",{key:e,attrs:{label:s}},[t._v(t._s(e))])}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.form.vul_type,callback:function(e){t.$set(t.form,"vul_type",e)},expression:"form.vul_type"}},t._l(t.static_config.VUL_TYPE,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"Rank值",prop:"self_rank"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:t.form.self_rank,callback:function(e){t.$set(t.form,"self_rank",e)},expression:"form.self_rank"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:t.colortype,size:"medium"}},[t._v(t._s(t.risklevel))])],1),t._v(" "),i("el-form-item",{attrs:{label:"漏洞来源",prop:"vul_source"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.vul_source,callback:function(e){t.$set(t.form,"vul_source",e)},expression:"form.vul_source"}},t._l(t.static_config.VUL_SOURCE,function(e,s){return i("el-radio-button",{key:e,attrs:{label:s}},[t._v(t._s(e))])}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"漏洞状态"}},[i("el-select",{staticClass:"handle-select mr10",attrs:{size:"mini",placeholder:"状态"},model:{value:t.form.vul_status,callback:function(e){t.$set(t.form,"vul_status",e)},expression:"form.vul_status"}},t._l(t.status_options,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}},[i("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))])])}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"选项"}},[i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示漏洞证明编辑器",expression:"'显示漏洞证明编辑器'"}],model:{value:t.is_report_visible,callback:function(e){t.is_report_visible=e},expression:"is_report_visible"}},[t._v("漏洞证明")]),t._v(" "),i("el-checkbox",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"显示解决方案编辑器",expression:"'显示解决方案编辑器'"}],model:{value:t.is_solution_visible,callback:function(e){t.is_solution_visible=e},expression:"is_solution_visible"}},[t._v("解决方案")])],1),t._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.is_report_visible,expression:"is_report_visible"}],attrs:{label:"漏洞证明"}},[i("mavon-editor",{ref:"poc_editor",on:{change:t.pocChange,imgAdd:t.$imgAdd},model:{value:t.form.vul_poc,callback:function(e){t.$set(t.form,"vul_poc",e)},expression:"form.vul_poc"}})],1),t._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.is_solution_visible,expression:"is_solution_visible"}],attrs:{label:"解决方案"}},[i("mavon-editor",{ref:"solution_editor",on:{change:t.solutionChange,imgAdd:t.$imgAddSolution},model:{value:t.form.vul_solution,callback:function(e){t.$set(t.form,"vul_solution",e)},expression:"form.vul_solution"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.doCreate()}}},[t._v("修 改")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"审核漏洞",visible:t.auditVisible,width:"50%"},on:{"update:visible":function(e){t.auditVisible=e}}},[i("el-form",{ref:"editForm",attrs:{model:t.form,"label-width":"90px"}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[t._v(t._s(t.form.vul_name))]),t._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini",disabled:!0},model:{value:t.form.vul_type,callback:function(e){t.$set(t.form,"vul_type",e)},expression:"form.vul_type"}},t._l(t.static_config.VUL_TYPE,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"自评Rank",prop:"self_rank"}},[t._v(t._s(t.form.self_rank))]),t._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:t.colortype,size:"medium"}},[t._v(t._s(t.risklevel))])],1),t._v(" "),i("el-form-item",{attrs:{label:"审核状态"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:t.cur_audit_status,callback:function(e){t.cur_audit_status=e},expression:"cur_audit_status"}},t._l(t.static_config.VUL_ACTION,function(e,s){return i("el-radio-button",{key:e,attrs:{label:s}},[t._v(t._s(e))])}),1)],1),t._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.isShowAuditDetail,expression:"isShowAuditDetail"}],attrs:{label:"关联应用",prop:"app_id_name"}},[i("el-autocomplete",{ref:"elautocomplete",attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入内容",clearable:""},on:{select:t.handleSelect},model:{value:t.temp_audit_app_name,callback:function(e){t.temp_audit_app_name=e},expression:"temp_audit_app_name"}})],1),t._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.isShowAuditDetail,expression:"isShowAuditDetail"}],attrs:{label:"实际Rank",prop:"self_rank"}},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:20,size:"mini"},model:{value:t.form.real_rank,callback:function(e){t.$set(t.form,"real_rank",e)},expression:"form.real_rank"}})],1),t._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.isShowAuditDetail,expression:"isShowAuditDetail"}],attrs:{label:"风险等级"}},[i("el-tag",{attrs:{type:t.colortype,size:"medium"}},[t._v(t._s(t.real_risklevel))])],1),t._v(" "),i("el-form-item",{attrs:{label:"回复作者",prop:"return"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"详情备注",prop:"return"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.form.msg,callback:function(e){t.$set(t.form,"msg",e)},expression:"form.msg"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.doAudit()}}},[t._v("审 核")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"处理漏洞",visible:t.solveVisible,width:"50%"},on:{"update:visible":function(e){t.solveVisible=e}}},[i("el-form",{ref:"editForm",attrs:{model:t.form,"label-width":"90px"}},[i("el-form-item",{attrs:{label:"漏洞标题",prop:"vul_name"}},[t._v(t._s(t.form.vul_name))]),t._v(" "),i("el-form-item",{attrs:{label:"漏洞类型",prop:"vul_type"}},[i("el-select",{attrs:{placeholder:"请选择",size:"mini",disabled:!0},model:{value:t.form.vul_type,callback:function(e){t.$set(t.form,"vul_type",e)},expression:"form.vul_type"}},t._l(t.static_config.VUL_TYPE,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:e}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"自评Rank",prop:"self_rank"}},[t._v(t._s(t.form.self_rank))]),t._v(" "),i("el-form-item",{attrs:{label:"风险等级",prop:"risklevel"}},[i("el-tag",{attrs:{type:t.colortype,size:"medium"}},[t._v(t._s(t.risklevel))])],1),t._v(" "),i("el-form-item",{attrs:{label:"回复作者",prop:"return"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.doSolve()}}},[t._v("确 认")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"延期处理",visible:t.delayVisible,width:"50%"},on:{"update:visible":function(e){t.delayVisible=e}}},[i("el-form",{ref:"editForm",attrs:{model:t.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"当前延期(天)",prop:"return"}},[i("el-slider",{attrs:{"show-input":""},model:{value:t.delayForm.delay_days,callback:function(e){t.$set(t.delayForm,"delay_days",e)},expression:"delayForm.delay_days"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"缘由",prop:"return"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:t.delayForm.content,callback:function(e){t.$set(t.delayForm,"content",e)},expression:"delayForm.content"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.delayVul()}}},[t._v("更 新")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:t.vullog_vul_name,visible:t.timelineVisible,width:"50%"},on:{"update:visible":function(e){t.timelineVisible=e}}},[i("div",{staticClass:"radio",staticStyle:{"margin-bottom":"20px"}},[i("el-radio-group",{model:{value:t.reverse,callback:function(e){t.reverse=e},expression:"reverse"}},[i("el-radio",{attrs:{label:!0}},[t._v("正序")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("倒序")])],1)],1),t._v(" "),i("div",{staticClass:"block"},[0==t.current_vullog_list.length?i("span",[t._v("暂无记录")]):t._e(),t._v(" "),i("el-timeline",{attrs:{reverse:t.reverse}},t._l(t.current_vullog_list,function(e,s){return i("el-timeline-item",{key:s,attrs:{icon:e.icon,type:"primary",color:"#3e9b87f3",size:"large",timestamp:t._f("formatDate")(e.create_time)}},[i("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.action))]),t._v(" 操作人:\n          "),i("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.username))])])}),1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.timelineVisible=!1}}},[t._v("知道了")])],1)])],1)},staticRenderFns:[]};var p=i("VU/8")(m,_,!1,function(t){i("ufSA")},"data-v-5cbcec5c",null);e.default=p.exports},ufSA:function(t,e){}});