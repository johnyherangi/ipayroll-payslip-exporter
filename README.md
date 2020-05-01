# ipayroll-payslip-exporter

A tool to automatically export all of your payslips from [iPayroll](https://www.ipayroll.co.nz/) using [microsoft/playwright](https://github.com/microsoft/playwright)

## How to use

Create a `.env` file at the root of the project

```shell
IPAYROLL_USERNAME=<email address>
IPAYROLL_PASSWORD=<password>
EXPORT_PATH=<path>
```

Export your payslips with the following command

```shell
npm run export
```
