export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <footer>
                <nav></nav>
            </footer>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}
