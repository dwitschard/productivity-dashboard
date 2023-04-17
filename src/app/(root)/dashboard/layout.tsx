export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            {/* TODO Add Auth Component to only render something here?*/}
            <div>Hi there from Dashboard Layout</div>
            {children}
        </>
    )
}
