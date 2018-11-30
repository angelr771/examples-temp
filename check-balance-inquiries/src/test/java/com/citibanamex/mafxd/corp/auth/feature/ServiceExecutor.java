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

package com.citibanamex.mafxd.corp.auth.feature;

import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.citibanamex.mafxd.corp.auth.api.model.Header;
import com.citibanamex.mafxd.corp.auth.feature.util.RestErrorHandler;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import lombok.extern.slf4j.Slf4j;

/** The constant log. */
@Slf4j
public class ServiceExecutor {

  /** La constante URL_SIMULATOR. */
  private final String URL_SIMULATOR = "http://localhost:5001/api/map";

  /** simulated response id. */
  private Optional<String> simulatedResponseId = Optional.empty();

  /** url. */
  private String url;

  /** http method. */
  @SuppressWarnings("unused")
private HttpMethod httpMethod;

  /** body request. */
  private String bodyRequest;

  /** request header. */
  private MultiValueMap<String, String> requestHeader;

  /** rest template. */
  private RestTemplate restTemplate;

  /** http code expected. */
  private int httpCodeExpected;

  /**
   * The service with.
   *
   * @param url url
   * @throws Throwable throwable.
   */
  @Given("^the service with url \"(.*?)\"$")
  public void the_service_with(String url) throws Throwable {

    String method;
    requestHeader = new LinkedMultiValueMap<>();
    restTemplate = new RestTemplate();

    log.info(
      "==============================================================================");
    log.info("Testing Scenario ");
    log.info(
      "==============================================================================");
    log.info("");
    log.info("Method [{}]", method = url.split(" ")[0]);
    log.info("Url [{}]", this.url = url.split(" ")[1]);
    httpMethod =
      "POST".equalsIgnoreCase(method) ? HttpMethod.POST : HttpMethod.GET;
  }

  /**
   * The simulated response.
   *
   * @param simulateResponse simulate response
   * @throws Throwable throwable.
   */
  @Given("^the simulated response$")
  public void the_simulated_response(String simulateResponse) throws Throwable {

    if (simulateResponse.isEmpty()) {
      simulatedResponseId = Optional.empty();
      return;
    }

    log.info("Simulate Response \n[{}]", simulateResponse);

    requestHeader.set("Content-Type", "application/json");
    ResponseEntity<String> response = restTemplate.postForEntity(URL_SIMULATOR,
      new HttpEntity<String>(simulateResponse, requestHeader), String.class);

    simulatedResponseId = Optional.ofNullable(response.getBody());

    log.info("Http code for request/response mapping: [{}]",
      response.getStatusCodeValue());
    log.info("Mapping Id for request/response mapping: [{}]",
      simulatedResponseId.get());
  }

  /**
   * The service is executed with headers.
   *
   * @param headers headers
   * @throws Throwable throwable.
   */
  @When("^the service is executed with headers$")
  public void the_service_is_executed_with_headers(List<Header> headers)
    throws Throwable {

    log.info("Headers [{}]",
      ToStringBuilder.reflectionToString(headers, ToStringStyle.JSON_STYLE));
    headers.stream()
      .peek(h -> log.info("Adding header  Header:[{}], Value:[{}]",
        h.getHeader(), h.getValue()))
      .forEach(h -> requestHeader.add(h.getHeader(), h.getValue()));
  }

  /**
   * The body request.
   *
   * @param bodyRequest body request
   * @throws Throwable throwable.
   */
  @When("^the body request$")
  public void the_body_request(String bodyRequest) throws Throwable {

    log.info("Body request \n{}", bodyRequest);
    this.bodyRequest = bodyRequest;
  }

  /**
   * The service should response http code.
   *
   * @param httpStatus http status
   * @throws Throwable throwable.
   */
  @Then("^the service should response Http code <(\\d+)>$")
  public void the_service_should_response_Http_code(int httpStatus)
    throws Throwable {

    httpCodeExpected = httpStatus;
  }

  /**
   * The body response.
   *
   * @param bodyResponse body response
   * @throws Throwable throwable.
   */
  @Then("^the body response$")
  public void the_body_response(String bodyResponse) throws Throwable {

    restTemplate
      .setErrorHandler(new RestErrorHandler(httpCodeExpected, bodyResponse));
    ResponseEntity<String> responseEntity = null;
    try {
      responseEntity = restTemplate.postForEntity(url,
        new HttpEntity<String>(bodyRequest, requestHeader), String.class);
    } catch (RestClientException ex) {
      log.info("RestClientException [{}]", ex.getMessage());
    }

    if (responseEntity.getStatusCodeValue() == 200) {
      ((RestErrorHandler) restTemplate.getErrorHandler()).validateResponse(200,
        responseEntity.getBody());
    }
  }

  /**
   * Clean environment.
   */
  @After
  public void cleanEnvironment() {

    if (simulatedResponseId.isPresent()) {
      String url = URL_SIMULATOR + "/" + simulatedResponseId.get();
      new RestTemplate().delete(url);
    }
  }

}
