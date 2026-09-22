import clsx from "clsx";

import { Container } from "@components/common/Container"
import { CursorText } from "@components/common/CursorText";
import { MutedText } from "@components/common/MutedText";
import logo from "@assets/img/logo/xtkjlogo.webp";
import school from "@assets/img/logo/school.webp";
import heroVideo from "@assets/video/bg/bg-hero.mp4"
import { RoundedButton } from "@components/common/RoundedButton";
import { TagAlt } from "@src/components/common/TagAlt";

export const Hero = () => {

    return(
        <Container as="section" id="home" className="min-h-dvh flex items-center justify-center relative">
            <video src={heroVideo} muted autoPlay loop 
                   className="opacity-35 w-full h-full object-cover absolute top-0"
                   onCanPlay={(e) => e.currentTarget.playbackRate = .5}
            ></video>
            <div className="flex flex-col gap-4 items-center text-center absolute">
                <img src={logo} alt="Logo X TKJ"
                    draggable="false"
                    className="rounded-full border-4 border-elevated-2 w-48"
                />

                <CursorText as="h1" blinkTime=".75s" className="text-xl xs:text-3xl break font-secondary">
                    AKSARA JARINGA KARYA X DIPS
                </CursorText>
                
                <MutedText as="p" className="max-w-[48ch] w-full">
                    Selamat datang di website resmi kelas kami. Tempat menyimpan cerita, kenangan, jadwal, dan kebersamaan satu kelas.
                </MutedText>

                <TagAlt defaultStyles={false} className="border-white bg-white text-black">
                    <img src={school} className="w-6 h-6 rounded-full" alt="Smk diponegoro 1 Logo" />
                    <MutedText>Part of</MutedText> SMK DIPONEGORO 1 JAKARTA
                </TagAlt>

                <RoundedButton as="a" href="#anggota" className="animate-bounce flex-col mt-12" transparent={true}>
                    <svg className="w-8" fill="#fff" viewBox="0 0 30.727 30.727"><g><path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/></g></svg>                
                </RoundedButton>    
            </div>
        </Container>
    )
}