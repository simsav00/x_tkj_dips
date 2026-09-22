
export const CursorText = ({
    as: Component = "span",
    children,
    blinkTime = null,
    ...props
}) => {

    return(
        <Component aria-hidden="none" {...props}>
            {children}
            <span aria-hidden="true" style={{ animation: `blink ${blinkTime || "1s"} linear infinite` }}>_</span>
        </Component>
    )
}