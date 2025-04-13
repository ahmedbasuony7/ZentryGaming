import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import ButtonNav from "./ButtonNav";
import { FaLocationArrow } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const navItems: string[] = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar: React.FC = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const audioElementRef = useRef<HTMLAudioElement | null>(null);
    const navContainerRef = useRef<HTMLDivElement | null>(null);

    const { y: currentScrollY } = useWindowScroll();

    const toggleAudioIndicator = () => {
        if (audioElementRef.current) {
            if (!isAudioPlaying) {
                audioElementRef.current
                    .play()
                    .then(() => setIsAudioPlaying(true))
                    .catch(console.error);
            } else {
                audioElementRef.current.pause();
                setIsAudioPlaying(false);
            }
        }
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (!navContainerRef.current) return;

        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        if (navContainerRef.current) {
            gsap.to(navContainerRef.current, {
                y: isNavVisible ? 0 : -100,
                opacity: isNavVisible ? 1 : 0,
                duration: 0.2,
            });
        }
    }, [isNavVisible]);

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 pb-10 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <div className="relative mt-10 mr-10">
                            <FaLocationArrow className="text-blue-50 scale-[1.7] self-end absolute left-1 bottom-0" style={{ margin: "40px 0px 20px 0px" }} />
                            <FaLocationArrow className="text-blue-50 scale-[1.7] self-end absolute right-0.5 bottom-0.5 left-0.5" style={{ rotate: "180deg", margin: "0px 0px 0px 0px" }} />
                        </div>

                        <div className="flex items-center gap-3">
                            <ButtonNav id="product-button" text="Products" rightIcon={<TiLocationArrow />} className="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
                            <ButtonNav id="product-button" text="TWITEPAPER" className="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
                        </div>
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a key={index} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button onClick={toggleAudioIndicator} className="ml-10 flex items-center  justify-center border-none  space-x-0.5">
                        <HiDotsHorizontal  className="text-blue-50"  />
                            <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop autoPlay   />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={clsx("indicator-line", { active: isIndicatorActive })} style={{ animationDelay: `${bar * 0.1}s` }} />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;
