import SocialButton from "../Buttons/SocialButton";
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mx-auto border-t bg-slate-100 py-2">
                    <div className="flex justify-around items-center gap-10">
                        <div className="text-sm max-w-[300px]">
                            <p className="font-semibold">Branding Stuff</p>
                            <p>Some kind of description that dckjsbck jadckjsbckjad kjsb ckjad ckjsbck jadckjsbck jadckjsb ckja</p>
                        </div>
                        <Logo />
                        <div className="text-sm max-w-[300px] flex gap-2">
                            <SocialButton bgColor="bg-red-400"/>
                            <SocialButton bgColor="bg-green-400"/>
                            <SocialButton bgColor="bg-blue-400"/>
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                        <p className="py-2 text-sm text-center">2024 IoT | denys melnyk</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
