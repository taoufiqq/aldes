"use client";

import Link from "next/link";
import logo from "../public/pics/aldes.png";
import logoFooter from "../public/pics/logo-footer.jpg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import * as React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import { Modal } from "./Modal";
import { WorkshopsModal } from "./WorkshopsModal";
import { ServiceModal } from "./ServiceModal";

const images = [
  {
    src: "/pics/Slider4.jpeg",
    alt: "Image 1",
    title: "معًا، دعونا نصنع تأثيرًا إيجابيًا",
    description: "نحن ملتزمون بإحداث فرق في مجتمعنا.",
  },
  {
    src: "/pics/Slider2.jpeg",
    alt: "Image 2",
    title: "مشاريعنا",
    description: "النقل المدرسي، للجميع",
  },
  {
    src: "/pics/Slider5.jpeg",
    alt: "Image 3",
    title: "فريقنا",
    description: "أناس متحمسون يعملون من أجل مستقبل أفضل.",
  },
  {
    src: "/pics/Slider3.jpeg",
    alt: "Image 3",
    title: "مقر الجمعية",
    description: "مقر مجهز بأحدث التجهيزات",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<{
    name: string;
    username: string;
    body: string;
    img: string;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    images: string[];
  } | null>(null);
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<{
    title: string;
    description: string;
    images: string[];
  } | null>(null);

  const NavLinks = ({ mobile = false }) => (
    <>
      <li>
        <Link
          href="#"
          className={`nav-link ${mobile ? "mobile-nav-link" : "pl-6"}`}
        >
          الرئيسية
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`nav-link ${mobile ? "mobile-nav-link" : ""}`}
        >
          من نحن
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`nav-link ${mobile ? "mobile-nav-link" : ""}`}
        >
          خدماتنا
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`nav-link ${mobile ? "mobile-nav-link" : ""}`}
        >
          للاتصال
        </Link>
      </li>
    </>
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const reviews = [
    {
      name: "سعيد إزم",
      username: "Said Izem",
      body: "رئيس الجمعية",
      img: "/pics/aldes.png",
    },
    {
      name: "رشيد باق",
      username: "Rachid Baq",
      body: "مدير الجمعية",
      img: "/pics/aldes.png",
    },
    {
      name: "الحسين بسموم",
      username: "elhossain bismoum",
      body: "",
      img: "/pics/aldes.png",
    },
    {
      name: "أوبركة",
      username: "Ouberka",
      body: "أمين المال",
      img: "/pics/aldes.png",
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({
    img,
    name,
    username,
    body,
    onClick,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
    onClick: () => void;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
        onClick={onClick}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  const workshops = [
    {
      title: "ورشة تعليم الخياطة",
      description:
        "تقدم ورشة تعليم الخياطة فرصة للنساء والفتيات لتعلم مهارات الخياطة الأساسية والمتقدمة. يشمل البرنامج دروسًا في تصميم الأنماط، واختيار الأقمشة، وتقنيات الخياطة المختلفة. يهدف هذا البرنامج إلى تمكين المشاركات اقتصاديًا من خلال تزويدهن بمهارات مه��ية قيمة.",
      images: [
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
      ],
    },
    {
      title: "ورشة حفظ القرآن الكريم",
      description:
        "تهدف ورشة حفظ القرآن الكريم إلى تعليم وتحفيظ القرآن الكريم للأطفال والكبار على حد سواء. يقدم البرنامج دروسًا في التجويد والتفسير، مع التركيز على فهم معاني الآيات وتطبيقها في الحياة اليومية. تساهم هذه الورشة في تعزيز القيم الروحية والأخلاقية في المجتمع.",
      images: [
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
      ],
    },
    {
      title: "ورشة الإعلاميات",
      description:
        "تقدم ورشة الإعلاميات تدريبًا شاملاً على استخدام الحاسوب وتكنولوجيا المعلومات. يغطي البرنامج مواضيع مثل استخدام برامج Microsoft Office، وأساسيات البرمجة، وتصميم المواقع الإلكترونية. تهدف هذه الورشة إلى سد الفجوة الرقمية وتمكين المشاركين من المنافسة في سوق العمل الحديث.",
      images: [
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
      ],
    },
  ];
  const services = [
    {
      title: "إستخلاص فواتير الماء",
      description:
        "نقدم خدمة استخلاص فواتير الماء لتسهيل عملية الدفع على أفراد المجتمع. نعمل كوسيط بين السكان والمكتب الوطني للكهرباء والماء الصالح للشرب، مما يوفر الوقت والجهد على الجميع. تساعد هذه الخدمة في ضمان دفع الفواتير في الوقت المحدد وتجنب انقطاع الخدمة.",
      images: [
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
      ],
    },
    {
      title: "النقل المدرسي",
      description:
        "نوفر خدمة النقل المدرسي لضمان وصول الطلاب إلى مدارسهم بأمان وفي الوقت المحدد. تغطي خدمتنا المناطق النائية والقرى المجاورة، مما يساعد في الحد من التسرب المدرسي ويشجع على التعليم. نستخدم حافلات آمنة ومريحة مع سائقين مدربين لضمان سلامة الأطفال.",
      images: [
        "/pics/Slider2.jpeg",
        "/pics/Slider2.jpeg",
        "/pics/Slider2.jpeg",
        "/pics/Slider2.jpeg",
      ],
    },
    {
      title: "جمع النفايات",
      description:
        "نقوم بتنظيم حملات منتظمة لجمع النفايات في المنطقة للحفاظ على نظافة البيئة وجمالها. نعمل مع المتطوعين والسكان المحليين لجمع وفرز النفايات، مع التركيز على إعادة التدوير حيثما أمكن. هذه المبادرة تساعد في تعزيز الوعي البيئي وخلق مجتمع أكثر استدامة.",
      images: [
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
        "/pics/Slider3.jpeg",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="bg-white shadow-sm sticky top-0 z-10 transition-all duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Link
              href="/"
              className="flex items-center justify-center group"
              data-aos="zoom-out"
            >
              <Image
                src={logo}
                alt="جمعية البويبات للتنمية والتربية والتضامن"
                width={80}
                height={80}
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "w-12 h-12" : "w-16 h-16 sm:w-20 sm:h-20"
                }`}
              />
              <span
                className={`text-[#0000FF] font-bold transition-all duration-300 group-hover:text-[#4CAF50] rtl:mr-2 ltr:ml-2 ${
                  isScrolled
                    ? "text-sm sm:text-base"
                    : "text-base sm:text-lg md:text-xl lg:text-2xl"
                }`}
              >
                جمعية البويبات للتنمية والتربية والتضامن
              </span>
            </Link>
          </div>
          <nav className="hidden lg:block" data-aos="zoom-in">
            <ul className="flex space-x-6 rtl:space-x-reverse">
              <NavLinks />
            </ul>
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#4CAF50] hover:text-[#0000FF]"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <ul className="space-y-4">
                  <NavLinks mobile />
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header> */}
      <header className="bg-white shadow-sm sticky top-0 z-10 transition-all duration-300">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Link
        href="/"
        className="flex items-center justify-center group"
        data-aos="zoom-out"
      >
        <Image
          src={logo}
          alt="جمعية البويبات للتنمية والتربية والتضامن"
          width={80}
          height={80}
          className={`object-contain transition-all duration-300 ${
            isScrolled ? "w-12 h-12" : "w-16 h-16 sm:w-20 sm:h-20"
          }`}
        />
        <span
          className={`text-[#0000FF] font-bold transition-all duration-300 group-hover:text-[#4CAF50] rtl:mr-2 ltr:ml-2 ${
            isScrolled
              ? "text-sm sm:text-base"
              : "text-base sm:text-lg md:text-xl lg:text-2xl"
          }`}
        >
          جمعية البويبات للتنمية والتربية والتضامن
        </span>
      </Link>
    </div>

    {/* Main Navigation */}
    <nav className="hidden lg:block" data-aos="zoom-in">
      <ul className="flex space-x-6 rtl:space-x-reverse">
        <NavLinks />
      </ul>
    </nav>

    {/* Mobile Menu Trigger */}
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-[#4CAF50] hover:text-[#0000FF]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <ul className="space-y-4">
            <NavLinks mobile />
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
</header>


      <main className="flex-grow">
        <section className="py-0">
          <Carousel className="relative w-full h-96">
            {" "}
            {/* Define a height for the carousel */}
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className={`${
                    activeIndex === index ? "block" : "hidden"
                  } transition-opacity duration-500`}
                >
                  <Card className="border-0">
                    <CardContent className="relative p-0 h-full">
                      {/* Ensure this div has a height and relative positioning */}
                      <div className="relative w-full h-96">
                        {" "}
                        {/* Set a height for the image container */}
                        <Image
                          src={image.src}
                          alt={image.alt}
                          layout="fill" /* Use fill layout */
                          objectFit="cover" /* Cover the entire parent container */
                          className="object-cover object-center" /* Ensure the image covers and centers */
                        />
                      </div>

                      {/* Overlay content */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-3xl md:text-4xl sm:text-sm font-bold mb-4 text-center">
                          {image.title}
                        </h2>
                        <p className="text-lg md:text-xl sm:text-sm text-center max-w-2xl">
                          {image.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Carousel navigation buttons */}
            <CarouselPrevious
              className="left-4"
              onClick={() =>
                setActiveIndex(
                  (prevIndex) => (prevIndex - 1 + images.length) % images.length
                )
              }
            />
            <CarouselNext
              className="right-4"
              onClick={() =>
                setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
              }
            />
          </Carousel>
        </section>

        <section className="py-16 bg-gradient-to-b from-[#4CAF50]/10 to-white">
          <div className="container mx-auto px-4">
            <h2
              className="section-title-who mb-8 text-center text-3xl font-bold"
              data-aos="fade-up"
            >
              من نحن
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Section */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-[#4CAF50] overflow-y-auto max-h-[60vh] lg:max-h-[50vh] scrollbar-thin scrollbar-thumb-[#4CAF50] scrollbar-track-gray-200">
                <div className="text-lg leading-relaxed" data-aos="fade-up">
                  <section className="details">
                    <p>
                      <strong>نوع المؤسسة :</strong> جمعية تنموية
                    </p>
                    <p>
                      <strong>الاســـــــــــــم :</strong> جمعية البويبات
                      للتنمية والتربية والتضامن
                    </p>
                    <p>
                      <strong>عنوان المقر الاجتماعي :</strong> دوار البويبات،
                      جماعة إنشادن، قيادة بلفاع، دائرة بلفاع ماسة، إقليم اشتوكة
                      آيت باها، الرمز البريدي: 80272
                    </p>
                    <p>
                      <strong>الهاتف :</strong> 0612013454
                    </p>
                    <p>
                      <strong>تاريخ إنشاء المؤسسة :</strong> 29-08-1999
                    </p>
                  </section>
                  <section className="objectives mt-6">
                    <h2 className="text-xl font-bold mb-4">أهداف الجمعية</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        تجنيد الموارد البشرية للإسهام في التنمية الثقافية،
                        الاجتماعية، والاقتصادية، والمحافظة على البيئة القروية.
                      </li>
                      <li>تعزيز البنية التحتية للدوار.</li>
                      <li>العناية بالمرافق الاجتماعية للقرية.</li>
                      <li>تشجيع وتأطير الأنشطة الثقافية، الرياضية، والفنية.</li>
                      <li>
                        توطيد علاقات التضامن بين الأعضاء لتقديم الدعم المعنوي
                        والمادي.
                      </li>
                      <li>
                        إنجاز مشاريع لمحاربة الأمية والتربية غير النظامية.
                      </li>
                      <li>الاهتمام بالبيئة.</li>
                      <li>الاهتمام بالمعاقين وذوي الاحتياجات الخاصة.</li>
                    </ul>
                  </section>
                  <section className="fields mt-6">
                    <h2 className="text-xl font-bold mb-4">
                      مجالات الفعل والتدخل
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>التنمية</li>
                      <li>الاهتمام بالطفل والمرأة</li>
                      <li>البيئة</li>
                      <li>التربية ومحاربة الأمية</li>
                      <li>المجال الثقافي والتكوين</li>
                      <li>النشاط الرياضي</li>
                      <li>الأعمال الاجتماعية</li>
                      <li>الفلاحة</li>
                    </ul>
                  </section>
                </div>
              </div>

              {/* Right Section */}
              <div
                className="flex justify-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative flex flex-col h-[400px] w-full max-w-lg items-center  border-r-4 border-[#4CAF50] justify-center overflow-hidden rounded-lg  bg-background md:h-[300px] lg:h-[460px] shadow-lg">
                  <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                      <ReviewCard
                        key={review.name}
                        {...review}
                        onClick={() => {
                          setSelectedReview(review);
                          setIsModalOpen(true);
                        }}
                      />
                    ))}
                  </Marquee>
                  <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                      <ReviewCard
                        key={review.name}
                        {...review}
                        onClick={() => {
                          setSelectedReview(review);
                          setIsModalOpen(true);
                        }}
                      />
                    ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16  bg-gradient-to-b from-[#ffd68b57]/10 to-white mb-8">
          <div className="container mx-auto px-4">
            <h2
              className="section-title-services mb-8 text-center text-3xl font-bold"
              data-aos="fade-up"
            >
              خدماتنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow border-r-4 border-[#4CAF50]"
                >
                  <h3 className="text-xl font-semibold mb-4" data-aos="fade-up">
                    {service.title}
                  </h3>
                  <p className="mb-4" data-aos="fade-up">
                    {service.description.slice(0, 100)}...
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedService(service);
                      setIsServiceModalOpen(true);
                    }}
                    className="bg-[#4CAF50] text-white hover:bg-[#45a049] transition-colors"
                    data-aos="fade-up"
                  >
                    عرض المزيد
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-b from-[#4CAF50]/10 to-white mb-8">
          <div className="container mx-auto px-4">
            <h2
              className="section-title-workshop mb-8 text-center text-3xl font-bold"
              data-aos="fade-up"
            >
              الورشات
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshops.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow border-l-4 border-[#f4a460;]"
                >
                  <h3 className="text-xl font-semibold mb-4" data-aos="fade-up">
                    {service.title}
                  </h3>
                  <p className="mb-4" data-aos="fade-up">
                    {service.description.slice(0, 100)}...
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedWorkshop(service);
                      setIsWorkshopModalOpen(true);
                    }}
                    className="bg-[#f4a460;] text-white hover:bg-[#f1bd91] transition-colors"
                    data-aos="fade-up"
                  >
                    عرض المزيد
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo et informations */}
            <div className="flex flex-col items-center md:items-start">
              <Image
                data-aos="fade-up"
                src={logoFooter}
                alt="جمعية البويبات للتنمية والتربية والتضامن"
                width={60}
                height={60}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2" data-aos="fade-up">
                A.L.D.E.S
              </h3>
              <p data-aos="fade-up">
                <strong>عنوان المقر الاجتماعي :</strong> دوار البويبات، جماعة
                إنشادن، قيادة بلفاع، دائرة بلفاع ماسة، إقليم اشتوكة آيت باها،
                الرمز البريدي: 80272
              </p>
              <p data-aos="fade-up">
                <strong>الهاتف :</strong> 0612013454
              </p>
            </div>

            {/* Liens rapides */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4" data-aos="fade-up">
                روابط سريعة
              </h3>
              <ul className="space-y-2" data-aos="fade-up">
                <NavLinks />
              </ul>
            </div>

            {/* Contact et réseaux sociaux */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4" data-aos="fade-up">
                تواصل معنا
              </h3>
              <p data-aos="fade-up">
                <strong> البريد الإلكتروني :</strong>
                aldes@gmail.com
              </p>
              <p data-aos="fade-up">
                <strong>الهاتف :</strong> 0612013454
              </p>
              <div className="flex justify-center md:justify-end space-x-4 space-x-reverse">
                <a
                  data-aos="fade-up"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
                </a>
                <a
                  data-aos="fade-up"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                </a>
                <a
                  data-aos="fade-up"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <a
                  data-aos="fade-up"
                  href="mailto:aldes@gmail.com"
                  aria-label="Email"
                  className="text-white hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Droits d'auteur */}
          <div className="mt-8 text-center border-t border-white pt-4">
            <p className="text-sm">
              &copy; 2024 جمعية البويبات للتنمية والتربية والتضامن، جميع الحقوق
              محفوظة.
            </p>
          </div>
        </div>
      </footer>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        review={selectedReview}
      />
      <ServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        service={selectedService!}
      />
      <WorkshopsModal
        isOpen={isWorkshopModalOpen}
        onClose={() => setIsWorkshopModalOpen(false)}
        workshop={selectedWorkshop!}
      />
    </div>
  );
}
