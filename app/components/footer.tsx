const Footer = () => {
    return (
        <div className="bg-white border-t">
            <div className="mx-auto py-10">
                <h2 className="text-center  text-black">
                    &copy; {new Date().getFullYear()}
                </h2>
            </div>
        </div>
    );
};

export default Footer;
