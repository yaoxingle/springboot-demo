layui.use(['jquery','layer','laydate','table','form','element'], function(){
	  
	  var laydate = layui.laydate;
	  laydate.render({
		  elem: '#startTime'
		  ,type: 'datetime'
	  });
	  laydate.render({
		  elem: '#endTime'
		  ,type: 'datetime'
	  });
	  
	  var table = layui.table;
	  table.render({
	    elem: '#test'
	    ,url:'/action/topic/list'
	    ,toolbar: '#toolbarDemo'
	    ,title: '用户数据表'
	    ,cols: [[
	       {type:'numbers',width:20}
	      ,{type:'radio',width:20}
	      ,{field:'name', title:'IP地址', width:80, fixed: 'left', unresize: true, sort: true}
	      ,{field:'key', title:'端口', width:40, edit: 'text'}
	      ,{field:'length', title:'状态', width:40, edit: 'text', templet: function(res){
	        return '<em>'+ res.comName +'</em>'
	      }}
	      ,{field:'ip', title:'内存', width:40, edit: 'text', sort: true}
	      ,{field:'org', title:'内存占用率', width:80}
	      ,{field:'time', title:'CPU', width:60}
	      ,{field:'time', title:'连接数', width:60}
	      ,{field:'time', title:'占用磁盘大小', width:100}
	      ,{field:'time', title:'启动时间', width:100}
	    ]]
	    ,page: true
	  });
	  
	  //头工具栏事件
	  table.on('toolbar(test)', function(obj){
	    var checkStatus = table.checkStatus(obj.config.id);
	    switch(obj.event){
	      case 'topicAdd':
	    	 layer.open({
	    		title:'新增主题',
	        	type:2,
	        	content:['/action/view?name=topic/detail',0],
	        	area: ['80%', '85%']
	        });
	    	 break;
	      case 'topicDelete':
	    	  var data = checkStatus.data;
	    	  if(data.length == 0){
	        	layer.msg('未选中主题');
	    	  }
	    	  break;
	      case 'topicUpdate':
	    	  var data = checkStatus.data;
	    	  if(data.length == 0){
	        	layer.msg('未选中主题');
	    	  }
		      break;
	    };
	  });
	  
	  //监听行工具事件
	  table.on('tool(test)', function(obj){
	    var data = obj.data;
	    //console.log(obj)
	    if(obj.event === 'del'){
	      layer.confirm('真的删除行么', function(index){
	        obj.del();
	        layer.close(index);
	      });
	    } else if(obj.event === 'edit'){
	      layer.prompt({
	        formType: 2
	        ,value: data.email
	      }, function(value, index){
	        obj.update({
	          email: value
	        });
	        layer.close(index);
	      });
	    }
	  });
	});