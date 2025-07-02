import { ProjectPageWrapper } from "@/components/project-page-wrapper";
import {
  StorySection,
  ProjectTimeline,
  InsightCard,
  UserQuote,
  ProjectHero
} from "@/components/story-components";
import TopDownTree from "@/components/top-down-tree";
import { ArrowRight, Lightbulb, BarChart, MousePointerClick, CheckCircle, Users, FileText, Milestone } from "lucide-react";
import Link from "next/link";
import { FlowingText } from "@/components/flowing-text";
import Footer from "@/components/footer";
import { Smartphone, Laptop } from "lucide-react";
import { FadeIn } from "@/components/scroll-animations";
import { RefinedButton } from "@/components/refined-button";
import { ArrowLeft } from "lucide-react";

const originalSitemapData = {
  id: 'root-old',
  label: 'Original Sitemap',
  type: 'root' as const,
  children: [
    // Section 1: Trade-in
    { id: 'old-trade-in', label: 'Trade-in your tech', type: 'folder' as const, children: [
      { id: 'old-trade-phone', label: 'Trade-in your phone', type: 'folder' as const, children: [
        { id: 'old-trade-phone-apple', label: 'Apple iPhone', type: 'file' as const },
        { id: 'old-trade-phone-samsung', label: 'Samsung Galaxy', type: 'file' as const },
        { id: 'old-trade-phone-google', label: 'Google Pixel', type: 'file' as const },
        { id: 'old-trade-phone-oneplus', label: 'OnePlus', type: 'file' as const },
        { id: 'old-trade-phone-more', label: 'More brands', type: 'file' as const },
      ]},
      { id: 'old-trade-tablet', label: 'Trade-in your tablet', type: 'folder' as const, children: [
        { id: 'old-trade-tablet-apple', label: 'Apple iPad', type: 'file' as const },
        { id: 'old-trade-tablet-samsung', label: 'Samsung Galaxy Tab', type: 'file' as const },
        { id: 'old-trade-tablet-more', label: 'More brands', type: 'file' as const },
      ]},
      { id: 'old-trade-macbook', label: 'Trade-in your Macbook', type: 'folder' as const, children: [
        { id: 'old-trade-macbook-pro', label: 'MacBook Pro', type: 'file' as const },
        { id: 'old-trade-macbook-air', label: 'MacBook Air', type: 'file' as const },
        { id: 'old-trade-macbook-generic', label: 'Generic MacBook', type: 'file' as const },
      ]},
      { id: 'old-trade-console', label: 'Trade-in your gaming console', type: 'folder' as const, children: [
        { id: 'old-trade-console-xbox', label: 'Microsoft Xbox', type: 'file' as const },
        { id: 'old-trade-console-ps', label: 'Sony PlayStation', type: 'file' as const },
        { id: 'old-trade-console-nintendo', label: 'Nintendo Console', type: 'file' as const },
        { id: 'old-trade-console-more', label: 'More Brands', type: 'file' as const },
      ]},
      { id: 'old-trade-audio', label: 'Trade-in your audio device', type: 'folder' as const, children: [
        { id: 'old-trade-audio-brand', label: 'By Brand', type: 'file' as const },
      ]},
      { id: 'old-trade-guides', label: 'Buying Guides', type: 'folder' as const, children: [
        { id: 'old-trade-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-trade-guides-planet', label: 'How Trade-in helps with planet - and your wallet', type: 'file' as const },
      ]},
    ]},
    // Section 2: Mother's Day Deals
    { id: 'old-mothers-day', label: "Mother's Day Deals", type: 'folder' as const, children: [
      { id: 'old-md-deals', label: "Mother's Day Deals", type: 'folder' as const, children: [
        { id: 'old-md-deals-all', label: 'See All', type: 'file' as const },
        { id: 'old-md-deals-smartphones', label: 'Smartphone Deals', type: 'file' as const },
        { id: 'old-md-deals-laptops', label: 'Laptop Deals', type: 'file' as const },
        { id: 'old-md-deals-tablets', label: 'Tablet Deals', type: 'file' as const },
        { id: 'old-md-deals-watch', label: 'Apple Watch Deals', type: 'file' as const },
        { id: 'old-md-deals-gaming', label: 'Gaming Console Deals', type: 'file' as const },
        { id: 'old-md-deals-earphones', label: 'Earphone Deals', type: 'file' as const },
      ]},
      { id: 'old-md-discounts', label: 'Discounts', type: 'folder' as const, children: [
        { id: 'old-md-student-discount', label: 'Get a student Discount', type: 'file' as const },
        { id: 'old-md-military-discount', label: 'Get a military Discount', type: 'file' as const },
      ]},
      { id: 'old-md-renewed', label: 'Certified Renewed Program', type: 'folder' as const, children: [
        { id: 'old-md-renewed-all', label: 'See all', type: 'file' as const },
        { id: 'old-md-renewed-sennheiser', label: 'Renewed by Sennheiser', type: 'file' as const },
        { id: 'old-md-renewed-jbl', label: 'Renewed by JBL', type: 'file' as const },
        { id: 'old-md-renewed-hp', label: 'Renewed by HP', type: 'file' as const },
      ]},
      { id: 'old-md-guides', label: 'Guides', type: 'folder' as const, children: [
        { id: 'old-md-guides-compare', label: 'Compare devices', type: 'file' as const },
        { id: 'old-md-guides-buying', label: 'Buying guides', type: 'file' as const },
      ]},
      { id: 'old-md-ambassador', label: 'Student Ambassador Program', type: 'file' as const },
    ]},
    // Section 3: Smartphones
    { id: 'old-smartphones', label: 'Smartphones', type: 'folder' as const, children: [
      { id: 'old-phones-apple', label: 'Apple iPhone', type: 'folder' as const, children: [
        { id: 'old-phones-apple-14', label: 'iPhone 14', type: 'file' as const },
        { id: 'old-phones-apple-13', label: 'iPhone 13', type: 'file' as const },
        { id: 'old-phones-apple-12', label: 'iPhone 12', type: 'file' as const },
        { id: 'old-phones-apple-11', label: 'iPhone 11', type: 'file' as const },
        { id: 'old-phones-apple-se', label: 'iPhone SE (2022)', type: 'file' as const },
        { id: 'old-phones-apple-x', label: 'iPhone X', type: 'file' as const },
        { id: 'old-phones-apple-xr', label: 'iPhone XR', type: 'file' as const },
      ]},
      { id: 'old-phones-samsung', label: 'Samsung Galaxy', type: 'folder' as const, children: [
        { id: 'old-phones-samsung-s23', label: 'Galaxy S23 series', type: 'file' as const },
        { id: 'old-phones-samsung-s22', label: 'Galaxy S22 series', type: 'file' as const },
        { id: 'old-phones-samsung-s21', label: 'Galaxy S21 series', type: 'file' as const },
        { id: 'old-phones-samsung-note', label: 'Galaxy Note series', type: 'file' as const },
        { id: 'old-phones-samsung-fold', label: 'Galaxy Z Fold series', type: 'file' as const },
        { id: 'old-phones-samsung-flip', label: 'Galaxy Z Flip series', type: 'file' as const },
      ]},
      { id: 'old-phones-google', label: 'Google Pixel', type: 'folder' as const, children: [
        { id: 'old-phones-google-7', label: 'Google Pixel 7 series', type: 'file' as const },
        { id: 'old-phones-google-6', label: 'Google Pixel 6 series', type: 'file' as const },
        { id: 'old-phones-google-5', label: 'Google Pixel 5 series', type: 'file' as const },
        { id: 'old-phones-google-4', label: 'Google Pixel 4 series', type: 'file' as const },
      ]},
      { id: 'old-phones-more', label: 'More brands', type: 'folder' as const, children: [
        { id: 'old-phones-more-huawei', label: 'Huawei', type: 'file' as const },
        { id: 'old-phones-more-oneplus', label: 'OnePlus', type: 'file' as const },
        { id: 'old-phones-more-motorola', label: 'Motorola', type: 'file' as const },
        { id: 'old-phones-more-nokia', label: 'Nokia', type: 'file' as const },
        { id: 'old-phones-more-sony', label: 'Sony', type: 'file' as const },
      ]},
      { id: 'old-phones-acc', label: 'Smartphone accessories', type: 'folder' as const, children: [
        { id: 'old-phones-acc-cases', label: 'Cases', type: 'file' as const },
        { id: 'old-phones-acc-chargers', label: 'Chargers', type: 'file' as const },
        { id: 'old-phones-acc-screen', label: 'Screen protectors', type: 'file' as const },
        { id: 'old-phones-acc-airpods', label: 'Airpods', type: 'file' as const },
      ]},
      { id: 'old-phones-services', label: 'Back Market services', type: 'folder' as const, children: [
        { id: 'old-phones-services-tradein', label: 'Trade in your smartphone', type: 'file' as const },
        { id: 'old-phones-services-backup', label: 'BackUp protection plans', type: 'file' as const },
      ]},
      { id: 'old-phones-guides', label: 'Buying guides', type: 'folder' as const, children: [
        { id: 'old-phones-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-phones-guides-14v15', label: 'iPhone 14 vs iPhone 15', type: 'file' as const },
        { id: 'old-phones-guides-pixel6', label: 'Google Pixel 6 Review', type: 'file' as const },
      ]},
    ]},
    // Section 4: Laptops
    { id: 'old-laptops', label: 'Laptops', type: 'folder' as const, children: [
      { id: 'old-laptops-apple', label: 'Apple Macbook', type: 'folder' as const, children: [
        { id: 'old-laptops-apple-pro', label: 'MacBook Pro', type: 'file' as const },
        { id: 'old-laptops-apple-air', label: 'MacBook Air', type: 'file' as const },
        { id: 'old-laptops-apple-macbook', label: 'MacBook', type: 'file' as const },
        { id: 'old-laptops-apple-m1', label: 'MacBook M1 series', type: 'file' as const },
        { id: 'old-laptops-apple-m2', label: 'MacBook M2 series', type: 'file' as const },
      ]},
      { id: 'old-laptops-more', label: 'More brands', type: 'folder' as const, children: [
        { id: 'old-laptops-more-acer', label: 'Acer', type: 'file' as const },
        { id: 'old-laptops-more-dell', label: 'Dell', type: 'file' as const },
        { id: 'old-laptops-more-hp', label: 'HP', type: 'file' as const },
        { id: 'old-laptops-more-lenovo', label: 'Lenovo', type: 'file' as const },
        { id: 'old-laptops-more-samsung', label: 'Samsung', type: 'file' as const },
        { id: 'old-laptops-more-toshiba', label: 'Toshiba', type: 'file' as const },
      ]},
      { id: 'old-laptops-acc', label: 'Laptop accessories', type: 'folder' as const, children: [
        { id: 'old-laptops-acc-monitors', label: 'Monitors', type: 'file' as const },
        { id: 'old-laptops-acc-keyboards', label: 'Keyboards', type: 'file' as const },
        { id: 'old-laptops-acc-mice', label: 'Mice', type: 'file' as const },
        { id: 'old-laptops-acc-cases', label: 'Laptop cases', type: 'file' as const },
        { id: 'old-laptops-acc-docks', label: 'Docking stations', type: 'file' as const },
        { id: 'old-laptops-acc-printers', label: 'Printers', type: 'file' as const },
      ]},
      { id: 'old-laptops-type', label: 'Shop by type', type: 'folder' as const, children: [
        { id: 'old-laptops-type-windows', label: 'Windows laptops', type: 'file' as const },
        { id: 'old-laptops-type-chromebooks', label: 'Chromebooks', type: 'file' as const },
        { id: 'old-laptops-type-2in1', label: '2-in-1 convertibles', type: 'file' as const },
        { id: 'old-laptops-type-gaming', label: 'Gaming laptops', type: 'file' as const },
      ]},
      { id: 'old-laptops-services', label: 'Back Market services', type: 'folder' as const, children: [
        { id: 'old-laptops-services-tradein', label: 'Trade in your Macbook', type: 'file' as const },
        { id: 'old-laptops-services-backup', label: 'BackUp protection plans', type: 'file' as const },
      ]},
      { id: 'old-laptops-guides', label: 'Buying guides', type: 'folder' as const, children: [
        { id: 'old-laptops-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-laptops-guides-macbook', label: 'What to know when buying refurbished MacBook Pro', type: 'file' as const },
        { id: 'old-laptops-guides-student', label: 'Best cheap laptops for students', type: 'file' as const },
      ]},
    ]},
    // Section 5: Tablets
    { id: 'old-tablets', label: 'Tablets', type: 'folder' as const, children: [
      { id: 'old-tablets-apple', label: 'Apple iPad', type: 'folder' as const, children: [
        { id: 'old-tablets-apple-air', label: 'iPad Air series', type: 'file' as const },
        { id: 'old-tablets-apple-pro', label: 'iPad Pro series', type: 'file' as const },
        { id: 'old-tablets-apple-mini', label: 'iPad mini series', type: 'file' as const },
        { id: 'old-tablets-apple-ipad', label: 'iPad series', type: 'file' as const },
      ]},
      { id: 'old-tablets-samsung', label: 'Samsung Galaxy Tab', type: 'folder' as const, children: [
        { id: 'old-tablets-samsung-s', label: 'Galaxy Tab S series', type: 'file' as const },
        { id: 'old-tablets-samsung-a', label: 'Galaxy Tab A series', type: 'file' as const },
        { id: 'old-tablets-samsung-e', label: 'Galaxy Tab E series', type: 'file' as const },
      ]},
      { id: 'old-tablets-microsoft', label: 'Microsoft Surface', type: 'folder' as const, children: [
        { id: 'old-tablets-ms-prox', label: 'Microsoft Surface Pro X', type: 'file' as const },
        { id: 'old-tablets-ms-pro9', label: 'Microsoft Surface Pro 9', type: 'file' as const },
        { id: 'old-tablets-ms-pro8', label: 'Microsoft Pro Surface 8', type: 'file' as const },
        { id: 'old-tablets-ms-pro7', label: 'Microsoft Surface Pro 7', type: 'file' as const },
        { id: 'old-tablets-ms-pro6', label: 'Microsoft Surface Pro 6', type: 'file' as const },
        { id: 'old-tablets-ms-go', label: 'Microsoft Surface Pro Go', type: 'file' as const },
      ]},
      { id: 'old-tablets-more', label: 'More brands', type: 'folder' as const, children: [
        { id: 'old-tablets-more-asus', label: 'Asus', type: 'file' as const },
        { id: 'old-tablets-more-lenovo', label: 'Lenovo', type: 'file' as const },
      ]},
      { id: 'old-tablets-other', label: 'Other', type: 'folder' as const, children: [
        { id: 'old-tablets-other-ereaders', label: 'E-readers', type: 'file' as const },
        { id: 'old-tablets-other-kids', label: 'Tablets for kids', type: 'file' as const },
        { id: 'old-tablets-other-pencil', label: 'Apple Pencil', type: 'file' as const },
        { id: 'old-tablets-other-acc', label: 'Tablet Accessories', type: 'file' as const },
      ]},
      { id: 'old-tablets-services', label: 'Back Market services', type: 'folder' as const, children: [
        { id: 'old-tablets-services-tradein', label: 'Trade in your tablet', type: 'file' as const },
        { id: 'old-tablets-services-backup', label: 'BackUp protection plans', type: 'file' as const },
      ]},
      { id: 'old-tablets-guides', label: 'Buying guides', type: 'folder' as const, children: [
        { id: 'old-tablets-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-tablets-guides-picks', label: 'Top iPad picks', type: 'file' as const },
        { id: 'old-tablets-guides-compare', label: 'iPad Air (2022) vs iPad Mini (2021)', type: 'file' as const },
      ]},
    ]},
    // Section 6: Gaming Consoles
    { id: 'old-gaming', label: 'Gaming Consoles', type: 'folder' as const, children: [
      { id: 'old-gaming-xbox', label: 'Microsoft Xbox', type: 'folder' as const, children: [
        { id: 'old-gaming-xbox-one', label: 'Xbox One', type: 'file' as const },
        { id: 'old-gaming-xbox-ones', label: 'Xbox One S', type: 'file' as const },
        { id: 'old-gaming-xbox-onex', label: 'Xbox One X', type: 'file' as const },
        { id: 'old-gaming-xbox-s', label: 'Xbox Series S', type: 'file' as const },
        { id: 'old-gaming-xbox-x', label: 'Xbox Series X', type: 'file' as const },
      ]},
      { id: 'old-gaming-nintendo', label: 'Nintendo', type: 'folder' as const, children: [
        { id: 'old-gaming-nintendo-switch', label: 'Nintendo Switch', type: 'file' as const },
        { id: 'old-gaming-nintendo-wii', label: 'Nintendo Wii', type: 'file' as const },
        { id: 'old-gaming-nintendo-3ds', label: 'Nintendo 3DS', type: 'file' as const },
        { id: 'old-gaming-nintendo-gb', label: 'Nintendo Game Boy', type: 'file' as const },
      ]},
      { id: 'old-gaming-ps', label: 'Sony PlayStation', type: 'folder' as const, children: [
        { id: 'old-gaming-ps-5', label: 'PlayStation 5', type: 'file' as const },
        { id: 'old-gaming-ps-4', label: 'PlayStation 4', type: 'file' as const },
        { id: 'old-gaming-ps-3', label: 'PlayStation 3', type: 'file' as const },
        { id: 'old-gaming-ps-psp', label: 'PSP', type: 'file' as const },
      ]},
      { id: 'old-gaming-games', label: 'Video games', type: 'folder' as const, children: [
        { id: 'old-gaming-games-xbox', label: 'For Xbox', type: 'file' as const },
        { id: 'old-gaming-games-nintendo', label: 'For Nintendo', type: 'file' as const },
        { id: 'old-gaming-games-ps', label: 'For PlayStation', type: 'file' as const },
      ]},
      { id: 'old-gaming-acc', label: 'Gaming accessories', type: 'folder' as const, children: [
        { id: 'old-gaming-acc-controllers', label: 'Controllers', type: 'file' as const },
        { id: 'old-gaming-acc-headphones', label: 'Headphones', type: 'file' as const },
        { id: 'old-gaming-acc-wheels', label: 'Steering wheels', type: 'file' as const },
      ]},
      { id: 'old-gaming-services', label: 'Back Market services', type: 'folder' as const, children: [
        { id: 'old-gaming-services-tradein', label: 'Trade in your gaming console', type: 'file' as const },
      ]},
      { id: 'old-gaming-guides', label: 'Buying guides', type: 'folder' as const, children: [
        { id: 'old-gaming-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-gaming-guides-switch', label: 'Is the refurbished Nintendo Switch a good buy?', type: 'file' as const },
        { id: 'old-gaming-guides-ps4', label: 'Is the PS4 still worth it?', type: 'file' as const },
      ]},
    ]},
    // Section 7: Smartwatches
    { id: 'old-smartwatches', label: 'Smartwatches', type: 'folder' as const, children: [
      { id: 'old-watch-apple', label: 'Apple Watches', type: 'folder' as const, children: [
        { id: 'old-watch-apple-8', label: 'Apple Watch series 8', type: 'file' as const },
        { id: 'old-watch-apple-7', label: 'Apple Watch series 7', type: 'file' as const },
        { id: 'old-watch-apple-6', label: 'Apple Watch series 6', type: 'file' as const },
        { id: 'old-watch-apple-5', label: 'Apple Watch series 5', type: 'file' as const },
        { id: 'old-watch-apple-se', label: 'Apple Watch SE series', type: 'file' as const },
        { id: 'old-watch-apple-ultra', label: 'Apple Watch Ultra', type: 'file' as const },
      ]},
      { id: 'old-watch-samsung', label: 'Samsung Galaxy Watches', type: 'folder' as const, children: [
        { id: 'old-watch-samsung-5', label: 'Galaxy Watch 5', type: 'file' as const },
        { id: 'old-watch-samsung-4', label: 'Galaxy Watch 4', type: 'file' as const },
        { id: 'old-watch-samsung-3', label: 'Galaxy Watch 3', type: 'file' as const },
        { id: 'old-watch-samsung-active2', label: 'Galaxy Watch Active 2', type: 'file' as const },
      ]},
      { id: 'old-watch-garmin', label: 'Garmin Watches', type: 'folder' as const, children: [
        { id: 'old-watch-garmin-forerunner', label: 'Garmin Forerunner', type: 'file' as const },
        { id: 'old-watch-garmin-vivoactive', label: 'Garmin Vivoactive', type: 'file' as const },
        { id: 'old-watch-garmin-fenix', label: 'Garmin Fenix', type: 'file' as const },
        { id: 'old-watch-garmin-approach', label: 'Garmin Approach', type: 'file' as const },
        { id: 'old-watch-garmin-vivosmart', label: 'Garmin Vivosmart', type: 'file' as const },
      ]},
      { id: 'old-watch-more', label: 'More brands', type: 'folder' as const, children: [
        { id: 'old-watch-more-google', label: 'Google', type: 'file' as const },
        { id: 'old-watch-more-fitbit', label: 'Fitbit', type: 'file' as const },
        { id: 'old-watch-more-amazfit', label: 'Amazfit', type: 'file' as const },
      ]},
      { id: 'old-watch-acc', label: 'Apple Watch accessories', type: 'folder' as const, children: [
        { id: 'old-watch-acc-bracelets', label: 'Apple Watch bracelets', type: 'file' as const },
        { id: 'old-watch-acc-cases', label: 'Cases & screen protectors', type: 'file' as const },
      ]},
      { id: 'old-watch-services', label: 'Back Market services', type: 'folder' as const, children: [
        { id: 'old-watch-services-backup', label: 'BackUp protection plans', type: 'file' as const },
      ]},
      { id: 'old-watch-guides', label: 'Buying guides', type: 'folder' as const, children: [
        { id: 'old-watch-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-watch-guides-4', label: 'Is Apple Watch 4 still worth it?', type: 'file' as const },
        { id: 'old-watch-guides-1', label: 'Should I buy a 1st Gen used Apple Watch?', type: 'file' as const },
      ]},
    ]},
    // Section 8: Audio
    { id: 'old-audio', label: 'Audio', type: 'folder' as const, children: [
      { id: 'old-audio-apple', label: 'Apple Airpods & HomePod', type: 'folder' as const, children: [
        { id: 'old-audio-apple-airpods', label: 'AirPods series', type: 'file' as const },
        { id: 'old-audio-apple-pro', label: 'AirPods Pro series', type: 'file' as const },
        { id: 'old-audio-apple-max', label: 'AirPods Max series', type: 'file' as const },
        { id: 'old-audio-apple-homepod', label: 'HomePod', type: 'file' as const },
      ]},
      { id: 'old-audio-earphones', label: 'Earphone', type: 'folder' as const, children: [
        { id: 'old-audio-earphones-beats', label: 'Beats by Dre', type: 'file' as const },
        { id: 'old-audio-earphones-bose', label: 'Bose', type: 'file' as const },
        { id: 'old-audio-earphones-plantronics', label: 'Plantronics', type: 'file' as const },
        { id: 'old-audio-earphones-samsung', label: 'Samsung', type: 'file' as const },
        { id: 'old-audio-earphones-google', label: 'Google', type: 'file' as const },
        { id: 'old-audio-earphones-sony', label: 'Sony', type: 'file' as const },
      ]},
      { id: 'old-audio-headphones', label: 'Headphones', type: 'folder' as const, children: [
        { id: 'old-audio-headphones-akg', label: 'AKG', type: 'file' as const },
        { id: 'old-audio-headphones-bose', label: 'Bose', type: 'file' as const },
        { id: 'old-audio-headphones-jabra', label: 'Jabra', type: 'file' as const },
        { id: 'old-audio-headphones-jbl', label: 'JBL', type: 'file' as const },
        { id: 'old-audio-headphones-sennheiser', label: 'Sennheiser', type: 'file' as const },
        { id: 'old-audio-headphones-sony', label: 'Sony', type: 'file' as const },
      ]},
      { id: 'old-audio-speakers', label: 'Speakers', type: 'folder' as const, children: [
        { id: 'old-audio-speakers-bose', label: 'Bose', type: 'file' as const },
        { id: 'old-audio-speakers-jbl', label: 'JBL', type: 'file' as const },
        { id: 'old-audio-speakers-alexa', label: 'Amazon Alexa', type: 'file' as const },
        { id: 'old-audio-speakers-marshall', label: 'Marshall', type: 'file' as const },
        { id: 'old-audio-speakers-sonos', label: 'Sonos', type: 'file' as const },
        { id: 'old-audio-speakers-ue', label: 'Ultimate Ears', type: 'file' as const },
      ]},
      { id: 'old-audio-other', label: 'Other audio categories', type: 'folder' as const, children: [
        { id: 'old-audio-other-soundbars', label: 'Soundbars', type: 'file' as const },
        { id: 'old-audio-other-mp3', label: 'MP3 & MP4 player', type: 'file' as const },
      ]},
      { id: 'old-audio-services', label: 'Back Market services', type: 'folder' as const, children: [
        { id: 'old-audio-services-tradein', label: 'Trade in an audio device', type: 'file' as const },
        { id: 'old-audio-services-backup', label: 'BackUp protection plans', type: 'file' as const },
      ]},
      { id: 'old-audio-guides', label: 'Buying guides', type: 'folder' as const, children: [
        { id: 'old-audio-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-audio-guides-airpods', label: 'Airpods vs Airpods Pro', type: 'file' as const },
        { id: 'old-audio-guides-refurb', label: 'Are refurbished headphones good?', type: 'file' as const },
      ]},
    ]},
    // Section 9: More
    { id: 'old-more', label: 'More', type: 'folder' as const, children: [
      { id: 'old-more-desktops', label: 'Desktop computers', type: 'folder' as const, children: [
        { id: 'old-more-desktops-allinone', label: 'All-in-one computers', type: 'file' as const },
        { id: 'old-more-desktops-desktops', label: 'Desktop computers', type: 'file' as const },
        { id: 'old-more-desktops-apple', label: 'Apple desktop computers', type: 'file' as const },
        { id: 'old-more-desktops-gaming', label: 'Gaming computers', type: 'file' as const },
      ]},
      { id: 'old-more-cameras', label: 'Cameras', type: 'folder' as const, children: [
        { id: 'old-more-cameras-photo', label: 'Photo cameras', type: 'file' as const },
        { id: 'old-more-cameras-action', label: 'Action cameras', type: 'file' as const },
        { id: 'old-more-cameras-video', label: 'Video cameras & camcorders', type: 'file' as const },
        { id: 'old-more-cameras-drones', label: 'Drones', type: 'file' as const },
        { id: 'old-more-cameras-lenses', label: 'Camera Lenses', type: 'file' as const },
      ]},
      { id: 'old-more-tv', label: 'TV & Home cinema', type: 'folder' as const, children: [
        { id: 'old-more-tv-tv', label: 'TV', type: 'file' as const },
        { id: 'old-more-tv-appletv', label: 'Apple TV', type: 'file' as const },
        { id: 'old-more-tv-projectors', label: 'Video projectors', type: 'file' as const },
        { id: 'old-more-tv-sound', label: 'TV sound systems', type: 'file' as const },
      ]},
      { id: 'old-more-kitchen', label: 'Kitchen appliances', type: 'folder' as const, children: [
        { id: 'old-more-kitchen-toasters', label: 'Toasters', type: 'file' as const },
        { id: 'old-more-kitchen-coffee', label: 'Coffee Machines', type: 'file' as const },
        { id: 'old-more-kitchen-fryers', label: 'Fryers & Air Fryers', type: 'file' as const },
        { id: 'old-more-kitchen-blenders', label: 'Blenders & Mixers', type: 'file' as const },
        { id: 'old-more-kitchen-processors', label: 'Food Processors', type: 'file' as const },
      ]},
      { id: 'old-more-home', label: 'Home appliances', type: 'folder' as const, children: [
        { id: 'old-more-home-vacuums', label: 'Vacuum Cleaners', type: 'file' as const },
        { id: 'old-more-home-fans', label: 'Fans & air conditioners', type: 'file' as const },
      ]},
      { id: 'old-more-transport', label: 'Electric Transportation', type: 'folder' as const, children: [
        { id: 'old-more-transport-scooters', label: 'Electric scooters', type: 'file' as const },
        { id: 'old-more-transport-hoverboards', label: 'Hoverboards', type: 'file' as const },
        { id: 'old-more-transport-ebikes', label: 'Electric bicycles', type: 'file' as const },
      ]},
      { id: 'old-more-guides', label: 'Buying guides', type: 'folder' as const, children: [
        { id: 'old-more-guides-all', label: 'See all guides', type: 'file' as const },
        { id: 'old-more-guides-imac', label: 'how to choose an iMac', type: 'file' as const },
        { id: 'old-more-guides-college', label: 'Best tech for college students', type: 'file' as const },
      ]},
    ]},
  ]
};

