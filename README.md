## Google PlayStore

![cover](cover.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Build Process](#build-process)
- [Tech Stack](#tech-stack)

<br/>

## Introduction

This is an fullstack google's playstore clone which was build for hosting my own mobile application.

## Features

Following are sone of the features:

🚀 Original apps using [Google Scrape API](https://github.com/facundoolano/google-play-scraper) <br/>
🚀 Custom apps using sanity backend<br/>
🚀 Download custom apps directly<br/>

## Build Process

- Clone or download the repo

  #### Under Root Path

  - Create env file under server/.env & mongodb database using atlas/compass

  - Copy the credentials on the DB to .env file

    `NEXT_PUBLIC_BASE_URL:http://localhost:PORT`
    `SANITY_API_TOKEN:<<SANITY_TOKEN>>`
    `NEXT_PUBLIC_SANITY_DATASET:<<SANITY_DATASET>>`
    `NEXT_PUBLIC_SANITY_ID:<<SANITY_PROJECT_ID>>`

  - `yarn dev` to run the application

  #### Under Sanity Backend Folder

  - `sanity init` to install sanity studio
  - `sanity start` to start the sanity server

<br/>

## Tech Stack

<p float="left">
  <img src="https://cdn.sanity.io/images/1z5g6za5/production/ea0d729f383fe9f113c7d2da95af5a39eecfa226-64x64.png?w=2000&fit=max&auto=format" width="60"  style="padding-right:20px"/>
  <img src="https://cdn.sanity.io/images/1z5g6za5/production/469ae564e81667f04a3b2ce4ae61d1de7788064d-300x300.png?w=2000&fit=max&auto=format" width="58"  style="padding-right:20px"/> 
  <img src="https://cdn.sanity.io/images/1z5g6za5/production/7f0e2cb4b3dc3c37829ee9ca07eab1903ec26b69-364x364.png?w=2000&fit=max&auto=format" width="60"  style="padding-right:20px"/>
  <img src="https://cdn.sanity.io/images/1z5g6za5/production/a741467e8e9986bd58bdb7e9c6d11fba266c277b-2443x2500.svg?w=2000&fit=max&auto=format" width="55"  style="padding-right:20px"/>
  <img src="https://cdn.sanity.io/images/1z5g6za5/production/97986d3dd7e897b83e06a41aaf9ee7a8de146685-768x768.png?w=2000&fit=max&auto=format" width="60"  style="padding-right:20px"/>
</p>
