import Logo from "../Logo/Logo";
import F from "./img/Facebook.svg"
import T from "./img/Twitter.svg"
import L from "./img/LinkedIn.svg"
import G from "./img/Google.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mx-auto border-t bg-slate-100 py-2">
                    <div className="flex justify-around items-center gap-10">
                        <div className="text-sm max-w-[300px]">
                            <p className="font-semibold">Про нас</p>
                            <p>Ми пропонуємо пристрої, що полегшують життя та роблять його комфортнішим.</p>
                        </div>
                        <Logo/>
                        <div className="text-sm max-w-[300px] flex gap-2">
                            <ul className="flex">
                            <li>
                                <img src={L} className="w-[40px]"></img>
                            </li>
                            <li>
                                <img src={F} className="w-[40px]"></img>
                            </li>
                            <li>
                                <img src={T} className="w-[40px]"></img>
                            </li>
                            <li>
                                <img src={G} className="mt-[2px] ml-[5px] w-[22px]"></img>
                            </li>
                         </ul>
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                        <p className="py-2 text-sm text-center">2024 IoT | Roman Pylyptsiv</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
