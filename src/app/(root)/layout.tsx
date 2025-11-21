import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";

export const metadata = {
    title: "Phexar UI (A Component Library)",
    description: "Developed by AnchalDevBytes",
};

export default function HomeLayout({children} : {children: React.ReactNode}) {
    return (
        <div className="flex flex-col bg-var(--background) text-var(--foreground)">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}