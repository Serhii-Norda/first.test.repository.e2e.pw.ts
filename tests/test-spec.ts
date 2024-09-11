import { test, expect, Locator, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://telemart.ua/ua/");
});

test.afterEach(({ page }) => {
  page.close();
});

test("TM-1: Check banners carrousel", async ({ page }) => {
  async function getBannersId(page: Page) {
    const prevBannerId: string | null = await page
      .locator(`a[class*= 'prev']:not(.swiper-slide-duplicate)`)
      .getAttribute("data-banner-id");

    const activeBannerId: string | null = await page
      .locator(`a[class*= 'active']:not(.swiper-slide-duplicate)`)
      .getAttribute("data-banner-id");

    const nextBannerId: string | null = await page
      .locator(`a[class*= 'next']:not(.swiper-slide-duplicate)`)
      .getAttribute("data-banner-id");

    return { prevBannerId, activeBannerId, nextBannerId };
  }

  const activeBanner: Locator = page.locator(
    `a[class*= 'active']:not(.swiper-slide-duplicate)`
  );

  const swipeButton: Locator = page.locator(
    '//div[@class="swiper-button-next"]'
  );

  let currentBannerPositionOld: string | null = await activeBanner.getAttribute(
    "data-banner-position"
  );
  const currentBannerPosition: number = Number(currentBannerPositionOld);

  let ids = await getBannersId(page);
  await Promise.all([
    page
      .locator(
        `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${ids.nextBannerId}']`
      )
      .waitFor(),
    swipeButton.click(),
  ]);

  ids = await getBannersId(page);
  await Promise.all([
    page
      .locator(
        `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${ids.nextBannerId}']`
      )
      .waitFor(),
    swipeButton.click(),
  ]);

  const bannerPosition = await activeBanner.getAttribute(
    "data-banner-position"
  );
  const bannerPositionNum = Number(bannerPosition);
  expect(bannerPositionNum).toEqual(Number(currentBannerPosition) + 2);
});