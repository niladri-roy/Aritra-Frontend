import React from 'react'
import './Blogs.css'
import useIntersectionObserver from '../../utils/IntersectionObserver'
import leftObserver from '../../utils/LeftObserver'

import DragonFruit from '../../assets/blog-project-images/Dragon-Fruit.jpg'
import RamprashadSen from '../../assets/blog-project-images/ramprashad-sen.jpg'
import LaxmiPuja from '../../assets/blog-project-images/laxmi-puja.jpg'
import DhanaLaxmi from '../../assets/blog-project-images/dhana-laxmi.jpg'
import DhanaKendra from '../../assets/blog-project-images/dhana-kendra.jpg'
import Annapurna from '../../assets/blog-project-images/annapurna.jpg'
import SisterNivedita from '../../assets/blog-project-images/Sister-Nivedita.jpg'
import Nilkonthi from '../../assets/blog-project-images/Nilkonthi.jpg'
import ChaatPujo from '../../assets/blog-project-images/chaat-pujo.jpeg'
import GoatAstami from '../../assets/blog-project-images/goat-astami.jpeg'
import RassPurnima from '../../assets/blog-project-images/rass-purnima.jpg'
import Hemonto from '../../assets/blog-project-images/hemonto.jpg'
import Silchar from '../../assets/blog-project-images/Silchar.jpg'

