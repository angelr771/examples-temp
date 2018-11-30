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

package com.citibanamex.mafxd.corp.auth;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * <code>LegacyAuthenticationTest</code>.
 *
 * @author sg05070
 * @version 1.0
 */
@RunWith(Cucumber.class)
@ExtendedCucumberOptions(
    jsonReport = "target/cucumber.json",
    jsonUsageReport = "target/cucumber-usage.json",
    usageReport = true,
    detailedReport = true,
    detailedAggregatedReport = true,
    overviewReport = true,
    overviewChartsReport = true,
    toPDF = true,
    pdfPageSize = "A4 Landscape",
    retryCount = 3,
    outputFolder = "target")
@CucumberOptions(
  features = "src/test/resources/features",
  glue = "com/citibanamex/mafxd/corp/auth/feature",
  plugin = {
    "html:target", 
    "json:target/cucumber.json",
    "pretty:target/cucumber-pretty.txt",
    "usage:target/cucumber-usage.json", 
    "junit:target/cucumber-results.xml" }  
 )
public class LegacyAuthenticationTest {
  /**
   * This class tells to cucumber where to find the feature scripts, every
   * scenario has one test class file within the package
   * com.citibanamex.mafxd.corp.auth.feature
   * 
   */  
}
