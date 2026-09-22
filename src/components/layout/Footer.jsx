import { MutedText } from "@components/common/MutedText";

export const Footer = () => {
    
    return(
        <footer className="flex flex-col gap-1 p-2 border-t-2 border-elevated-1 text-center">
            <MutedText>
                &copy; 2026-2027 Aksara Jaringa Karya X DIPS | The Class of X TKJ
            </MutedText>
            <MutedText className="text-sm">
                Website by simsav
            </MutedText>
        </footer>
    )
}