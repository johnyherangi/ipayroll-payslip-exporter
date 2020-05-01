# ipayroll-payslip-exporter

Batch exports iPayroll payslips using microsoft/playwright

## How to use

Create a `.env` file at the root of the project

```shell
IPAYROLL_USERNAME=<email address>
IPAYROLL_PASSWORD=<password>
```

Export your payslips with the following command

```shell
npm install
npm run export
```
