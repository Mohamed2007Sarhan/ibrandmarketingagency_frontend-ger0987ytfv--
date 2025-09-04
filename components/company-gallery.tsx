"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2, Download, Share2, Heart, Info, Calendar, MapPin, Users, TrendingUp } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"

interface CompanyCard {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  images: string[]
  category: string
  categoryAr: string
  stats?: {
    projects: number
    clients: number
    experience: string
    location: string
  }
}

interface CompanyGalleryProps {
  serviceId: string
}

// Company name mapping
// Company name mapping
const getCompanyName = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) return "Abu Saad Company for Export and International Transport"
  if (section.includes("الإنجاز المعتمد")) return "Al-Injaz Al-Mu'tamad Company"
  if (section.includes("العلا") || section.includes("al ola") || section.includes("el-ola") || section.includes("al-ola")) return "Al-Ola Export and International Transport Company"
  if (section.includes("رضوان") || section.includes("radwan")) return "Radwan Furniture Factory"
  if (section.includes("تيستي") || section.includes("tasty")) return "Tasty Restaurant"
  if (section.includes("كينج وود") || section.includes("king wood")) return "King Wood Factory for Wood Supply"
  if (section.includes("هاي براند") || section.includes("high brand")) return "High Brand Clothing Factory"
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) return "United Brothers Kitchen Factory"
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) return "Itqan Al-Mureed Academy"
  if (section.includes("مكة") || section.includes("makkah")) return "Makkah Kitchens Factory "
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) return "Tr7al Travel Company"
  if (section.includes("عسل") || section.includes("honey")) return "Asal Real Estate Company"
  if (section.includes("الحبشي") || section.includes("habashy") || section.includes("el-habashy")) return "El-Habashy Furniture Factory"
  if (section.includes("اسنان") || section.includes("dental") || section.includes("dent")) return "MasterDent Center clinic"
  if (section.includes("الجزار") || section.includes("butcher")) return "El-Gazzar Steel Company"
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) return "Ibn El-Sasty Car Service Center"
  if (section.includes("الوكيل") || section.includes("agent")) return "El-Wakeel Car Service Center"
  if (section.includes("بداية مشوارك") || section.includes("journey")) return "Bidaya Mushwarak Academy"
  if (section.includes("كشخة الزين") || section.includes("beauty")) return "Kashkha Al-Zain store"
  if (section.includes("ماستر") || section.includes("master")) return "MasterDent Center clinic"
  if (section.includes("ووديكس") || section.includes("woodex")) return "Woodex Factory for Kitchens and Wood Supplies"
  if (section.includes("i brand") || section.includes("ibrand")) return "i Brand Marketing Agency"
  return sectionTitle
}

const getCompanyNameAr = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) return "شركة أبو سعد للتصدير والنقل الدولي"
  if (section.includes("الإنجاز المعتمد")) return "شركة الإنجاز المعتمد لخدمات الأعمال"
  if (section.includes("العلا") || section.includes("al ola") || section.includes("el-ola") || section.includes("al-ola")) return "شركة العلا للتصدير والنقل الدولي"
  if (section.includes("رضوان") || section.includes("radwan")) return "مصنع رضوان للأثاث "
  if (section.includes("تيستي") || section.includes("tasty")) return "مطعم تيستي"
  if (section.includes("كينج وود")) return "مصنع كينج وود لتوريد الأخشاب"
  if (section.includes("هاي براند")) return "مصنع هاي براند للملابس"
  if (section.includes("الاخوة المتحدون")) return "مصنع الإخوة المتحدون للمطابخ"
  if (section.includes("اتقان المريد")) return "أكاديمية إتقان المريد"
  if (section.includes("مكة")) return "  مصنع مكة للمطابخ -"
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) return "شركة ترحال للسفر"
  if (section.includes("عسل")) return "شركة عسل للتسويق العقاري"
  if (section.includes("الحبشي") || section.includes("habashy")) return "مصنع الحبشي للأثاث"
  if (section.includes("اسنان") || section.includes("dental")) return "عيادة ماستر دنت"
  if (section.includes("الجزار")) return "شركة الجزار ستيل"
  if (section.includes("ابن الاسطى")) return "مركز ابن السطي لخدمات السيارات"
  if (section.includes("الوكيل")) return "مركز الوكيل لخدمات السيارات"
  if (section.includes("بداية مشوارك")) return "أكاديمية بداية مشوارك"
  if (section.includes("كشخة الزين")) return "محل كشخة الزين"
  if (section.includes("ماستر")) return "عيادة ماستر دنت"
  if (section.includes("ووديكس")) return "مصنع ووديكس للمطابخ وتوريدات الأخشاب"
  if (section.includes("i brand")) return "وكالة iBrand للتسويق"
  return sectionTitle
}



