import clsx from "clsx"

export const MutedText = ({ props, as: Component = "span", className, subtler = false, children, }) => {

    return(
        <Component className={clsx(`${className} ${subtler ? "opacity-65" : "opacity-70"}`)} {...props}>
            {children}
        </Component>
    )
}