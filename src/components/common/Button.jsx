import clsx from "clsx";

export const Button = ({
    as: Component = "button",
    className = null,
    transparent = false,
    children,
    ...props
}) => {

    return(
        <Component {...props} className={clsx(`${className} flex justify-center items-center aspect-square p-2 ${!transparent && "rounded-full border-2 border-elevated-2"}`)}>
            {children}
        </Component>
    )
}