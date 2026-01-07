
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <main className='min-h-[70vh]'>{children}</main>
        </>
    );
};

export default MainLayout;