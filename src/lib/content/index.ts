import { homepageContent } from "@/content/data";
import { HomepageData, RangeItem, ProductItem, NewsItem } from "./types";

export async function getHomepageData(): Promise<HomepageData> {
  return homepageContent;
}

export async function getRanges(): Promise<RangeItem[]> {
  return homepageContent.ranges;
}

export async function getFeaturedProducts(): Promise<ProductItem[]> {
  return homepageContent.featuredProducts;
}

export async function getNews(): Promise<NewsItem[]> {
  return homepageContent.news;
}
