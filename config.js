exports.config = {
	"domains": ["watchtower.david-ma.net"],
	"proxies": {
		"govhack2020.david-ma.net": {
			"filter": "screens",
			"message": "Error, server might be down or proxy settings might be wrong. You can try visiting the server directly at: http://115.146.86.36:8080/PathOS/",
			"host": "projects.invisionapp.com/share/MKYFUQ7QBFY#/screens",
			"port": 443
		},
		"watchtower.david-ma.net": {
			"filter": "screens",
			"message": "Error, server might be down or proxy settings might be wrong. You can try visiting the server directly at: http://115.146.86.36:8080/PathOS/",
			"host": "projects.invisionapp.com/share/MKYFUQ7QBFY#/screens",
			"port": 443
		}
	}
};