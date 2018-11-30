$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("200_LoanPaymentHistory.feature");
formatter.feature({
  "line": 1,
  "name": "It must get master account balance",
  "description": "       and response (HTTP Code) 200 OK.",
  "id": "it-must-get-master-account-balance",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate API Loan-Payment-History returns 200 when accountNumber, branchId and datacenterLocation are valid",
  "description": "",
  "id": "it-must-get-master-account-balance;validate-api-loan-payment-history-returns-200-when-accountnumber,-branchid-and-datacenterlocation-are-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 7,
    "value": ""
  }
});
formatter.step({
  "line": 9,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 10
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 11
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 12
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 13
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 14
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 15
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 16
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 17
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 20,
    "value": "{\r\n  \"account\": {\r\n\t\"accountNumber\": \"3323852024\",\r\n\t\"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"4\"\r\n}"
  }
});
formatter.step({
  "line": 29,
  "name": "the service should response Http code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 31,
    "value": "{\r\n \"payments\": [\r\n    {\r\n      \"paymentAmount\": 375000,\r\n      \"paymentDate\": \"000804\",\r\n      \"paymentId\": \"100\",\r\n      \"paymentDueDate\": \"040805\",\r\n      \"currencyCode\": \"1\",\r\n      \"account\": {\r\n        \"productCode\": \"1761\",\r\n        \"productName\": \"PREST AUTOMOVIL PERSONAL ND TIIE\",\r\n        \"riskLevelCode\": \"A\",\r\n        \"accountStatus\": \"LIQUIDADO\",\r\n        \"udiPaymentAmount\": 6.16264\r\n      }\r\n    }\r\n  ]\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 20298342,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 133113,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 4357294,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 148045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 190709,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 132833679,
  "status": "passed"
});
formatter.after({
  "duration": 12372,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Validate API Loan-Payment-History returns 200 when the dataCenterLocation is not requiered",
  "description": "",
  "id": "it-must-get-master-account-balance;validate-api-loan-payment-history-returns-200-when-the-datacenterlocation-is-not-requiered",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 55,
    "value": ""
  }
});
formatter.step({
  "line": 57,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 58
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 59
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 60
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 61
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 62
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 63
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 64
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 65
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 66
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 68,
    "value": "{\r\n  \"account\": {\r\n\t\"accountNumber\": \"3323852024\",\r\n\t\"branchId\": \"0000\"\r\n  }\r\n}"
  }
});
formatter.step({
  "line": 76,
  "name": "the service should response Http code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 78,
    "value": "{\r\n \"payments\": [\r\n    {\r\n      \"paymentAmount\": 375000,\r\n      \"paymentDate\": \"000804\",\r\n      \"paymentId\": \"100\",\r\n      \"paymentDueDate\": \"040805\",\r\n      \"currencyCode\": \"1\",\r\n      \"account\": {\r\n        \"productCode\": \"1761\",\r\n        \"productName\": \"PREST AUTOMOVIL PERSONAL ND TIIE\",\r\n        \"riskLevelCode\": \"A\",\r\n        \"accountStatus\": \"LIQUIDADO\",\r\n        \"udiPaymentAmount\": 6.16264\r\n      }\r\n    }\r\n  ]\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 14213149,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 58877,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1838827,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 148898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 111354,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 122878416,
  "status": "passed"
});
formatter.after({
  "duration": 12373,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Validate API Loan-Payment-History returns 200 when branchId is not required",
  "description": "",
  "id": "it-must-get-master-account-balance;validate-api-loan-payment-history-returns-200-when-branchid-is-not-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 100,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 102,
    "value": ""
  }
});
formatter.step({
  "line": 104,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 105
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 106
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 107
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 108
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 109
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 110
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 111
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 112
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 113
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 114
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 115
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 117,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\"\r\n  },\r\n  \"dataCenterLocation\": \"4\"\r\n}"
  }
});
formatter.step({
  "line": 125,
  "name": "the service should response Http code \u003c200\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 127,
    "value": "{\r\n  \"payments\": [\r\n    {\r\n      \"paymentAmount\": 375000,\r\n      \"paymentDate\": \"000804\",\r\n      \"paymentId\": \"100\",\r\n      \"paymentDueDate\": \"040805\",\r\n      \"currencyCode\": \"1\",\r\n      \"account\": {\r\n        \"productCode\": \"1761\",\r\n        \"productName\": \"PREST AUTOMOVIL PERSONAL ND TIIE\",\r\n        \"riskLevelCode\": \"A\",\r\n        \"accountStatus\": \"LIQUIDADO\",\r\n        \"udiPaymentAmount\": 6.16264\r\n      }\r\n    }\r\n  ]\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 12637134,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 58023,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 4926434,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 185163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 97701,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 116600380,
  "status": "passed"
});
formatter.after({
  "duration": 21332,
  "status": "passed"
});
formatter.uri("400_ValidateRequest.feature");
formatter.feature({
  "line": 1,
  "name": "It must indicate that the server could not understand the request due to invalid syntax",
  "description": "       and response (HTTP Code) 400 Bad Request.",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate API Loan-Payment-History returns 400 when dataCenterLocation contains \"spaces\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-datacenterlocation-contains-\"spaces\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 7,
    "value": ""
  }
});
formatter.step({
  "line": 9,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 10
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 11
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 12
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 13
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 14
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 15
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 16
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 17
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 18
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 19
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \" \"\r\n}"
  }
});
formatter.step({
  "line": 31,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 33,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 14080463,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 61863,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 4546296,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 133965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 79782,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 53882313,
  "status": "passed"
});
formatter.after({
  "duration": 11093,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate API Loan-Payment-History returns 400 when dataCenterLocation contains \"letters\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-datacenterlocation-contains-\"letters\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 46,
    "value": ""
  }
});
formatter.step({
  "line": 48,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 49
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 50
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 51
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 52
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 53
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 54
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 55
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 56
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 57
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 58
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 59
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 61,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"AB\"\r\n}"
  }
});
formatter.step({
  "line": 70,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 72,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 11959626,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 62289,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 5890218,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 131406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 81915,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 50612956,
  "status": "passed"
});
formatter.after({
  "duration": 14079,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Validate API Loan-Payment-History returns 400 when dataCenterLocation contains \"characters\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-datacenterlocation-contains-\"characters\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 85,
    "value": ""
  }
});
formatter.step({
  "line": 87,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 88
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 89
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 90
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 91
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 92
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 93
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 94
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 95
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 96
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 97
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 98
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 100,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"#$\"\r\n}"
  }
});
formatter.step({
  "line": 109,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 111,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 10994135,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 53330,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 6802378,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 117753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 97275,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 53799118,
  "status": "passed"
});
formatter.after({
  "duration": 10239,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber contains \"spaces\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-contains-\"spaces\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 122,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 124,
    "value": ""
  }
});
formatter.step({
  "line": 126,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 127
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 128
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 129
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 130
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 131
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 132
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 133
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 134
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 135
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 136
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 137
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 139,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"332   38\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 148,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 150,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 12194279,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 61009,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 4980618,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 124580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 84902,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 53596463,
  "status": "passed"
});
formatter.after({
  "duration": 10666,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber contains \"letters\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-contains-\"letters\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 161,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 162,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 163,
    "value": ""
  }
});
formatter.step({
  "line": 165,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 166
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 167
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 168
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 169
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 170
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 171
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 172
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 173
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 174
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 175
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 176
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 178,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"ABCD\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 187,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 189,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 14635524,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 60583,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1333683,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 117753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 81489,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 55089710,
  "status": "passed"
});
formatter.after({
  "duration": 17492,
  "status": "passed"
});
formatter.scenario({
  "line": 199,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber contains \"characters\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-contains-\"characters\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 200,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 201,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 202,
    "value": ""
  }
});
formatter.step({
  "line": 204,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 205
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 206
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 207
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 208
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 209
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 210
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 211
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 212
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 213
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 214
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 215
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 217,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"#$%\u0026\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 226,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 228,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 11739052,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 55037,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1679689,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 118607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 94714,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 53047802,
  "status": "passed"
});
formatter.after({
  "duration": 9386,
  "status": "passed"
});
formatter.scenario({
  "line": 238,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber contains less that 3 numbers",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-contains-less-that-3-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 239,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 240,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 241,
    "value": ""
  }
});
formatter.step({
  "line": 243,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 244
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 245
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 246
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 247
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 248
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 249
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 250
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 251
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 252
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 253
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 254
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 256,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"12\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 265,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 267,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 11653724,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 58450,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1402372,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 123299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 87462,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 63099485,
  "status": "passed"
});
formatter.after({
  "duration": 11519,
  "status": "passed"
});
formatter.scenario({
  "line": 277,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber contains more that 12 numbers",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-contains-more-that-12-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 278,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 280,
    "value": ""
  }
});
formatter.step({
  "line": 282,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 283
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 284
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 285
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 286
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 287
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 288
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 289
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 290
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 291
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 292
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 293
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 294,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 295,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"12345678901234\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 304,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 305,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 306,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 11442536,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 59730,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1580281,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 115620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 84048,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 56979733,
  "status": "passed"
});
formatter.after({
  "duration": 27305,
  "status": "passed"
});
formatter.scenario({
  "line": 316,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber is not required",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-is-not-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 317,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 318,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 319,
    "value": ""
  }
});
formatter.step({
  "line": 321,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 322
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 323
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 324
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 325
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 326
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 327
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 328
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 329
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 330
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 331
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 332
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 333,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 334,
    "value": "{\r\n  \"account\": {\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 342,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 343,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 344,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 11851259,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 55890,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1365255,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 119886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 87461,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 54738157,
  "status": "passed"
});
formatter.after({
  "duration": 8959,
  "status": "passed"
});
formatter.scenario({
  "line": 354,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber is all zeroes",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-is-all-zeroes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 355,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 356,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 357,
    "value": ""
  }
});
formatter.step({
  "line": 359,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 360
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 361
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 362
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 363
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 364
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 365
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 366
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 367
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 368
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 369
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 370
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 371,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 372,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"000000000000\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 381,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 382,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 383,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 55445956,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 52051,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1215502,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 119033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 774781,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 53778213,
  "status": "passed"
});
formatter.after({
  "duration": 10240,
  "status": "passed"
});
formatter.scenario({
  "line": 393,
  "name": "Validate API Loan-Payment-History returns 400 when accountNumber is empty",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-accountnumber-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 394,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 395,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 396,
    "value": ""
  }
});
formatter.step({
  "line": 398,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 399
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 400
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 401
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 402
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 403
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 404
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 405
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 406
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 407
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 408
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 409
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 410,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 411,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 420,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 421,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 422,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.accountNumber, No acepta letras, caracteres especiales, espacios en blanco, nulos, ni solo ceros. Acepta de 3 hasta 12 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 10718951,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 52904,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 2959189,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 116474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 76795,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 54871269,
  "status": "passed"
});
formatter.after({
  "duration": 20906,
  "status": "passed"
});
formatter.scenario({
  "line": 432,
  "name": "Validate API Loan-Payment-History returns 400 when the dataCenterLocation is empty",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-the-datacenterlocation-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 433,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 434,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 435,
    "value": ""
  }
});
formatter.step({
  "line": 437,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 438
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 439
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 440
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 441
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 442
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 443
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 444
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 445
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 446
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 447
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 448
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 449,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 450,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3386858066\",\r\n    \"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"\"\r\n}"
  }
});
formatter.step({
  "line": 459,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 460,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 461,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"dataCenterLocation, No puede contener letras, caracteres especiales ni espacios en blanco, solo puede ir 4 o 10. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 10724071,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 49491,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1068738,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 111354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 74662,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 64201501,
  "status": "passed"
});
formatter.after({
  "duration": 28158,
  "status": "passed"
});
formatter.scenario({
  "line": 471,
  "name": "Validate API Loan-Payment-History returns 400 when branchId contains \"spaces\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-branchid-contains-\"spaces\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 472,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 473,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 474,
    "value": ""
  }
});
formatter.step({
  "line": 476,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 477
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 478
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 479
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 480
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 481
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 482
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 483
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 484
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 485
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 486
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 487
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 488,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 489,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"  \"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 498,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 499,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 500,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 11420350,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 57170,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1971513,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 132685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 75089,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 55777883,
  "status": "passed"
});
formatter.after({
  "duration": 9813,
  "status": "passed"
});
formatter.scenario({
  "line": 510,
  "name": "Validate API Loan-Payment-History returns 400 when branchId contains \"letters\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-branchid-contains-\"letters\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 511,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 512,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 513,
    "value": ""
  }
});
formatter.step({
  "line": 515,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 516
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 517
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 518
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 519
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 520
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 521
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 522
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 523
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 524
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 525
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 526
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 527,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 528,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"ABC\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 537,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 538,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 539,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 15371908,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 48638,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1037166,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 69970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 79782,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 52320377,
  "status": "passed"
});
formatter.after({
  "duration": 8106,
  "status": "passed"
});
formatter.scenario({
  "line": 549,
  "name": "Validate API Loan-Payment-History returns 400 when branchId contains \"characters\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-branchid-contains-\"characters\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 550,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 551,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 552,
    "value": ""
  }
});
formatter.step({
  "line": 554,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 555
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 556
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 557
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 558
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 559
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 560
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 561
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 562
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 563
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 564
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 565
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 566,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 567,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"#$\"\r\n  },\r\n  \"dataCenterLocation\": \"10\"\r\n}"
  }
});
formatter.step({
  "line": 576,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 577,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 578,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 9104965,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 54183,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1178385,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 101114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 75942,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 82427643,
  "status": "passed"
});
formatter.after({
  "duration": 10239,
  "status": "passed"
});
formatter.scenario({
  "line": 588,
  "name": "Validate API Loan-Payment-History returns 400 when branchId contains \"more that 4 numbers\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-branchid-contains-\"more-that-4-numbers\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 589,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 590,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 591,
    "value": ""
  }
});
formatter.step({
  "line": 593,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 594
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 595
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 596
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 597
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 598
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 599
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 600
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 601
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 602
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 603
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 604
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 605,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 606,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"12345\"\r\n  },\r\n  \"dataCenterLocation\": \"4\"\r\n}"
  }
});
formatter.step({
  "line": 615,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 616,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 617,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 12305633,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 52477,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1256887,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 94715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 68689,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 51601912,
  "status": "passed"
});
formatter.after({
  "duration": 10666,
  "status": "passed"
});
formatter.scenario({
  "line": 627,
  "name": "Validate API Loan-Payment-History returns 400 when branchId contains \"less that 4 numbers\"",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-branchid-contains-\"less-that-4-numbers\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 628,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 629,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 630,
    "value": ""
  }
});
formatter.step({
  "line": 632,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 633
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 634
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 635
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 636
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 637
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 638
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 639
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 640
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 641
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 642
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 643
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 644,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 645,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"123\"\r\n  },\r\n  \"dataCenterLocation\": \"4\"\r\n}"
  }
});
formatter.step({
  "line": 654,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 655,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 656,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 9529047,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 55037,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1144681,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 99834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 74662,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 52073352,
  "status": "passed"
});
formatter.after({
  "duration": 9812,
  "status": "passed"
});
formatter.scenario({
  "line": 666,
  "name": "Validate API Loan-Payment-History returns 400 when branchId is empty",
  "description": "",
  "id": "it-must-indicate-that-the-server-could-not-understand-the-request-due-to-invalid-syntax;validate-api-loan-payment-history-returns-400-when-branchid-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 667,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 668,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 669,
    "value": ""
  }
});
formatter.step({
  "line": 671,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 672
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 673
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 674
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 675
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 676
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 677
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 678
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 679
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 680
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 681
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 682
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 683,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 684,
    "value": "{\r\n  \"account\": {\r\n    \"accountNumber\": \"3323852024\",\r\n    \"branchId\": \"\"\r\n  },\r\n  \"dataCenterLocation\": \"4\"\r\n}"
  }
});
formatter.step({
  "line": 693,
  "name": "the service should response Http code \u003c400\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 694,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 695,
    "value": "{\r\n  \"type\": \"invalid\",\r\n  \"code\": \"400\",\r\n  \"details\": \"MethodArgumentNotValidException\",\r\n  \"location\": \"request\",\r\n  \"moreInfo\": \"account.branchId, No acepta letras, caracteres especiales, espacios en blanco ni nulos. Acepta 4 posiciones. \"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 10374652,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 49063,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 977437,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 108793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 77222,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 58655156,
  "status": "passed"
});
formatter.after({
  "duration": 8533,
  "status": "passed"
});
formatter.uri("404_ExecuteWithNotFound.feature");
formatter.feature({
  "line": 1,
  "name": "It must indicate that the system not found information with the data provided",
  "description": "       and response (HTTP Code) 404 Bad Request.",
  "id": "it-must-indicate-that-the-system-not-found-information-with-the-data-provided",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate API Loan-Payment-History returns 404 when accountNumber is incorrect",
  "description": "",
  "id": "it-must-indicate-that-the-system-not-found-information-with-the-data-provided;validate-api-loan-payment-history-returns-404-when-accountnumber-is-incorrect",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the service with url \"POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the simulated response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 7,
    "value": ""
  }
});
formatter.step({
  "line": 9,
  "name": "the service is executed with headers",
  "rows": [
    {
      "cells": [
        "header",
        "value"
      ],
      "line": 10
    },
    {
      "cells": [
        "Authorization",
        "TOKENEXAMPLE"
      ],
      "line": 11
    },
    {
      "cells": [
        "Accept-Language",
        "MX"
      ],
      "line": 12
    },
    {
      "cells": [
        "Accept",
        "application/json"
      ],
      "line": 13
    },
    {
      "cells": [
        "uuid",
        "DU0908002345318"
      ],
      "line": 14
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 15
    },
    {
      "cells": [
        "countryCode",
        "MX"
      ],
      "line": 16
    },
    {
      "cells": [
        "sid",
        "12"
      ],
      "line": 17
    },
    {
      "cells": [
        "businesscode",
        "1"
      ],
      "line": 18
    },
    {
      "cells": [
        "ChannelId",
        "1521"
      ],
      "line": 19
    },
    {
      "cells": [
        "client_id",
        "AG99406"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the body request",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "{\r\n  \"account\": {\r\n\t\"accountNumber\": \"123456\",\r\n\t\"branchId\": \"0000\"\r\n  },\r\n  \"dataCenterLocation\": \"4\"\r\n}"
  }
});
formatter.step({
  "line": 31,
  "name": "the service should response Http code \u003c404\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the body response",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 33,
    "value": "{\r\n  \"type\": \"error\",\r\n  \"code\": \"404\",\r\n  \"details\": \"Not Found Exception\",\r\n  \"location\": \"Unisys comunication\",\r\n  \"moreInfo\": \"NO EXISTE CONTRATO\"\r\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "POST http://lndt-api-a-loan-payment-history-mx-uat1.cfapps-gt1-dev.lac.nsroot.net/api/v1/loans/payments/retrieve",
      "offset": 22
    }
  ],
  "location": "ServiceExecutor.the_service_with(String)"
});
formatter.result({
  "duration": 10099468,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_simulated_response(String)"
});
formatter.result({
  "duration": 72955,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_service_is_executed_with_headers(Header\u003e)"
});
formatter.result({
  "duration": 1046126,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_request(String)"
});
formatter.result({
  "duration": 105808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 39
    }
  ],
  "location": "ServiceExecutor.the_service_should_response_Http_code(int)"
});
formatter.result({
  "duration": 72956,
  "status": "passed"
});
formatter.match({
  "location": "ServiceExecutor.the_body_response(String)"
});
formatter.result({
  "duration": 112350174,
  "status": "passed"
});
formatter.after({
  "duration": 5973,
  "status": "passed"
});
});