import puppeteer, { DirectNavigationOptions } from "puppeteer"

const navigationOptions: DirectNavigationOptions = {
    waitUntil: "networkidle2",
    timeout: 60000,
}

const main = async () => {
    const browser = await puppeteer.launch({ headless: false })
    const pages = await browser.pages()
    const page = pages[0]
    await page.goto("https://secure2.ipayroll.co.nz/login", navigationOptions)

    await page.type("#username", "test")
    await page.type("#password", "test")
    await page.click("#btn-login")
    await page.waitForNavigation(navigationOptions)

    await browser.close()
}

main()