const getCompanyDescription = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  // Graphic Design adjustments
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return "Furniture brand offering a range of home furniture and interior pieces."
  }
  if (section.includes("الاخوة المتحدون") || section.includes("الإخوة المتحدون") || section.includes("united brothers")) {
    return "Kitchen preparation and installation services for residential and commercial spaces."
  }
  if (section.includes("اتقان المريد") || section.includes("mureed") || section.includes("quran")) {
    return "Quran memorization and Tajweed education center with structured learning programs."
  }
  if (section.includes("مطبخ") || section.includes("مطابخ") || section.includes("kitchen")) {
    return "Professional kitchen preparation and installation services for homes and businesses."
  }
  if (section.includes("الإنجاز المعتمد")) {
    return "Travel and tourism services including trip planning and visa assistance."
  }
  if (section.includes("الجزار")) {
    return "Iron and steel fabrication, repair, and metal works services."
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "Travel, international transport, and export logistics solutions."
  }
  if (section.includes("خشب") || section.includes("wooden")) {
    return "Wooden furniture manufacturing with high-quality craftsmanship."
  }
  if (section.includes("ملابس") || section.includes("clothes") || section.includes("apparel")) {
    return "Clothing and apparel brand offering stylish collections."
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "Food services and culinary products brand."
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return "Wooden furniture and carpentry craftsmanship."
  }
  if (section.includes("كينج وود") || section.includes("king wood")) {
    return "Premium furniture company specializing in luxury home furnishings and interior design solutions."
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return "Luxury fashion brand offering high-end clothing and accessories for discerning customers."
  }
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) {
    return "Traditional food company providing authentic local cuisine and packaged food products."
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
    return "Educational platform offering professional development courses and certification programs."
  }
  if (section.includes("مكة") || section.includes("makkah")) {
    return "Tourism services company specializing in Hajj and Umrah travel arrangements."
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "Travel and mobility solutions under the brand tr7al."
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "Real estate marketing company specializing in property promotion and lead generation."
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return "Traditional butcher shop providing fresh meat and poultry products."
  }
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return "Artisan workshop specializing in traditional crafts and handmade products."
  }
  if (section.includes("الإنجاز المعتمد")) {
    return "Certified services company offering professional and accredited solutions."
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return "Professional agency providing comprehensive business and service solutions."
  }
  if (section.includes("بداية مشوارك") || section.includes("journey")) {
    return "Career development platform helping professionals start their journey to success."
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return "Beauty salon offering comprehensive beauty and wellness services."
  }
  if (section.includes("ماستر") || section.includes("master")) {
    return "Master services company providing expert solutions across various industries."
  }
  if (section.includes("ووديكس") || section.includes("woodex")) {
    return "Furniture company specializing in modern and contemporary furniture designs."
  }
  if (section.includes("i brand") || section.includes("ibrand")) {
    return "Marketing agency providing comprehensive branding and digital marketing solutions."
  }
  if (section.includes("الحبشي") || section.includes("habashy") || section.includes("el-habashy")) {
    return "Furniture brand offering distinctive home furniture collections."
  }
  if (section.includes("اسنان") || section.includes("dental") || section.includes("dent")) {
    return "Advanced dental center offering comprehensive dental and cosmetic services."
  }
  return "Professional company offering high-quality services and solutions."
}

