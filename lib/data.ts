import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import parfumImg from "@/public/parfum.jpg";
import ddddImg from "@/public/dddd.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaDesktop } from 'react-icons/fa';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Saya lulusan SMA",
    location: "Lokasi Sekolah Berada Di Cianjur",
    description:
      "Disekolah saya pernah menjadi ketua eskul futsal,dan aktif dalam perlombaan sekolah atau kegiatan sekolah",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "After lulus",
    location: "Pengalaman Kerja",
    description:
      "Saya pernah bekerja  menjadi barista selama 4 bulan dan sekarang saya bekerja dibidang cosmetic sebagai admin",
    icon: React.createElement(FaDesktop),
    date: "2022 - 2025",
  },
  {
    title: "Freelance",
    location: "Vidiografer dan Fotografer",
    description:
      " Bekerjaan Freelance saya sebagi vidio atau juga fotografer,saya sudah mendalami ini sejak masih sekolah sering membuat vidio cinematic atau foto dan pernah membuat iklan dan lainnya ",
    icon: React.createElement(FaReact),
    date: " - Freelance",
  },
] as const;

export const projectsData = [
  {
    title: "Avicenna Parfum",
    description:
      "Avicenna adalah Sincere yang memiliki aroma fruity floral untuk wanita, Pure Black yang citrusy aromatic dan woody untuk pria, serta L'Homme yang memiliki aroma citrus dan woody dengan sentuhan vanila untuk pria. .",
    tags: ["Yang wangi", "Wangi", "", "Dapat Memikat", "Wanita"],
    imageUrl: parfumImg,
  },
  {
    title: "Louis Vuitton",
    description:
      "Parfum ini memadukan aroma vanila manis dengan bunga-bungaan seperti orange blossom, mawar, dan magnolia, serta ada sentuhan rempah atau herbs yang khas dan aroma cokelat serta ambrette (musk mallow) di dasarnya. Keseluruhan aromanya terasa elegan, mewah, dan manis tapi tidak berlebihan",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: ddddImg,
  },
] as const;

export const skillsData = [
  "Bidang olahraga",
  "Vidiografer",
  "Otomotif",
  "Editor",
] as const;
