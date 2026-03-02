import { Routes, Route } from "react-router-dom";

import { Home } from "@/src/pages/Home";
import { Portfolio } from "@/src/pages/Portfolio";
import { Collections } from "@/src/pages/Collections";
import { AlbumDetails } from "@/src/pages/AlbumDetails";
import { About } from "@/src/pages/About";
import { Services } from "@/src/pages/Services";
import { Contact } from "@/src/pages/Contact";
import { Journal } from "@/src/pages/Journal";
import { PostDetail } from "@/src/pages/PostDetail";
import { FAQ } from "@/src/pages/FAQ";
import { NotFound } from "@/src/pages/NotFound";

import { DefaultLayout } from "@/src/layouts/Defaultlayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/album/:id" element={<AlbumDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<PostDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
