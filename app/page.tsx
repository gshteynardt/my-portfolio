import Header from '@/components/header';
import AboutMe from '@/components/about-me';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ScanLines from '@/components/ui/scan-lines';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black text-gray-100">
            <ScanLines />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
}