const getCompanyDescriptionAr = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()
  // Graphic Design adjustments (Arabic)
  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return "    تصدير ونقل دولي من مصر إلي ليبيا – الإمارات العربية المتحدة – السعودية      "
  }
  if (section.includes("الاخوة المتحدون") || section.includes("الإخوة المتحدون") || section.includes("united brothers")) {
    return "خدمات تجهيز وتركيب المطابخ للمنازل والأنشطة التجارية."
  }
  if (section.includes("اتقان المريد") || section.includes("mureed") || section.includes("quran")) {
    return "أكاديمية تعليمية لعلوم الشرع الإسلامي وتحفيظ القرآن"
  }
  if (section.includes("مطبخ") || section.includes("مطابخ") || section.includes("kitchen")) {
    return "خدمات تجهيز وتركيب المطابخ للمنازل والأنشطة التجارية."
  }
  if (section.includes("الإنجاز المعتمد")) {
    return "خدمات تخليص المعاملات وتأسيس الشركات  "
  }
  if (section.includes("الجزار")) {
    return "خدمات توريد الحديد والصلب والتصنيع والإصلاحات المعدنية."
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "خدمات السفر والنقل الدولي والتصدير بحلول لوجستية متكاملة."
  }
  if (section.includes("خشب") || section.includes("wooden")) {
    return "تصنيع أثاث خشبي بجودة عالية وحرفية مميزة."
  }
  if (section.includes("ملابس") || section.includes("clothes") || section.includes("apparel")) {
    return "علامة ملابس تقدم تشكيلات أنيقة وعصرية."
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "علامة متخصصة في خدمات الطعام والمنتجات الغذائية."
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return "أثاث خشبي وحرف نجارة متميزة."
  }
  if (section.includes("كينج وود")) {
    return "مصنع أثاث متخصص في أثاث المنازل الفاخر وحلول التصميم الداخلي."
  }
  if (section.includes("هاي براند")) {
    return "مصنع ملابس فاخرة تقدم ملابس وإكسسوارات عالية الجودة للعملاء المميزين."
  }
  if (section.includes("الاخوة المتحدون")) {
    return "مصنع مطابخ خشب وألومنيوم وتند  وأبواب وشبابيك "
  }
  if (section.includes("اتقان المريد")) {
    return "منصة تعليمية تقدم دورات التطوير المهني وبرامج الشهادات المعتمدة."
  }
  if (section.includes("مكة")) {
    return "تصميم وتنفيذ مطابخ ألومنيوم كاملة حسب الطلب."
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "شركة سياحة داخلية تقدم خدمات السفر والنقل الدولي والتصدير بحلول لوجستية متكاملة."
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "شركة تسويق عقاري متخصصة في ترويج العقارات وتوليد العملاء."
  }
  if (section.includes("الجزار")) {
    return " لتجارة جميع أنواع الحديد والصلب والتصنيع والإصلاحات المعدنية."
  }
  if (section.includes("ابن الاسطى")) {
    return "مركز صيانة السيارات ميكانيكا وكهرباء وعفشة"
  }
  if (section.includes("الإنجاز المعتمد")) {
    return "شركة  تخليص المعامالت وتأسيس شركات "
  }
  if (section.includes("الوكيل")) {
    return " مركز لصيانة فوانيس وزجاج السيارا ت "
  }
  if (section.includes("بداية مشوارك")) {
    return "منصة تطوير مهني تساعد المحترفين في بداية رحلتهم نحو النجاح."
  }
  if (section.includes("كشخة الزين")) {
    return "محل ملابس وتسويق الأزياء المستوردة من الإمارات ومصر"
  }
  if (section.includes("ماستر")) {
    return "عيادة طبية متكاملة لطب الفم والأسنان وأمراض اللثة"
  }
  if (section.includes("ووديكس")) {
    return "تصنيع أو توريد خامات ومستلزمات خاصة بالمطابخ وتجاليد الحوائط"
  }
  if (section.includes("i brand")) {
    return "وكالة تسويق تقدم حلول شاملة للعلامات التجارية والتسويق الرقمي."
  }
  if (section.includes("الحبشي") || section.includes("habashy") || section.includes("el-habashy")) {
    return "مصنع أثاث كلاسيك ومودرن يقدم مجموعات مميزة لأثاث المنازل."
  }
  if (section.includes("اسنان") || section.includes("dental") || section.includes("dent")) {
    return "عيادة طبية متكاملة لطب الفم والأسنان وأمراض اللثة"
  }
  return "شركة احترافية تقدم خدمات وحلول عالية الجودة."
}

