import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-[100px]"
      style={{
        backgroundImage: "url('https://www.mak-bud.com.pl/wp-content/uploads/2021/11/Homepage_7_nowa-oferta_MAK-BUD_Wykonczenia-pod-klucz-Wroclaw_Budownictwo-szkieletowe_Eko-domki-na-zgloszenie.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#212121] opacity-90"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-[840px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-white font-bold text-[36px] md:text-[42px] leading-tight md:leading-[1.3] mb-5">
            Czy jesteś gotowy powierzyć nam remont mieszkania lub wykończenie
            wymarzonego domu?
          </h2>
          <p className="text-white text-base leading-[1.7] mb-5 max-w-2xl">
            Jeżeli zainteresowała Cię nasza oferta lub masz pytania odnośnie
            naszej działalności zapraszamy do kontaktu i niezobowiązującego
            spotkania.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-4 px-10 rounded-[4px] h-auto"
          >
            <Link href="/kontakt-firma-remontowa-budowlana-wroclaw">
              Skontaktuj się
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;