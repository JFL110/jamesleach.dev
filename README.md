# jamesleach.dev

- [![Deploy to Production](https://github.com/JFL110/jamesleach.dev/workflows/Deploy%20to%20Production/badge.svg)](https://github.com/JFL110/jamesleach.dev/actions?query=workflow%3A%22Deploy+to+Production%22) - production environment hosted [here @ jamesleach.dev](https://www.jamesleach.dev)
- [![Build & Deploy to Test](https://github.com/JFL110/jamesleach.dev/workflows/Build%20&%20Deploy%20to%20Test/badge.svg)](https://github.com/JFL110/jamesleach.dev/actions?query=workflow%3A%22Build+%26+Deploy+to+Test%22) - test environment hosted [here](https://d2k1hseid387ot.cloudfront.net/)
- [![Last release date](https://img.shields.io/github/release-date/JFL110/jamesleach.dev?logo=github)](https://github.com/JFL110/jamesleach.dev/actions?query=workflow%3A%22Build+%26+Deploy+to+Test%22)
- [![Pagespeed Score](https://img.shields.io/badge/PageSpeed-90%25-green)](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.jamesleach.dev%2F&tab=desktop)
- Location map hosted [here @ jamesleach.dev/where-are-they](https://www.jamesleach.dev/where-are-they)

## Deployment
The source is compiled with Webpack to produce a Javascipt bundle, including multiple compressed versions using brotli and gzip. Additional Webpack plugins are used to organise the site content to seperate static and non-cacheable content. 

## Hosting
The site is hosted in S3 and served via an AWS Cloudfront distribution. This setup costs nothing for low traffic and gives a good response time.

In order to use React Router with S3, all requests must route to a single page. This is achived with a Lambda@Edge function that intercepts requests and re-directs to the right resource. Lambda@Edge functions are also used to implement a caching policy and serve pre-compressed content using gzip or brotli if supported; [code here](https://github.com/JFL110/jamesleach.dev/blob/master/cloudfront-lamda-edge.md).
