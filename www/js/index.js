console.log("loaded")
document.addEventListener("deviceready", function() {
	var frame = document.createElement("iframe")
	frame.src = "https://example.org"
	frame.addEventListener("load", () => console.log("loaded"))
	document.body.appendChild(frame)
})
