package com.purchaseauto.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class validateAutoController {
    @GetMapping("validate/{make}/{year}")
    public Automobile validAuto(@PathVariable String make, @PathVariable String year) {
        Automobile newAuto = new Automobile(make, year);
        Integer numYear;
        try {
            numYear = Integer.parseInt(year);
        } catch (Exception e) {
            newAuto.setAccpeted(false);
            return newAuto;
        }

        if (year.length() != 2 && year.length() != 4) {
            newAuto.setAccpeted(false);
            return newAuto;
        }

        if (make.toLowerCase() == "mazda") {
            if (year.length() == 2) {
                if (numYear < 97 && numYear > 17) {
                    newAuto.setAccpeted(false);
                    return newAuto;
                } else {
                    newAuto.setAccpeted(true);
                    return newAuto;
                }
            } else if (year.length() == 4) {
                if (numYear < 1997) {
                    newAuto.setAccpeted(false);
                    return newAuto;
                } else {
                    newAuto.setAccpeted(true);
                    return newAuto;
                }
            } else {
                newAuto.setAccpeted(false);
                return newAuto;
            }
        } else if (make.toLowerCase() == "toyota") {
            if (year.length() == 2) {
                if (numYear >= 6 && numYear <= 18) {
                    newAuto.setAccpeted(false);
                    return newAuto;
                } else if (numYear <= 98) {
                    newAuto.setAccpeted(false);
                    return newAuto;
                } else {
                    newAuto.setAccpeted(true);
                    return newAuto;
                }
            } else if (year.length() == 4) {
                if (numYear >= 2006) {
                    newAuto.setAccpeted(false);
                    return newAuto;
                } else if (numYear <= 1998) {
                    newAuto.setAccpeted(false);
                    return newAuto;
                } else {
                    newAuto.setAccpeted(true);
                    return newAuto;
                }
            } else {
                newAuto.setAccpeted(false);
                    return newAuto;
            }
        } else {
            newAuto.setAccpeted(false);
                    return newAuto;
        }
    }
}
