package com.purchaseauto.api;

public class Automobile {
    private String make;
    private String year;
    private Boolean accpeted;

    public String getMake() {
        return make;
    }

    public Boolean getAccpeted() {
        return accpeted;
    }

    public void setAccpeted(Boolean accpeted) {
        this.accpeted = accpeted;
    }

    public String getYear() {
        return year;
    }

    public Automobile(String make, String year) {
        super();
        this.make = make;
        this.year = year;
    }
}
