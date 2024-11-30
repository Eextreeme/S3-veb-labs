import EmptyButton from "../Buttons/EmptyButton";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <>
            <header>
                <div className="container mx-auto border-b fixed bg-white">
                    <div className="flex justify-evenly items-center py-2">
                        <Logo />
                        <nav>
                            <EmptyButton name="Home" className="mr-1" href="/" />
                            <EmptyButton name="Catalog" className="mr-1" href="/catalog" />
                            <EmptyButton name="Cart" className="mr-1" href="/" />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
