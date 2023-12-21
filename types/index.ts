export {};

declare global {
  export interface Service {
    img: string;
    title: string;
    description: string;
  }
  export interface Specialist {
    name: string;
    description: string;
    img: Img;
    links: Links;
    skills: string[];
    historic: Historic[];
    id: string;
  }

  export interface Historic {
    start: string;
    end: string;
    local: string;
    course: string;
  }

  export interface Img {
    url: string;
    description: string;
  }

  export interface Links {
    instagram: string;
    whatsapp: string;
  }
}
