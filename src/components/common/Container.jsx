import clsx from "clsx"

export const Container = ({
    as: Component = "div",
    className,
    extended = null,
    props,
    children,
}) => {

    return(
        <Component className={clsx(`px-4 ${className} ${extended ? "max-w-384" : "max-w-344"} max-w-full `)} {...props}>
            {children}
        </Component>
    )
}