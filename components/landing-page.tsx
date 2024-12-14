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
// import Marquee from "@/components/magicui/marquee"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmountstyle={{ height: "70vh" }}
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = ({ mobile = false }) => (
    <>
      <li>
        <Link
          href="#"
          className={`nav-link ${mobile ? "mobile-nav-link" : ""}`}
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
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
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

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link
              className="flex items-center justify-center group"
              href="#"
              data-aos="zoom-out"
            >
              <Image
                src={logo}
                alt="جمعية البويبات للتنمية والتربية والتضامن"
                width={80}
                height={80}
                className="object-contain sm:w-6 md:w-16 lg:w-20"
              />
              <span className="text-[#0000FF] lg:text-2xl md:text-xl sm:text-xs font-bold transition-all duration-300 group-hover:ml-3 group-hover:text-xl">
                {" "}
                جمعية البويبات للتنمية والتربية والتضامن
              </span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6" data-aos="zoom-in">
              <NavLinks />
            </ul>
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#4CAF50] hover:text-[#0000FF]"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
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
      </header>

      <main className="flex-grow">
        <section className="py-0">
          <Carousel className="relative w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className={`${
                    activeIndex === index ? "block" : "hidden"
                  } transition-opacity duration-500`}
                >
                  <Card className="border-0">
                    <CardContent className="relative p-0 aspect-[2/1] h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
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
              className="section-title mb-12 text-center text-2xl md:text-3xl font-semibold"
              data-aos="fade-up"
            >
              من نحن
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* <!-- Left Section --> */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-[#4CAF50] overflow-y-auto max-h-[70vh] lg:max-h-[80vh] scrollbar-thin scrollbar-thumb-[#4CAF50] scrollbar-track-gray-200">
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
                      <li>التنشيط الرياضي</li>
                      <li>الأعمال الاجتماعية</li>
                      <li>الفلاحة</li>
                    </ul>
                  </section>
                </div>
              </div>

              {/* <!-- Right Section --> */}
              <div className="flex justify-center">
                <div className="relative flex flex-col h-[400px] w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background md:h-[500px] lg:h-[600px] shadow-lg">
                  <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                      <ReviewCard key={review.username} {...review} />
                    ))}
                  </Marquee>
                  <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                      <ReviewCard key={review.username} {...review} />
                    ))}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title" data-aos="fade-up">
              خدماتنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-[#4CAF50]">
                <h3 className="text-xl font-semibold mb-4">Service 1</h3>
                <p>
                  Description du premier service ou activité principale de votre
                  entreprise sociale.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-[#4CAF50]">
                <h3 className="text-xl font-semibold mb-4">Service 2</h3>
                <p>
                  Description du deuxième service ou activité principale de
                  votre entreprise sociale.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-r-4 border-[#4CAF50]">
                <h3 className="text-xl font-semibold mb-4">Service 3</h3>
                <p>
                  Description du troisième service ou activité principale de
                  votre entreprise sociale.
                </p>
              </div>
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
                src={logoFooter}
                alt="جمعية البويبات للتنمية والتربية والتضامن"
                width={60}
                height={60}
                className="object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">A.L.D.E.S</h3>
              <p>
                <strong>عنوان المقر الاجتماعي :</strong> دوار البويبات، جماعة
                إنشادن، قيادة بلفاع، دائرة بلفاع ماسة، إقليم اشتوكة آيت باها،
                الرمز البريدي: 80272
              </p>
              <p>
                <strong>الهاتف :</strong> 0612013454
              </p>
            </div>

            {/* Liens rapides */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <NavLinks />
              </ul>
            </div>

            {/* Contact et réseaux sociaux */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <p>
                <strong> البريد الإلكتروني :</strong>
                aldes@gmail.com
              </p>
              <p>
                <strong>الهاتف :</strong> 0612013454
              </p>
              <div className="flex justify-center md:justify-end space-x-4 space-x-reverse">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <a
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
    </div>
  );
}
