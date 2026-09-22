import clsx from "clsx"

export const TagAlt = ({
    as: Component = "span",
    className = null,
    defaultStyles = true,
    children,
    ...props
}) => {

    return(
        <Component {...props} className={clsx(`${className} flex gap-2 p-2 border-2 rounded-xl ${defaultStyles && "bg-elevated-2 border-elevated-3"}`)}>
            {children}
        </Component>
    )
}