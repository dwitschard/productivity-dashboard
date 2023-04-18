export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div>Hi there from Dashboard Layout</div>
            {children}
        </>
    )
}
