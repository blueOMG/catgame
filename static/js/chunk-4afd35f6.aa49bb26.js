(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4afd35f6"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"841c":function(t,e,a){"use strict";var n=a("d784"),l=a("825a"),i=a("1d80"),o=a("129f"),r=a("14c3");n("search",1,(function(t,e,a){return[function(e){var a=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,t,this);if(n.done)return n.value;var i=l(t),s=String(this),c=i.lastIndex;o(c,0)||(i.lastIndex=0);var u=r(i,s);return o(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]}))},ee55:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"uid",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uid)+" ")]}}])}),a("el-table-column",{attrs:{label:"注册时间",width:"260",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(new Date(1e3*e.row.create_time).toLocaleString())+" ")]}}])}),a("el-table-column",{attrs:{label:"钱包地址",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.address))])]}}])}),a("el-table-column",{attrs:{"class-name":"status-col",label:"账号状态",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:0==e.row.account_status?"deleted":"danger"}},[t._v(t._s(0==e.row.account_status?"正常":"封禁"))])]}}])}),a("el-table-column",{attrs:{label:"可用余额",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.available_balance)+" ")]}}])}),a("el-table-column",{attrs:{label:"冻结余额",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.balance-e.row.available_balance)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.changeStatus(e.row)}}},[t._v(t._s(0==e.row.account_status?"封禁":"解封"))]),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showflow=!0,t.flowTitle="玩家"+e.row.address,t.itemInfo=e.row}}},[t._v("流水查询")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showgame=!0,t.gameTitle="玩家"+e.row.address,t.itemInfo=e.row}}},[t._v("游戏查询")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper, total",total:t.total,"current-page":t.search.page,"page-size":t.search.pageSize},on:{"update:currentPage":function(e){return t.$set(t.search,"page",e)},"update:current-page":function(e){return t.$set(t.search,"page",e)},"update:pageSize":function(e){return t.$set(t.search,"pageSize",e)},"update:page-size":function(e){return t.$set(t.search,"pageSize",e)},"current-change":t.loadInvitationList}})],1),a("el-dialog",{attrs:{title:t.flowTitle,"close-on-click-modal":!1,visible:t.showflow},on:{"update:visible":function(e){t.showflow=e}}},[t.showflow?a("flowtable",{attrs:{user:t.itemInfo}}):t._e()],1),a("el-dialog",{attrs:{title:t.gameTitle,"close-on-click-modal":!1,visible:t.showgame},on:{"update:visible":function(e){t.showgame=e}}},[t.showgame?a("gametable",{attrs:{user:t.itemInfo}}):t._e()],1)],1)},l=[],i=a("c7eb"),o=a("1da1"),r=(a("ac1f"),a("841c"),a("c24f")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:"50vh"}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"时间",width:"260",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(new Date(1e3*e.row.create_time).toLocaleString())+" ")]}}])}),a("el-table-column",{attrs:{label:"类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.tx_type_str))])]}}])}),a("el-table-column",{attrs:{label:"数量",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.amount)+" ")]}}])}),a("el-table-column",{attrs:{label:"余额",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.balance)+" ")]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper, total",total:t.total,"current-page":t.search.page,"page-size":t.search.pageSize},on:{"update:currentPage":function(e){return t.$set(t.search,"page",e)},"update:current-page":function(e){return t.$set(t.search,"page",e)},"update:pageSize":function(e){return t.$set(t.search,"pageSize",e)},"update:page-size":function(e){return t.$set(t.search,"pageSize",e)},"current-change":t.loadInvitationList}})],1)],1)},c=[],u=a("5530"),d={props:["user"],data:function(){return{listLoading:!0,tableData:[],search:{page:1,page_size:10}}},created:function(){this.loadInvitationList()},methods:{loadInvitationList:function(){var t=this;Object(r["l"])(Object(u["a"])({uid:this.user.uid},this.search)).then((function(e){e.data&&(t.tableData=e.data.list,t.listLoading=!1,t.total=e.data.total)})).catch((function(){t.listLoading=!1}))}}},f=d,g=a("2877"),p=Object(g["a"])(f,s,c,!1,null,null,null),h=p.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","font-size":"18px"}},[a("p",{staticStyle:{"margin-right":"15px"}},[t._v("总共参与: "+t._s(t.playcount)+"局")]),a("p",{staticStyle:{"margin-right":"15px"}},[t._v("总共投入: "+t._s(t.spent)+" BIXO")]),a("p",{staticStyle:{"margin-right":"15px"}},[t._v("总共获得: "+t._s(t.receive)+" BIXO")]),a("p",[t._v("总盈亏："+t._s((t.receive-t.spent).toFixed(2))+" BIXO")])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:"40vh"}},[a("el-table-column",{attrs:{align:"center",label:"轮次",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"结束时间",width:"260",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(new Date(1e3*e.row.create_time).toLocaleString())+" ")]}}])}),a("el-table-column",{attrs:{label:"所在房间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.room))])]}}])}),a("el-table-column",{attrs:{label:"结局",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.amount)+" ")]}}])}),a("el-table-column",{attrs:{label:"投入",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.cost_amount)+" ")]}}])}),a("el-table-column",{attrs:{label:"获得",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.receive_amount)+" ")]}}])})],1)],1)},b=[],v={props:["user"],data:function(){return{listLoading:!0,tableData:[],playcount:0,receive:0,spent:0}},mounted:function(){this.loadInvitationList()},methods:{loadInvitationList:function(){var t=this;console.log(this.user),Object(r["j"])({uid:this.user.uid}).then((function(e){e.data&&(t.playcount=e.data.play_count,t.tableData=e.data.list,t.receive=e.data.total_received,t.spent=e.data.total_spent,t.listLoading=!1)}))}}},w=v,m=Object(g["a"])(w,_,b,!1,null,null,null),S=m.exports,y={components:{flowtable:h,gametable:S},data:function(){return{list:null,listLoading:!0,search:{page:1,page_size:20},tableData:[],total:0,showflow:!1,flowTitle:"",showgame:!1,gameTitle:"",itemInfo:{}}},created:function(){this.loadInvitationList()},methods:{loadInvitationList:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["k"])(t.search);case 2:a=e.sent,t.tableData=a.data.list,t.total=a.data.total,t.listLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},searchUser:function(){this.search.page=1,this.loadInvitationList()},resetSearch:function(){this.search={page:1,pageSize:20},this.loadInvitationList()},changeStatus:function(t){var e=this;this.$confirm("是否".concat(0==t.account_status?"封禁":"解封","该用户"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(Object(i["a"])().mark((function a(){return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["b"])({uid:t.uid,status:0==t.account_status?1:0});case 2:a.sent,e.$message({type:"success",message:"操作成功!"}),e.loadInvitationList();case 5:case"end":return a.stop()}}),a)})))).catch((function(){}))}}},x=y,k=Object(g["a"])(x,n,l,!1,null,null,null);e["default"]=k.exports}}]);