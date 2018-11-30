Feature: It must get master account balance
         and response (HTTP Code) 200 OK.

Scenario: Validate API Loan-Payment-History returns 200 when accountNumber, branchId and datacenterLocation are valid
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
	|sid|12|
	|ChannelId|1521|
	|client_id|AG99406|
	And the body request
	"""
	{
	  "account": {
		"accountNumber": "3323852024",
		"branchId": "0000"
	  },
	  "dataCenterLocation": "4"
	}
	"""
	Then the service should response Http code <200>
	And the body response
	"""
	{
  "payments": [
	    {
	      "paymentAmount": 375000,
	      "paymentDate": "000804",
	      "paymentId": "100",
	      "paymentDueDate": "040805",
	      "currencyCode": "1",
	      "account": {
	        "productCode": "1761",
	        "productName": "PREST AUTOMOVIL PERSONAL ND TIIE",
	        "riskLevelCode": "A",
	        "accountStatus": "LIQUIDADO",
	        "udiPaymentAmount": 6.16264
	      }
	    }
	  ]
	}
	"""

Scenario: Validate API Loan-Payment-History returns 200 when the dataCenterLocation is not requiered
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
	|sid|12|
	|ChannelId|1521|
	|client_id|AG99406|
	And the body request
	"""
	{
	  "account": {
		"accountNumber": "3323852024",
		"branchId": "0000"
	  }
	}
	"""
	Then the service should response Http code <200>
	And the body response
	"""
	{
  "payments": [
	    {
	      "paymentAmount": 375000,
	      "paymentDate": "000804",
	      "paymentId": "100",
	      "paymentDueDate": "040805",
	      "currencyCode": "1",
	      "account": {
	        "productCode": "1761",
	        "productName": "PREST AUTOMOVIL PERSONAL ND TIIE",
	        "riskLevelCode": "A",
	        "accountStatus": "LIQUIDADO",
	        "udiPaymentAmount": 6.16264
	      }
	    }
	  ]
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 200 when branchId is not required
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
	    "accountNumber": "3323852024"
	  },
	  "dataCenterLocation": "4"
	}
	"""
	Then the service should response Http code <200>
	And the body response
	"""
	{
	  "payments": [
	    {
	      "paymentAmount": 375000,
	      "paymentDate": "000804",
	      "paymentId": "100",
	      "paymentDueDate": "040805",
	      "currencyCode": "1",
	      "account": {
	        "productCode": "1761",
	        "productName": "PREST AUTOMOVIL PERSONAL ND TIIE",
	        "riskLevelCode": "A",
	        "accountStatus": "LIQUIDADO",
	        "udiPaymentAmount": 6.16264
	      }
	    }
	  ]
	}
	"""