const getCompanyStats = (sectionTitle: string) => {
  const section = sectionTitle.toLowerCase()

  if (section.includes("كينج وود") || section.includes("king wood")) {
    return { projects: 150, clients: 80, experience: "8+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return { projects: 200, clients: 120, experience: "5+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) {
    return { projects: 80, clients: 45, experience: "12+ Years", location: "Dakahlia, Egypt" }
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
    return { projects: 300, clients: 200, experience: "6+ Years", location: "Baghdad, Iraq" }
  }
  if (section.includes("مكة") || section.includes("makkah")) {
    return { projects: 500, clients: 300, experience: "15+ Years", location: "Dakahlia, Egypt" }
  }
  if (section.includes("ترحال") || section.includes("travel")) {
    return { projects: 250, clients: 180, experience: "10+ Years", location: "Cairo, Egypt" }
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return { projects: 60, clients: 35, experience: "20+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return { projects: 40, clients: 25, experience: "25+ Years", location: "Qalyubia, Egypt" }
  }
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return { projects: 100, clients: 60, experience: "30+ Years", location: "Dakahlia, Egypt" }
  }
  if (section.includes("الانجاز المعتمد") || section.includes("certified")) {
    return { projects: 180, clients: 95, experience: "7+ Years", location: "Dubai, UAE" }
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return { projects: 120, clients: 75, experience: "9+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("بداية مشوارك") || section.includes("journey")) {
    return { projects: 400, clients: 250, experience: "4+ Years", location: "Assiut, Egypt" }
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return { projects: 90, clients: 55, experience: "8+ Years", location: "Casablanca, Morocco" }
  }
  if (section.includes("ماستر") || section.includes("master")) {
    return { projects: 220, clients: 140, experience: "11+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("ووديكس") || section.includes("woodex")) {
    return { projects: 130, clients: 85, experience: "6+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("i brand") || section.includes("ibrand")) {
    return { projects: 350, clients: 200, experience: "3+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("ابو سعد") || section.includes("أبو سعد")) {
    return { projects: 280, clients: 150, experience: "12+ Years", location: "Misrata, Libya / Damietta, Egypt" }
  }
  if (section.includes("العلا") || section.includes("al ola")) {
    return { projects: 320, clients: 180, experience: "14+ Years", location: "Riyadh, Saudi Arabia" }
  }
  if (section.includes("رضوان") || section.includes("radwan")) {
    return { projects: 95, clients: 65, experience: "8+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return { projects: 75, clients: 45, experience: "6+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("الحبشي") || section.includes("habashy")) {
    return { projects: 110, clients: 70, experience: "9+ Years", location: "Damietta, Egypt" }
  }
  if (section.includes("اسنان") || section.includes("dental")) {
    return { projects: 180, clients: 120, experience: "10+ Years", location: "Damietta, Egypt" }
  }

  return { projects: 100, clients: 60, experience: "5+ Years", location: "Egypt" }
}

const getCategory = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()

  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return "Export, Import & International Transport"
  }
  if (section.includes("الانجاز المعتمد") || section.includes("الإنجاز المعتمد")) {
    return "Transaction clearance"
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "Export & International Transport"
  }
  if (section.includes("رضوان") || section.includes("radwan") || section.includes("الحبشي") || section.includes("habashy")) {
    return "Furniture & Interior Design"
  }
  if (section.includes("كينج وود") || section.includes("king wood") || section.includes("ووديكس") || section.includes("woodex")) {
    return "Furniture & Interior Design"
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return "Clothing & Fashion Manufacturing"
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return "Fashion & Retail"
  }
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers") || section.includes("مكة") || section.includes("makkah")) {
    return "Kitchen Manufacturing & Design"
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking") || section.includes("بداية مشوارك") || section.includes("journey")) {
    return "Education & Training"
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "Tourism & Travel"
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "Real Estate Marketing"
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return "Steel Trading & Supply"
  }
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return "Automotive Services"
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return "Automotive Services"
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "Food & Beverage"
  }
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) {
    return "Healthcare & Medical Services"
  }
  

  return "Other"
}
const getCategoryAr = (sectionTitle: string): string => {
  const section = sectionTitle.toLowerCase()

  if (section.includes("ابو سعد") || section.includes("أبو سعد") || section.includes("بو سعد")) {
    return " التصدير والنقل الدولي"
  }
  if (section.includes("الانجاز المعتمد") || section.includes("الإنجاز المعتمد")) {
    return "خدمات تخليص المعاملات وتأسيس الشركات"
  }
  if (section.includes("العلا") || section.includes("al ola") || section.includes("al-ola") || section.includes("el-ola")) {
    return "التصدير والنقل الدولي"
  }
  if (section.includes("رضوان") || section.includes("radwan") || section.includes("الحبشي") || section.includes("habashy")) {
    return "الأثاث والتصميم الداخلي"
  }
  if (section.includes("كينج وود") || section.includes("king wood") || section.includes("ووديكس") || section.includes("woodex")) {
    return "الأثاث وتوريد الأخشاب"
  }
  if (section.includes("هاي براند") || section.includes("high brand")) {
    return "صناعة الملابس والأزياء"
  }
  if (section.includes("كشخة الزين") || section.includes("beauty")) {
    return "بيع الأزياء والتجزئة"
  }
  if (section.includes("الاخوة المتحدون") || section.includes("united brothers") || section.includes("مكة") || section.includes("makkah")) {
    return "صناعة وتصميم المطابخ"
  }
  if (section.includes("اتقان المريد") || section.includes("perfection seeking") || section.includes("بداية مشوارك") || section.includes("journey")) {
    return "التعليم والتدريب"
  }
  if (section.includes("ترحال") || section.includes("travel") || section.includes("tr7al")) {
    return "السياحة والسفر"
  }
  if (section.includes("عسل") || section.includes("honey")) {
    return "التسويق العقاري"
  }
  if (section.includes("الجزار") || section.includes("butcher")) {
    return "تجارة وتوريد الحديد"
  }
  if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
    return "خدمات السيارات"
  }
  if (section.includes("الوكيل") || section.includes("agent")) {
    return "خدمات السيارات"
  }
  if (section.includes("تيستي") || section.includes("tasty")) {
    return "الطعام والمشروبات"
  }
  if (section.includes("ماستر") || section.includes("master") || section.includes("اسنان") || section.includes("dental")) {
    return "الرعاية الصحية والخدمات الطبية"
  }

  return "أخرى"
}

