const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  	console.log('Headers:', req.headers);

  	const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmios-lin1.csez.zohocorpin.com:8143/mdm/client/v1/enroll?encapiKey=1G8rvZw%2Ftp9JkQaOZonouBtzg9UMPifIwNMWQTNyhwmLve7b2TBPA5QkZKzOtldB%2FShu8a%2BU7iyaZKfnPc1Nu5w4D%2BwrRRwGRFdCV48btXTsSvwFhqV%2B%2FNA%3D&templateToken=1ea59b26bc1f2679618efed0c954d356"}]}'
  	const inputStream = Buffer.from(responseText);

  	const responseHeaders = {
    		"Content-Type": "application/json",
    		"Content-Length":inputStream.length
  	};
  	res.writeHead(200, responseHeaders);

  	res.write(inputStream);
  	res.end();
});


router.get("/redirectedDEPJSON", (req, res) => {
	const pssoJSON = '{"code":"com.apple.psso.required","description":"MDM Server requires the user to authenticate with Identity Provider - BY MEMDM","message":"The MDM server requires you to authenticate with your Identity Provider. Please follow the instructions provided by your organization to complete the authentication process - BY MEMDM","details":{"Package":{"ManifestURL":"https://platformsso-profile-url-824074885.development.catalystserverless.com/server/Platform-SSO-Profile/manifest"},"ProfileURL":"https://platformsso-profile-url-824074885.development.catalystserverless.com/server/Platform-SSO-Profile/profile","AuthURL":"https://platformsso-profile-url-824074885.development.catalystserverless.com/server/Platform-SSO-Profile/auth"}}';
	const inputStream = Buffer.from(pssoJSON);
	
	const responseHeaders = {
		"Content-Type": "application/json",
		"Content-Length":inputStream.length
	};
	
  	res.writeHead(403, responseHeaders);
	res.write(inputStream);
	res.end();
})

module.exports = router;
