layui.use('table', function(){
	  var table = layui.table;
	  table.render({
	    elem: '#test'
	    ,url:'/action/topic/list'
	    ,toolbar: '#toolbarDemo'
	    ,title: '用户数据表'
	    ,cols: [[
	       {type:'numbers'}
	      ,{type:'radio'}
	      ,{field:'name', title:'主题名', width:80, fixed: 'left', unresize: true, sort: true}
	      ,{field:'appName', title:'应用名', width:120, edit: 'text'}
	      ,{field:'comName', title:'公司名', width:150, edit: 'text', templet: function(res){
	        return '<em>'+ res.comName +'</em>'
	      }}
	      ,{field:'desc', title:'主题描述', width:80, edit: 'text', sort: true}
	      ,{field:'type', title:'类型', width:100}
	    ]]
	    ,page: true
	  });
	  
	  //头工具栏事件
	  table.on('toolbar(test)', function(obj){
	    var checkStatus = table.checkStatus(obj.config.id);
	    switch(obj.event){
	      case 'topicAdd':
	    	 layer.open({
	        	type:2,
	        	content:['/action/view?name=topic/detail',0],
	        	area: ['650px', '500px']
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