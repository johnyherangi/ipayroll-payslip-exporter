# iPayroll Payslip Exporter

A tool that exports all of your payslips from [iPayroll](https://www.ipayroll.co.nz/) to PDF using [microsoft/playwright](https://github.com/microsoft/playwright)

## How to use

Create a `.env` file at the root of the project

```shell
IPAYROLL_USERNAME=<email address>
IPAYROLL_PASSWORD=<password>
```

Export your payslips

```shell
npm install
npm run export
```
