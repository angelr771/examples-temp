/*
* Copyright (C) 2016 by Citigroup. All rights reserved.
* Citigroup claims copyright in this computer program as an unpublished work,
* one or more versions of which were first used to provide services to
* customers on the dates indicated in the foregoing notice. Claim of
* copyright does not imply waiver of other rights.
*
* NOTICE OF PROPRIETARY RIGHTS
*
* This program is a confidential trade secret and the property of Citigroup.
* Use, examination, reproduction, disassembly, decompiling, transfer and/or
* disclosure to others of all or any part of this software program are
* strictly prohibited except by express written agreement with Citigroup.
*/

package com.citibanamex.mafxd.corp.auth.feature.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.ResponseErrorHandler;

import gherkin.deps.com.google.gson.Gson;
import gherkin.deps.com.google.gson.reflect.TypeToken;
import lombok.extern.slf4j.Slf4j;

/** The constant log. */
@Slf4j
public class RestErrorHandler implements ResponseErrorHandler {

  /** The constant httpStatusExpected. */
  private final int httpStatusExpected;

  /** The constant bodyResponseExpected. */
  private final String bodyResponseExpected;

  /**
   * Creates a new instance of rest error handler.
   *
   * @param httpStatusExpected http status expected
   * @param bodyResponseExpected body response expected
   */
  public RestErrorHandler(int httpStatusExpected, String bodyResponseExpected) {

    this.httpStatusExpected = httpStatusExpected;
    this.bodyResponseExpected = bodyResponseExpected;
  }

  /* (non-Javadoc)
   * @see org.springframework.web.client.ResponseErrorHandler#hasError(org.springframework.http.client.ClientHttpResponse)
   */
  @Override
  public boolean hasError(ClientHttpResponse response) throws IOException {

    return response.getRawStatusCode() != 200;
  }

  /* (non-Javadoc)
   * @see org.springframework.web.client.ResponseErrorHandler#handleError(org.springframework.http.client.ClientHttpResponse)
   */
  @Override
  public void handleError(ClientHttpResponse response) throws IOException {

    log.info("----->    Response handler    <-----");
    StringBuilder sb = new StringBuilder();

    byte[] body = new byte[1];

    while (response.getBody().read(body) != -1) {
      sb.append(new String(body, Charset.forName("UTF-8")));
    }

    log.info("Http code resulted: " + response.getRawStatusCode());
    log.info("Body resulted: \n[{}]", sb.toString());

    validateResponse(response.getRawStatusCode(), sb.toString());
  }

  /**
   * Validate response.
   *
   * @param httpCodeResult http code result
   * @param bodyResponse body response
   */
  public void validateResponse(int httpCodeResult, String bodyResponse) {

    log.info("Http code expected [{}]", httpStatusExpected);
    log.info("Body response expected \n[{}]", bodyResponseExpected);

    assertEquals(httpStatusExpected, httpCodeResult);
    assertTrue(validateForNonContent(bodyResponse == null ? "" : bodyResponse));
    validateResonse(bodyResponse);
  }

  /**
   * Validate for non content.
   *
   * @param bodyResponse body response
   * @return true, if the condition is satisfied.
   */
  private boolean validateForNonContent(String bodyResponse) {

    if ("".equals(bodyResponseExpected)) {
      assertEquals(bodyResponseExpected, bodyResponse);
    }

    return true;
  }
  
  private void validateResonse(String bodyResponse) {
    
    if(bodyResponseExpected.isEmpty()) {
      return;
    }
    
    final Map<String, Object> mapJsonExpected;
    final Map<String, Object> mapJsonResult;
    try {

      mapJsonExpected = new Gson().fromJson(bodyResponseExpected, new TypeToken<HashMap<String, Object>>() {}.getType());
      mapJsonResult = new Gson().fromJson(bodyResponse, new TypeToken<HashMap<String, Object>>() {}.getType());
      for(String key: mapJsonExpected.keySet()) {
        assertTrue(mapJsonResult.containsKey(key));
        assertEquals(mapJsonExpected.get(key), mapJsonResult.get(key));
      }
      
    } catch (Exception e) {
      log.info(e.getMessage());
      assertTrue(false);
    }
    
  }
}