export default function CompanyGallery({ serviceId }: CompanyGalleryProps) {
  const { isDark } = useTheme()
  const { isRTL, t } = useTranslationContext()
  const [companies, setCompanies] = useState<CompanyCard[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCompany, setSelectedCompany] = useState<CompanyCard | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [autoPlayInterval, setAutoPlayInterval] = useState(5000)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!selectedCompany || !autoPlay) return

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const nextIndex = prev === selectedCompany.images.length - 1 ? 0 : prev + 1
        return nextIndex
      })
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [selectedCompany, autoPlay, autoPlayInterval])

  useEffect(() => {
    const controller = new AbortController()
    async function fetchCompanies() {
      try {
        setLoading(true)
        const res = await fetch(`/api/service-results?service=${encodeURIComponent(serviceId)}`, {
          signal: controller.signal,
          cache: "no-store",
        })
        if (!res.ok) throw new Error("Failed to load service results")
        const data = await res.json()

        // Transform sections into company cards
        const companyCards: CompanyCard[] = data.sections.map((section: any) => ({
          id: section.title,
          name: getCompanyName(section.title),
          nameAr: getCompanyNameAr(section.title),
          description: getCompanyDescription(section.title),
          descriptionAr: getCompanyDescriptionAr(section.title),
          images: section.items.map((item: any) => item.src),
          category: getCategory(section.title),
          categoryAr: getCategoryAr(section.title),
          stats: getCompanyStats(section.title)
        }))

        setCompanies(companyCards)
      } catch (e) {
        if ((e as any).name !== "AbortError") {
          console.error("Failed to load companies:", e)
          setCompanies([])
        }
      } finally {
        setLoading(false)
      }
    }
    fetchCompanies()
    return () => controller.abort()
  }, [serviceId])


  const openCompany = (company: CompanyCard) => {
    setSelectedCompany(company)
    setCurrentImageIndex(0)
    setAutoPlay(false)
    setShowInfo(false)
  }

  const closeCompany = () => {
    setSelectedCompany(null)
    setIsPlaying(false)
    setAutoPlay(false)
    setShowInfo(false)
  }

  const goToPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedCompany) return
    const newIndex = currentImageIndex === 0 ? selectedCompany.images.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
  }

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedCompany) return
    const newIndex = currentImageIndex === selectedCompany.images.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)
  }

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      const newMuted = !isMuted
      videoRef.current.muted = newMuted
      setIsMuted(newMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleDownload = () => {
    if (selectedCompany && selectedCompany.images[currentImageIndex]) {
      const link = document.createElement('a')
      link.href = selectedCompany.images[currentImageIndex]
      link.download = `${selectedCompany.name}-${currentImageIndex + 1}.jpg`
      link.click()
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedCompany?.name || 'iBrand Gallery',
        text: selectedCompany?.description || 'Check out this amazing work!',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const isVideo = (filename: string) => /\.(mp4|webm|ogg)$/i.test(filename)
  const isAudio = (filename: string) => /\.(mp3|wav|m4a|aac)$/i.test(filename)

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  if (companies.length === 0) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl mb-4">🎨</motion.div>
        <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {isRTL ? "لا توجد شركات متاحة حالياً" : "No companies available at the moment"}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-gray-200"
              }`}
            onClick={() => openCompany(company)}
            whileHover={{ y: -5 }}
          >
            {/* Company Image (fit entire image) */}
            <div className="relative h-48 overflow-hidden">
              {company.images.length > 0 && (
                (() => {
                  const coverIndex = index === 1 && company.images.length > 2
                    ? Math.floor(company.images.length / 2)
                    : 0
                  return (
                    <Image
                      src={company.images[coverIndex]}
                      alt={isRTL ? getCompanyNameAr(company.id) : getCompanyName(company.id)}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                    />
                  )
                })()
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Category Badge */}
              <motion.div
                className="absolute top-4 right-4"
                whileHover={{ scale: 1.1 }}
              >
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"
                  }`}>
                  {isRTL ? company.categoryAr : company.category}
                </span>
              </motion.div>

              {/* Stats Overlay */}
              {company.stats && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3 h-3" />
                      <span>{company.stats.projects} Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      <span>{company.stats.clients} Clients</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Info */}
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"
                }`}>
                {isRTL ? getCompanyNameAr(company.id) : getCompanyName(company.id)}
              </h3>

              <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                {isRTL ? company.descriptionAr : company.description}
              </p>

              {company.stats && (
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <div className={`flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                    <Calendar className="w-3 h-3" />
                    <span>{company.stats.experience}</span>
                  </div>
                  <div className={`flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                    <MapPin className="w-3 h-3" />
                    <span>{company.stats.location}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                  {company.images.length} {isRTL ? "صورة" : "images"}
                </span>

                <motion.span
                  className={`text-xs font-semibold ${isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {isRTL ? "انقر للعرض" : "Click to view"}
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Company Modal - Like Portfolio */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeCompany}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl ${isDark ? "bg-slate-900" : "bg-white"
                } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCompany}
                className={`absolute top-4 right-4 z-20 p-3 rounded-full ${isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white text-gray-800 hover:bg-gray-100"
                  } shadow-lg transition-colors duration-200`}
              >
                <X size={24} />
              </button>

              {/* Image Gallery: grid when few images, carousel when many */}
              <div
                className={`relative h-96 md:h-[500px] overflow-hidden ${isDark ? "bg-slate-900" : "bg-white"}`}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                {selectedCompany.images.length > 0 && selectedCompany.images.length <= 5 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3">
                    {selectedCompany.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border bg-white">
                        {isVideo(img) ? (
                          <video src={img} className="absolute inset-0 w-full h-full object-contain bg-black" playsInline />
                        ) : isAudio(img) ? (
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <audio src={img} controls className="w-full max-w-xs" />
                          </div>
                        ) : (
                          <Image src={img} alt={`${selectedCompany.name} ${idx + 1}`} fill className="object-contain bg-white" sizes="33vw" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {isVideo(selectedCompany.images[currentImageIndex]) ? (
                      <>
                        <video
                          ref={videoRef}
                          src={selectedCompany.images[currentImageIndex]}
                          className="w-full h-full object-contain"
                          controls={false}
                          onLoadedMetadata={() => {
                            if (videoRef.current) {
                              videoRef.current.volume = volume
                              videoRef.current.muted = isMuted
                            }
                          }}
                        />
                        {/* Center Play/Pause overlay */}
                        <button
                          onClick={(e) => { e.stopPropagation(); handleVideoPlay() }}
                          className={`absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${isDark ? "bg-slate-900/60 text-white hover:bg-slate-900/80" : "bg-white/80 text-slate-900 hover:bg-white"}`}
                          style={{ width: 64, height: 64 }}
                        >
                          {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10" />}
                        </button>
                      </>
                    ) : isAudio(selectedCompany.images[currentImageIndex]) ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            className="text-6xl mb-4"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            🎵
                          </motion.div>
                          <audio src={selectedCompany.images[currentImageIndex]} controls className="w-full max-w-md" />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={selectedCompany.images[currentImageIndex]}
                        alt={`${isRTL ? getCompanyNameAr(selectedCompany.id) : getCompanyName(selectedCompany.id)} - Image ${currentImageIndex + 1}`}
                        fill
                        sizes="100vw"
                        className="object-contain"
                        priority={true}
                      />
                    )}

                    {/* Navigation Arrows */}
                    {selectedCompany.images.length > 1 && (
                      <>
                        <button
                          onClick={goToPreviousImage}
                          className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                            } shadow-lg transition-colors duration-200`}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={goToNextImage}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                            } shadow-lg transition-colors duration-200`}
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {selectedCompany.images.length > 1 && (
                      <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${isDark ? "bg-slate-800/80 text-white" : "bg-white/80 text-gray-800"
                        }`}>
                        {currentImageIndex + 1} / {selectedCompany.images.length}
                      </div>
                    )}

                    {/* Auto-play Button */}
                    <div className="absolute top-4 left-4">
                      <button
                        onClick={toggleAutoPlay}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${autoPlay
                            ? isDark ? "bg-green-600/90 text-white" : "bg-green-500/90 text-white"
                            : isDark ? "bg-slate-800/80 text-gray-300" : "bg-white/80 text-gray-700"
                          } backdrop-blur-sm transition-colors duration-200`}
                      >
                        {autoPlay ? "⏸️ Auto" : "▶️ Auto"}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Company Details - Scrollable Content */}
              <div className="max-h-[calc(90vh-500px)] overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"
                        }`}>
                        {isRTL ? getCompanyNameAr(selectedCompany.id) : getCompanyName(selectedCompany.id)}
                      </h2>
                      <p className={`text-lg mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
                        }`}>
                        {isRTL ? selectedCompany.descriptionAr : selectedCompany.description}
                      </p>

                      {/* Category */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"
                          }`}>
                          {isRTL ? "التصنيف" : "Category"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`px-4 py-2 rounded-xl text-sm font-medium border shadow-sm transition-transform duration-200 ${isDark ? "bg-slate-800 text-blue-300 border-slate-700 hover:scale-[1.02]" : "bg-white text-blue-800 border-gray-200 hover:scale-[1.02]"
                              }`}
                          >
                            {isRTL ? selectedCompany.categoryAr : selectedCompany.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Company Stats */}
                      {selectedCompany.stats && (
                        <div className="mb-6">
                          <h4 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"
                            }`}>
                            {isRTL ? "إحصائيات الشركة" : "Company Statistics"}
                          </h4>
                          <div className="space-y-3">
                            <div className={`p-4 rounded-2xl ${isDark ? "bg-slate-800" : "bg-gray-50"
                              } border ${isDark ? "border-slate-700" : "border-gray-200"
                              }`}>
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"
                                  }`}>
                                  {isRTL ? "المشاريع المكتملة" : "Completed Projects"}
                                </span>
                                <span className={`text-2xl font-bold ${isDark ? "text-blue-400" : "text-blue-600"
                                  }`}>
                                  {selectedCompany.stats.projects}+
                                </span>
                              </div>
                            </div>
                            <div className={`p-4 rounded-2xl ${isDark ? "bg-slate-800" : "bg-gray-50"
                              } border ${isDark ? "border-slate-700" : "border-gray-200"
                              }`}>
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"
                                  }`}>
                                  {isRTL ? "العملاء السعداء" : "Happy Clients"}
                                </span>
                                <span className={`text-2xl font-bold ${isDark ? "text-green-400" : "text-green-600"
                                  }`}>
                                  {selectedCompany.stats.clients}+
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Company Info */}
                      {selectedCompany.stats && (
                        <div className={`p-4 rounded-2xl ${isDark ? "bg-slate-800" : "bg-gray-50"
                          } border ${isDark ? "border-slate-700" : "border-gray-200"
                          }`}>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "الخبرة" : "Experience"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {selectedCompany.stats.experience}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "الموقع" : "Location"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {selectedCompany.stats.location}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "التصنيف" : "Category"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {isRTL ? selectedCompany.categoryAr : selectedCompany.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedCompany.images.length > 1 && (
                    <div className="mt-8">
                      <h4 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"
                        }`}>
                        {isRTL ? "معرض الصور" : "Image Gallery"}
                      </h4>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {selectedCompany.images.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === idx
                                ? "border-blue-500 scale-105"
                                : isDark ? "border-slate-600 hover:border-slate-500" : "border-gray-200 hover:border-gray-300"
                              }`}
                          >
                            {isVideo(image) ? (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <Play className="w-8 h-8 text-gray-600" />
                              </div>
                            ) : isAudio(image) ? (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-2xl">🎵</span>
                              </div>
                            ) : (
                              <Image
                                src={image}
                                alt={`${isRTL ? getCompanyNameAr(selectedCompany.id) : getCompanyName(selectedCompany.id)} ${idx + 1}`}
                                width={96}
                                height={96}
                                className="object-contain bg-white"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
