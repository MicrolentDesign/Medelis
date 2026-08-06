import { homepageContent } from "@/content/data";
import { HomepageData, ServiceItem, IndustryItem, InsightItem, FaqItem } from "./types";

export async function getHomepageData(): Promise<HomepageData> {
  return homepageContent;
}

export async function getServices(): Promise<ServiceItem[]> {
  return homepageContent.services;
}

export async function getIndustries(): Promise<IndustryItem[]> {
  return homepageContent.industries;
}

export async function getInsights(): Promise<InsightItem[]> {
  return homepageContent.insights;
}

export async function getFaqs(): Promise<FaqItem[]> {
  return homepageContent.faqs;
}
