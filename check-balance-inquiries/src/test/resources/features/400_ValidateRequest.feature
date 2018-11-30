Feature: It must indicate that the server could not understand the request due to invalid syntax 
         and response (HTTP Code) 400 Bad Request.
         
Scenario: Validate API Loan-Payment-History returns 400 when dataCenterLocation contains "spaces"
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
	    "accountNumber": "3323852024",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": " "
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when dataCenterLocation contains "letters"
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
	    "accountNumber": "3323852024",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "AB"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when dataCenterLocation contains "characters"
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
	    "accountNumber": "3323852024",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "#$"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber contains "spaces"
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
	    "accountNumber": "332   38",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber contains "letters"
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
	    "accountNumber": "ABCD",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber contains "characters"
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
	    "accountNumber": "#$%&",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber contains less that 3 numbers
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
	    "accountNumber": "12",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber contains more that 12 numbers
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
	    "accountNumber": "12345678901234",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber is not required
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
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber is all zeroes
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
	    "accountNumber": "000000000000",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when accountNumber is empty
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
	    "accountNumber": "",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when the dataCenterLocation is empty
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
	    "accountNumber": "3386858066",
	    "branchId": "0000"
	  },
	  "dataCenterLocation": ""
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when branchId contains "spaces"
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
	    "accountNumber": "3323852024",
	    "branchId": "  "
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when branchId contains "letters"
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
	    "accountNumber": "3323852024",
	    "branchId": "ABC"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when branchId contains "characters"
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
	    "accountNumber": "3323852024",
	    "branchId": "#$"
	  },
	  "dataCenterLocation": "10"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when branchId contains "more that 4 numbers"
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
	    "accountNumber": "3323852024",
	    "branchId": "12345"
	  },
	  "dataCenterLocation": "4"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when branchId contains "less that 4 numbers"
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
	    "accountNumber": "3323852024",
	    "branchId": "123"
	  },
	  "dataCenterLocation": "4"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. "
	}
	"""
	
Scenario: Validate API Loan-Payment-History returns 400 when branchId is empty
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
	    "accountNumber": "3323852024",
	    "branchId": ""
	  },
	  "dataCenterLocation": "4"
	}
	"""
	Then the service should response Http code <400>
	And the body response
	"""
	{
	  "type": "invalid",
	  "code": "400",
	  "details": "MethodArgumentNotValidException",
	  "location": "request",
	  "moreInfo": "account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. "
	}
	"""