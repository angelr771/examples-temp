package com.citibanamex.mafxd.corp.auth;

import org.junit.Test;

import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
import com.github.mkolisnyk.cucumber.reporting.CucumberUsageReporting;


public class MakeOverViewReportTest {

  @Test
  public void createReport() {
    CucumberResultsOverview results = new CucumberResultsOverview();
    results.setOutputDirectory("target");
    results.setOutputName("cucumber-result");
    results.setSourceFile("target/cucumber.json");
    
    CucumberUsageReporting report = new CucumberUsageReporting();
    report.setOutputDirectory("target");
    report.setOutputName("cucumber-result");
    report.setJsonUsageFile("target/cucumber-usage.json");
    
    try {
      results.execute();
      report.execute();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
  
}