const Blogs = () => {

  useIntersectionObserver()
  leftObserver()

  const allBlogs = [
    { img: DragonFruit ,title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-7-20'},
    { img: RamprashadSen ,title: "ড্সাধক রামপ্রসাদের গানে হিন্দু ধর্মের 'যত মত তত পথ' , লিখেছেন কল্যাণ গৌতম এবং সৌকালিন মাঝি । ", href: "https://gatidainik.in/23-09-22/epaper.html", date: '2022-9-23'},
    { img: LaxmiPuja ,title: "Laxmi Puja : শ্রী, লক্ষ্মী, ধান্যলক্ষ্মী, ধনলক্ষ্মী এবং বাণিজ্য লক্ষ্মী লিখেছেন ড. কল্যাণ চক্রবর্তী এবং শ্রী অরিত্র ঘোষ দস্তিদার।', লিখেছেন কল্যাণ গৌতম এবং সৌকালিন মাঝি । ", href: "https://deshersamay.com/laxmi-puja-শ্রী-লক্ষ্মী-ধান্যলক্ষ/", date: '2022-9-23'},
    { img: DhanaLaxmi ,title: "শ্রী থেকে লক্ষ্মীর রূপান্তর; ধান্যলক্ষ্মী, বাণিজ্যলক্ষ্মী হয়ে লক্ষ্মী-অলক্ষ্মী মেলবন্ধন।  -   অরিত্র ঘোষ দস্তিদার এবং ড. কল্যাণ চক্রবর্তী ", href: "http://ritambangla.com/editorial/transformation-of-sri-to-lakshmi-dhanya-lakshmi-banijya-lakshmi-through-lakshmi-alakshmi-melbandhan/", date: '2022-10-9'},
    { img: DhanaKendra ,title: "ধান-কেন্দ্রিক কৃষি সংস্কৃতির চরম উৎকর্ষতা ধান্যলক্ষ্মীর আরাধনায় - অবন্তিকা গোস্বামী ও অরিত্র ঘোষ দস্তিদার", href: "http://ritambangla.com/religion/the-ultimate-excellence-of-paddy-centered-agricultural-culture-is-the-worship-of-dhanya-lakshmi/", date: '2022-10-9'},
    { img: Annapurna ,title: "Laxmi Puja: ধান্যলক্ষ্মীর আরাধনায় রয়েছে চিরন্তন অন্নপূর্ণার রূপ। লিখছেন :অবন্তিকা গোস্বামী ও অরিত্র ঘোষ দস্তিদার ", href: " https://deshersamay.com/laxmi-puja-ধান্যলক্ষ্মীর-আরাধনায়/", date: '2022-10-9'},
    { img: SisterNivedita ,title: "Sister Nivedita:বিদেশিনী থেকে ভগিনী হয়ে ওঠার এক অনবদ্য গল্প লিখলেন- অরিত্র ঘোষ দস্তিদার ও ড: কল্যাণ চক্রবর্তী ", href: " https://deshersamay.com/sister-niveditaবিদেশিনী-থেকে-ভগিনী-হয়ে/", date: '2022-10-14'},
    { img: Nilkonthi ,title: "নীলকন্ঠ পাখির সঙ্গে শিব-দুর্গার কী সম্পর্ক লিখলেন কল্যাণ চক্রবর্তী এবং অরিত্র ঘোষ দস্তিদার।", href: "https://sangbadkolkata.com/%e0%a6%a8%e0%a7%80%e0%a6%b2%e0%a6%95%e0%a6%a8%e0%a7%8d%e0%a6%a0-%e0%a6%aa%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b0-%e0%a6%96%e0%a7%8b%e0%a6%81%e0%a6%9c%e0%a7%87/", date: '2022-10-16'},
    { img: Nilkonthi ,title: "নীলকন্ঠ পাখির খোঁজে", href: "https://sangbadkolkata.com/%e0%a6%a8%e0%a7%80%e0%a6%b2%e0%a6%95%e0%a6%a8%e0%a7%8d%e0%a6%a0-%e0%a6%aa%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b0-%e0%a6%96%e0%a7%8b%e0%a6%81%e0%a6%9c%e0%a7%87/", date: '2022-10-16'},
    { img: ChaatPujo ,title: "ছট্পূজা এবং ছটি-মা সূর্যের উদয়-অস্তের তাৎপর্যে মূর্তি-বিহীন উৎসব - অরিত্র ঘোষ দস্তিদার এবং কল্যাণ চক্রবর্তী -", href: "http://ritambangla.com/religion/chatpuja-and-chatti-ma-are-festival-without-idols-to-mark-the-rising-and-setting-of-the-sun/", date: '2022-10-30'},
    { img: GoatAstami ,title: "গোষ্ঠাষ্টমী বা গো-মাতা পূজনে বাঙালিরও সমান উত্তরাধিকার - ড. কল্যাণ চক্রবর্তী এবং শ্রী অরিত্র ঘোষ দস্তিদার - ", href: "http://ritambangla.com/editorial/bengali-revolutionaries-and-gita-on-the-gallows-2/", date: '2022-11-1'},
    { img: RassPurnima ,title: "মানসমঞ্চে রাস-পূর্ণিমা  - অরিত্র ঘোষ দস্তিদার এবং কল্যাণ চক্রবর্তী -", href: "http://ritambangla.com/religion/ras-purnima-at-mansamanche/", date: '2022-11-8'},
    { img: Hemonto ,title: "Story : হেমন্তের মৃত্যুচেতনা : লিখছেন অরিত্র ঘোষ দস্তিদার ও কল্যাণ চক্রবর্তী ", href: " https://deshersamay.com/story-হেমন্তের-মৃত্যুচেতনা-ল/", date: '2022-11-10'},
    { img: Silchar ,title: "শিলচর, অসম থেকে প্রকাশিত বহুল প্রচারিত সংবাদপত্র 'গতি দৈনিক' পত্রিকায় প্রকাশিত অরিত্র ঘোষ দস্তিদার এবং ড. কল্যাণ চক্রবর্তীর প্রবন্ধ গোষ্ঠাষ্টমী বা গোপাষ্টমীর কথা। ১৩ ই নভেম্বর, ২০২২, চতুর্থ পাতা।", href: "https://gatidainik.in/13-11-22/epaper.html", date: '2022-11-13'},
  ]


  return (
    <div className="blogs">
      <div className="container content">
        <div className="blog-grid-container">
          {allBlogs.map((blog, index) => {
            return (
              <div className="blog-item left-hidden" key={index}>
                <div className="blog-img">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="blog-description">
                  <h1>
                    <div><a href={blog.href} target='_blank' rel='noopener noreferrer'>{blog.title}</a></div>
                  </h1>
                  <p>{blog.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Blogs
