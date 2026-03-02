import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  themeMode: 'light' | 'dark';
  mobileNavOpen: boolean;
  toggleTheme: () => void;
  setMobileNavOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      themeMode: 'light',
      mobileNavOpen: false,
      toggleTheme: () => set((state) => ({ themeMode: state.themeMode === 'light' ? 'dark' : 'light' })),
      setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
    }),
    { name: 'ui-storage' }
  )
);

interface GalleryState {
  filter: string;
  search: string;
  sort: 'newest' | 'popular' | 'random';
  layout: 'grid' | 'masonry';
  selectedImageId: string | null;
  lightboxOpen: boolean;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
  setSort: (sort: 'newest' | 'popular' | 'random') => void;
  setLayout: (layout: 'grid' | 'masonry') => void;
  setSelectedImageId: (id: string | null) => void;
  setLightboxOpen: (open: boolean) => void;
}

export const useGalleryStore = create<GalleryState>()(
  persist(
    (set) => ({
      filter: 'All',
      search: '',
      sort: 'newest',
      layout: 'grid',
      selectedImageId: null,
      lightboxOpen: false,
      setFilter: (filter) => set({ filter }),
      setSearch: (search) => set({ search }),
      setSort: (sort) => set({ sort }),
      setLayout: (layout) => set({ layout }),
      setSelectedImageId: (id) => set({ selectedImageId: id }),
      setLightboxOpen: (open) => set({ lightboxOpen: open }),
    }),
    { name: 'gallery-storage' }
  )
);

interface ContentState {
  selectedAlbumId: string | null;
  contactSubmissions: any[];
  setSelectedAlbumId: (id: string | null) => void;
  addContactSubmission: (submission: any) => void;
}

export const useContentStore = create<ContentState>()((set) => ({
  selectedAlbumId: null,
  contactSubmissions: [],
  setSelectedAlbumId: (id) => set({ selectedAlbumId: id }),
  addContactSubmission: (submission) => set((state) => ({ contactSubmissions: [...state.contactSubmissions, submission] })),
}));
