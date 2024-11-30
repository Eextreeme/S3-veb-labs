import heroIMG from "./img/hero.png"
const HeroSection = () => {
    return <section className="flex justify-center gap-[60px] text-sm mb-4">
        <div className="w-[px] h-[300px] "><img src={heroIMG} alt=""></img></div>

        <div className="max-w-[400px]">
            <h1 className="text-2xl font-bold mb-2">Про нас</h1>
            <p>Ми спеціалізуємося на інноваційних рішеннях, що допомагають вам досягати нових висот. Наша команда працює для створення продуктів, які відповідають вашим потребам і перевищують очікування</p>
        </div>
    </section>
}

export default HeroSection;
