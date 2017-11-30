
exports.save = function(req, res) {
	 
	var stringMontada = "";
	for(var i = 0; i < req.body.length; i++) {
    	var obj = req.body[i];
		stringMontada += "("+obj.Usuario_id+", "+ obj.data_hora_registro+", "+obj.horario_consumo+", "+obj.total_calorias+")" ; 
	}	
	
	var parsed = JSON.parse(req.body.json);
	var arr = [];

	for(var x in parsed){
  		arr.push(parsed[x]);
	}
	 req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");
		
        var query = conn.query("INSERT INTO registro (Usuario_id, data_hora_registro, horario_consumo, total_calorias) ? ",arr, function(err, rows){
			console.log(err);
           if(err){
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });
}