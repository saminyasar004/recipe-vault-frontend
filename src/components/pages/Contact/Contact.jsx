export default function Contact() {
    return (
        <section className="py-12 flex items-center justify-around gap-6 flex-col">
            <div className="row flex items-center justify-center">
                <h2 className="section-heading">Get in Touch</h2>
            </div>
            <div className="row">
                <form
                    className="w-7/12 m-auto flex items-center justify-around flex-col gap-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="form-group">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="resize-none"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Send"
                            className="btn btn-primary btn-md w-full"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}
