import { Footer } from "./Footer";
import { Header } from "./Header";

import { Hero } from "@sections/Hero";
import { Members } from "@src/sections/Members";

export const Main = () => {

    return(
        <>
            <Header/>
                <main>        
                    <Hero/>
                    <Members/>
                </main>
            <Footer/>
        </>
    )
}