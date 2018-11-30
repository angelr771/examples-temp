Feature: It must indicate that the system not found information with the data provided 
         and response (HTTP Code) 404 Bad Request.
         
Scenario: Validate API Loan-Payment-History returns 404 when accountNumber is incorrect
	Given the service with url "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve"
	And the simulated response
	"""	
	"""
	When the service is executed with headers
	|header|value|
	|Authorization|TOKENEXAMPLE|
	|Accept-Language|MX|
	|Accept|application/json|
	|uuid|DU0908002345318|
	|Content-Type|application/json|
	|countryCode|MX|
	|sid|12|
	|businesscode|1|
	|ChannelId|1521|
	|client_id|AG99406|
	And the body request
	"""
	{
	  "account": {
		"accountNumber": "123456",
		"branchId": "0000"
	  },
	  "dataCenterLocation": "4"
	}
	"""
	Then the service should response Http code <404>
	And the body response
	"""
	{
	  "type": "error",
	  "code": "404",
	  "details": "Not Found Exception",
	  "location": "Unisys comunication",
	  "moreInfo": "NO EXISTE CONTRATO"
	}
	"""