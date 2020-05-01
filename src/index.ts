import Playwright from "playwright"

require("dotenv").config()

const getEnvironmentVariable = (name: string) => {
    const value = process.env[name]
    if (!value) {
        throw new Error(`Environment variable "${name}" not set.`)
    }

    return value
}

const main = async () => {
    const browser = await Playwright.chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://secure2.ipayroll.co.nz/login")

    await page.screenshot({ path: `output/1_login.png` })

    await page.type("#username", getEnvironmentVariable("IPAYROLL_USERNAME"))
    await page.type("#password", getEnvironmentVariable("IPAYROLL_PASSWORD"))
    await page.click("#btn-login")
    await page.waitForLoadState()

    await page.click("#menu-payslips")
    await page.waitForLoadState()

    const payslips = await page.$$("[id^='payslip-']").then(
        async (payslips) =>
            await Promise.all(
                payslips.map(async (ps) => ({
                    id: await ps.getAttribute("id"),
                    name: await ps.innerText(),
                })),
            ),
    )

    for (const payslip of payslips.filter((ps) => ps.id !== null)) {
        await page.click(`#${payslip.id}`)
        await page.waitForLoadState()
        await page.pdf({
            path: `output/${payslip.name}.pdf`,
        })
    }

    await browser.close()
}

main()
