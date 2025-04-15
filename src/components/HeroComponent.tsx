const HeroComponent = ({ title = "This is a title" } : { title? : string }) => {
    return(
        <div className="container mx-auto">
            <h1 className="mainHeadings text-8xl font-black text-[var(--color-foreground)]">{title}</h1>
        </div>
    )
}

export default HeroComponent;