const notificationAlertRef = React.useRef(null);
const notify = (place) => {
	var color = Math.floor(Math.random() * 5 + 1);
	var type;
	switch (color) {
		case 1:
			type = "primary";
			break;
		case 2:
			type = "success";
			break;
		case 3:
			type = "danger";
			break;
		case 4:
			type = "warning";
			break;
		case 5:
			type = "info";
			break;
		default:
			break;
	}
	var options = {};
	options = {
		place: place,
		message: (
			<div>
				<div>Check</div>
			</div>
		),
		type: type,
		icon: "tim-icons icon-bell-55",
		autoDismiss: 7,
	};
	notificationAlertRef.current.notificationAlert(options);
};