export default function LoginRegistration() {
    return (
        <section className="py-12 flex items-center justify-around gap-10 flex-col">
            <div className="row">
                <div className="row flex items-center justify-center">
                    <h2 className="section-heading">My Account</h2>
                </div>
            </div>
            <div className="row grid grid-cols-2 gap-10 items-start">
                <div className="py-8 px-8 flex items-center justify-around flex-col gap-4">
                    <div className="w-full flex items-center justify-around">
                        <h4 className="text-3xl font-semibold">Login</h4>
                    </div>
                    <div className="w-full flex items-center justify-around flex-col gap-6">
                        <div className="form-group">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-primary btn-md w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="py-8 px-8 flex items-center justify-around flex-col gap-4">
                    <div className="w-full flex items-center justify-around">
                        <h4 className="text-3xl font-semibold">Sign Up</h4>
                    </div>
                    <div className="w-full flex items-center justify-around flex-col gap-6">
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn btn-primary btn-md w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
