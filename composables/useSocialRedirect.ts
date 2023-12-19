function redirect(
  social:
    | "instagram"
    | "whatsapp1"
    | "facebook"
    | "tiktok"
    | "twitter"
    | "linkedin"
    | "whatsapp2"
) {
  let link = "";

  switch (social) {
    case "instagram":
      link = "https://instagram.com";
      break;
    case "whatsapp1":
      link =
        "https://api.whatsapp.com/send?phone=5515981550048&text=Ol%C3%A1!%0AGostaria%20de%20saber%20mais%20sobre%20como%20regularizar%20um%20im%C3%B3vel";
      break;
    case "whatsapp2":
      link =
        "https://api.whatsapp.com/send?phone=5511981486600&text=Ol%C3%A1!%0AGostaria%20de%20saber%20mais%20sobre%20como%20regularizar%20um%20im%C3%B3vel";
      break;
    case "facebook":
      link = "https://www.facebook.com/";
      break;
    case "tiktok":
      link = "https://www.tiktok.com/pt-BR/";
      break;
    case "twitter":
      link = "https://twitter.com/?lang=pt-br";
      break;
    case "linkedin":
      link = "https://www.linkedin.com";
      break;
  }
  if (link.length) window.open(link, "_blank");
}
export const useSocialRedirect = () => {
  return { redirect };
};