const redesignedSitemapData = {
  id: 'root-new',
  label: 'BackMarket Sitemap',
  type: 'root' as const,
  children: [
    {
      id: 'smartphones',
      label: 'Smartphones',
      type: 'folder' as const,
      children: [
        { id: 'smartphones-apple', label: 'Apple iPhone Series', type: 'file' as const },
        { id: 'smartphones-samsung', label: 'Samsung Galaxy Series', type: 'file' as const },
        { id: 'smartphones-oneplus', label: 'OnePlus Phones', type: 'file' as const },
      ],
    },
    {
      id: 'gaming-consoles',
      label: 'Gaming Consoles',
      type: 'folder' as const,
      children: [
        { id: 'gaming-xbox', label: 'Microsoft Xbox Devices', type: 'file' as const },
        { id: 'gaming-playstation', label: 'Sony PlayStation Devices', type: 'file' as const },
        { id: 'gaming-nintendo', label: 'Nintendo Devices', type: 'file' as const },
      ],
    },
    {
      id: 'computers-tablets',
      label: 'Computers & Tablets',
      type: 'folder' as const,
      children: [
        {
          id: 'laptops',
          label: 'Laptops',
          type: 'folder' as const,
          children: [
            { id: 'laptops-macbook', label: 'Apple Macbook Series', type: 'file' as const },
            { id: 'laptops-samsung', label: 'Samsung Laptops', type: 'file' as const },
            { id: 'laptops-google', label: 'Google Laptops', type: 'file' as const },
            { id: 'laptops-lenovo', label: 'Lenovo Laptops', type: 'file' as const },
            { id: 'laptops-acer', label: 'Acer Laptops', type: 'file' as const },
            { id: 'laptops-dell', label: 'Dell Laptops', type: 'file' as const },
            { id: 'laptops-hp', label: 'HP Laptops', type: 'file' as const },
          ],
        },
        {
          id: 'tablets',
          label: 'Tablets',
          type: 'folder' as const,
          children: [
            { id: 'tablets-ipad', label: 'Apple iPad Series', type: 'file' as const },
            { id: 'tablets-samsung', label: 'Samsung Tab Series', type: 'file' as const },
            { id: 'tablets-microsoft', label: 'Microsoft Surface Pro Series', type: 'file' as const },
          ],
        },
        {
          id: 'desktops',
          label: 'Desktop Computers',
          type: 'folder' as const,
          children: [
            { id: 'desktops-all-in-one', label: 'All-in-one computers', type: 'file' as const },
            { id: 'desktops-generic', label: 'Desktop computers', type: 'file' as const },
            { id: 'desktops-apple', label: 'Apple desktop computers', type: 'file' as const },
            { id: 'desktops-gaming', label: 'Gaming computers', type: 'file' as const },
          ],
        },
      ],
    },
    {
      id: 'smartwatches',
      label: 'Smartwatches',
      type: 'folder' as const,
      children: [
        { id: 'smartwatch-apple', label: 'Apple Watch Series', type: 'file' as const },
        { id: 'smartwatch-samsung', label: 'Samsung Watch series', type: 'file' as const },
        { id: 'smartwatch-garmin', label: 'Garmin Series', type: 'file' as const },
      ],
    },
    {
      id: 'audio',
      label: 'Audio',
      type: 'folder' as const,
      children: [
        {
          id: 'audio-speakers',
          label: 'Loud Speakers',
          type: 'folder' as const,
          children: [
            { id: 'speakers-ultimate-ears', label: 'Ultimate Ears Speakers', type: 'file' as const },
            { id: 'speakers-tv-sound', label: 'TV sound systems', type: 'file' as const },
            { id: 'speakers-alexa', label: 'Amazon Alexa Speakers', type: 'file' as const },
            { id: 'speakers-marshall', label: 'Marshall Speakers', type: 'file' as const },
            { id: 'speakers-sonos', label: 'Sonos Speakers', type: 'file' as const },
            { id: 'speakers-jbl', label: 'JBL Headphones', type: 'file' as const },
            { id: 'speakers-bose', label: 'Bose Speakers', type: 'file' as const },
            { id: 'speakers-apple', label: 'Apple Speakers', type: 'file' as const },
          ],
        },
        {
          id: 'audio-earphones',
          label: 'Earphones',
          type: 'folder' as const,
          children: [
            { id: 'earphones-plantronics', label: 'Plantronics Earphones', type: 'file' as const },
            { id: 'earphones-samsung', label: 'Samsung Earphones', type: 'file' as const },
            { id: 'earphones-google', label: 'Google Earphones', type: 'file' as const },
            { id: 'earphones-sony', label: 'Sony Earphones', type: 'file' as const },
            { id: 'earphones-bose', label: 'Bose Earphones', type: 'file' as const },
            { id: 'earphones-apple', label: 'Apple Earphones', type: 'file' as const },
            { id: 'earphones-beats', label: 'Beats by Dre Earphones', type: 'file' as const },
          ],
        },
        {
          id: 'audio-headphones',
          label: 'Headphones',
          type: 'folder' as const,
          children: [
            { id: 'headphones-sennheiser', label: 'Sennheiser Headphones', type: 'file' as const },
            { id: 'headphones-jbl', label: 'JBL Headphones', type: 'file' as const },
            { id: 'headphones-akg', label: 'AKG Headphones', type: 'file' as const },
            { id: 'headphones-jabra', label: 'Jabra Headphones', type: 'file' as const },
            { id: 'headphones-sony', label: 'Sony Headphones', type: 'file' as const },
            { id: 'headphones-bose', label: 'Bose Headphones', type: 'file' as const },
            { id: 'headphones-apple', label: 'Apple Headphones', type: 'file' as const },
          ],
        },
      ],
    },
    {
      id: 'deals',
      label: 'Deals',
      type: 'folder' as const,
      children: [
        { id: 'deals-student', label: 'Student Discounts', type: 'file' as const },
        { id: 'deals-military', label: 'Military Discounts', type: 'file' as const },
        { id: 'deals-mothers-day', label: "Mother's Day Sales", type: 'file' as const },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      type: 'folder' as const,
      children: [
        { id: 'services-trade-in', label: 'Trade-In Device', type: 'file' as const },
        { id: 'services-compare', label: 'Compare Devices', type: 'file' as const },
        { id: 'services-backup', label: 'BackUp protection', type: 'file' as const },
      ],
    },
    {
      id: 'guides',
      label: 'Tech Guides & Articles',
      type: 'folder' as const,
      children: [
        { id: 'guides-apple-watch-4', label: 'Is Apple Watch 4 still worth it?', type: 'file' as const },
        { id: 'guides-pixel-6', label: 'Google Pixel 6 Review', type: 'file' as const },
        { id: 'guides-college-tech', label: 'Best tech for college students', type: 'file' as const },
        { id: 'guides-trade-in', label: 'How Trade-in helps with planet - and your wallet', type: 'file' as const },
        { id: 'guides-iphone-14-15', label: 'iPhone 14 vs iPhone 15: is it worth the upgrade?', type: 'file' as const },
        { id: 'guides-imac', label: 'How to choose an iMac?', type: 'file' as const },
      ],
    },
    {
      id: 'setups',
      label: 'Setups',
      type: 'folder' as const,
      children: [
        {
          id: 'setups-kitchen',
          label: 'Home & Kitchen Setup',
          type: 'folder' as const,
          children: [
            { id: 'kitchen-vacuums', label: 'Vacuum Cleaners', type: 'file' as const },
            { id: 'kitchen-fans', label: 'Fans & air conditioners', type: 'file' as const },
            { id: 'kitchen-toasters', label: 'Toasters', type: 'file' as const },
            { id: 'kitchen-coffee', label: 'Coffee Machines', type: 'file' as const },
            { id: 'kitchen-fryers', label: 'Fryers & Air Fryers', type: 'file' as const },
            { id: 'kitchen-blenders', label: 'Blenders & Mixers', type: 'file' as const },
            { id: 'kitchen-processors', label: 'Food Processors', type: 'file' as const },
          ],
        },
        {
          id: 'setups-photo',
          label: 'Photography Setup',
          type: 'folder' as const,
          children: [
            { id: 'photo-cameras', label: 'Photo cameras', type: 'file' as const },
            { id: 'photo-action-cams', label: 'Action cameras', type: 'file' as const },
            { id: 'photo-camcorders', label: 'Video cameras & camcorders', type: 'file' as const },
            { id: 'photo-drones', label: 'Drones', type: 'file' as const },
            { id: 'photo-lenses', label: 'Camera Lenses', type: 'file' as const },
          ],
        },
        {
          id: 'setups-cinema',
          label: 'Home Cinema Setup',
          type: 'folder' as const,
          children: [
            { id: 'cinema-tv', label: 'TV', type: 'file' as const },
            { id: 'cinema-apple-tv', label: 'Apple TV', type: 'file' as const },
            { id: 'cinema-projectors', label: 'Video projectors', type: 'file' as const },
            { id: 'cinema-sound', label: 'TV sound systems', type: 'file' as const },
          ],
        },
      ],
    },
  ],
};

export default function BackmarketIARedesign() {
  const sections = [
    { id: "overview", title: "Overview", subtitle: "Understanding the challenge" },
    { id: "research", title: "Research", subtitle: "Content audits and testing" },
    { id: "design", title: "Design", subtitle: "Structuring the new IA" },
    { id: "reflection", title: "Reflection", subtitle: "Lessons and next steps" },
  ];

  return (
    <>
      <ProjectPageWrapper sections={sections}>
        <ProjectHero
          title="BackMarket IA Redesign"
          subtitle="A deep dive into restructuring the information architecture of a leading refurbished electronics marketplace to enhance usability and content clarity."
          storyHook="How can we untangle a complex navigation system to help users find what they need, faster?"
          heroImage="/placeholder.svg?height=600&width=1200"
          role="UX Researcher & IA Specialist"
          timeline="4 Weeks (Class Project)"
        />

        <StorySection
          id="tldr"
          chapter="00"
          storyTitle="TL;DR Summary"
          narrativeHook="A rapid transformation of BackMarket’s navigation—cutting confusion, boosting user success, and setting a new standard for clarity."
        >
          <div className="space-y-6">
            <InsightCard
              type="outcome"
              title="BackMarket, a marketplace for refurbished devices, suffered from poor navigation due to inconsistent categorization."
              story="Our goal was to streamline and clarify the site's navigation structure, resulting in a hybrid organizational approach (topical, alphabetical, chronological), validated through iterative user testing. This significantly improved user task completion rates."
              icon={<CheckCircle />}
            />
            <div className="grid md:grid-cols-2 gap-8">
              <InsightCard
                type="challenge"
                title="Multiple redundant navigation systems"
                story="BackMarket’s navigation was complex, with three separate navigation systems leading to user confusion. Our redesign aimed at consolidating and clarifying this structure."
                icon={<BarChart />}
              />
              <InsightCard
                type="challenge"
                title="Limited testing sample initially due to tight deadlines"
                story="Early rounds of user testing were constrained, requiring rapid iteration and creative research approaches."
                icon={<Users />}
              />
            </div>
          </div>
        </StorySection>

        <StorySection
          id="personas"
          chapter="01A"
          storyTitle="Personas & Real-World Constraints"
          narrativeHook="Designing for real people, not just ideal users."
        >
          <div className="grid md:grid-cols-2 gap-8">
            <InsightCard
              type="discovery"
              title="Prathima (25): Teacher, trading in smartphone"
              story="Needs a simple, trustworthy way to trade in her old phone for cash."
              icon={<Smartphone />}
            />
            <InsightCard
              type="discovery"
              title="Martinez (27): Student, purchasing laptop"
              story="Wants to compare options and find the best deal on a reliable laptop."
              icon={<Laptop />}
            />
          </div>
        </StorySection>

        <StorySection
          id="overview"
          chapter="01"
          storyTitle="The Challenge: A Tangled Web"
          narrativeHook="BackMarket's mission to promote tech reuse was being hindered by a confusing user experience. The goal was clear: redesign the site's navigation to be intuitive and clear."
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-2xl mb-4">Context & Goals</h3>
              <p className="mb-4">
                BackMarket is an online marketplace for refurbished electronic devices, categorized into “fair,” “good,” and “great” condition. The company’s mission is to promote the reuse of technology to reduce electronic waste.
              </p>
              <p>
                This project aimed to redesign BackMarket’s navigation to improve its usability and clarity. The primary challenge was a disorganized hybrid navigation system with three separate navbars featuring overlapping and poorly grouped categories.
              </p>
            </div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Screenshot of the original BackMarket navigation structure"
              className="rounded-lg shadow-md"
            />
          </div>
        </StorySection>

        <StorySection
          id="research"
          chapter="02"
          storyTitle="Understanding the User Journey"
          narrativeHook="To fix the navigation, we first had to understand how users were getting lost. This involved a deep dive into the existing content and a series of usability tests."
        >
          <div className="space-y-12">
            <div>
              <h3 className="font-bold text-2xl mb-4">Content Inventory & Audit</h3>
              <p className="mb-4">
                The process began with a thorough content inventory. We started with 60 subheaders and, by eliminating redundancy and grouping similar topics, reduced them to 45. A navigation audit of all three navbars revealed significant overlap and inconsistency.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                  <InsightCard 
                      type="discovery"
                      title="Initial Findings"
                      story="The audit revealed redundant or misclassified headers and confusing pathways between similar pages (e.g., 'Laptops' appearing in multiple places)."
                      icon={<FileText />}
                  />
                  <InsightCard
                      type="challenge"
                      title="The Core Problem"
                      story="The hybrid navigation lacked a consistent logic, making it difficult for users to form a mental model of the site's structure."
                      icon={<Lightbulb />}
                  />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-4">Usability Testing</h3>
              <p className="mb-4">
                A multi-faceted approach to testing was used to identify pain points and validate our design decisions. This included card sorting, treejack testing, and first-click testing.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                  <InsightCard 
                      type="solution"
                      title="Card Sorting"
                      story="An open card sort with 27 items helped us understand users' mental models for grouping content. 18/27 cards were sorted as expected."
                      icon={<Users />}
                  />
                  <InsightCard
                      type="solution"
                      title="Treejack Testing"
                      story="Two rounds of testing showed significant improvement, from 67% to 87% success, after we clarified task wording and allowed exploration."
                      icon={<Milestone />}
                  />
                  <InsightCard
                      type="solution"
                      title="First Click Testing"
                      story="Achieved an 87% success rate overall. A confusing 'Start Now' button for trade-ins was identified as a key area for improvement."
                      icon={<MousePointerClick />}
                  />
              </div>
            </div>
          </div>
        </StorySection>

        <StorySection
          id="design"
          chapter="03"
          storyTitle="Crafting a Coherent Structure"
          narrativeHook="Armed with research insights, we designed a new, streamlined information architecture and created wireframes to bring it to life."
        >
            <div className="space-y-8">
              <div>
                  <h3 className="font-bold text-2xl mb-4">The New Sitemap</h3>
                  <p className="mb-4">The new sitemap uses a hybrid organization strategy: topical for main categories, alphabetical for brands, and chronological for product versions. The 'More' category was eliminated, and its content was redistributed. This reduced the header count from 9 to 9, but subheaders from 60 to 45.</p>
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-center mb-4">Before</h4>
                      <TopDownTree data={originalSitemapData} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-center mb-4">After</h4>
                      <TopDownTree data={redesignedSitemapData} />
                    </div>
                  </div>
              </div>
              <div>
                  <h3 className="font-bold text-2xl mb-4">Wireframes</h3>
                  <p className="mb-4">Eight low-fidelity wireframes were created to model two key user tasks: trading in a smartphone and buying a refurbished laptop. These wireframes served as the basis for our final design recommendations.</p>
                  <img
                      src="/placeholder.svg?height=500&width=1000"
                      alt="Low-fidelity wireframes for trade-in and purchase tasks"
                      className="rounded-lg shadow-md"
                  />
              </div>
            </div>
        </StorySection>

        <StorySection
          id="reflection"
          chapter="04"
          storyTitle="Reflection & Next Steps"
          narrativeHook="The project was a success, but there's always room for improvement. Here are the key takeaways and future considerations."
        >
          <div className="grid md:grid-cols-2 gap-8">
              <div>
                  <h3 className="font-bold text-2xl mb-4">Key Insights</h3>
                  <ul className="list-disc pl-5 space-y-2">
                      <li>Clearer task phrasing dramatically impacts success rates.</li>
                      <li>Allowing users to explore boosts their confidence and success.</li>
                      <li>Ambiguity in product categorization is a major source of friction.</li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-bold text-2xl mb-4">Next Steps</h3>
                  <ul className="list-disc pl-5 space-y-2">
                      <li>Broaden test demographics to include less tech-savvy users.</li>
                      <li>A/B test alternative navigation schemes to further optimize.</li>
                      <li>Integrate accessibility improvements based on WCAG guidelines.</li>
                      <li>Examine the impact of microcopy and call-to-action clarity.</li>
                  </ul>
              </div>
          </div>
          {/* Add extra spacing between Next Steps and the quote */}
          <div className="h-8 md:h-12" />
          <UserQuote 
              quote="This project was a powerful reminder that even the most well-intentioned features can fail if they aren't built on a solid foundation of clear information architecture."
              author="Vedant Darak"
              role="Project Lead"
          />
          {/* Explore More Section (from Creative Block) */}
          <section className="content-section py-16 bg-muted/30 mt-16 rounded-xl">
            <div className="container mx-auto px-4 text-center">
              <FadeIn>
                <div className="max-w-3xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Like my work? <FlowingText text={"Explore"} className="inline" /> more!
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Discover more UX design projects that showcase my approach to solving complex problems through research-driven design.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-8">
                    <Link href="/projects/finance-dashboard">
                      <RefinedButton variant="default" size="lg" className="group">
                        <span className="flex items-center gap-2">
                          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                          Previous Project
                        </span>
                      </RefinedButton>
                    </Link>
                    <Link href="/projects/health-track">
                      <RefinedButton variant="outline" size="lg" className="group">
                        <span className="flex items-center gap-2">
                          Next Project
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </RefinedButton>
                    </Link>
                  </div>
                  <div className="flex justify-center gap-8 pt-8 text-sm text-muted-foreground">
                    <div className="text-center">
                      <div className="font-mono text-lg font-bold">04</div>
                      <div>Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-lg font-bold">50+</div>
                      <div>User Interviews</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-lg font-bold">12</div>
                      <div>Prototypes</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-lg font-bold">05</div>
                      <div>Years Experience</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </StorySection>
      </ProjectPageWrapper>
      <Footer />
    </>
  );
}
