import illustration from "@/assets/rb1.png"
import FormComponent from "../components/forms/FormComponent"
import Footer from "../components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-between sm:flex-row sm:pt-0">
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <img
                        src={illustration}
                        alt="InterviewKit Illustration"
                        className="mx-auto w-[300px] sm:w-[600px]"
                    />
                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default HomePage
