(function(UsernameNoChange) {
	
	function initialise() {
		$(window).on('action:ajaxify.contentLoaded', function () {
			if(!app.user || !app.user.isAdmin)
			{
				$("#inputUsername").attr("disabled","");
			}
			else
			{
				var parent = $($("#inputUsername").parent());
				parent.append("<a href='#' onclick='changeUsername()'><i class='fa fa-pencil-square-o'>Editar</i></a>")
			}
		});
	}

	changeUsername = function()
	{
		var username = $("#inputUsername").val();
		var uid = $(".account-username-box").attr("data-uid");
		socket.emit("admin.changeUsername", {uid:uid, username:username}, function(err,data){
			if(!err)
			{
				app.alert({
					type: 'success',
					timeout: 5000,
					title: 'Guardado',
					message: "Nombre de usuario guardado!",
					alert_id: 'usernamechange'
				});
			}
			else
			{
				app.alert({
					type: 'danger',
					timeout: 5000,
					title: 'Error',
					message: "Error al guardar el nombre de usuario",
					alert_id: 'usernamechange'
				});
			}
		});
	}

	initialise();

})(window.UsernameNoChange);