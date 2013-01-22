enyo.depends(
	"$lib/layout",
	"$lib/onyx",	// To theme Onyx using Theme.less, change this line to $lib/onyx/source,
	//"Theme.less",	// uncomment this line, and follow the steps described in Theme.less
	"$lib/webos-ports-lib",
	"$lib/more-arrangers",
	//Main App
	"App.css",
	"App.js",
	//Settings Panels
	"DateTime.js",
	"Exhibition.js",
	"ScreenLock.js",
	"WiFi.js",
	"DevMode.js",
	"Telephony.js"
);
