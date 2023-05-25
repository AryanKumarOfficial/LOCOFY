import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const CoverFrame = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-primary-contrast w-full h-[60rem] overflow-hidden text-center text-[0.84rem] text-primary-contrast font-components-button-large">
        <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke w-[120rem] h-[60rem]" />
        <div className="absolute top-[0rem] left-[17rem] rounded-2xl bg-primary-contrast w-[67.28rem] overflow-hidden flex flex-col items-center justify-start gap-[3.22rem] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
          <div className="self-stretch flex flex-col items-center justify-start text-[2.85rem] font-baloo-bhai">
            <header className="self-stretch bg-primary-contrast h-[3.6rem] flex flex-row py-[1.03rem] px-[3.74rem] box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-[0.65rem] text-darkslategray-200 font-components-button-large lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
              <div className="flex-1 flex flex-row items-center justify-between">
                <img
                  className="relative w-[8.13rem] h-[1.54rem] overflow-hidden shrink-0"
                  alt=""
                  src="/fickleflight-logo.svg"
                />
                <div className="w-[17.19rem] flex flex-row items-center justify-end gap-[1.68rem] sm:flex">
                  <div className="flex-1 flex flex-row items-center justify-end gap-[1.4rem] md:hidden">
                    <div className="relative text-cornflowerblue-100 inline-block w-[2.2rem] h-[0.75rem] shrink-0">
                      Explore
                    </div>
                    <div className="relative inline-block w-[2.01rem] h-[0.75rem] shrink-0">
                      Search
                    </div>
                    <div className="relative inline-block w-[1.92rem] h-[0.75rem] shrink-0">
                      Hotels
                    </div>
                    <div className="relative inline-block w-[1.82rem] h-[0.75rem] shrink-0">
                      Offers
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-center gap-[0.56rem]">
                    <img
                      className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0 hidden md:flex"
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className="rounded-[28.41px] w-[1.68rem] h-[1.68rem] object-cover"
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="self-stretch flex flex-col items-center justify-center bg-[url(/search-section@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="self-stretch h-[29.9rem] flex flex-col py-[0rem] px-[6.54rem] box-border items-center justify-center gap-[2.01rem] w-full md:pl-[1.88rem] md:pr-[1.88rem] md:box-border">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.23rem]">
                  <div className="self-stretch relative leading-[3.13rem] sm:text-[2.63rem] sm:leading-[3rem]">{`Let’s explore & travel the world`}</div>
                  <div className="self-stretch relative text-[1.12rem] leading-[1.5rem] font-components-button-large">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="self-stretch rounded-[7.48px] bg-primary-contrast flex flex-row p-[0.93rem] items-start justify-start text-left text-[0.56rem] text-gray-200 font-components-button-large md:flex-col">
                  <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                    <div className="flex-1 flex flex-col p-[0.23rem] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                      <Autocomplete
                        className="self-stretch"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-[0.23rem] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch h-[2.62rem] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-[2.99px] box-border h-[2.62rem] flex flex-col py-[0rem] px-[0.56rem] items-start justify-start border-[0.7px] border-solid border-gray-400">
                          <div className="bg-primary-contrast h-[0.09rem] flex flex-row py-[0rem] px-[0.19rem] box-border items-center justify-start">
                            <div className="relative tracking-[0.11px] leading-[0.56rem] flex items-center w-[1.64rem] h-[0.56rem] shrink-0">
                              Arrival
                            </div>
                          </div>
                          <div className="self-stretch overflow-hidden flex flex-row py-[0.7rem] px-[0rem] items-center justify-start gap-[0.37rem] text-center text-dimgray">
                            <div className="hidden flex-row items-start justify-start gap-[0.37rem]">
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[0.19rem] items-center justify-start">
                                  <div className="rounded-[47.84px] bg-silver w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[0.14rem] px-[0.28rem] items-start justify-start text-left text-[0.61rem] text-gray-300">
                                    <div className="relative tracking-[0.12px] leading-[0.84rem]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[0.19rem] items-center justify-start">
                                  <div className="rounded-[47.84px] bg-silver w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[0.14rem] px-[0.28rem] items-start justify-start text-left text-[0.61rem] text-gray-300">
                                    <div className="relative tracking-[0.12px] leading-[0.84rem]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 relative text-[0.75rem] tracking-[0.11px] leading-[1.12rem] text-gray-300 text-left">
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col p-[0.23rem] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch">
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="primary"
                              variant="outlined"
                              size="medium"
                              renderInput={{ placeholder: "01/05/2022" }}
                              helperText=""
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-[0.23rem] items-center justify-center text-center text-[0.7rem] text-primary-contrast md:w-full md:text-left">
                    <div className="rounded-[2.99px] bg-orange w-[7.66rem] h-[2.62rem] overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-orange md:mr-[auto] sm:w-[100%!important]">
                      <div className="relative tracking-[0.34px] leading-[1.22rem] uppercase font-medium inline-block w-[6.87rem]">
                        Search flights
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-[0rem] px-[3.74rem] box-border items-center justify-start gap-[3.74rem] w-full max-w-[80rem] text-left text-darkslategray-300 md:pl-[1.88rem] md:pr-[1.88rem] md:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.93rem] md:block">
              <b className="self-stretch relative tracking-[0.04em] uppercase">
                Upcoming Flight
              </b>
              <div className="self-stretch flex flex-row items-start justify-start gap-[1.68rem] text-[1.12rem] text-cornflowerblue-200 md:flex-col">
                <div className="rounded-[5.98px] flex flex-col p-[0.93rem] items-start justify-start gap-[0.98rem] border-[0.7px] border-solid border-whitesmoke lg:w-[32.5rem] md:w-full md:block md:mb-[1.88rem]">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="w-[3.36rem] h-[2.15rem] flex flex-col items-start justify-start gap-[0.06rem]">
                      <b className="relative tracking-[0.04em] capitalize inline-block w-[2.09rem] h-[1.31rem] shrink-0">
                        SIN
                      </b>
                      <div className="relative text-[0.65rem] tracking-[0.02em] capitalize text-gray-100 inline-block w-[3.36rem] h-[0.75rem] shrink-0">
                        Singapore
                      </div>
                    </div>
                    <div className="w-[5.48rem] h-[2.06rem] flex flex-col items-center justify-start gap-[0.19rem] text-[0.65rem] text-gray-100">
                      <img
                        className="relative w-[5.48rem] h-[1.12rem]"
                        alt=""
                        src="/group-17.svg"
                      />
                      <b className="relative tracking-[0.02em] capitalize inline-block w-[3.07rem] h-[0.75rem] shrink-0">
                        15H 55M
                      </b>
                    </div>
                    <div className="w-[4.08rem] h-[2.15rem] flex flex-col py-[0rem] px-[0rem] box-border items-end justify-start gap-[0.06rem] text-right">
                      <b className="relative tracking-[0.04em] capitalize inline-block w-[2.4rem] h-[1.31rem] shrink-0">
                        LAX
                      </b>
                      <div className="relative text-[0.65rem] tracking-[0.02em] capitalize text-gray-100 inline-block w-[4.08rem] h-[0.75rem] shrink-0">
                        Los Angeles
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-[0.05rem] border-t-[0.7px] border-solid border-whitesmoke md:w-full" />
                  <div className="self-stretch flex flex-row items-center justify-between text-[0.65rem] text-gray-100">
                    <div className="relative tracking-[0.02em] capitalize inline-block w-[9.53rem] shrink-0">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="relative tracking-[0.02em] text-right inline-block w-[4.08rem] shrink-0">
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[0.05rem] h-[6.82rem] border-r-[0.7px] border-solid border-whitesmoke md:hidden" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.93rem] text-[0.84rem] text-lightgray md:w-full md:flex-[unset] md:self-stretch">
                  <div className="self-stretch relative tracking-[0.04em] uppercase">
                    Prepare for your trip
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-1.75rem] sm:mr-[-1.75rem]">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/group-21.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-left inline-block w-[1.82rem] h-[0.84rem] shrink-0">
                        Hotel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/frame-21.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[3.74rem] h-[0.84rem] shrink-0">
                        Attractions
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/group-211.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[1.5rem] h-[0.84rem] shrink-0">
                        Eats
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/frame-211.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[3.27rem] h-[0.84rem] shrink-0">
                        Commute
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative rounded-[11.96px] w-[3.27rem] h-[3.06rem]"
                        alt=""
                        src="/frame-212.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[1.5rem]">
                        Taxi
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[0.37rem] sm:pb-[1.25rem] sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative rounded-[11.96px] w-[3.06rem] h-[3.06rem]"
                        alt=""
                        src="/frame-213.svg"
                      />
                      <div className="relative text-[0.7rem] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[2.43rem] h-[0.84rem] shrink-0">
                        Movies
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.12rem] text-cornflowerblue-200">
              <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem] sm:flex-[unset] sm:self-stretch">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    Plan your next trip
                  </b>
                  <b className="self-stretch relative text-[1.4rem] tracking-[0.04em] capitalize text-darkslategray-300 sm:text-[1.38rem]">
                    Most Popular Destinations
                  </b>
                </div>
                <a
                  className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[10.81rem] flex flex-row items-start justify-start gap-[0.47rem] text-right text-[inherit] md:hidden"
                  href="#"
                >
                  <div className="relative tracking-[0.04em] font-medium inline-block w-[9.22rem] shrink-0">
                    View all destinations
                  </div>
                  <img
                    className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-1rem] mr-[-1rem] md:ml-[-1rem] md:mr-[-1rem] md:flex-wrap md:mt-[-1rem] md:mb-[-1rem]">
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center w-3/12 md:p-[1rem] md:box-border md:w-6/12 sm:w-full">
                  <div className="w-[13.46rem] h-[8.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-start bg-[url(/frame-696@3x.png)] bg-cover bg-no-repeat bg-[top]">
                    <div className="w-[13.43rem] flex flex-row py-[0.37rem] px-[0.56rem] box-border items-start justify-start">
                      <b className="flex-1 relative text-[0.93rem] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Paris
                      </b>
                      <div className="w-[4.25rem] h-[2.76rem] flex flex-col py-[0rem] px-[0rem] box-border items-end justify-start gap-[0.06rem]">
                        <div className="relative text-[0.75rem] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[2.45rem] h-[0.89rem] shrink-0">
                          from
                        </div>
                        <div className="relative text-[1.78rem] leading-[1.78rem] font-baloo-bhai text-primary-contrast text-right inline-block w-[4.25rem] h-[1.78rem] shrink-0">
                          $699
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center w-3/12 md:p-[1rem] md:box-border md:w-6/12 sm:w-full">
                  <div className="w-[13.46rem] h-[8.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-start bg-[url(/frame-697@3x.png)] bg-cover bg-no-repeat bg-[top]">
                    <div className="w-[13.43rem] flex flex-row py-[0.37rem] px-[0.56rem] box-border items-start justify-start">
                      <b className="flex-1 relative text-[0.93rem] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Greece
                      </b>
                      <div className="w-[4.67rem] h-[2.76rem] flex flex-col items-end justify-start gap-[0.06rem]">
                        <div className="relative text-[0.75rem] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[2.45rem] h-[0.89rem] shrink-0">
                          from
                        </div>
                        <div className="relative text-[1.78rem] leading-[1.78rem] font-baloo-bhai text-primary-contrast text-right inline-block w-[4.63rem] h-[1.78rem] shrink-0">
                          $1079
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center w-3/12 md:p-[1rem] md:box-border md:w-6/12 sm:w-full">
                  <div className="w-[13.46rem] h-[8.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-start bg-[url(/frame-698@3x.png)] bg-cover bg-no-repeat bg-[top]">
                    <div className="w-[13.43rem] flex flex-row py-[0.37rem] px-[0.56rem] box-border items-start justify-start">
                      <b className="flex-1 relative text-[0.93rem] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Norway
                      </b>
                      <div className="w-[4.25rem] h-[2.76rem] flex flex-col py-[0rem] px-[0rem] box-border items-end justify-start gap-[0.06rem]">
                        <div className="relative text-[0.75rem] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[2.45rem] h-[0.89rem] shrink-0">
                          from
                        </div>
                        <div className="relative text-[1.78rem] leading-[1.78rem] font-baloo-bhai text-primary-contrast text-right inline-block w-[4.25rem] h-[1.78rem] shrink-0">
                          $895
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center w-3/12 md:p-[1rem] md:box-border md:w-6/12 sm:w-full">
                  <div className="w-[13.46rem] h-[8.5rem] overflow-hidden shrink-0 flex flex-col items-center justify-start bg-[url(/frame-699@3x.png)] bg-cover bg-no-repeat bg-[top]">
                    <div className="w-[13.43rem] flex flex-row py-[0.37rem] px-[0.56rem] box-border items-start justify-start">
                      <b className="flex-1 relative text-[0.93rem] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Tuscany
                      </b>
                      <div className="w-[4.7rem] h-[2.76rem] flex flex-col py-[0rem] px-[0rem] box-border items-end justify-start gap-[0.06rem]">
                        <div className="relative text-[0.75rem] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[2.45rem] h-[0.89rem] shrink-0">
                          from
                        </div>
                        <div className="relative text-[1.78rem] leading-[1.78rem] font-baloo-bhai text-primary-contrast text-right inline-block w-[4.7rem] h-[1.78rem] shrink-0">
                          $1245
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast w-[10.81rem] hidden flex-row items-start justify-start gap-[0.47rem] text-right md:flex md:mt-[1rem]">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[9.22rem] shrink-0 md:w-auto">
                  View all destinations
                </div>
                <img
                  className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[1.12rem] text-[1.4rem]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-[1.38rem]">
                  Recommended Holidays
                </b>
                <a
                  className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[9.34rem] flex flex-row items-start justify-start gap-[0.47rem] text-right text-[0.84rem] text-cornflowerblue-200 md:hidden"
                  href="#"
                >
                  <div className="relative tracking-[0.04em] font-medium inline-block w-[7.75rem] shrink-0">
                    View all holidays
                  </div>
                  <img
                    className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-1rem] mr-[-1rem] md:ml-[-1rem] md:mr-[-1rem] md:flex-wrap">
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-[2rem] sm:w-full sm:mb-[2rem]">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[11.31rem] shrink-0 object-cover"
                    alt=""
                    src="/unsplash5mv818tzxeo@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[0.93rem] px-[0.75rem] items-center justify-center border-[0.7px] border-solid border-whitesmoke">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.14rem]">
                        <div className="self-stretch relative text-[0.93rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Bali
                        </div>
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-[1.5rem] leading-[1.59rem] font-baloo-bhai text-cornflowerblue-100 text-right inline-block w-[3.36rem] h-[1.59rem] shrink-0">
                        $899
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-[2rem] sm:w-full sm:mb-[2rem]">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[11.31rem] shrink-0 object-cover"
                    alt=""
                    src="/unsplashj82dskoxvy8@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[0.93rem] px-[0.75rem] items-center justify-center border-[0.7px] border-solid border-whitesmoke">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.14rem]">
                        <div className="self-stretch relative text-[0.93rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Switzerland
                        </div>
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          6D5N
                        </div>
                      </div>
                      <div className="relative text-[1.5rem] leading-[1.59rem] font-baloo-bhai text-cornflowerblue-100 text-right inline-block w-[3.5rem] h-[1.59rem] shrink-0">
                        $900
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full sm:mb-[2rem]">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[11.31rem] shrink-0 object-cover"
                    alt=""
                    src="/unsplash4ezkckxolre@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[0.93rem] px-[0.75rem] items-center justify-center border-[0.7px] border-solid border-whitesmoke">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.14rem]">
                        <div className="self-stretch relative text-[0.93rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Boracay
                        </div>
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          5D4N
                        </div>
                      </div>
                      <div className="relative text-[1.5rem] leading-[1.59rem] font-baloo-bhai text-cornflowerblue-100 text-right inline-block w-[3.36rem] h-[1.59rem] shrink-0">
                        $699
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full">
                  <img
                    className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[11.31rem] shrink-0 object-cover"
                    alt=""
                    src="/unsplashuyqmxhjr3ne@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[0.93rem] px-[0.75rem] items-center justify-center border-[0.7px] border-solid border-whitesmoke">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.14rem]">
                        <div className="self-stretch relative text-[0.93rem] tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Palawan
                        </div>
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-[1.5rem] leading-[1.59rem] font-baloo-bhai text-cornflowerblue-100 text-right inline-block w-[3.27rem] h-[1.59rem] shrink-0">
                        $789
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast w-[9.34rem] hidden flex-row items-start justify-start gap-[0.47rem] text-right text-[0.84rem] text-cornflowerblue-200 md:flex md:[mrgin-top:16px]">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[7.75rem] shrink-0 md:w-auto">
                  View all holidays
                </div>
                <img
                  className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright3.svg"
                />
              </div>
            </div>
            <form className="self-stretch flex flex-col items-start justify-start gap-[0.93rem]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <b className="flex-1 relative text-[1.4rem] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-center sm:text-[1.38rem]">
                  Popular Stays
                </b>
                <a
                  className="[text-decoration:none] flex-1 rounded-[23.17px] bg-primary-contrast flex flex-row items-start justify-start gap-[0.47rem] md:hidden"
                  href="#"
                >
                  <div className="relative text-[0.84rem] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[6.57rem] shrink-0">
                    View all stays
                  </div>
                  <img
                    className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright4.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start ml-[-0.75rem] mr-[-0.75rem] lg:pr-[2.5rem] lg:box-border lg:ml-[-0.75rem] lg:mr-[-3.12rem] md:mr-[-3.12rem] md:ml-[-0.75rem] sm:flex-col sm:pr-[0rem] sm:box-border sm:mr-[-0.75rem] sm:ml-[-0.75rem]">
                <div className="self-stretch flex-1 flex flex-row py-[0rem] px-[0.56rem] box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[0.7rem] px-[0.61rem] items-start justify-start gap-[1.07rem] w-3/12 border-[0.7px] border-solid border-whitesmoke hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[1.25rem]"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[9.34rem] shrink-0 object-cover"
                      alt=""
                      src="/unsplashrlwe8f8anoc@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.51rem]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem]">
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          Entire bungalow
                        </div>
                        <b className="self-stretch relative text-[1.03rem] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left sm:text-[1.25rem]">
                          Matterhorn Suites
                        </b>
                        <div className="self-stretch relative text-[0.84rem] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $575/night
                        </div>
                      </div>
                      <img
                        className="relative w-[1.17rem] h-[1.17rem] overflow-hidden shrink-0"
                        alt=""
                        src="/video.svg"
                      />
                    </div>
                    <div className="w-[12.62rem] h-[0.89rem] flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="w-[2.07rem] h-[0.89rem] flex flex-row items-center justify-start gap-[0.13rem]">
                        <img
                          className="relative w-[0.78rem] h-[0.8rem]"
                          alt=""
                          src="/vector.svg"
                        />
                        <div className="relative text-[0.75rem] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[1.12rem] h-[0.89rem] shrink-0">
                          4.9
                        </div>
                      </div>
                      <div className="relative text-[0.75rem] tracking-[0.04em] font-components-button-large text-cornflowerblue-100 text-left inline-block w-[10.11rem] h-[0.89rem] shrink-0">
                        (60 reviews)
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[2.15rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.7rem] tracking-[0.34px] leading-[1.22rem] uppercase font-medium font-components-button-large text-cornflowerblue-100 text-left inline-block w-[5.09rem] h-[1.22rem] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-[0rem] px-[0.56rem] box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[0.7rem] px-[0.61rem] items-start justify-start gap-[1.07rem] w-3/12 border-[0.7px] border-solid border-whitesmoke hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-[1.25rem]"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[9.34rem] shrink-0 object-cover"
                      alt=""
                      src="/unsplashtsn8bpopveo@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem]">
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          2-Story beachfront suite
                        </div>
                        <b className="self-stretch relative text-[1.03rem] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left sm:text-[1.25rem]">
                          Discovery Shores
                        </b>
                        <div className="self-stretch relative text-[0.84rem] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $360/night
                        </div>
                      </div>
                    </div>
                    <div className="w-[12.62rem] h-[0.89rem] flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="w-[2.07rem] h-[0.89rem] flex flex-row items-center justify-start gap-[0.13rem]">
                        <img
                          className="relative w-[0.78rem] h-[0.8rem]"
                          alt=""
                          src="/vector1.svg"
                        />
                        <div className="relative text-[0.75rem] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[1.12rem] h-[0.89rem] shrink-0">
                          4.8
                        </div>
                      </div>
                      <div className="relative text-[0.75rem] tracking-[0.04em] font-components-button-large text-cornflowerblue-100 text-left inline-block w-[10.11rem] h-[0.89rem] shrink-0">
                        (116 reviews)
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[2.15rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.7rem] tracking-[0.34px] leading-[1.22rem] uppercase font-medium font-components-button-large text-cornflowerblue-100 text-left inline-block w-[5.09rem] h-[1.22rem] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-[0rem] px-[0.56rem] box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[0.7rem] px-[0.61rem] items-start justify-start gap-[1.07rem] w-3/12 border-[0.7px] border-solid border-whitesmoke hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:flex sm:w-[100%!important]"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[9.34rem] shrink-0 object-cover"
                      alt=""
                      src="/unsplashrlwe8f8anoc1@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem]">
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          Single deluxe hut
                        </div>
                        <b className="self-stretch relative text-[1.03rem] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left">{`Arctic Hut `}</b>
                        <div className="self-stretch relative text-[0.84rem] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $420/night
                        </div>
                      </div>
                    </div>
                    <div className="w-[12.62rem] h-[0.89rem] flex flex-row py-[0rem] px-[0rem] box-border items-center justify-start gap-[0.38rem]">
                      <div className="w-[2.07rem] h-[0.89rem] flex flex-row items-center justify-start gap-[0.13rem]">
                        <img
                          className="relative w-[0.78rem] h-[0.8rem]"
                          alt=""
                          src="/vector2.svg"
                        />
                        <div className="relative text-[0.75rem] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[1.12rem] h-[0.89rem] shrink-0">
                          4.7
                        </div>
                      </div>
                      <div className="relative text-[0.75rem] tracking-[0.04em] font-components-button-large text-cornflowerblue-100 text-left inline-block w-[10.1rem] h-[0.89rem] shrink-0">
                        (78 reviews)
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[2.15rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.7rem] tracking-[0.34px] leading-[1.22rem] uppercase font-medium font-components-button-large text-cornflowerblue-100 text-left inline-block w-[5.09rem] h-[1.22rem] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-[0rem] px-[0.56rem] box-border items-start justify-center w-3/12 md:hidden md:w-[33.33%] sm:flex-[unset] sm:self-stretch">
                  <a
                    className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[0.7rem] px-[0.61rem] items-start justify-start gap-[1.07rem] w-3/12 border-[0.7px] border-solid border-whitesmoke hover:bg-gainsboro-200 lg:w-[25%!important] md:w-[33.33%!important] sm:flex sm:w-[100%!important]"
                    href="#"
                  >
                    <img
                      className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[9.34rem] shrink-0 object-cover"
                      alt=""
                      src="/unsplashyqrybvxug5q@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.51rem]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.28rem]">
                        <div className="self-stretch relative text-[0.75rem] tracking-[0.02em] font-components-button-large text-gray-100 text-left">
                          Deluxe King Room
                        </div>
                        <b className="self-stretch relative text-[1.03rem] tracking-[0.04em] capitalize font-components-button-large text-darkslategray-300 text-left">
                          Lake Louise Inn
                        </b>
                        <div className="self-stretch relative text-[0.84rem] tracking-[0.04em] font-components-button-large text-darkslategray-300 text-left">
                          $244/night
                        </div>
                      </div>
                      <img
                        className="relative w-[1.17rem] h-[1.17rem] overflow-hidden shrink-0"
                        alt=""
                        src="/video1.svg"
                      />
                    </div>
                    <div className="w-[12.62rem] h-[0.89rem] flex flex-row items-center justify-start gap-[0.38rem]">
                      <div className="w-[2.07rem] h-[0.89rem] flex flex-row items-center justify-start gap-[0.13rem]">
                        <img
                          className="relative w-[0.78rem] h-[0.8rem]"
                          alt=""
                          src="/vector3.svg"
                        />
                        <div className="relative text-[0.75rem] tracking-[0.04em] font-medium font-components-button-large text-darkslategray-300 text-left inline-block w-[1.12rem] h-[0.89rem] shrink-0">
                          4.6
                        </div>
                      </div>
                      <div className="relative text-[0.75rem] tracking-[0.04em] font-components-button-large text-cornflowerblue-100 text-left inline-block w-[10.11rem] h-[0.89rem] shrink-0">
                        (63 reviews)
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[2.15rem] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-[0.7rem] tracking-[0.34px] leading-[1.22rem] uppercase font-medium font-components-button-large text-cornflowerblue-100 text-left inline-block w-[5.09rem] h-[1.22rem] shrink-0">
                        More details
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast hidden flex-row items-start justify-start gap-[0.47rem] md:flex md:mt-[1rem]">
                <div className="relative text-[0.84rem] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-200 text-right inline-block w-[6.57rem] shrink-0 md:w-auto">
                  View all stays
                </div>
                <img
                  className="relative w-[1.12rem] h-[1.12rem] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright5.svg"
                />
              </div>
            </form>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-200">
            <div className="self-stretch h-[24.72rem] overflow-hidden shrink-0 flex flex-col py-[1.91rem] px-[0rem] box-border items-center justify-end bg-[url(/frame-708@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="w-[25.65rem] flex flex-col p-[0.93rem] box-border items-center justify-start gap-[1.4rem] ml-[auto] mr-[auto] [position:relative!important] left-[auto!important] md:py-[1.5rem] md:px-[0rem] md:box-border sm:pl-[1.5rem] sm:pr-[1.5rem] sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.33rem]">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    subscribe to our newsletter
                  </b>
                  <b className="self-stretch relative text-[1.4rem] text-darkslategray-100">
                    Get weekly updates
                  </b>
                </div>
                <div className="self-stretch rounded-[8.97px] bg-primary-contrast shadow-[0px_0px_17.94px_rgba(0,_0,_0,_0.03)] flex flex-col py-[1.31rem] px-[1.4rem] items-start justify-start gap-[0.79rem] text-left text-slategray border-[0.7px] border-solid border-whitesmoke">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[1.59rem]">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.47rem]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-orange rounded-[2.99px] w-[7.66rem] h-[2.62rem] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru">
                    <div className="overflow-hidden flex flex-col py-[0.37rem] px-[1.03rem] items-start justify-start">
                      <div className="relative text-[0.94rem] tracking-[0.46px] leading-[1.63rem] uppercase font-medium font-components-button-large text-primary-contrast text-left">
                        submit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[1.54rem] px-[3.92rem] items-start justify-start gap-[2.06rem] text-left text-[0.84rem] text-primary-contrast font-components-button-large lg:p-[2.5rem] lg:box-border md:flex-col md:pt-[2.5rem] md:px-[1.5rem] md:pb-[1.88rem] md:box-border sm:py-[1.88rem] sm:px-[1.5rem] sm:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.65rem] mb-[40px!important] md:flex-[unset] md:self-stretch">
                <img
                  className="relative w-[8.13rem] h-[1.54rem] overflow-hidden shrink-0"
                  alt=""
                  src="/logo.svg"
                />
                <div className="self-stretch relative leading-[1.26rem]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="relative w-[6.07rem] h-[1.4rem]"
                  alt=""
                  src="/social-icons.svg"
                />
              </div>
              <div className="relative box-border w-[0.05rem] h-[7.38rem] border-r-[0.7px] border-solid border-gray-500 md:hidden" />
              <div className="flex-1 flex flex-row items-start justify-between text-[0.75rem] md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="relative w-[9.22rem] h-[7.46rem] sm:mb-[40px!important]">
                  <a className="[text-decoration:none] absolute top-[2.23rem] left-[0rem] text-[inherit] inline-block w-[6.34rem] h-[0.89rem]">
                    About Us
                  </a>
                  <div className="absolute top-[0rem] left-[0rem] text-[0.93rem] leading-[1.26rem] font-medium inline-block w-[8.16rem] h-[1.26rem]">
                    Company
                  </div>
                  <div className="absolute top-[3.68rem] left-[0rem] inline-block w-[3.94rem] h-[0.89rem]">
                    News
                  </div>
                  <div className="absolute top-[5.13rem] left-[0rem] inline-block w-[5.38rem] h-[0.89rem]">
                    Careers
                  </div>
                  <div className="absolute top-[6.58rem] left-[0rem] inline-block w-[9.22rem] h-[0.89rem]">
                    How we work
                  </div>
                </div>
                <div className="relative w-[9.22rem] h-[7.46rem] sm:mb-[40px!important]">
                  <div className="absolute top-[2.23rem] left-[0rem] inline-block w-[5.12rem] h-[0.89rem]">
                    Account
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] text-[0.93rem] leading-[1.26rem] font-medium inline-block w-[6.15rem] h-[1.26rem]">
                    Support
                  </div>
                  <div className="absolute top-[3.68rem] left-[0rem] inline-block w-[9.22rem] h-[0.89rem]">
                    Support Center
                  </div>
                  <div className="absolute top-[5.13rem] left-[0rem] inline-block w-[2.48rem] h-[0.89rem]">
                    FAQ
                  </div>
                  <div className="absolute top-[6.58rem] left-[0rem] inline-block w-[7.68rem] h-[0.89rem]">
                    Accessibility
                  </div>
                </div>
                <div className="relative w-[9.22rem] h-[7.46rem]">
                  <div className="absolute top-[2.23rem] left-[0rem] inline-block w-[8.08rem] h-[0.89rem]">
                    Covid Advisory
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] text-[0.93rem] leading-[1.26rem] font-medium inline-block w-[3.58rem] h-[1.26rem]">
                    More
                  </div>
                  <div className="absolute top-[3.68rem] left-[0rem] inline-block w-[6.32rem] h-[0.89rem]">
                    Airline Fees
                  </div>
                  <div className="absolute top-[5.13rem] left-[0rem] inline-block w-[2.36rem] h-[0.89rem]">
                    Tips
                  </div>
                  <div className="absolute top-[6.58rem] left-[0rem] inline-block w-[9.22rem] h-[0.89rem]">
                    Quarantine Rules
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;
