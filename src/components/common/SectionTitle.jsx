import clsx from "clsx"

export const SectionTitle = ({
    as: Component = "h2",
    defaultConfig = true,
    className,
    children,
    ...props
}) => {

    return(
        <Component {...props} className={clsx(`${className} ${defaultConfig && "text-2xl border-b-2 border-elevated-1 font-secondary w-max px-2 pb-1"} `)}>
            {children}
        </Component>
    )
}